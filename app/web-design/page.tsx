import { WebDesignCTA } from "@/components/services/WebDesignCTA";
import { WebDesignHero } from "@/components/services/WebDesignHero";
import { WebDesignIncluded } from "@/components/services/WebDesignIncluded";
import { WebDesignProcess } from "@/components/services/WebDesignProcess";
import { WebDesignWhyChoose } from "@/components/services/WebDesignWhyChoose";


export default function WebDesignPage() {
  return (
    <div className="web-design-page" style={{ backgroundColor: '#FFFFFF' }}>
      <WebDesignHero />
      <WebDesignIncluded />
      <WebDesignProcess />
      <WebDesignWhyChoose />
      <WebDesignCTA />
    </div>
  );
}
