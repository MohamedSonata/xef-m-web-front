'use client';

const APP_PROTOCOL = 'xefromirror://';
const APP_DOWNLOAD_URL = '/download';

export const appHandler = {
  isAppInstalled: async (): Promise<boolean> => {
    return new Promise((resolve) => {
      let handlerInvoked = false;

      // Create hidden iframe
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      document.body.appendChild(iframe);

      // Cleanup function
      const cleanUp = () => {
        document.body.removeChild(iframe);
        window.removeEventListener('blur', handleBlur);
        window.removeEventListener('focus', handleFocus);
      };

      // Handle window blur (app might be opening)
      const handleBlur = () => {
        handlerInvoked = true;
        resolve(true);
      };

      // Handle window focus (back from app or failed to open)
      const handleFocus = () => {
        if (!handlerInvoked) {
          cleanUp();
          resolve(false);
        }
      };

      // Add event listeners
      window.addEventListener('blur', handleBlur, { once: true });
      window.addEventListener('focus', handleFocus, { once: true });

      // Try to open app
      try {
        if (iframe.contentWindow) {
          iframe.contentWindow.location.href = `${APP_PROTOCOL}launch`;
        } else {
          throw new Error('Content window not available');
        }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        cleanUp();
        resolve(false);
      }
    });
  },

  openApp: () => {
    try {
      window.location.href = `${APP_PROTOCOL}launch`;
      return true;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return false;
    }
  },

  redirectToDownload: () => {
    window.location.href = APP_DOWNLOAD_URL;
  },

  handleGetStarted: async () => {
    try {
      console.log('Checking if app is installed...');
      const isInstalled = await appHandler.isAppInstalled();
      
      if (isInstalled) {
    
        appHandler.openApp();
      } else {
    
        window.location.href = APP_DOWNLOAD_URL;
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      window.location.href = APP_DOWNLOAD_URL;
    }
  }
}; 