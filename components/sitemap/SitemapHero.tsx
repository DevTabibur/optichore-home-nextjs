export function SitemapHero() {
  return (
    <section 
      className="sitemap-hero-section w-full"
      style={{
        padding: '100px 0 60px',
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFF 100%)',
      }}
    >
      <div className="max-w-[1440px] mx-auto px-12">
        <div className="text-center max-w-[800px] mx-auto">
          {/* Heading */}
          <h1 
            className="sitemap-hero-heading"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '56px',
              fontWeight: 700,
              color: '#151561',
              letterSpacing: '-0.02em',
              lineHeight: '1.15',
              marginBottom: '20px',
            }}
          >
            Sitemap
          </h1>

          {/* Subheading */}
          <p 
            className="sitemap-hero-subheading"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '19px',
              fontWeight: 400,
              color: '#505050',
              lineHeight: '1.7',
            }}
          >
            Explore all key pages across the Optichore website.
          </p>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes sitemapHeroHeadingFade {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes sitemapHeroSubheadingFade {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .sitemap-hero-heading {
          animation: sitemapHeroHeadingFade 0.9s ease forwards;
        }

        .sitemap-hero-subheading {
          animation: sitemapHeroSubheadingFade 0.9s ease forwards 0.15s;
          opacity: 0;
        }

        /* Responsive Typography */
        @media (max-width: 1024px) {
          .sitemap-hero-section {
            padding: 80px 0 50px !important;
          }

          .sitemap-hero-heading {
            font-size: 44px !important;
            margin-bottom: 18px !important;
          }

          .sitemap-hero-subheading {
            font-size: 18px !important;
          }
        }

        @media (max-width: 767px) {
          .sitemap-hero-section {
            padding: 60px 0 40px !important;
          }

          .sitemap-hero-heading {
            font-size: 36px !important;
            margin-bottom: 16px !important;
          }

          .sitemap-hero-subheading {
            font-size: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
