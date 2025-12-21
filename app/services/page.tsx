import { FacebookMarketingBlock } from "@/components/services/FacebookMarketingBlock";
import { FeatureStrip } from "@/components/services/FeatureStrip";
import { ServicesCTA } from "@/components/services/ServicesCTA";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { ServicesHero } from "@/components/services/ServicesHero";

export default function ServicesPage() {
  return (
    <div className="services-page-container w-full" style={{ background: '#FFFFFF' }}>
      {/* Global Header */}

      {/* Hero Section */}
      <ServicesHero />

      {/* Facebook Marketing Block */}
      <FacebookMarketingBlock />

      {/* Services Grid */}
      <ServicesGrid />

      {/* Feature Strip */}
      <FeatureStrip />

      {/* CTA Block */}
      <ServicesCTA />

      {/* Global Footer */}
    </div>
  );
}
