'use client';

import { Button } from "../ui/Button";
import { AppService } from "@/services/AppService";
import { useState, useRef } from "react";
import toast from 'react-hot-toast';
import { Loader2 } from 'lucide-react';
import { cn } from "@/lib/utils";

export function DownloadButton() {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const isProcessing = useRef(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = async () => {
    // Prevent multiple clicks
    if (isProcessing.current) return;

    try {
      // Immediately change button content and cursor
      isProcessing.current = true;
      setIsLoading(true);
      setHasError(false);
      
      // Set cursor to wait for the entire document during processing
      document.body.style.cursor = 'wait';
      if (buttonRef.current) {
        buttonRef.current.style.cursor = 'wait';
      }
      
      // // Force a reflow to immediately update the cursor
      // document.body.offsetWidth;  
      // if (buttonRef.current) {
      //   buttonRef.current.offsetWidth;
      // }
      
      const appService = AppService.getInstance();
      await appService.downloadApp();
      
      if (isProcessing.current) {
        toast.success(
          <div className="flex flex-col gap-1">
            <span className="font-medium">Download Started!</span>
            <span className="text-sm opacity-90">
              Your download will begin shortly...
            </span>
          </div>
        );
      }
    } catch (error) {
      console.error('Failed to download app:', error);
      setHasError(true);
      if (isProcessing.current) {
        toast.error(
          <div className="flex flex-col gap-1">
            <span className="font-medium">Download Failed</span>
            <span className="text-sm opacity-90">
              Please try again or check your connection
            </span>
          </div>
        );
      }
    } finally {
      isProcessing.current = false;
      setIsLoading(false);
      // Instead of immediate reset, add a mousemove listener (with fallback) so that
      // the cursor returns to default when the OS file save dialog is shown
      const resetCursor = () => {
          document.body.style.cursor = 'default';
          if (buttonRef.current) {
              buttonRef.current.style.cursor = '';
          }
          window.removeEventListener('mousemove', resetCursor);
      };
      
      window.addEventListener('mousemove', resetCursor);
      // Fallback: if no mouse movement occurs, reset after 1000ms
      setTimeout(() => {
          resetCursor();
      }, 1000);
    }
  };

  return (
    <Button 
      ref={buttonRef}
    
      variant="primary"
      size="lg"
      onClick={handleClick}
      disabled={isLoading || isProcessing.current}
      className={cn(
        "min-w-[180px] relative",
        (isLoading || isProcessing.current) && "pointer-events-none",
        hasError && "hover:bg-red-600",
        "transition-all duration-200"
      )}
    >
      {isLoading ? (
        <>
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          Download Starting...
        </>
      ) : hasError ? (
        "Try Again"
      ) : (
        "Download Now"
      )}
    </Button>
  );
} 