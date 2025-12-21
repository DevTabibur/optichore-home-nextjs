"use client"
import { Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState, useEffect, useRef } from 'react';

export function TrustedClients() {
  const [countersStarted, setCountersStarted] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const clientLogos = [
    { 
      name: 'Google',
      url: 'https://images.unsplash.com/photo-1662947190722-5d272f82a526?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb29nbGUlMjBsb2dvfGVufDF8fHx8MTc2MzUwMTM0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    { 
      name: 'Meta',
      url: 'https://images.unsplash.com/photo-1665799871677-f1fd17338b43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNlYm9vayUyMG1ldGElMjBsb2dvfGVufDF8fHx8MTc2MzUwMTM0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    { 
      name: 'Microsoft',
      url: 'https://images.unsplash.com/photo-1662947036644-ecfde1221ac7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWNyb3NvZnQlMjBsb2dvfGVufDF8fHx8MTc2MzU1MjIwNnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    { 
      name: 'Amazon',
      url: 'https://images.unsplash.com/photo-1704204656144-3dd12c110dd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbWF6b24lMjBsb2dvfGVufDF8fHx8MTc2MzUwODk3OXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    { 
      name: 'Shopify',
      url: 'https://images.unsplash.com/photo-1629664032218-f4a6acd56696?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9waWZ5JTIwbG9nb3xlbnwxfHx8fDE3NjM1OTc0OTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    { 
      name: 'Adobe',
      url: 'https://images.unsplash.com/photo-1649734926700-8dfb770ffaee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZG9iZSUyMGxvZ298ZW58MXx8fHwxNzYzNTk3NDk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    { 
      name: 'Netflix',
      url: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXRmbGl4JTIwbG9nb3xlbnwxfHx8fDE3NjM1OTQ2NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    { 
      name: 'Stripe',
      url: 'https://images.unsplash.com/photo-1754512223500-293e72e42dd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJpcGUlMjBsb2dvfGVufDF8fHx8MTc2MzUzMTU0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    { 
      name: 'Slack',
      url: 'https://images.unsplash.com/photo-1660137340590-d48549625980?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbGFjayUyMGxvZ298ZW58MXx8fHwxNjM1MDEzNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const successMetrics = [
    { target: 260, suffix: '+', label: 'Completed Projects', color: 'navy' },
    { target: 94, suffix: '%', label: 'Client Satisfaction', color: 'red' },
    { target: 12, suffix: '+', label: 'Countries Served', color: 'navy' },
    { target: 1, suffix: 'M+', label: 'Conversions Delivered', color: 'red' },
  ];

  const testimonials = [
    {
      image: 'https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzQ4MDMyNXww&ixlib=rb-4.1.0&q=80&w=1080',
      name: 'Sarah Johnson',
      role: 'Marketing Director, TechCorp',
      rating: 5,
      text: 'Optichore transformed our digital presence. Their strategic approach to Facebook Ads increased our ROAS by 380% in just 3 months.',
      accentColor: 'red',
    },
    {
      image: 'https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGhlYWRzaG90fGVufDF8fHx8MTc2MzU0OTMxNHww&ixlib=rb-4.1.0&q=80&w=1080',
      name: 'Emily Rodriguez',
      role: 'CEO, GrowthHub',
      rating: 5,
      text: 'The team at Optichore delivered beyond expectations. Their design work is world-class and their marketing expertise is unmatched.',
      accentColor: 'navy',
    },
    {
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzUzNzc5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      name: 'Michael Chen',
      role: 'Founder, StartupX',
      rating: 5,
      text: 'Working with Optichore was a game-changer. They built our entire digital infrastructure and helped us scale from 0 to 100K users.',
      accentColor: 'red',
    },
  ];

  // Count-up animation
  useEffect(() => {
    if (!countersStarted) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = successMetrics.map((metric, index) => {
      let currentStep = 0;
      return setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeOutQuad = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.floor(metric.target * easeOutQuad);
        
        setCounts(prev => {
          const newCounts = [...prev];
          newCounts[index] = currentValue;
          return newCounts;
        });

        if (currentStep >= steps) {
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = metric.target;
            return newCounts;
          });
        }
      }, stepDuration);
    });

    return () => intervals.forEach(interval => clearInterval(interval));
  }, [countersStarted]);

  // Intersection Observer for counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !countersStarted) {
            setCountersStarted(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [countersStarted]);

  return (
    <section 
      ref={sectionRef}
      className="trusted-clients-premium-section w-full lg:py-40 md:py-24 py-20"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      {/* RESPONSIVE CONTAINER */}
      <div className="trusted-clients-container max-w-[1440px] mx-auto lg:px-12 md:px-8 px-6 lg:space-y-32 md:space-y-24 space-y-20">
        
        {/* ========================================== */}
        {/* DESKTOP VARIANT (≥1024px) — LOCKED        */}
        {/* ========================================== */}
        <div className="hidden lg:block">
          {/* B. SUCCESS METRICS - 4 COLUMNS */}
          <div className="success-metrics-section">
            <div className="metrics-grid grid grid-cols-4 gap-6">
              {successMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="metric-tile-premium"
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '20px',
                    padding: '48px 32px',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06)',
                    border: '1px solid rgba(0, 0, 0, 0.04)',
                    position: 'relative',
                    overflow: 'hidden',
                    textAlign: 'center',
                    opacity: 0,
                    animation: `fadeInUp 0.6s ease forwards ${index * 0.12}s`,
                  }}
                >
                  {/* Decorative Background Blob */}
                  <div 
                    className="metric-blob-decoration"
                    style={{
                      position: 'absolute',
                      top: '-40px',
                      right: '-40px',
                      width: '140px',
                      height: '140px',
                      borderRadius: '50%',
                      background: metric.color === 'navy' 
                        ? 'radial-gradient(circle, rgba(21, 21, 97, 0.06) 0%, transparent 70%)'
                        : 'radial-gradient(circle, rgba(255, 0, 0, 0.06) 0%, transparent 70%)',
                      zIndex: 0,
                    }}
                  />

                  {/* Content */}
                  <div className="metric-content-inner relative z-10">
                    <div 
                      className="metric-number"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '56px',
                        fontWeight: 700,
                        color: '#151561',
                        lineHeight: '1.1',
                        marginBottom: '16px',
                      }}
                    >
                      {countersStarted ? counts[index] : 0}{metric.suffix}
                    </div>
                    <div 
                      className="metric-label"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '18px',
                        fontWeight: 500,
                        color: '#505050',
                      }}
                    >
                      {metric.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* C. TESTIMONIAL CARDS - 3 COLUMNS */}
          <div className="testimonials-section-static mt-32">
            {/* Header */}
            <div className="text-center mb-16 space-y-4">
              <div 
                className="testimonials-label"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#FF0000',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                CLIENT SUCCESS STORIES
              </div>
              <h3 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '46px',
                  fontWeight: 700,
                  color: '#151561',
                  letterSpacing: '-0.01em',
                }}
              >
                What Our Clients Say
              </h3>
            </div>

            {/* Testimonial Cards Grid - 3 columns */}
            <div className="testimonials-grid grid grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="testimonial-card-premium group"
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '18px',
                    padding: '40px',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                    border: '1px solid rgba(0, 0, 0, 0.04)',
                    position: 'relative',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    opacity: 0,
                    animation: `fadeInUp 0.6s ease forwards ${index * 0.12}s`,
                    cursor: 'default',
                  }}
                >
                  {/* Left Accent Bar */}
                  <div 
                    className="accent-bar-left"
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: '32px',
                      bottom: '32px',
                      width: '4px',
                      borderRadius: '0 4px 4px 0',
                      backgroundColor: testimonial.accentColor === 'red' ? '#FF0000' : '#151561',
                    }}
                  />

                  {/* Content */}
                  <div className="testimonial-content" style={{ paddingLeft: '20px' }}>
                    {/* Stars Rating */}
                    <div className="stars-rating flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-5 h-5" 
                          style={{ fill: '#FFB800', color: '#FFB800' }}
                        />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p 
                      className="testimonial-text mb-8"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '16px',
                        fontWeight: 400,
                        color: '#505050',
                        lineHeight: '1.7',
                        minHeight: '120px',
                      }}
                    >
                      &quot;{testimonial.text}&quot;
                    </p>

                    {/* Profile */}
                    <div className="testimonial-profile flex items-center gap-4">
                      <ImageWithFallback
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover"
                        style={{ 
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)',
                          border: '2px solid #FFFFFF',
                        }}
                      />
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
                            color: '#888888',
                          }}
                        >
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================== */}
        {/* TABLET/MOBILE VARIANTS (<1024px)          */}
        {/* ========================================== */}
        <div className="lg:hidden">
          {/* B. SUCCESS METRICS - RESPONSIVE GRID */}
          <div className="success-metrics-section-responsive">
            {/* Tablet: 2x2 Grid | Mobile: Single Column */}
            <div className="metrics-grid-responsive grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-5">
              {successMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="metric-tile-responsive"
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '20px',
                    padding: '48px 32px',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06)',
                    border: '1px solid rgba(0, 0, 0, 0.04)',
                    position: 'relative',
                    overflow: 'hidden',
                    textAlign: 'center',
                    opacity: 0,
                    animation: `fadeInUp 0.6s ease forwards ${index * 0.12}s`,
                  }}
                >
                  {/* Decorative Background Blob */}
                  <div 
                    className="metric-blob-decoration"
                    style={{
                      position: 'absolute',
                      top: '-40px',
                      right: '-40px',
                      width: '140px',
                      height: '140px',
                      borderRadius: '50%',
                      background: metric.color === 'navy' 
                        ? 'radial-gradient(circle, rgba(21, 21, 97, 0.06) 0%, transparent 70%)'
                        : 'radial-gradient(circle, rgba(255, 0, 0, 0.06) 0%, transparent 70%)',
                      zIndex: 0,
                    }}
                  />

                  {/* Content */}
                  <div className="metric-content-inner relative z-10">
                    <div 
                      className="metric-number"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '56px',
                        fontWeight: 700,
                        color: '#151561',
                        lineHeight: '1.1',
                        marginBottom: '16px',
                      }}
                    >
                      {countersStarted ? counts[index] : 0}{metric.suffix}
                    </div>
                    <div 
                      className="metric-label"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '18px',
                        fontWeight: 500,
                        color: '#505050',
                      }}
                    >
                      {metric.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* C. TESTIMONIAL CARDS - RESPONSIVE GRID */}
          <div className="testimonials-section-responsive md:mt-24 mt-20">
            {/* Header */}
            <div className="text-center md:mb-16 mb-12 space-y-4">
              <div 
                className="testimonials-label"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#FF0000',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                CLIENT SUCCESS STORIES
              </div>
              <h3 
                className="md:text-[40px] text-[34px]"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  color: '#151561',
                  letterSpacing: '-0.01em',
                }}
              >
                What Our Clients Say
              </h3>
            </div>

            {/* Testimonial Cards Grid - Tablet: 2 columns | Mobile: 1 column */}
            <div className="testimonials-grid-responsive grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-5">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="testimonial-card-responsive group"
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '18px',
                    padding: '40px',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                    border: '1px solid rgba(0, 0, 0, 0.04)',
                    position: 'relative',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    opacity: 0,
                    animation: `fadeInUp 0.6s ease forwards ${index * 0.12}s`,
                    cursor: 'default',
                  }}
                >
                  {/* Left Accent Bar */}
                  <div 
                    className="accent-bar-left"
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: '32px',
                      bottom: '32px',
                      width: '4px',
                      borderRadius: '0 4px 4px 0',
                      backgroundColor: testimonial.accentColor === 'red' ? '#FF0000' : '#151561',
                    }}
                  />

                  {/* Content */}
                  <div className="testimonial-content" style={{ paddingLeft: '20px' }}>
                    {/* Stars Rating */}
                    <div className="stars-rating flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-5 h-5" 
                          style={{ fill: '#FFB800', color: '#FFB800' }}
                        />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p 
                      className="testimonial-text mb-8"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '16px',
                        fontWeight: 400,
                        color: '#505050',
                        lineHeight: '1.7',
                        minHeight: 'auto',
                      }}
                    >
                      &quot;{testimonial.text}&quot;
                    </p>

                    {/* Profile */}
                    <div className="testimonial-profile flex items-center gap-4">
                      <ImageWithFallback
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover"
                        style={{ 
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)',
                          border: '2px solid #FFFFFF',
                        }}
                      />
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
                            color: '#888888',
                          }}
                        >
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .logo-card-premium:hover {
          transform: scale(1.03) translateY(-4px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
        }

        .logo-card-premium:hover img {
          filter: grayscale(0%) !important;
          opacity: 1 !important;
        }

        .metric-tile-premium:hover,
        .metric-tile-responsive:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.12);
        }

        .testimonial-card-premium:hover,
        .testimonial-card-responsive:hover {
          transform: translateY(-6px) rotate(1deg);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </section>
  );
}
