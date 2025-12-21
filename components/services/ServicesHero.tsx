
export function ServicesHero() {
  return (
    <section 
      className="services-hero-section w-full lg:py-40 md:py-28 py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FBFF 100%)',
      }}
    >
      {/* Subtle Abstract Shapes */}
      <div 
        className="abstract-shapes-services absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 20% 30%, rgba(21, 21, 97, 0.04) 0%, transparent 50%),
                       radial-gradient(circle at 80% 70%, rgba(255, 0, 0, 0.03) 0%, transparent 50%)`,
          opacity: 0.7,
        }}
      />

      {/* ========================================== */}
      {/* DESKTOP VARIANT (≥1024px) — LOCKED        */}
      {/* ========================================== */}
      <div className="hidden lg:block max-w-[1440px] mx-auto px-12 relative z-10">
        <div className="text-center max-w-[900px] mx-auto">
          {/* Heading */}
          <h1 
            className="services-hero-heading"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '64px',
              fontWeight: 700,
              color: '#151561',
              letterSpacing: '-0.02em',
              lineHeight: '1.1',
              marginBottom: '28px',
            }}
          >
            Our Services
          </h1>

          {/* Subheading */}
          <p 
            className="services-hero-subheading"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '22px',
              fontWeight: 400,
              color: '#505050',
              lineHeight: '1.65',
              maxWidth: '700px',
              margin: '0 auto',
            }}
          >
            High-quality digital solutions that help your business grow.
          </p>
        </div>
      </div>

      {/* ========================================== */}
      {/* TABLET/MOBILE VARIANTS (<1024px)          */}
      {/* ========================================== */}
      <div className="lg:hidden max-w-[1440px] mx-auto md:px-8 px-6 relative z-10">
        <div className="text-center max-w-[900px] mx-auto">
          {/* Heading - Responsive */}
          <h1 
            className="services-hero-heading-responsive md:text-[52px] text-[36px] md:mb-7 mb-5"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              color: '#151561',
              letterSpacing: '-0.02em',
              lineHeight: '1.1',
            }}
          >
            Our Services
          </h1>

          {/* Subheading - Responsive */}
          <p 
            className="services-hero-subheading-responsive md:text-[20px] text-[18px]"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              color: '#505050',
              lineHeight: '1.65',
              maxWidth: '700px',
              margin: '0 auto',
            }}
          >
            High-quality digital solutions that help your business grow.
          </p>
        </div>
      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes servicesHeroHeadingFade {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes servicesHeroSubheadingFade {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .services-hero-heading,
        .services-hero-heading-responsive {
          animation: servicesHeroHeadingFade 0.9s ease forwards;
        }

        .services-hero-subheading,
        .services-hero-subheading-responsive {
          animation: servicesHeroSubheadingFade 0.9s ease forwards 0.15s;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
