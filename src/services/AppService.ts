import { HttpService } from './http/HttpService';

interface SaveFilePickerOptions {
  suggestedName?: string;
  types?: Array<{
    description: string;
    accept: Record<string, string[]>;
  }>;
}

interface FileSystemFileHandle {
  createWritable(): Promise<FileSystemWritableFileStream>;
}

interface FileSystemWritableFileStream extends WritableStream {
  write(data: ArrayBuffer | Blob | string): Promise<void>;
}

declare global {
  interface Window {
    showSaveFilePicker?: (options?: SaveFilePickerOptions) => Promise<FileSystemFileHandle>;
  }
}

export class AppService {
  private static instance: AppService;
  private http: HttpService;
  private isDownloading = false;

  private constructor() {
    this.http = HttpService.getInstance();
  }

  public static getInstance(): AppService {
    if (!AppService.instance) {
      AppService.instance = new AppService();
    }
    return AppService.instance;
  }

  async downloadApp(): Promise<void> {
    if (this.isDownloading) {
      console.log('Download already in progress');
      return;
    }

    try {
      this.isDownloading = true;
      const version = '1.0.1';
      const filename = `xefro_mirror_setup_v${version}.msix`;
      const fileUrl = `${process.env.NEXT_PUBLIC_UPLOAD_URL}/xefro_mirror_v1_0_1_1_25a7784f40.msix`;

      // Mobile devices: Redirect to URL
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        window.location.href = fileUrl;
        return;
      }

      // Check if File System API is supported (Chromium-based browsers)
      if (window.showSaveFilePicker) {
        await this.downloadUsingNativePicker(fileUrl, filename);
      } else {
        this.downloadUsingFallback(fileUrl, filename);
      }

    } catch (error) {
      console.error('Download failed:', error);
      throw new Error(`Failed to download: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      this.isDownloading = false;
    }
  }

  private async downloadUsingNativePicker(fileUrl: string, filename: string): Promise<void> {
    try {
      if (!window.showSaveFilePicker) throw new Error('Native file picker not supported');

      // Open file picker with proper types
      const handle = await window.showSaveFilePicker({
        suggestedName: filename,
        types: [
          {
            description: 'MSIX Installer',
            accept: { 'application/vnd.ms-appx': ['.msix'] }
          }
        ]
      });

      // Fetch the file
      const response = await fetch(fileUrl);
      if (!response.ok) throw new Error('Failed to fetch file');

      // Stream to file system
      const writable = await handle.createWritable();
      await response.body?.pipeTo(writable);
      console.log('Download complete');
    } catch (error) {
      console.error('Native file download failed:', error);
      throw error;
    }
  }

  private downloadUsingFallback(fileUrl: string, filename: string): void {
    const link = document.createElement('a');
    link.style.display = 'none';
    link.href = fileUrl;
    link.download = filename;
    link.type = 'application/vnd.ms-appx';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
