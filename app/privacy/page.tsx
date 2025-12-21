import { PrivacyDocument } from "@/components/privacy/PrivacyDocument";
import { PrivacyHero } from "@/components/privacy/PrivacyHero";

export default function PrivacyPage() {
  return (
    <div
      className="privacy-page-container w-full"
      style={{ background: "#FFFFFF" }}
    >
      {/* Global Header */}

      {/* Hero Section */}
      <PrivacyHero />

      {/* Privacy Policy Document Body */}
      <PrivacyDocument />

      {/* Global Footer */}
    </div>
  );
}
