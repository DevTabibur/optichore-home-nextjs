import { SitemapGrid } from "@/components/sitemap/SitemapGrid";
import { SitemapHero } from "@/components/sitemap/SitemapHero";

export default function SitemapPage() {
  return (
    <div className="sitemap-page-container w-full" style={{ background: '#FFFFFF' }}>
      {/* Global Header */}

      {/* Hero Section */}
      <SitemapHero />

      {/* Sitemap Grid */}
      <SitemapGrid />

      {/* Global Footer */}
    </div>
  );
}
