import { MonitorSmartphone, Server, Link2, FileCode, Cloud, Zap } from 'lucide-react';

export function WebDevIncluded() {
  const includedItems = [
    { icon: <MonitorSmartphone className="w-6 h-6" />, title: 'Frontend development', description: 'Modern, responsive user interfaces' },
    { icon: <Server className="w-6 h-6" />, title: 'Backend development', description: 'Robust server-side architecture' },
    { icon: <Link2 className="w-6 h-6" />, title: 'API integration', description: 'Seamless third-party connections' },
    { icon: <FileCode className="w-6 h-6" />, title: 'CMS development', description: 'Easy content management systems' },
    { icon: <Cloud className="w-6 h-6" />, title: 'Hosting setup', description: 'Reliable cloud hosting solutions' },
    { icon: <Zap className="w-6 h-6" />, title: 'Speed optimization', description: 'Lightning-fast page load times' },
  ];

  return (
    <section 
      className="web-dev-included-section w-full lg:py-32 md:py-20 py-16" 
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
            WHAT'S INCLUDED
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
            Complete Development Package
          </h2>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-3 gap-8">
          {includedItems.map((item, index) => (
            <div 
              key={index} 
              className="included-card group" 
              style={{ 
                backgroundColor: '#FFFFFF', 
                padding: '32px', 
                borderRadius: '16px', 
                border: '1px solid rgba(0, 0, 0, 0.08)', 
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)', 
                transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)', 
                animationDelay: `${index * 80}ms` 
              }}
            >
              <div 
                className="icon-container mb-5" 
                style={{ 
                  width: '56px', 
                  height: '56px', 
                  borderRadius: '12px', 
                  backgroundColor: 'rgba(21, 21, 97, 0.1)', 
                  color: '#151561', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  transition: 'all 0.3s ease' 
                }}
              >
                {item.icon}
              </div>
              <h3 
                style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '20px', 
                  fontWeight: 600, 
                  color: '#151561', 
                  marginBottom: '12px', 
                  lineHeight: '1.3' 
                }}
              >
                {item.title}
              </h3>
              <p 
                style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '15px', 
                  fontWeight: 400, 
                  color: '#505050', 
                  lineHeight: '1.6' 
                }}
              >
                {item.description}
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
        <div className="text-center md:mb-10 mb-8 md:space-y-3 space-y-2.5">
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
            WHAT'S INCLUDED
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
            Complete Development Package
          </h2>
        </div>

        {/* Grid - Tablet: 2 columns, Mobile: 1 column */}
        <div className="md:grid md:grid-cols-2 md:gap-6 flex flex-col gap-5">
          {includedItems.map((item, index) => (
            <div 
              key={index} 
              className="included-card-responsive group" 
              style={{ 
                backgroundColor: '#FFFFFF', 
                padding: '28px', 
                borderRadius: '16px', 
                border: '1px solid rgba(0, 0, 0, 0.08)', 
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)', 
                transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)', 
                animationDelay: `${index * 80}ms` 
              }}
            >
              <div 
                className="icon-container-responsive md:mb-5 mb-4" 
                style={{ 
                  width: '56px', 
                  height: '56px', 
                  borderRadius: '12px', 
                  backgroundColor: 'rgba(21, 21, 97, 0.1)', 
                  color: '#151561', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  transition: 'all 0.3s ease' 
                }}
              >
                {item.icon}
              </div>
              <h3 
                className="md:text-[19px] text-[18px]"
                style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontWeight: 600, 
                  color: '#151561', 
                  marginBottom: '10px', 
                  lineHeight: '1.3' 
                }}
              >
                {item.title}
              </h3>
              <p 
                className="md:text-[15px] text-[14px]"
                style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontWeight: 400, 
                  color: '#505050', 
                  lineHeight: '1.6' 
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .included-card,
        .included-card-responsive { 
          animation: fadeSlideUp 0.6s ease forwards; 
          opacity: 0; 
        } 
        
        @keyframes fadeSlideUp { 
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          } 
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        } 
        
        .included-card:hover,
        .included-card-responsive:hover { 
          transform: translateY(-6px); 
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1); 
          border-color: rgba(21, 21, 97, 0.2); 
        } 
        
        .included-card:hover .icon-container,
        .included-card-responsive:hover .icon-container-responsive { 
          background-color: #151561; 
          color: #FFFFFF; 
          transform: scale(1.08); 
        }
      `}</style>
    </section>
  );
}
