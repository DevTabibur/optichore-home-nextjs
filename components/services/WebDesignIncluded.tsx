import { Layout, Layers, Smartphone, FileText, Grid, Palette } from 'lucide-react';

export function WebDesignIncluded() {
  const includedItems = [
    {
      icon: <Layout className="w-6 h-6" />,
      title: 'Home page design',
      description: 'Stunning homepage that captures attention',
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: 'Inner page design',
      description: 'Consistent design across all pages',
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Responsive design',
      description: 'Perfect experience on all devices',
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Wireframes',
      description: 'Clear structure and layout planning',
    },
    {
      icon: <Grid className="w-6 h-6" />,
      title: 'UI components',
      description: 'Reusable design components library',
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'Brand consistency',
      description: 'Aligned with your brand identity',
    },
  ];

  return (
    <section 
      className="web-design-included-section w-full lg:py-32 md:py-24 py-20"
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
            WHAT'S INCLUDED
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
            Everything You Get
          </h2>
        </div>

        {/* 3-Column Grid */}
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
                animationDelay: `${index * 80}ms`,
              }}
            >
              {/* Icon */}
              <div 
                className="icon-container mb-5"
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 0, 0, 0.1)',
                  color: '#FF0000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                }}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '20px',
                  fontWeight: 600,
                  color: '#151561',
                  marginBottom: '12px',
                  lineHeight: '1.3',
                }}
              >
                {item.title}
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
                {item.description}
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
            WHAT'S INCLUDED
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
            Everything You Get
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
                padding: '32px',
                borderRadius: '16px',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                animationDelay: `${index * 80}ms`,
              }}
            >
              {/* Icon - Left aligned (NOT centered) */}
              <div 
                className="icon-container-responsive mb-5"
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 0, 0, 0.1)',
                  color: '#FF0000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                }}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '20px',
                  fontWeight: 600,
                  color: '#151561',
                  marginBottom: '12px',
                  lineHeight: '1.3',
                }}
              >
                {item.title}
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
          border-color: rgba(255, 0, 0, 0.2);
        }

        .included-card:hover .icon-container,
        .included-card-responsive:hover .icon-container-responsive {
          background-color: #FF0000;
          color: #FFFFFF;
          transform: scale(1.08);
        }
      `}</style>
    </section>
  );
}
