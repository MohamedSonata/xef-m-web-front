import { PageHero } from "@/components/shared/PageHero";
import { PageLayout } from "@/components/layout/PageLayout";
import { SolutionOverview } from "@/components/solution/SolutionOverview";
import { UseCases } from "@/components/solution/UseCases";
// import { TechStack } from "@/components/solution/TechStack";
// import { SecurityFeatures } from "@/components/solution/SecurityFeatures";
// import { Comparison } from "@/components/solution/Comparison";

export default function SolutionPage() {
  return (
    <PageLayout>
      <PageHero 
        title="Enterprise Solution" 
        description="Secure, scalable, and reliable screen mirroring solution for businesses of all sizes."
      />
      <SolutionOverview />
      <UseCases />
      {/* <TechStack />
      <SecurityFeatures />
      <Comparison /> */}
    </PageLayout>
  );
} 