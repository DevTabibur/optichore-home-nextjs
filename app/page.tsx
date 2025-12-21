import { Hero } from "../components/Hero";
import { WhoWeAre } from "../components/WhoWeAre";
import { WhyOptichore } from "../components/WhyOptichore";
import { MetaPartner } from "../components/MetaPartner";
import { ServicesOverview } from "../components/ServicesOverview";
import { FacebookMarketing } from "../components/FacebookMarketing";
import { TrustedClients } from "../components/TrustedClients";
import { BlogPreview } from "../components/BlogPreview";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <WhoWeAre />
      <WhyOptichore />
      <MetaPartner />
      <ServicesOverview />
      <FacebookMarketing />
      <TrustedClients />
      <BlogPreview />
    </div>
  );
}
