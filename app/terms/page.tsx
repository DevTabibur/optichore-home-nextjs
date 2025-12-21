import { TermsDocument } from "@/components/terms/TermsDocument";
import { TermsHero } from "@/components/terms/TermsHero";

export default function TermsPage() {
  return (
    <div className="terms-page-container w-full" style={{ background: '#FFFFFF' }}>
      {/* Global Header */}

      {/* Hero Section */}
      <TermsHero />

      {/* Terms & Conditions Document Body */}
      <TermsDocument />

      {/* Global Footer */}
    </div>
  );
}
