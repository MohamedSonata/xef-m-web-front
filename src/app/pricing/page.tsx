import { PageHero } from "@/components/shared/PageHero";
import { PricingPlans } from "@/components/pricing/PricingPlans";
import { PageLayout } from "@/components/layout/PageLayout";

export default function PricingPage() {
  return (
    <PageLayout>
      <PageHero 
        title="Pricing" 
        description="Choose the perfect plan for your needs."
      />
      <PricingPlans />
    </PageLayout>
  );
} 