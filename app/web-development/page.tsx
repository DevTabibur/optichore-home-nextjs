import { WebDevCTA } from "@/components/services/WebDevCTA";
import { WebDevHero } from "@/components/services/WebDevHero";
import { WebDevIncluded } from "@/components/services/WebDevIncluded";
import { WebDevProcess } from "@/components/services/WebDevProcess";
import { WebDevWhyChoose } from "@/components/services/WebDevWhyChoose";

export default function WebDevelopmentPage() {
  return (
    <div className="web-development-page" style={{ backgroundColor: '#FFFFFF' }}>
      <WebDevHero />
      <WebDevIncluded />
      <WebDevProcess />
      <WebDevWhyChoose />
      <WebDevCTA />
    </div>
  );
}
