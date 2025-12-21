import { Star, ArrowRight } from 'lucide-react';
import { SafeLink } from '../SafeLink';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function FacebookTestimonial() {
  const testimonials = [
    {
      avatar: 'https://images.unsplash.com/photo-1652795385697-1e5e522c98d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBlcnNvbiUyMGF2YXRhcnxlbnwxfHx8fDE3NjM2MDM1ODR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      name: 'Sarah Mitchell',
      role: 'Marketing Director, TechFlow',
      testimonial: 'Optichore transformed our Facebook advertising strategy. Within 3 months, we saw a significant increase in qualified leads and our cost per acquisition dropped dramatically. Their team truly understands performance marketing.',
    },
    {
      avatar: 'https://images.unsplash.com/photo-1652795385697-1e5e522c98d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBlcnNvbiUyMGF2YXRhcnxlbnwxfHx8fDE3NjM2MDM1ODR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      name: 'James Patterson',
      role: 'Founder, Elevate Brands',
      testimonial: 'The level of detail and strategic thinking Optichore brings to Facebook Ads is unmatched. They don\'t just run campaigns – they build growth engines. Highly recommend for any business serious about scaling.',
    },
  ];

  return (
    <section 
      className="facebook-testimonial-section w-full lg:py-32 md:py-24 py-20"
      style={{
        background: 'linear-gradient(180deg, #F7FAFF 0%, #FFFFFF 100%)',
      }}
    >
      {/* ========================================== */}
      {/* DESKTOP VARIANT (≥1024px) — LOCKED        */}
      {/* ========================================== */}
      <div className="hidden lg:block max-w-[1440px] mx-auto px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="fb-testimonial-heading"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '48px',
              fontWeight: 700,
              color: '#151561',
              letterSpacing: '-0.02em',
              marginBottom: '16px',
            }}
          >
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-2 gap-10 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="fb-testimonial-card group"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                padding: '40px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(0, 0, 0, 0.04)',
                background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FBFF 100%)',
                animationDelay: `${index * 150}ms`,
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5" 
                    style={{ color: '#FFD700', fill: '#FFD700' }}
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '17px',
                  fontWeight: 400,
                  color: '#505050',
                  lineHeight: '1.75',
                  marginBottom: '28px',
                }}
              >
                &quot;{testimonial.testimonial}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div 
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                  }}
                >
                  <ImageWithFallback
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <div>
                  <div 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '16px',
                      fontWeight: 600,
                      color: '#151561',
                    }}
                  >
                    {testimonial.name}
                  </div>
                  <div 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '14px',
                      fontWeight: 400,
                      color: '#999',
                    }}
                  >
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies Link */}
        <div className="text-center">
          <SafeLink 
            href="#"
            className="fb-case-studies-link inline-flex items-center gap-2"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '17px',
              fontWeight: 500,
              color: '#FF0000',
            }}
          >
            View More Case Studies
            <ArrowRight className="w-5 h-5" />
          </SafeLink>
        </div>
      </div>

      {/* ========================================== */}
      {/* TABLET/MOBILE VARIANTS (<1024px)          */}
      {/* ========================================== */}
      <div className="lg:hidden max-w-[1440px] mx-auto md:px-8 px-6">
        {/* Section Header - Responsive */}
        <div className="text-center md:mb-14 mb-12">
          <h2 
            className="fb-testimonial-heading-responsive md:text-[42px] text-[32px] md:mb-4 mb-3"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              color: '#151561',
              letterSpacing: '-0.02em',
            }}
          >
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonial Cards - Tablet: 2 columns, Mobile: 1 column */}
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-6 md:mb-10 mb-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="fb-testimonial-card-responsive group"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                padding: '40px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(0, 0, 0, 0.04)',
                background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FBFF 100%)',
                animationDelay: `${index * 150}ms`,
                height: '100%',
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5" 
                    style={{ color: '#FFD700', fill: '#FFD700' }}
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '17px',
                  fontWeight: 400,
                  color: '#505050',
                  lineHeight: '1.75',
                  marginBottom: '28px',
                  textAlign: 'left',
                }}
              >
                &quot;{testimonial.testimonial}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div 
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                  }}
                >
                  <ImageWithFallback
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <div>
                  <div 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '16px',
                      fontWeight: 600,
                      color: '#151561',
                    }}
                  >
                    {testimonial.name}
                  </div>
                  <div 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '14px',
                      fontWeight: 400,
                      color: '#999',
                    }}
                  >
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies Link */}
        <div className="text-center">
          <SafeLink 
            href="#"
            className="fb-case-studies-link-responsive inline-flex items-center gap-2"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '17px',
              fontWeight: 500,
              color: '#FF0000',
            }}
          >
            View More Case Studies
            <ArrowRight className="w-5 h-5" />
          </SafeLink>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fbTestimonialFadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fb-testimonial-heading,
        .fb-testimonial-heading-responsive {
          animation: fbTestimonialFadeUp 0.8s ease forwards;
        }

        .fb-testimonial-card,
        .fb-testimonial-card-responsive {
          animation: fbTestimonialFadeUp 0.8s ease forwards;
          opacity: 0;
          transition: all 0.3s ease;
        }

        .fb-testimonial-card:hover,
        .fb-testimonial-card-responsive:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.12);
        }

        .fb-case-studies-link,
        .fb-case-studies-link-responsive {
          transition: all 0.3s ease;
        }

        .fb-case-studies-link:hover,
        .fb-case-studies-link-responsive:hover {
          opacity: 0.7;
          transform: translateX(4px);
        }
      `}</style>
    </section>
  );
}
