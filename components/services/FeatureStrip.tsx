import { Award, UserCheck, TrendingUp, Headphones } from 'lucide-react';

export function FeatureStrip() {
  const features = [
    {
      icon: Award,
      title: 'Partner-level Meta strategy',
    },
    {
      icon: UserCheck,
      title: 'Dedicated ads manager',
    },
    {
      icon: TrendingUp,
      title: 'Data-driven optimization',
    },
    {
      icon: Headphones,
      title: 'Premium support',
    },
  ];

  return (
    <section 
      className="feature-strip-section w-full lg:py-20 md:py-16 py-14"
      style={{
        background: 'linear-gradient(135deg, #F8FBFF 0%, #FFFFFF 100%)',
        borderTop: '1px solid rgba(0, 0, 0, 0.06)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
      }}
    >
      {/* ========================================== */}
      {/* DESKTOP VARIANT (≥1024px) — LOCKED        */}
      {/* ========================================== */}
      <div className="hidden lg:block max-w-[1440px] mx-auto px-12">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h3
            className="feature-strip-heading"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '32px',
              fontWeight: 600,
              color: '#151561',
              letterSpacing: '-0.01em',
              lineHeight: '1.3',
            }}
          >
            Why Clients Choose Us
          </h3>
        </div>

        {/* 4-Column Feature Grid */}
        <div 
          className="feature-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '48px',
          }}
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="feature-item"
                style={{
                  textAlign: 'center',
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Icon */}
                <div
                  className="feature-icon-wrapper"
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #FF0000 0%, #E60000 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    boxShadow: '0 6px 16px rgba(255, 0, 0, 0.2)',
                  }}
                >
                  <IconComponent className="w-6 h-6" style={{ color: '#FFFFFF' }} />
                </div>

                {/* Title */}
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '17px',
                    fontWeight: 500,
                    color: '#151561',
                    lineHeight: '1.5',
                  }}
                >
                  {feature.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* ========================================== */}
      {/* TABLET/MOBILE VARIANTS (<1024px)          */}
      {/* ========================================== */}
      <div className="lg:hidden max-w-[1440px] mx-auto md:px-8 px-6">
        {/* Section Heading - Responsive */}
        <div className="text-center md:mb-12 mb-10">
          <h3
            className="feature-strip-heading-responsive md:text-[28px] text-[26px]"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              color: '#151561',
              letterSpacing: '-0.01em',
              lineHeight: '1.3',
            }}
          >
            Why Clients Choose Us
          </h3>
        </div>

        {/* Responsive Grid: Tablet 2×2, Mobile 1 column */}
        <div className="feature-grid-responsive grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="feature-item-responsive"
                style={{
                  textAlign: 'center',
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Icon - Circular Red */}
                <div
                  className="feature-icon-wrapper"
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #FF0000 0%, #E60000 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    boxShadow: '0 6px 16px rgba(255, 0, 0, 0.2)',
                  }}
                >
                  <IconComponent className="w-6 h-6" style={{ color: '#FFFFFF' }} />
                </div>

                {/* Title */}
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '17px',
                    fontWeight: 500,
                    color: '#151561',
                    lineHeight: '1.5',
                  }}
                >
                  {feature.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes featureStripHeadingFade {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes featureItemFade {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .feature-strip-heading,
        .feature-strip-heading-responsive {
          animation: featureStripHeadingFade 0.8s ease forwards;
        }

        .feature-item,
        .feature-item-responsive {
          opacity: 0;
          animation: featureItemFade 0.8s ease forwards;
        }
      `}</style>
    </section>
  );
}
