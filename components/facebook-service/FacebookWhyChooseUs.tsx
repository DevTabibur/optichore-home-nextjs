import { Award, UserCheck, TrendingUp, Shield, CheckCircle } from 'lucide-react';

export function FacebookWhyChooseUs() {
  const reasons = [
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Meta Partner-Level Standards',
      description: 'Adhering to the highest industry standards for Facebook advertising.',
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: 'Dedicated Ads Manager',
      description: 'Expert account management focused on your success.',
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Data-Driven Optimization',
      description: 'Continuous improvement based on real performance data.',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Compliance & Ad Safety',
      description: 'Ensuring all campaigns meet Meta advertising policies.',
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Verified Tech Provider',
      description: 'Trusted technology integration for seamless tracking.',
    },
  ];

  return (
    <section 
      className="facebook-why-section w-full lg:py-32 md:py-24 py-20"
      style={{
        backgroundColor: '#FFFFFF',
      }}
    >
      {/* ========================================== */}
      {/* DESKTOP VARIANT (≥1024px) — LOCKED        */}
      {/* ========================================== */}
      <div className="hidden lg:block max-w-[1440px] mx-auto px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="fb-why-heading"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '48px',
              fontWeight: 700,
              color: '#151561',
              letterSpacing: '-0.02em',
              marginBottom: '16px',
            }}
          >
            Why Choose Optichore for Facebook Marketing
          </h2>
        </div>

        {/* Reasons Grid - 5 columns */}
        <div className="grid grid-cols-5 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="fb-why-card text-center"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Icon */}
              <div 
                className="fb-why-icon mb-5 mx-auto"
                style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '18px',
                  backgroundColor: 'rgba(21, 21, 97, 0.08)',
                  color: '#151561',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {reason.icon}
              </div>

              {/* Title */}
              <h3 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '17px',
                  fontWeight: 600,
                  color: '#151561',
                  marginBottom: '8px',
                  lineHeight: '1.3',
                }}
              >
                {reason.title}
              </h3>

              {/* Description */}
              <p 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  fontWeight: 400,
                  color: '#505050',
                  lineHeight: '1.6',
                }}
              >
                {reason.description}
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
        <div className="text-center md:mb-14 mb-12">
          <h2 
            className="fb-why-heading-responsive md:text-[42px] text-[32px] md:mb-4 mb-3"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              color: '#151561',
              letterSpacing: '-0.02em',
            }}
          >
            Why Choose Optichore for Facebook Marketing
          </h2>
        </div>

        {/* Reasons Grid - Tablet: 3 columns, Mobile: 1 column */}
        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-8 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="fb-why-card-responsive text-center"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Icon */}
              <div 
                className="fb-why-icon-responsive mb-5 mx-auto"
                style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '18px',
                  backgroundColor: 'rgba(21, 21, 97, 0.08)',
                  color: '#151561',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {reason.icon}
              </div>

              {/* Title */}
              <h3 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '17px',
                  fontWeight: 600,
                  color: '#151561',
                  marginBottom: '8px',
                  lineHeight: '1.3',
                }}
              >
                {reason.title}
              </h3>

              {/* Description */}
              <p 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  fontWeight: 400,
                  color: '#505050',
                  lineHeight: '1.6',
                }}
              >
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fbWhyFadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fb-why-heading,
        .fb-why-heading-responsive {
          animation: fbWhyFadeUp 0.8s ease forwards;
        }

        .fb-why-card,
        .fb-why-card-responsive {
          animation: fbWhyFadeUp 0.8s ease forwards;
          opacity: 0;
          transition: all 0.3s ease;
        }

        .fb-why-card:hover,
        .fb-why-card-responsive:hover {
          transform: translateY(-8px);
        }

        .fb-why-card:hover .fb-why-icon,
        .fb-why-card-responsive:hover .fb-why-icon-responsive {
          background-color: rgba(255, 0, 0, 0.1);
          color: #FF0000;
        }
      `}</style>
    </section>
  );
}
