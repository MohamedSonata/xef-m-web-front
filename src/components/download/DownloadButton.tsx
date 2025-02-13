/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { Button } from "../ui/Button";
import { AppService } from "@/services/AppService";
import { useState, useRef } from "react";
import toast from 'react-hot-toast';
import { Loader2, Settings } from 'lucide-react';
import { cn } from "@/lib/utils";

export function DownloadButton() {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const isProcessing = useRef(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
// Add this SVG component at the top of your file
const WindowsLogo = () => (
  <svg 
    className="w-4 h-4 mr-2" 
    viewBox="0 0 88 88" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      fill="currentColor" 
      d="M0 12.402l35.687-4.86.016 34.423-35.67.203zm35.67 33.529l.028 34.453L.028 75.48.026 45.7zm4.326-39.025L87.314 0v41.527l-47.318.376zm47.329 39.349l-.011 41.34-47.318-6.678-.066-34.739z"
    />
  </svg>
);
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
        <>
          <WindowsLogo /> {/* Add Windows icon */}
          Download Now
        </>
      )}
    </Button>
  );
} 