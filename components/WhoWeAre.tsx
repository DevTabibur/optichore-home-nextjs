import { ArrowRight, Check } from 'lucide-react';

export function WhoWeAre() {
  const values = [
    'Innovation-driven solutions',
    'Full-stack creative & technical team',
    'Transparent and client-focused',
    'Delivering measurable business outcomes',
  ];

  return (
    <section className="who-we-are-section w-full lg:py-24 md:py-20 py-16" style={{ backgroundColor: '#FFFFFF' }}>
      {/* RESPONSIVE CONTAINER - Changes padding per breakpoint */}
      <div className="who-we-are-container max-w-[1440px] mx-auto lg:px-12 md:px-8 px-6">
        
        {/* RESPONSIVE GRID - 2 cols on desktop, 1 col on tablet/mobile */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 lg:items-center flex flex-col gap-12">
          
          {/* LEFT COLUMN - Text Content */}
          <div className="text-content-left space-y-6">
            {/* Section Label */}
            <div 
              className="section-label-animated"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                fontWeight: 500,
                color: '#FF0000',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              WHO WE ARE
            </div>

            {/* Main Heading - Responsive font size */}
            <h2 
              className="main-heading-animated leading-tight lg:text-[42px] md:text-[36px] text-[32px]"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                color: '#151561',
                letterSpacing: '-0.01em',
              }}
            >
              We Are Optichore — Your Digital Innovation Partner.
            </h2>

            {/* Paragraph - Responsive font size */}
            <p 
              className="main-paragraph-animated leading-relaxed lg:text-[18px] md:text-[17px] text-[16px]"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                color: '#505050',
                lineHeight: '1.7',
              }}
            >
              Optichore is a digital marketing and technology agency focused on transforming businesses with data-driven strategies, creative design, and full-stack development. Our mission is to empower brands with the tools, systems, and experiences they need to grow in the digital world.
            </p>

            {/* Bullet Values */}
            <div className="values-list space-y-3.5 pt-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="value-item-animated flex items-center gap-3"
                  style={{
                    animationDelay: `${index * 80}ms`,
                  }}
                >
                  <div 
                    className="value-icon flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(21, 21, 97, 0.1)' }}
                  >
                    <Check 
                      className="w-3 h-3" 
                      style={{ color: '#151561', strokeWidth: 3 }}
                    />
                  </div>
                  <span 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '16px',
                      fontWeight: 400,
                      color: '#505050',
                    }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>

            {/* Link Button */}
            <div className="pt-4">
              <a
                href="#about"
                className="learn-more-link-animated inline-flex items-center gap-2"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '17px',
                  fontWeight: 500,
                  color: '#151561',
                }}
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN - Image Block - Responsive */}
          <div className="image-content-right lg:justify-self-end flex justify-center">
            <div 
              className="image-placeholder-animated hover-parallax-subtle lg:w-[560px] lg:h-[480px] md:w-[500px] md:h-[420px] w-full h-[380px]"
              style={{
                borderRadius: '12px',
                backgroundColor: '#FAFAFA',
                border: '1px solid rgba(0, 0, 0, 0.04)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Abstract Creative Workspace Illustration */}
              <div className="absolute inset-0 flex items-center justify-center p-12">
                {/* Grid Pattern Background */}
                <div 
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1666698809123-44e998e93f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwdGVhbSUyMG9mZmljZXxlbnwxfHx8fDE3NjM1MzcyNDF8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />

                {/* Abstract Shapes */}
                <div className="relative w-full h-full">
                  {/* Large Circle */}
                  <div 
                    className="absolute animate-float-slow"
                    style={{
                      width: '200px',
                      height: '200px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, rgba(21, 21, 97, 0.08) 0%, rgba(21, 21, 97, 0.02) 100%)',
                      top: '15%',
                      right: '10%',
                    }}
                  />

                  {/* Red Accent Circle */}
                  <div 
                    className="absolute animate-float-medium"
                    style={{
                      width: '120px',
                      height: '120px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, rgba(255, 0, 0, 0.1) 0%, rgba(255, 0, 0, 0.02) 100%)',
                      bottom: '20%',
                      left: '12%',
                    }}
                  />

                  {/* Geometric Square */}
                  <div 
                    className="absolute animate-float-reverse"
                    style={{
                      width: '100px',
                      height: '100px',
                      borderRadius: '16px',
                      background: 'rgba(21, 21, 97, 0.04)',
                      border: '2px solid rgba(21, 21, 97, 0.12)',
                      top: '45%',
                      left: '25%',
                      transform: 'rotate(12deg)',
                    }}
                  />

                  {/* Dashboard Mockup Rectangle */}
                  <div 
                    className="absolute"
                    style={{
                      width: '280px',
                      height: '180px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      border: '1px solid rgba(21, 21, 97, 0.1)',
                      boxShadow: '0 8px 24px rgba(21, 21, 97, 0.1)',
                      top: '28%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      padding: '16px',
                    }}
                  >
                    {/* Mini Header Dots */}
                    <div className="flex gap-1.5 mb-3">
                      <div className="w-2 h-2 rounded-full bg-red-400" />
                      <div className="w-2 h-2 rounded-full bg-yellow-400" />
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                    </div>

                    {/* Mini Stats Bars */}
                    <div className="space-y-2.5">
                      {[65, 85, 50, 92].map((width, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-12 h-2 bg-gray-200 rounded" />
                          <div 
                            className="h-2 rounded"
                            style={{ 
                              width: `${width}%`,
                              backgroundColor: i % 2 === 0 ? '#151561' : '#FF0000',
                              opacity: 0.7,
                            }}
                          />
                        </div>
                      ))}
                    </div>

                    {/* Mini Badge */}
                    <div 
                      className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full text-[10px] font-medium"
                      style={{
                        backgroundColor: 'rgba(255, 0, 0, 0.1)',
                        color: '#FF0000',
                      }}
                    >
                      +24% Growth
                    </div>
                  </div>

                  {/* Floating Dots */}
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute rounded-full animate-drift-up-slow"
                      style={{
                        width: `${Math.random() * 4 + 3}px`,
                        height: `${Math.random() * 4 + 3}px`,
                        backgroundColor: i % 2 === 0 ? 'rgba(21, 21, 97, 0.15)' : 'rgba(255, 0, 0, 0.15)',
                        top: `${Math.random() * 80 + 10}%`,
                        left: `${Math.random() * 80 + 10}%`,
                        animationDelay: `${Math.random() * 3}s`,
                        animationDuration: `${Math.random() * 5 + 8}s`,
                      }}
                    />
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