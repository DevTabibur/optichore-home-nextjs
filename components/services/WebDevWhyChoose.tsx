import { Code2, Layers, TrendingUp, Shield } from 'lucide-react';

export function WebDevWhyChoose() {
  const reasons = [
    { icon: <Code2 className="w-7 h-7" />, title: 'Clean, scalable code', description: "Well-structured code that's easy to maintain and scale as your business grows." },
    { icon: <Layers className="w-7 h-7" />, title: 'Modern frameworks', description: 'Using cutting-edge technologies like React, Next.js, and Node.js for optimal performance.' },
    { icon: <TrendingUp className="w-7 h-7" />, title: 'Optimized for SEO', description: 'Built with search engine optimization in mind to improve your online visibility.' },
    { icon: <Shield className="w-7 h-7" />, title: 'Secure architecture', description: 'Industry-standard security practices to protect your data and users.' },
  ];

  return (
    <section 
      className="web-dev-why-section w-full lg:py-32 md:py-22 py-18" 
      style={{ backgroundColor: '#FFFFFF' }}
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
            WHY CHOOSE US
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
            Our Development Advantage
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
                animationDelay: `${index * 100}ms` 
              }}
            >
              <div 
                className="icon-box mb-6" 
                style={{ 
                  width: '72px', 
                  height: '72px', 
                  borderRadius: '16px', 
                  background: 'linear-gradient(135deg, #151561 0%, #1a1a7a 100%)', 
                  color: '#FFFFFF', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  transition: 'all 0.3s ease', 
                  boxShadow: '0 8px 20px rgba(21, 21, 97, 0.2)' 
                }}
              >
                {reason.icon}
              </div>
              <h3 
                style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '26px', 
                  fontWeight: 600, 
                  color: '#151561', 
                  marginBottom: '16px', 
                  lineHeight: '1.3' 
                }}
              >
                {reason.title}
              </h3>
              <p 
                style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '16px', 
                  fontWeight: 400, 
                  color: '#505050', 
                  lineHeight: '1.7' 
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
            style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '14px', 
              fontWeight: 600, 
              color: '#FF0000', 
              textTransform: 'uppercase', 
              letterSpacing: '0.08em' 
            }}
          >
            WHY CHOOSE US
          </div>
          <h2 
            className="md:text-[42px] text-[30px]"
            style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontWeight: 700, 
              color: '#151561', 
              letterSpacing: '-0.02em', 
              lineHeight: '1.2' 
            }}
          >
            Our Development Advantage
          </h2>
        </div>

        {/* Grid - Tablet: 2 columns, Mobile: 1 column */}
        <div className="md:grid md:grid-cols-2 md:gap-8 flex flex-col gap-6">
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
                animationDelay: `${index * 100}ms` 
              }}
            >
              <div 
                className="icon-box-responsive md:mb-6 mb-5" 
                style={{ 
                  width: '64px', 
                  height: '64px', 
                  borderRadius: '16px', 
                  background: 'linear-gradient(135deg, #151561 0%, #1a1a7a 100%)', 
                  color: '#FFFFFF', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  transition: 'all 0.3s ease', 
                  boxShadow: '0 8px 20px rgba(21, 21, 97, 0.2)' 
                }}
              >
                {reason.icon}
              </div>
              <h3 
                className="md:text-[22px] text-[19px]"
                style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontWeight: 600, 
                  color: '#151561', 
                  marginBottom: '12px', 
                  lineHeight: '1.3' 
                }}
              >
                {reason.title}
              </h3>
              <p 
                className="md:text-[15px] text-[14px]"
                style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontWeight: 400, 
                  color: '#505050', 
                  lineHeight: '1.7' 
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
          border-color: rgba(21, 21, 97, 0.25); 
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.12); 
        } 
        
        .why-card:hover .icon-box,
        .why-card-responsive:hover .icon-box-responsive { 
          transform: scale(1.08) rotate(3deg); 
          box-shadow: 0 12px 28px rgba(21, 21, 97, 0.35); 
        }
      `}</style>
    </section>
  );
}
