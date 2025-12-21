import { Target, Users, Palette, Activity, DollarSign, BarChart3 } from 'lucide-react';

export function FacebookWhatWeOffer() {
  const features = [
    {
      icon: <Target className="w-7 h-7" />,
      title: 'Campaign Strategy & Planning',
      description: 'Custom Facebook advertising strategies aligned with your business goals and target audience.',
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: 'Audience Targeting Optimization',
      description: 'Advanced targeting techniques to reach the right people at the right time with precision.',
    },
    {
      icon: <Palette className="w-7 h-7" />,
      title: 'Ad Creative Strategy & Testing',
      description: 'High-converting ad creatives with A/B testing to maximize engagement and performance.',
    },
    {
      icon: <Activity className="w-7 h-7" />,
      title: 'Pixel Setup & Tracking',
      description: 'Complete Facebook Pixel integration for accurate tracking and conversion optimization.',
    },
    {
      icon: <DollarSign className="w-7 h-7" />,
      title: 'Budget Control & Bidding Optimization',
      description: 'Smart budget allocation and bidding strategies to maximize ROI and reduce cost per result.',
    },
    {
      icon: <BarChart3 className="w-7 h-7" />,
      title: 'Reporting & Insights',
      description: 'Detailed analytics and reporting with actionable insights to continuously improve performance.',
    },
  ];

  return (
    <section 
      className="facebook-offer-section w-full lg:py-32 md:py-24 py-20"
      style={{
        backgroundColor: '#FFFFFF',
      }}
    >
      {/* ========================================== */}
      {/* DESKTOP VARIANT (≥1024px) — LOCKED        */}
      {/* ========================================== */}
      <div className="hidden lg:block max-w-[1440px] mx-auto px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 
            className="fb-offer-heading"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '48px',
              fontWeight: 700,
              color: '#151561',
              letterSpacing: '-0.02em',
              marginBottom: '16px',
            }}
          >
            What's Included in Our Facebook Marketing Service
          </h2>
        </div>

        {/* Features Grid - 2 columns */}
        <div className="grid grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="fb-feature-card"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                padding: '36px',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                boxShadow: '0 6px 24px rgba(0, 0, 0, 0.06)',
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Icon */}
              <div 
                className="fb-feature-icon mb-6"
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '16px',
                  backgroundColor: 'rgba(255, 0, 0, 0.1)',
                  color: '#FF0000',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {feature.icon}
              </div>

              {/* Title */}
              <h3 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '22px',
                  fontWeight: 600,
                  color: '#151561',
                  marginBottom: '12px',
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
                  lineHeight: '1.7',
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================== */}
      {/* TABLET/MOBILE VARIANTS (<1024px)          */}
      {/* ========================================== */}
      <div className="lg:hidden max-w-[1440px] mx-auto md:px-8 px-6">
        {/* Section Header - Responsive */}
        <div className="text-center md:mb-16 mb-12">
          <h2 
            className="fb-offer-heading-responsive md:text-[42px] text-[32px] md:mb-4 mb-3"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              color: '#151561',
              letterSpacing: '-0.02em',
            }}
          >
            What's Included in Our Facebook Marketing Service
          </h2>
        </div>

        {/* Features Grid - Tablet: 2 columns, Mobile: 1 column */}
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="fb-feature-card-responsive"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                padding: '36px',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                boxShadow: '0 6px 24px rgba(0, 0, 0, 0.06)',
                animationDelay: `${index * 100}ms`,
                height: '100%',
              }}
            >
              {/* Icon - Top-left */}
              <div 
                className="fb-feature-icon mb-6"
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '16px',
                  backgroundColor: 'rgba(255, 0, 0, 0.1)',
                  color: '#FF0000',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {feature.icon}
              </div>

              {/* Title */}
              <h3 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '22px',
                  fontWeight: 600,
                  color: '#151561',
                  marginBottom: '12px',
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
                  lineHeight: '1.7',
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fbFeatureFadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fb-offer-heading,
        .fb-offer-heading-responsive {
          animation: fbFeatureFadeUp 0.8s ease forwards;
        }

        .fb-feature-card,
        .fb-feature-card-responsive {
          animation: fbFeatureFadeUp 0.8s ease forwards;
          opacity: 0;
          transition: all 0.3s ease;
        }

        .fb-feature-card:hover,
        .fb-feature-card-responsive:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </section>
  );
}
