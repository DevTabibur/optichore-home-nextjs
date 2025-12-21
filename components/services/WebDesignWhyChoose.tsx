import { Target, Sparkles, Palette, Box } from 'lucide-react';

export function WebDesignWhyChoose() {
  const reasons = [
    {
      icon: <Target className="w-7 h-7" />,
      title: 'UX-first approach',
      description: 'We prioritize user experience to create intuitive, engaging interfaces that convert.',
    },
    {
      icon: <Sparkles className="w-7 h-7" />,
      title: 'Premium visual design',
      description: 'High-end aesthetics that elevate your brand and captivate your audience.',
    },
    {
      icon: <Palette className="w-7 h-7" />,
      title: 'Brand-consistent',
      description: 'Every element aligns perfectly with your brand identity and guidelines.',
    },
    {
      icon: <Box className="w-7 h-7" />,
      title: 'Scalable component library',
      description: 'Modular design systems that grow with your business needs.',
    },
  ];

  return (
    <section 
      className="web-design-why-section w-full lg:py-32 md:py-20 py-14"
      style={{
        backgroundColor: '#FFFFFF',
      }}
    >
      {/* ========================================== */}
      {/* DESKTOP VARIANT (≥1024px) — LOCKED        */}
      {/* ========================================== */}
      <div className="hidden lg:block max-w-[1440px] mx-auto px-12">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <div 
            className="section-label"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              fontWeight: 600,
              color: '#FF0000',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}
          >
            WHY CHOOSE US
          </div>
          <h2 
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '48px',
              fontWeight: 700,
              color: '#151561',
              letterSpacing: '-0.02em',
              lineHeight: '1.2',
            }}
          >
            What Makes Us Different
          </h2>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="why-card group"
              style={{
                backgroundColor: '#FFFFFF',
                padding: '40px',
                borderRadius: '20px',
                border: '2px solid rgba(0, 0, 0, 0.06)',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Icon */}
              <div 
                className="icon-box mb-6"
                style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #FF0000 0%, #E60000 100%)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 20px rgba(255, 0, 0, 0.2)',
                }}
              >
                {reason.icon}
              </div>

              {/* Title */}
              <h3 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '26px',
                  fontWeight: 600,
                  color: '#151561',
                  marginBottom: '16px',
                  lineHeight: '1.3',
                }}
              >
                {reason.title}
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
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================== */}
      {/* TABLET/MOBILE VARIANTS (<1024px)          */}
      {/* ========================================== */}
      <div className="lg:hidden max-w-[1440px] mx-auto md:px-8 px-5">
        {/* Section Header - Responsive */}
        <div className="text-center md:mb-12 mb-8 md:space-y-3 space-y-2.5">
          <div 
            className="section-label"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              fontWeight: 600,
              color: '#FF0000',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}
          >
            WHY CHOOSE US
          </div>
          <h2 
            className="md:text-[44px] text-[32px]"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              color: '#151561',
              letterSpacing: '-0.02em',
              lineHeight: '1.2',
            }}
          >
            What Makes Us Different
          </h2>
        </div>

        {/* Grid - Tablet: 2 columns, Mobile: 1 column */}
        <div className="md:grid md:grid-cols-2 md:gap-6 flex flex-col gap-4">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="why-card-responsive group"
              style={{
                backgroundColor: '#FFFFFF',
                padding: '32px',
                borderRadius: '20px',
                border: '2px solid rgba(0, 0, 0, 0.06)',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Icon - Top left aligned */}
              <div 
                className="icon-box-responsive md:mb-6 mb-5"
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #FF0000 0%, #E60000 100%)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 20px rgba(255, 0, 0, 0.2)',
                }}
              >
                {reason.icon}
              </div>

              {/* Title */}
              <h3 
                className="md:text-[24px] text-[20px]"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  color: '#151561',
                  marginBottom: '12px',
                  lineHeight: '1.3',
                }}
              >
                {reason.title}
              </h3>

              {/* Description */}
              <p 
                className="md:text-[15px] text-[14px]"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  color: '#505050',
                  lineHeight: '1.7',
                }}
              >
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .why-card,
        .why-card-responsive {
          animation: whyCardSlide 0.7s ease forwards;
          opacity: 0;
        }

        @keyframes whyCardSlide {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .why-card:hover,
        .why-card-responsive:hover {
          transform: translateY(-8px);
          border-color: rgba(255, 0, 0, 0.25);
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.12);
        }

        .why-card:hover .icon-box,
        .why-card-responsive:hover .icon-box-responsive {
          transform: scale(1.08) rotate(3deg);
          box-shadow: 0 12px 28px rgba(255, 0, 0, 0.35);
        }
      `}</style>
    </section>
  );
}
