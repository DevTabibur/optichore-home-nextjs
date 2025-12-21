export function TermsHero() {
  return (
    <section 
      className="terms-hero-section w-full py-32"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFF 100%)',
      }}
    >
      <div className="max-w-[1440px] mx-auto px-12">
        <div className="text-center max-w-[900px] mx-auto">
          {/* Heading */}
          <h1 
            className="terms-hero-heading"
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
            Terms & Conditions
          </h1>

          {/* Subheading */}
          <p 
            className="terms-hero-subheading"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '18px',
              fontWeight: 400,
              color: '#505050',
              lineHeight: '1.7',
            }}
          >
            Please read these terms carefully before using Optichore services.
          </p>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes termsHeroHeadingFade {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes termsHeroSubheadingFade {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .terms-hero-heading {
          animation: termsHeroHeadingFade 0.9s ease forwards;
        }

        .terms-hero-subheading {
          animation: termsHeroSubheadingFade 0.9s ease forwards 0.15s;
          opacity: 0;
        }

        /* ===== TABLET BREAKPOINT (768px - 1024px) ===== */
        @media (min-width: 768px) and (max-width: 1024px) {
          .terms-hero-section {
            padding-top: 7rem;
            padding-bottom: 7rem;
          }

          .terms-hero-section > div {
            padding-left: 2rem;
            padding-right: 2rem;
          }

          .terms-hero-section > div > div {
            max-width: 90% !important;
          }

          .terms-hero-heading {
            font-size: 44px !important;
            margin-bottom: 20px !important;
          }

          .terms-hero-subheading {
            font-size: 17px !important;
          }
        }

        /* ===== MOBILE BREAKPOINT (≤414px) ===== */
        @media (max-width: 414px) {
          .terms-hero-section {
            padding-top: 5rem;
            padding-bottom: 3rem;
          }

          .terms-hero-section > div {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }

          .terms-hero-section > div > div {
            max-width: 100% !important;
          }

          .terms-hero-heading {
            font-size: 32px !important;
            letter-spacing: -0.01em !important;
            line-height: 1.2 !important;
            margin-bottom: 16px !important;
            text-align: center;
          }

          .terms-hero-subheading {
            font-size: 15px !important;
            line-height: 1.6 !important;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}