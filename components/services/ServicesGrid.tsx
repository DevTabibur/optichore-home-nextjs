import { Megaphone, Code, PenTool, BarChart, Video, Mail } from 'lucide-react';
import { SafeLink } from '../SafeLink';

export function ServicesGrid() {
  const services = [
    {
      icon: Megaphone,
      title: 'Digital Marketing',
      description: 'Strategic marketing campaigns to boost brand awareness and drive traffic.',
      link: '#digital-marketing',
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom-built, scalable web applications with modern technologies and clean code.',
      link: '#web-development',
    },
    {
      icon: PenTool,
      title: 'UI/UX Design',
      description: 'User-centered design that creates intuitive, engaging experiences for your customers.',
      link: '#ui-ux-design',
    },
    {
      icon: BarChart,
      title: 'Analytics & Reporting',
      description: 'Data-driven insights to optimize your digital strategy and measure success.',
      link: '#analytics-reporting',
    },
    {
      icon: Video,
      title: 'Video Production',
      description: 'High-quality video content to enhance your brand and engage your audience.',
      link: '#video-production',
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Effective email campaigns to nurture leads and build customer relationships.',
      link: '#email-marketing',
    },
  ];

  return (
    <section 
      className="services-grid-section w-full lg:py-32 md:py-24 py-20"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FBFF 100%)',
      }}
    >
      {/* ========================================== */}
      {/* DESKTOP VARIANT (≥1024px) — LOCKED        */}
      {/* ========================================== */}
      <div className="hidden lg:block max-w-[1440px] mx-auto px-12">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2
            className="services-grid-heading"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '48px',
              fontWeight: 700,
              color: '#151561',
              letterSpacing: '-0.02em',
              lineHeight: '1.2',
              marginBottom: '16px',
            }}
          >
            Complete Digital Solutions
          </h2>
          <p
            className="services-grid-subheading"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '19px',
              fontWeight: 400,
              color: '#505050',
              lineHeight: '1.7',
            }}
          >
            Comprehensive services to elevate your digital presence
          </p>
        </div>

        {/* 3-Column Grid */}
        <div 
          className="services-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '32px',
          }}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <SafeLink key={index} to={service.link}>
                <div
                  className="service-card"
                  style={{
                    background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FBFF 100%)',
                    borderRadius: '20px',
                    padding: '40px 32px',
                    border: '1px solid rgba(0, 0, 0, 0.06)',
                    cursor: 'pointer',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Icon */}
                  <div
                    className="service-icon-wrapper"
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '16px',
                      background: 'linear-gradient(135deg, #FF0000 0%, #E60000 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '24px',
                      boxShadow: '0 8px 20px rgba(255, 0, 0, 0.25)',
                    }}
                  >
                    <IconComponent className="w-8 h-8" style={{ color: '#FFFFFF' }} />
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '24px',
                      fontWeight: 600,
                      color: '#151561',
                      letterSpacing: '-0.01em',
                      lineHeight: '1.3',
                      marginBottom: '16px',
                    }}
                  >
                    {service.title}
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
                    {service.description}
                  </p>
                </div>
              </SafeLink>
            );
          })}
        </div>
      </div>

      {/* ========================================== */}
      {/* TABLET/MOBILE VARIANTS (<1024px)          */}
      {/* ========================================== */}
      <div className="lg:hidden max-w-[1440px] mx-auto md:px-8 px-6">
        {/* Section Heading - Responsive */}
        <div className="text-center md:mb-16 mb-12">
          <h2
            className="services-grid-heading-responsive md:text-[42px] text-[36px] md:mb-4 mb-3"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              color: '#151561',
              letterSpacing: '-0.02em',
              lineHeight: '1.2',
            }}
          >
            Complete Digital Solutions
          </h2>
          <p
            className="services-grid-subheading-responsive md:text-[18px] text-[17px]"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              color: '#505050',
              lineHeight: '1.7',
            }}
          >
            Comprehensive services to elevate your digital presence
          </p>
        </div>

        {/* Responsive Grid: Tablet 2-column, Mobile 1-column */}
        <div className="services-grid-responsive grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-5">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <SafeLink key={index} to={service.link}>
                <div
                  className="service-card-responsive"
                  style={{
                    background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FBFF 100%)',
                    borderRadius: '20px',
                    padding: '40px 32px',
                    border: '1px solid rgba(0, 0, 0, 0.06)',
                    cursor: 'pointer',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
                    animationDelay: `${index * 100}ms`,
                    height: '100%',
                  }}
                >
                  {/* Icon - Top Left */}
                  <div
                    className="service-icon-wrapper"
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '16px',
                      background: 'linear-gradient(135deg, #FF0000 0%, #E60000 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '24px',
                      boxShadow: '0 8px 20px rgba(255, 0, 0, 0.25)',
                    }}
                  >
                    <IconComponent className="w-8 h-8" style={{ color: '#FFFFFF' }} />
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '24px',
                      fontWeight: 600,
                      color: '#151561',
                      letterSpacing: '-0.01em',
                      lineHeight: '1.3',
                      marginBottom: '16px',
                    }}
                  >
                    {service.title}
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
                    {service.description}
                  </p>
                </div>
              </SafeLink>
            );
          })}
        </div>
      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes servicesGridHeadingFade {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes serviceCardFadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .services-grid-heading,
        .services-grid-heading-responsive {
          animation: servicesGridHeadingFade 0.8s ease forwards;
        }

        .services-grid-subheading,
        .services-grid-subheading-responsive {
          animation: servicesGridHeadingFade 0.8s ease forwards 0.1s;
          opacity: 0;
        }

        .service-card,
        .service-card-responsive {
          opacity: 0;
          animation: serviceCardFadeUp 0.8s ease forwards;
        }

        .service-card:hover,
        .service-card-responsive:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.12);
          border-color: rgba(255, 0, 0, 0.15);
        }

        .service-card:hover .service-icon-wrapper,
        .service-card-responsive:hover .service-icon-wrapper {
          transform: scale(1.08);
        }

        .service-icon-wrapper {
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </section>
  );
}
