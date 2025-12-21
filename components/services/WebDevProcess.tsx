import { FileSearch, Box, Code, TestTube, Rocket, Wrench } from 'lucide-react';

export function WebDevProcess() {
  const processSteps = [
    { number: '01', icon: <FileSearch className="w-7 h-7" />, title: 'Requirement analysis', description: 'Deep dive into your technical needs and goals' },
    { number: '02', icon: <Box className="w-7 h-7" />, title: 'Architecture', description: 'Designing scalable system architecture' },
    { number: '03', icon: <Code className="w-7 h-7" />, title: 'Development', description: 'Building with clean, maintainable code' },
    { number: '04', icon: <TestTube className="w-7 h-7" />, title: 'Testing', description: 'Comprehensive QA and bug fixing' },
    { number: '05', icon: <Rocket className="w-7 h-7" />, title: 'Deployment', description: 'Launching to production environment' },
    { number: '06', icon: <Wrench className="w-7 h-7" />, title: 'Maintenance', description: 'Ongoing support and updates' },
  ];

  return (
    <section 
      className="web-dev-process-section w-full lg:py-32 md:py-18 py-18" 
      style={{ background: 'linear-gradient(180deg, #F8FAFF 0%, #FFFFFF 100%)' }}
    >
      {/* ========================================== */}
      {/* DESKTOP VARIANT (≥1024px) — LOCKED        */}
      {/* ========================================== */}
      <div className="hidden lg:block max-w-[1440px] mx-auto px-12">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <div 
            style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '14px', 
              fontWeight: 600, 
              color: '#FF0000', 
              textTransform: 'uppercase', 
              letterSpacing: '0.08em' 
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
              lineHeight: '1.2' 
            }}
          >
            Development Workflow
          </h2>
          <p 
            style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '18px', 
              fontWeight: 400, 
              color: '#505050', 
              lineHeight: '1.7', 
              maxWidth: '680px', 
              margin: '0 auto' 
            }}
          >
            From concept to deployment, we follow a proven process
          </p>
        </div>

        {/* 3x2 Grid with connector lines */}
        <div className="grid grid-cols-3 gap-x-8 gap-y-12">
          {processSteps.map((step, index) => (
            <div 
              key={index} 
              className="process-step group relative" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Large background number */}
              <div 
                className="step-number mb-6" 
                style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '56px', 
                  fontWeight: 800, 
                  color: 'rgba(21, 21, 97, 0.12)', 
                  lineHeight: '1', 
                  transition: 'all 0.3s ease' 
                }}
              >
                {step.number}
              </div>

              {/* Icon box */}
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
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.04)' 
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
                  lineHeight: '1.3' 
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
                  lineHeight: '1.6' 
                }}
              >
                {step.description}
              </p>

              {/* Connector line (not on every 3rd item) */}
              {(index + 1) % 3 !== 0 && (
                <div 
                  className="connector-line absolute top-20" 
                  style={{ 
                    right: '-32px', 
                    width: '32px', 
                    height: '2px', 
                    backgroundColor: 'rgba(21, 21, 97, 0.15)' 
                  }} 
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ========================================== */}
      {/* TABLET/MOBILE VARIANTS (<1024px)          */}
      {/* Same card design, different grid           */}
      {/* ========================================== */}
      <div className="lg:hidden max-w-[1440px] mx-auto md:px-8 px-5">
        {/* Section Header - Responsive */}
        <div className="text-center md:mb-16 mb-12 space-y-4">
          <div 
            style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '14px', 
              fontWeight: 600, 
              color: '#FF0000', 
              textTransform: 'uppercase', 
              letterSpacing: '0.08em' 
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
              maxWidth: '300px',
              margin: '0 auto'
            }}
          >
            Development Workflow
          </h2>
          <p 
            style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '18px', 
              fontWeight: 400, 
              color: '#505050', 
              lineHeight: '1.7',
              maxWidth: '280px',
              margin: '0 auto'
            }}
          >
            From concept to deployment, we follow a proven process
          </p>
        </div>

        {/* Responsive Grid: 2 cols on tablet, 1 col on mobile */}
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-8 gap-y-10 md:gap-y-12 max-w-[640px] mx-auto">
          {processSteps.map((step, index) => (
            <div 
              key={index} 
              className="process-step-responsive group" 
              style={{ 
                animationDelay: `${index * 100}ms`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '320px',
                margin: '0 auto',
                paddingBottom: '32px'
              }}
            >
              {/* Large background number - CENTERED */}
              <div 
                className="step-number-responsive mb-1" 
                style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '56px', 
                  fontWeight: 800, 
                  color: 'rgba(21, 21, 97, 0.08)', 
                  lineHeight: '1', 
                  transition: 'all 0.3s ease',
                  textAlign: 'center'
                }}
              >
                {step.number}
              </div>

              {/* Icon box - CENTERED */}
              <div 
                className="icon-wrapper-responsive mb-2" 
                style={{ 
                  width: '56px', 
                  height: '56px', 
                  borderRadius: '14px', 
                  backgroundColor: '#FFFFFF', 
                  border: '2px solid rgba(21, 21, 97, 0.1)', 
                  color: '#151561', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  transition: 'all 0.35s ease', 
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.04)',
                  marginBottom: '8px'
                }}
              >
                {step.icon}
              </div>

              {/* Title - CENTERED */}
              <h3 
                style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '22px', 
                  fontWeight: 600, 
                  color: '#151561', 
                  marginBottom: '12px', 
                  lineHeight: '1.3',
                  textAlign: 'center',
                  maxWidth: '280px'
                }}
              >
                {step.title}
              </h3>

              {/* Description - CENTERED */}
              <p 
                style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '15px', 
                  fontWeight: 400, 
                  color: '#505050', 
                  lineHeight: '1.6',
                  textAlign: 'center',
                  maxWidth: '280px',
                  paddingLeft: '16px',
                  paddingRight: '16px'
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .process-step { 
          animation: processStepFade 0.7s ease forwards; 
          opacity: 0; 
        } 
        
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
        
        .process-step:hover .step-number { 
          color: rgba(21, 21, 97, 0.3); 
        } 
        
        .process-step:hover .icon-wrapper { 
          background-color: #151561; 
          color: #FFFFFF; 
          border-color: #151561; 
          transform: scale(1.08); 
          box-shadow: 0 8px 20px rgba(21, 21, 97, 0.25); 
        }
        
        .process-step-responsive:hover .step-number-responsive { 
          color: rgba(21, 21, 97, 0.3); 
        } 
        
        .process-step-responsive:hover .icon-wrapper-responsive { 
          background-color: #151561; 
          color: #FFFFFF; 
          border-color: #151561; 
          transform: scale(1.08); 
          box-shadow: 0 8px 20px rgba(21, 21, 97, 0.25); 
        }
      `}</style>
    </section>
  );
}
