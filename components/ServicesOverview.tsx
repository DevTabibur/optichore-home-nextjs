import { Megaphone, Palette, Code, ArrowRight } from 'lucide-react';
import { SafeLink } from './SafeLink';
import { SafeCard } from './SafeCard';

export function ServicesOverview() {
  const services = [
    {
      icon: <Megaphone className="w-7 h-7" />,
      iconBgColor: '#FF0000',
      title: 'Digital Marketing & Facebook Ads',
      description: 'Meta-certified marketing solutions designed for performance.',
    },
    {
      icon: <Palette className="w-7 h-7" />,
      iconBgColor: '#151561',
      title: 'Creative Design & Branding',
      description: 'UI/UX, brand identity, and premium design for high-growth brands.',
    },
    {
      icon: <Code className="w-7 h-7" />,
      iconBgColor: '#FF0000',
      title: 'Web & Software Development',
      description: 'Custom websites, SaaS platforms, and scalable technology solutions.',
    },
  ];

  return (
    <section 
      className="services-overview-section w-full lg:py-32 md:py-24 py-20"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      {/* RESPONSIVE CONTAINER - Padding adjusts per breakpoint */}
      <div className="services-overview-container max-w-[1440px] mx-auto lg:px-12 md:px-8 px-6">
        
        {/* Centered Section Header - Responsive */}
        <div className="section-header-centered text-center lg:mb-16 md:mb-12 mb-10 space-y-5">
          {/* Label */}
          <div 
            className="services-label-animated"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              fontWeight: 500,
              color: '#FF0000',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}
          >
            OUR SERVICES
          </div>

          {/* Main Heading - Responsive font size */}
          <h2 
            className="services-main-heading-animated leading-tight max-w-[720px] mx-auto lg:text-[44px] md:text-[38px] text-[32px]"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              color: '#151561',
              letterSpacing: '-0.01em',
            }}
          >
            What We Offer at Optichore
          </h2>

          {/* Subtitle - Responsive font size */}
          <p 
            className="services-subtitle-animated max-w-[780px] mx-auto lg:text-[18px] md:text-[17px] text-[16px]"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              color: '#505050',
              lineHeight: '1.7',
            }}
          >
            From strategy and creative design to development and marketing — we provide everything your business needs to grow.
          </p>
        </div>

        {/* RESPONSIVE SERVICES GRID - 3 cols → 2 cols → 1 col */}
        <div className="services-grid grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-6 gap-5 lg:mb-12 md:mb-10 mb-8">
          {services.map((service, index) => (
            <SafeCard
              key={index}
              className="service-card-premium group"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '18px',
                padding: '28px',
                boxShadow: '0 6px 24px rgba(0, 0, 0, 0.07)',
                border: '1px solid rgba(0, 0, 0, 0.04)',
                animationDelay: `${index * 120}ms`,
              }}
            >
              {/* Icon Container */}
              <div 
                className="service-icon-container mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl group-hover:animate-icon-pulse-rotate"
                style={{
                  backgroundColor: service.iconBgColor,
                  color: '#FFFFFF',
                }}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 
                className="service-card-title mb-4"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '23px',
                  fontWeight: 500,
                  color: '#151561',
                  lineHeight: '1.3',
                }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p 
                className="service-card-description mb-6"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  fontWeight: 400,
                  color: '#505050',
                  lineHeight: '1.6',
                }}
              >
                {service.description}
              </p>

              {/* Learn More Link */}
              <SafeLink
                to="#services"
                className="service-learn-more-link inline-flex items-center gap-2"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  fontWeight: 500,
                  color: '#151561',
                }}
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </SafeLink>
            </SafeCard>
          ))}
        </div>

        {/* Bottom CTA Row - Responsive spacing */}
        <div className="bottom-cta-row text-center lg:pt-8 md:pt-6 pt-5">
          <SafeLink
            to="/services"
            className="view-all-services-link inline-flex items-center gap-2.5"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '17px',
              fontWeight: 500,
              color: '#151561',
            }}
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </SafeLink>
        </div>
      </div>
    </section>
  );
}