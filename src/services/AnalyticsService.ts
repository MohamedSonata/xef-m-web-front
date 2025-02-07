// import { GA4 } from '@analytics/google-analytics4';
// import mixpanel from 'mixpanel-browser';

// export class AnalyticsService {
//   private static instance: AnalyticsService;
//   private ga4: GA4;
  
//   private constructor() {
//     // Initialize analytics services
//     this.initGA4();
//     this.initMixpanel();
//   }

//   public static getInstance(): AnalyticsService {
//     if (!AnalyticsService.instance) {
//       AnalyticsService.instance = new AnalyticsService();
//     }
//     return AnalyticsService.instance;
//   }

//   private initGA4() {
//     this.ga4 = new GA4({
//       measurementId: process.env.NEXT_PUBLIC_GA4_ID
//     });
//   }

//   private initMixpanel() {
//     mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN!, {
//       debug: process.env.NODE_ENV === 'development'
//     });
//   }

//   trackPageView(path: string, title: string) {
//     // GA4
//     this.ga4.page({
//       path,
//       title,
//       location: window.location.href
//     });

//     // Mixpanel
//     mixpanel.track('Page View', {
//       path,
//       title
//     });
//   }

//   trackDownload(version: string, platform: string) {
//     this.ga4.track('download_app', {
//       version,
//       platform
//     });

//     mixpanel.track('Download App', {
//       version,
//       platform
//     });
//   }

//   trackError(error: Error, context?: string) {
//     this.ga4.track('error', {
//       error_message: error.message,
//       error_context: context
//     });

//     mixpanel.track('Error Occurred', {
//       error_message: error.message,
//       error_context: context
//     });
//   }

//   trackFeatureUsage(feature: string, metadata?: Record<string, any>) {
//     this.ga4.track('feature_used', {
//       feature,
//       ...metadata
//     });

//     mixpanel.track('Feature Used', {
//       feature,
//       ...metadata
//     });
//   }
// } 