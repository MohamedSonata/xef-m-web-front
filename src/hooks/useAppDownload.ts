import { useMutation } from '@tanstack/react-query';
import { AppService } from '@/services/AppService';
import { toast } from 'react-hot-toast';

export function useAppDownload() {
  const appService = AppService.getInstance();

  return useMutation({
    mutationFn: () => appService.downloadApp(),
    onSuccess: () => {
      toast.success('Download started successfully');
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      toast.error('Failed to start download. Please try again.');
      console.error('Download error:', error);
    },
  });
} 