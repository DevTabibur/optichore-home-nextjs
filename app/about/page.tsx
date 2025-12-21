import { AboutHero } from "@/components/about/AboutHero";
import { CertificationsEditorial } from "@/components/about/CertificationsEditorial";
import { CoreValues } from "@/components/about/CoreValues";
import { FinalCTA } from "@/components/about/FinalCTA";
import { JourneyTimeline } from "@/components/about/JourneyTimeline";
import { MissionVision } from "@/components/about/MissionVision";
import { WhoWeAreAbout } from "@/components/about/WhoWeAreAbout";
import { WhyChooseUs } from "@/components/about/WhyChooseUs";



export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <AboutHero />
      <WhoWeAreAbout />
      <MissionVision />
      <CoreValues />
      <CertificationsEditorial />
      <JourneyTimeline />
      <WhyChooseUs />
      <FinalCTA />
    </div>
  );
}
