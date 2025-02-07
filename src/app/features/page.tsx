import { PageHero } from "@/components/shared/PageHero";
import { PageLayout } from "@/components/layout/PageLayout";
import { MonitoringFeatures } from "@/components/features/MonitoringFeatures";
import { FileManagement } from "@/components/features/FileManagement";
import { DemoSection } from "@/components/features/DemoSection";

export default function FeaturesPage() {
  return (
    <PageLayout>
      <PageHero 
        title="Powerful Features" 
        description="Discover all the ways Xefro Mirror can help you manage and monitor your device."
      />
      <MonitoringFeatures />
      <FileManagement />
      <DemoSection />
    </PageLayout>
  );
} 