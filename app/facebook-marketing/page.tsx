import { FacebookCTA } from "@/components/facebook-service/FacebookCTA";
import { FacebookHero } from "@/components/facebook-service/FacebookHero";
import { FacebookProcess } from "@/components/facebook-service/FacebookProcess";
import { FacebookTestimonial } from "@/components/facebook-service/FacebookTestimonial";
import { FacebookWhatWeOffer } from "@/components/facebook-service/FacebookWhatWeOffer";
import { FacebookWhyChooseUs } from "@/components/facebook-service/FacebookWhyChooseUs";

export default function FacebookMarketingPage() {
  return (
    <div className="facebook-marketing-page-wrapper min-h-screen bg-white">
      <FacebookHero />
      <FacebookWhatWeOffer />
      <FacebookProcess />
      <FacebookWhyChooseUs />
      <FacebookTestimonial />
      <FacebookCTA />
    </div>
  );
}
