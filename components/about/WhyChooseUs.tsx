import { CheckCircle, Shield, TrendingUp, Palette, Code, Globe } from 'lucide-react';

export function WhyChooseUs() {
  const features = [
    {
      icon: CheckCircle,
      title: 'Meta Certified Experts',
      description: 'Official Meta Business Partner with access to exclusive tools and insights.',
    },
    {
      icon: Shield,
      title: 'Verified Tech Provider',
      description: 'Trusted technology partner ensuring security, reliability, and performance.',
    },
    {
      icon: TrendingUp,
      title: 'High-Performance Marketing',
      description: 'Data-driven strategies that deliver measurable growth and ROI.',
    },
    {
      icon: Palette,
      title: 'Creative Design Team',
      description: 'Award-winning designers creating stunning, user-centric experiences.',
    },
    {
      icon: Code,
      title: 'Advanced Technology Solutions',
      description: 'Cutting-edge development expertise for scalable, robust applications.',
    },
    {
      icon: Globe,
      title: 'Global Client Experience',
      description: 'Serving brands worldwide with localized expertise and global standards.',
    },
  ];

  return (
    <section 
      className="why-choose-section w-full lg:py-40 md:py-32 py-24"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F8F9FF 100%)',
      }}
    >
      <div className="why-container max-w-[1440px] mx-auto lg:px-12 md:px-8 px-6">
        {/* Section Header */}
        <div className="why-header text-center lg:mb-20 md:mb-16 mb-12">
          <div 
            className="why-label lg:mb-6 md:mb-5 mb-4"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              fontWeight: 500,
              color: '#FF0000',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            WHY CHOOSE US
          </div>
          <h2 
            className="lg:text-[48px] md:text-4xl text-4xl"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              color: '#151561',
              letterSpacing: '-0.02em',
              lineHeight: '1.15',
            }}
          >
            Why Partner With Optichore
          </h2>
        </div>

        {/* Features Grid */}
        <div className="features-grid grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-8 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="feature-tile lg:p-10 md:p-8 p-6"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Icon */}
                <div 
                  className="feature-icon-wrapper mb-6"
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '14px',
                    background: 'linear-gradient(135deg, rgba(255, 0, 0, 0.1) 0%, rgba(21, 21, 97, 0.1) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <IconComponent className="w-7 h-7" style={{ color: '#FF0000' }} />
                </div>

                {/* Title */}
                <h3 
                  className="lg:text-[22px] md:text-xl text-xl lg:mb-3 md:mb-3 mb-3"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    color: '#151561',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p 
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    fontWeight: 400,
                    color: '#505050',
                    lineHeight: '1.65',
                  }}
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* STYLES */}
      <style>{`
        /* Feature Tile Stagger Animation */
        @keyframes featureTileSlide {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .feature-tile {
          opacity: 0;
          animation: featureTileSlide 0.8s ease forwards;
        }

        /* Desktop/Tablet Hover Effects */
        @media (min-width: 768px) {
          .feature-tile:hover {
            transform: translateY(-8px);
            box-shadow: 0 16px 56px rgba(0, 0, 0, 0.12);
          }

          .feature-tile:hover .feature-icon-wrapper {
            transform: scale(1.1) rotate(5deg);
            background: linear-gradient(135deg, rgba(255, 0, 0, 0.15) 0%, rgba(21, 21, 97, 0.15) 100%);
          }
        }

        /* Mobile: No Hover Effects */
        @media (max-width: 767px) {
          .feature-tile {
            /* Static on mobile */
          }
        }
      `}</style>
    </section>
  );
}