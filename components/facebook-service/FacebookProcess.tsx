import { Search, Sparkles, Users, TrendingUp, Zap, BarChart3 } from 'lucide-react';

export function FacebookProcess() {
  const steps = [
    {
      icon: <Search className="w-6 h-6" />,
      title: 'Discovery & Requirements Collection',
      description: 'Understanding your business goals, target audience, and campaign objectives.',
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Campaign Setup & Creative Strategy',
      description: 'Developing compelling ad creatives and campaign structure for maximum impact.',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Audience Setup + Pixel Integration',
      description: 'Implementing advanced targeting and tracking infrastructure for accurate measurement.',
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Testing & Optimization',
      description: 'Continuous A/B testing and optimization to improve campaign performance.',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Scaling & Retargeting',
      description: 'Expanding winning campaigns and implementing retargeting strategies.',
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Reporting & Insights',
      description: 'Regular performance reports with actionable insights and recommendations.',
    },
  ];

  return (
    <section 
      className="facebook-process-section w-full lg:py-32 md:py-24 py-20"
      style={{
        background: 'linear-gradient(180deg, #F7FAFF 0%, #FFFFFF 100%)',
      }}
    >
      {/* ========================================== */}
      {/* DESKTOP VARIANT (≥1024px) — LOCKED        */}
      {/* ========================================== */}
      <div className="hidden lg:block max-w-[1440px] mx-auto px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 
            className="fb-process-heading"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '48px',
              fontWeight: 700,
              color: '#151561',
              letterSpacing: '-0.02em',
              marginBottom: '16px',
            }}
          >
            Our Process
          </h2>
          <p 
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '18px',
              fontWeight: 400,
              color: '#505050',
            }}
          >
            A proven workflow designed to maximize your Facebook advertising success
          </p>
        </div>

        {/* Timeline */}
        <div className="fb-timeline-container relative">
          {/* Dotted Line */}
          <div 
            className="absolute left-1/2 top-0 bottom-0 w-px"
            style={{
              background: 'repeating-linear-gradient(to bottom, #E0E0E0 0, #E0E0E0 8px, transparent 8px, transparent 16px)',
              transform: 'translateX(-50%)',
            }}
          />

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`fb-timeline-step flex items-start gap-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                {/* Content */}
                <div 
                  className="flex-1"
                  style={{
                    textAlign: index % 2 === 0 ? 'right' : 'left',
                  }}
                >
                  <div
                    className="fb-timeline-card inline-block"
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: '20px',
                      padding: '28px 32px',
                      boxShadow: '0 6px 24px rgba(0, 0, 0, 0.08)',
                      border: '1px solid rgba(0, 0, 0, 0.04)',
                      maxWidth: '500px',
                    }}
                  >
                    <h3 
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '20px',
                        fontWeight: 600,
                        color: '#151561',
                        marginBottom: '8px',
                      }}
                    >
                      {step.title}
                    </h3>
                    <p 
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '15px',
                        fontWeight: 400,
                        color: '#505050',
                        lineHeight: '1.6',
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center Icon */}
                <div 
                  className="fb-timeline-icon-wrapper"
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    backgroundColor: '#FF0000',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: '0 4px 16px rgba(255, 0, 0, 0.3)',
                    position: 'relative',
                    zIndex: 10,
                  }}
                >
                  {step.icon}
                </div>

                {/* Spacer */}
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* TABLET/MOBILE VARIANTS (<1024px)          */}
      {/* ========================================== */}
      <div className="lg:hidden max-w-[1440px] mx-auto md:px-8 px-6">
        {/* Section Header - Responsive */}
        <div className="text-center md:mb-16 mb-12">
          <h2 
            className="fb-process-heading-responsive md:text-[42px] text-[32px] md:mb-4 mb-3"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              color: '#151561',
              letterSpacing: '-0.02em',
            }}
          >
            Our Process
          </h2>
          <p 
            className="md:text-[17px] text-[16px]"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              color: '#505050',
            }}
          >
            A proven workflow designed to maximize your Facebook advertising success
          </p>
        </div>

        {/* Timeline - Tablet: Center aligned, Mobile: Left aligned */}
        <div className="fb-timeline-container-responsive relative">
          {/* Tablet: Center dotted line, Mobile: Left dotted line */}
          <div 
            className="absolute md:left-1/2 left-7 top-0 bottom-0 w-px"
            style={{
              background: 'repeating-linear-gradient(to bottom, #E0E0E0 0, #E0E0E0 8px, transparent 8px, transparent 16px)',
              transform: 'translateX(-50%)',
            }}
          />

          {/* Steps - Tablet: Alternating, Mobile: All left-aligned */}
          <div className="md:space-y-12 space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`fb-timeline-step-responsive flex items-start md:gap-10 gap-4 ${
                  index % 2 === 0 ? 'md:flex-row flex-row' : 'md:flex-row-reverse flex-row'
                }`}
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                {/* Content - Tablet: Alternating alignment, Mobile: All left-aligned */}
                <div 
                  className={`flex-1 ${index % 2 === 0 ? 'md:text-right text-left' : 'md:text-left text-left'}`}
                >
                  <div
                    className="fb-timeline-card-responsive md:inline-block block"
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: '20px',
                      padding: '28px 32px',
                      boxShadow: '0 6px 24px rgba(0, 0, 0, 0.08)',
                      border: '1px solid rgba(0, 0, 0, 0.04)',
                      maxWidth: '500px',
                      textAlign: 'left',
                    }}
                  >
                    <h3 
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '20px',
                        fontWeight: 600,
                        color: '#151561',
                        marginBottom: '8px',
                      }}
                    >
                      {step.title}
                    </h3>
                    <p 
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '15px',
                        fontWeight: 400,
                        color: '#505050',
                        lineHeight: '1.6',
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Icon - Tablet: Center, Mobile: Left side */}
                <div 
                  className="fb-timeline-icon-wrapper"
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    backgroundColor: '#FF0000',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: '0 4px 16px rgba(255, 0, 0, 0.3)',
                    position: 'relative',
                    zIndex: 10,
                  }}
                >
                  {step.icon}
                </div>

                {/* Spacer - Hidden on mobile */}
                <div className="flex-1 md:block hidden" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fbProcessFade {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fb-process-heading,
        .fb-process-heading-responsive {
          animation: fbProcessFade 0.8s ease forwards;
        }

        .fb-timeline-step,
        .fb-timeline-step-responsive {
          animation: fbProcessFade 0.8s ease forwards;
          opacity: 0;
        }

        .fb-timeline-card,
        .fb-timeline-card-responsive {
          transition: all 0.3s ease;
        }

        .fb-timeline-card:hover,
        .fb-timeline-card-responsive:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.12);
        }
      `}</style>
    </section>
  );
}
