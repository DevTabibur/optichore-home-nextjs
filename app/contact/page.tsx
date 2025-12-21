import { PremiumContactCards } from "@/components/contact-premium/PremiumContactCards";
import { PremiumContactForm } from "@/components/contact-premium/PremiumContactForm";
import { PremiumContactHero } from "@/components/contact-premium/PremiumContactHero";
import { PremiumFinalCTA } from "@/components/contact-premium/PremiumFinalCTA";
import { PremiumMapSection } from "@/components/contact-premium/PremiumMapSection";
import { PremiumSuccessMetrics } from "@/components/contact-premium/PremiumSuccessMetrics";

export default function ContactPage() {
  return (
    <div className="contact-page-wrapper min-h-screen bg-white">
      <PremiumContactHero />
      <PremiumContactCards />
      <PremiumContactForm />
      <PremiumSuccessMetrics />
      <PremiumMapSection />
      <PremiumFinalCTA />
    </div>
  );
}
