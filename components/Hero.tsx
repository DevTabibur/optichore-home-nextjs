import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  // Sample partner/client logos (placeholder)
  const partners = [
    { name: 'Partner 1', width: 100 },
    { name: 'Partner 2', width: 120 },
    { name: 'Partner 3', width: 90 },
    { name: 'Partner 4', width: 110 },
  ];

  return (
    <section className="hero-section relative w-full overflow-hidden">
      {/* Background Gradient - Very Subtle */}
      <div 
        className="hero-background absolute inset-0 -z-10"
        style={{
          background: 'linear-gradient(135deg, rgba(21, 21, 97, 0.02) 0%, rgba(255, 255, 255, 1) 100%)',
        }}
      />
      
      {/* RESPONSIVE CONTAINER - Changes padding per breakpoint */}
      <div className="hero-container max-w-[1440px] mx-auto lg:px-12 lg:py-28 md:px-8 md:py-20 px-6 py-16">
        
        {/* RESPONSIVE GRID - 2 cols on desktop, 1 col on tablet/mobile */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center flex flex-col gap-12">
          
          {/* Left Column - Content */}
          <div className="hero-content-left space-y-8">
            {/* Main Headline - Responsive font size */}
            <h1 
              className="hero-headline animate-slide-in-left leading-tight lg:text-[58px] md:text-[48px] text-[38px]"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                color: '#151561',
                letterSpacing: '-0.02em',
              }}
            >
              Transforming Businesses with Data-Driven Marketing & Technology.
            </h1>

            {/* Subheadline - Responsive font size */}
            <p 
              className="hero-subheadline animate-fade-in-delayed leading-relaxed lg:text-[19px] md:text-[18px] text-[17px]"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                color: '#505050',
                lineHeight: '1.7',
              }}
            >
              Optichore delivers high-impact digital marketing, creative design, and full-scale IT development to accelerate brand growth.
            </p>

            {/* CTA Buttons - Responsive layout: horizontal on desktop, stacked on mobile */}
            <div className="hero-cta-group lg:flex lg:items-center lg:gap-4 lg:pt-4 flex flex-col gap-4 pt-4 animate-fade-in-delayed-more sm:flex-row">
              {/* Primary CTA - Full width on mobile */}
              <button 
                className="hero-cta-primary lg:h-[42px] lg:px-[31px] lg:text-[16px] lg:w-auto h-[52px] px-[31px] text-[17px] w-full font-semibold text-white rounded-[50px] whitespace-nowrap"
                style={{ 
                  backgroundColor: '#FF0000',
                  fontFamily: 'Inter, sans-serif',
                  boxShadow: '0 4px 12px rgba(255, 0, 0, 0.2)',
                }}
              >
                Get Free Consultation
              </button>

              {/* Secondary CTA - Full width on mobile */}
              <a
                href="#services"
                className="hero-cta-secondary lg:h-[42px] lg:px-[28px] lg:text-[16px] lg:w-auto h-[52px] px-[28px] text-[17px] w-full font-semibold rounded-[50px] whitespace-nowrap inline-flex items-center justify-center gap-2"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  color: '#151561',
                  border: '1.5px solid #151561',
                  backgroundColor: '#FFFFFF',
                }}
              >
                View Our Services
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column - Hero Visual - Responsive height */}
          <div className="hero-visual-right relative">
            <div className="hero-visual-wrapper relative lg:h-[600px] md:h-[500px] h-[450px]">
              {/* Animated Background Elements */}
              <div className="floating-shapes-layer absolute inset-0">
                {/* Large Circle - Floating */}
                <div 
                  className="shape-circle-large absolute animate-float-slow"
                  style={{
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(21, 21, 97, 0.08) 0%, rgba(21, 21, 97, 0.02) 100%)',
                    top: '8%',
                    right: '2%',
                    filter: 'blur(2px)',
                  }}
                />

                {/* Medium Circle - Floating */}
                <div 
                  className="shape-circle-medium absolute animate-float-medium"
                  style={{
                    width: '200px',
                    height: '200px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(255, 0, 0, 0.06) 0%, rgba(255, 0, 0, 0.02) 100%)',
                    bottom: '18%',
                    left: '8%',
                    filter: 'blur(1.5px)',
                  }}
                />

                {/* Accent Glow Circle */}
                <div 
                  className="shape-glow-accent absolute animate-pulse-glow-slow"
                  style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(255, 0, 0, 0.12) 0%, rgba(255, 0, 0, 0) 70%)',
                    top: '45%',
                    right: '22%',
                  }}
                />

                {/* Geometric Square */}
                <div 
                  className="shape-square-geo absolute animate-float-reverse"
                  style={{
                    width: '140px',
                    height: '140px',
                    borderRadius: '20px',
                    background: 'rgba(21, 21, 97, 0.04)',
                    border: '2px solid rgba(21, 21, 97, 0.12)',
                    top: '28%',
                    left: '15%',
                    transform: 'rotate(15deg)',
                  }}
                />

                {/* Floating Particles */}
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className="particle-dot absolute animate-drift-up-slow"
                    style={{
                      width: `${Math.random() * 6 + 4}px`,
                      height: `${Math.random() * 6 + 4}px`,
                      borderRadius: '50%',
                      backgroundColor: i % 2 === 0 ? 'rgba(21, 21, 97, 0.2)' : 'rgba(255, 0, 0, 0.18)',
                      top: `${Math.random() * 70 + 15}%`,
                      left: `${Math.random() * 70 + 15}%`,
                      animationDelay: `${Math.random() * 4}s`,
                      animationDuration: `${Math.random() * 6 + 10}s`,
                    }}
                  />
                ))}
              </div>

              {/* Main Dashboard Visual */}
              <div 
                className="dashboard-visual relative z-10 rounded-2xl p-8 backdrop-blur-sm hover-parallax-tilt"
                style={{
                  background: 'rgba(255, 255, 255, 0.85)',
                  border: '1px solid rgba(21, 21, 97, 0.1)',
                  boxShadow: '0 24px 64px rgba(21, 21, 97, 0.1)',
                }}
              >
                {/* Visual Header */}
                <div className="visual-header flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>

                {/* Analytics Metrics */}
                <div className="analytics-metrics space-y-5">
                  {[
                    { label: 'Marketing ROI', value: 85, color: '#FF0000' },
                    { label: 'Web Traffic', value: 92, color: '#151561' },
                    { label: 'Conversion Rate', value: 78, color: '#FF0000' },
                    { label: 'Client Satisfaction', value: 96, color: '#151561' },
                  ].map((metric, index) => (
                    <div key={index} className="metric-bar-row space-y-2">
                      <div className="flex justify-between items-center">
                        <span 
                          className="text-[13px] font-medium"
                          style={{ fontFamily: 'Inter, sans-serif', color: '#505050' }}
                        >
                          {metric.label}
                        </span>
                        <span 
                          className="text-[14px] font-semibold"
                          style={{ fontFamily: 'Inter, sans-serif', color: metric.color }}
                        >
                          {metric.value}%
                        </span>
                      </div>
                      <div 
                        className="progress-bar-track rounded-full overflow-hidden"
                        style={{ height: '8px', backgroundColor: 'rgba(0, 0, 0, 0.06)' }}
                      >
                        <div 
                          className="progress-bar-fill-animated h-full rounded-full"
                          style={{ 
                            width: `${metric.value}%`,
                            backgroundColor: metric.color,
                            animationDelay: `${index * 0.15}s`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Stats Cards Grid */}
                <div className="stats-cards-grid grid grid-cols-2 gap-4 mt-8">
                  {[
                    { value: '500+', label: 'Projects Delivered' },
                    { value: '98%', label: 'Success Rate' },
                  ].map((stat, index) => (
                    <div 
                      key={index}
                      className="stat-card-item p-5 rounded-lg"
                      style={{ backgroundColor: 'rgba(21, 21, 97, 0.04)' }}
                    >
                      <div 
                        className="text-[26px] font-bold"
                        style={{ fontFamily: 'Inter, sans-serif', color: '#FF0000' }}
                      >
                        {stat.value}
                      </div>
                      <div 
                        className="text-[12px] mt-1"
                        style={{ fontFamily: 'Inter, sans-serif', color: '#888888' }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}