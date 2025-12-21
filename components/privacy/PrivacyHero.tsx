export function PrivacyHero() {
  return (
    <section 
      className="privacy-hero-section w-full py-32"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFF 100%)',
      }}
    >
      <div className="max-w-[1440px] mx-auto px-12">
        <div className="text-center max-w-[900px] mx-auto">
          {/* Heading */}
          <h1 
            className="privacy-hero-heading"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '54px',
              fontWeight: 700,
              color: '#151561',
              letterSpacing: '-0.02em',
              lineHeight: '1.15',
              marginBottom: '24px',
            }}
          >
            Privacy Policy
          </h1>

          {/* Subheading */}
          <p 
            className="privacy-hero-subheading"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '18px',
              fontWeight: 400,
              color: '#505050',
              lineHeight: '1.7',
            }}
          >
            How we collect, use, and protect your data at Optichore.
          </p>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes privacyHeroHeadingFade {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes privacyHeroSubheadingFade {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .privacy-hero-heading {
          animation: privacyHeroHeadingFade 0.9s ease forwards;
        }

        .privacy-hero-subheading {
          animation: privacyHeroSubheadingFade 0.9s ease forwards 0.15s;
          opacity: 0;
        }

        /* ===== TABLET BREAKPOINT (768px - 1024px) ===== */
        @media (min-width: 768px) and (max-width: 1024px) {
          .privacy-hero-section {
            padding-top: 7rem;
            padding-bottom: 7rem;
          }

          .privacy-hero-section > div {
            padding-left: 2rem;
            padding-right: 2rem;
          }

          .privacy-hero-section > div > div {
            max-width: 90% !important;
          }

          .privacy-hero-heading {
            font-size: 44px !important;
            margin-bottom: 20px !important;
          }

          .privacy-hero-subheading {
            font-size: 17px !important;
          }
        }

        /* ===== MOBILE BREAKPOINT (≤414px) ===== */
        @media (max-width: 414px) {
          .privacy-hero-section {
            padding-top: 5rem;
            padding-bottom: 3rem;
          }

          .privacy-hero-section > div {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }

          .privacy-hero-section > div > div {
            max-width: 100% !important;
          }

          .privacy-hero-heading {
            font-size: 32px !important;
            letter-spacing: -0.01em !important;
            line-height: 1.2 !important;
            margin-bottom: 16px !important;
            text-align: center;
          }

          .privacy-hero-subheading {
            font-size: 15px !important;
            line-height: 1.6 !important;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}