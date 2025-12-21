import { FileSearch, Layers, PenTool, RefreshCw, CheckCircle, Send } from 'lucide-react';

export function WebDesignProcess() {
  const processSteps = [
    {
      number: '01',
      icon: <FileSearch className="w-7 h-7" />,
      title: 'Requirement gathering',
      description: 'Understanding your vision, goals, and target audience',
    },
    {
      number: '02',
      icon: <Layers className="w-7 h-7" />,
      title: 'Wireframing',
      description: 'Creating the blueprint and structure of your website',
    },
    {
      number: '03',
      icon: <PenTool className="w-7 h-7" />,
      title: 'Page design',
      description: 'Crafting beautiful, conversion-focused page designs',
    },
    {
      number: '04',
      icon: <RefreshCw className="w-7 h-7" />,
      title: 'Design revision',
      description: 'Refining designs based on your feedback',
    },
    {
      number: '05',
      icon: <CheckCircle className="w-7 h-7" />,
      title: 'Delivery',
      description: 'Final design files prepared for development',
    },
    {
      number: '06',
      icon: <Send className="w-7 h-7" />,
      title: 'Handoff',
      description: 'Seamless handoff to development team',
    },
  ];

  return (
    <section 
      className="web-design-process-section w-full lg:py-32 md:py-24 py-20"
      style={{
        background: 'linear-gradient(180deg, #F8FAFF 0%, #FFFFFF 100%)',
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
            OUR PROCESS
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
            How We Work
          </h2>
          <p 
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '18px',
              fontWeight: 400,
              color: '#505050',
              lineHeight: '1.7',
              maxWidth: '680px',
              margin: '0 auto',
            }}
          >
            A systematic approach to deliver exceptional web design
          </p>
        </div>

        {/* Timeline Grid - 3x2 */}
        <div className="grid grid-cols-3 gap-x-8 gap-y-12">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="process-step group relative"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Step Number */}
              <div 
                className="step-number mb-6"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '56px',
                  fontWeight: 800,
                  color: 'rgba(255, 0, 0, 0.12)',
                  lineHeight: '1',
                  transition: 'all 0.3s ease',
                }}
              >
                {step.number}
              </div>

              {/* Icon Container */}
              <div 
                className="icon-wrapper mb-5"
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '14px',
                  backgroundColor: '#FFFFFF',
                  border: '2px solid rgba(21, 21, 97, 0.1)',
                  color: '#151561',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.35s ease',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.04)',
                }}
              >
                {step.icon}
              </div>

              {/* Title */}
              <h3 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '22px',
                  fontWeight: 600,
                  color: '#151561',
                  marginBottom: '12px',
                  lineHeight: '1.3',
                }}
              >
                {step.title}
              </h3>

              {/* Description */}
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

              {/* Connector Line (not for last items in each row) */}
              {(index + 1) % 3 !== 0 && (
                <div 
                  className="connector-line absolute top-20"
                  style={{
                    right: '-32px',
                    width: '32px',
                    height: '2px',
                    backgroundColor: 'rgba(21, 21, 97, 0.15)',
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ========================================== */}
      {/* TABLET/MOBILE VARIANTS (<1024px)          */}
      {/* ========================================== */}
      <div className="lg:hidden max-w-[1440px] mx-auto md:px-8 px-6">
        {/* Section Header - Responsive */}
        <div className="text-center md:mb-16 mb-12 space-y-3">
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
            OUR PROCESS
          </div>
          <h2 
            className="md:text-[42px] text-[36px]"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              color: '#151561',
              letterSpacing: '-0.02em',
              lineHeight: '1.2',
            }}
          >
            How We Work
          </h2>
          <p 
            className="md:text-[17px] text-[16px]"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              color: '#505050',
              lineHeight: '1.7',
              maxWidth: '680px',
              margin: '0 auto',
            }}
          >
            A systematic approach to deliver exceptional web design
          </p>
        </div>

        {/* Timeline Grid - Tablet: 2 columns, Mobile: 1 column */}
        <div className="md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-10 flex flex-col gap-8">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="process-step-responsive group relative"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Step Number - Faded background */}
              <div 
                className="step-number-responsive md:mb-6 mb-5"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '56px',
                  fontWeight: 800,
                  color: 'rgba(255, 0, 0, 0.12)',
                  lineHeight: '1',
                  transition: 'all 0.3s ease',
                }}
              >
                {step.number}
              </div>

              {/* Icon Container */}
              <div 
                className="icon-wrapper-responsive mb-5"
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '14px',
                  backgroundColor: '#FFFFFF',
                  border: '2px solid rgba(21, 21, 97, 0.1)',
                  color: '#151561',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.35s ease',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.04)',
                }}
              >
                {step.icon}
              </div>

              {/* Title */}
              <h3 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '22px',
                  fontWeight: 600,
                  color: '#151561',
                  marginBottom: '12px',
                  lineHeight: '1.3',
                }}
              >
                {step.title}
              </h3>

              {/* Description */}
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

              {/* NO connector lines on tablet/mobile */}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .process-step,
        .process-step-responsive {
          animation: processStepFade 0.7s ease forwards;
          opacity: 0;
        }

        @keyframes processStepFade {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .process-step:hover .step-number,
        .process-step-responsive:hover .step-number-responsive {
          color: rgba(255, 0, 0, 0.3);
        }

        .process-step:hover .icon-wrapper,
        .process-step-responsive:hover .icon-wrapper-responsive {
          background-color: #FF0000;
          color: #FFFFFF;
          border-color: #FF0000;
          transform: scale(1.08);
          box-shadow: 0 8px 20px rgba(255, 0, 0, 0.25);
        }
      `}</style>
    </section>
  );
}
