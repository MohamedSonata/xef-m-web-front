import { HttpService } from './http/HttpService';

export interface AppVersion {
  version: string;
  url: string;
  releaseNotes: string;
}

export class AppService {
  private static instance: AppService;
  private http: HttpService;

  private constructor() {
    this.http = HttpService.getInstance();
  }

  public static getInstance(): AppService {
    if (!AppService.instance) {
      AppService.instance = new AppService();
    }
    return AppService.instance;
  }

  async   getLatestVersion(): Promise<AppVersion> {
    return this.http.get<AppVersion>('/app/latest');
  }

  async downloadApp(): Promise<void> {
    try {
      const filename = `xefro_mirror-v1.0.1+1.msix`;
      const fileUrl = `${process.env.NEXT_PUBLIC_UPLOAD_URL}/xefro_mirror_v1_0_1_1_25a7784f40.msix`;
      
      // Create temporary link with direct URL
      const link = document.createElement('a');
      link.style.display = 'none'; // Hide the link
      link.href = fileUrl;
      link.download = filename; // This triggers download instead of navigation
      
      // Trigger download
      document.body.appendChild(link);
      link.click();
      
      // Cleanup
      setTimeout(() => {
        document.body.removeChild(link);
      }, 100);
    } catch (error) {
      console.error('Download failed:', error);
      throw new Error(`Failed to download: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }
} 