import { BarChart3, Sparkles, Rocket } from 'lucide-react';

export function WhyOptichore() {
  const featureBlocks = [
    {
      icon: <BarChart3 className="w-7 h-7" />,
      iconColor: '#151561',
      title: 'Data-Driven Decisions',
      description: 'Analytics-backed strategies that deliver measurable impact.',
      rotation: 1.5,
    },
    {
      icon: <Sparkles className="w-7 h-7" />,
      iconColor: '#FF0000',
      title: 'Creative-First Execution',
      description: 'Premium design and storytelling that inspire customers.',
      rotation: -1.2,
    },
    {
      icon: <Rocket className="w-7 h-7" />,
      iconColor: '#151561',
      title: 'End-to-End Tech & Marketing',
      description: 'From brand identity to full-stack development and marketing.',
      rotation: 1.8,
    },
  ];

  return (
    <section 
      className="why-optichore-premium-section w-full lg:py-32 md:py-24 py-20"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F2F3FF 100%)',
      }}
    >
      {/* RESPONSIVE CONTAINER - Changes padding per breakpoint */}
      <div className="why-optichore-premium-container max-w-[1440px] mx-auto lg:px-12 md:px-8 px-6">
        
        {/* ========================================== */}
        {/* DESKTOP VARIANT ONLY (≥1024px) - LOCKED   */}
        {/* ========================================== */}
        {/* Two-column grid with overlapping cards on left, text on right */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center hidden lg:block">
          
          {/* LEFT SIDE - Premium Floating Feature Blocks (Overlapping) */}
          <div className="feature-blocks-left relative h-[580px] w-full">
            <div className="feature-blocks-stack relative w-full h-full">
              {featureBlocks.map((block, index) => (
                <div
                  key={index}
                  className={`premium-feature-block group absolute ${ 
                    index === 0 ? 'left-0 right-8' : 
                    index === 1 ? 'left-8 right-0' : 
                    'left-0 right-8'
                  }`}
                  style={{
                    top: `${index * 160}px`,
                    animationDelay: `${index * 120}ms`,
                  }}
                >
                  <div
                    className="feature-block-inner p-8 rounded-xl transition-transform duration-300"
                    style={{
                      backgroundColor: '#FFFFFF',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.07)',
                      border: '1px solid rgba(0, 0, 0, 0.04)',
                    }}
                  >
                    {/* Icon */}
                    <div 
                      className="feature-icon-premium mb-5 inline-flex items-center justify-center w-14 h-14 rounded-xl transition-all duration-300"
                      style={{
                        backgroundColor: `${block.iconColor}0D`,
                        color: block.iconColor,
                      }}
                    >
                      {block.icon}
                    </div>

                    {/* Title */}
                    <h3 
                      className="feature-block-title mb-3"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '22px',
                        fontWeight: 600,
                        color: '#151561',
                        lineHeight: '1.3',
                      }}
                    >
                      {block.title}
                    </h3>

                    {/* Description */}
                    <p 
                      className="feature-block-description"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '15px',
                        fontWeight: 400,
                        color: '#505050',
                        lineHeight: '1.6',
                      }}
                    >
                      {block.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - Text Block */}
          <div className="text-block-right space-y-7">
            {/* Section Label */}
            <div 
              className="premium-section-label"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                fontWeight: 500,
                color: '#FF0000',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              WHY OPTICHORE
            </div>

            {/* Main Heading */}
            <h2 
              className="premium-main-heading leading-tight text-[52px]"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                color: '#151561',
                letterSpacing: '-0.02em',
              }}
            >
              Built for Performance. Designed for Growth.
            </h2>

            {/* Paragraph */}
            <p 
              className="premium-paragraph text-[18px]"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                color: '#505050',
                lineHeight: '1.7',
              }}
            >
              Optichore blends strategy, creativity, and technology to deliver measurable business results. Our solutions are built to scale with your goals.
            </p>

            {/* Accent Line */}
            <div 
              className="accent-line-red mt-8"
              style={{
                width: '80px',
                height: '3px',
                backgroundColor: '#FF0000',
                borderRadius: '2px',
              }}
            />
          </div>
        </div>

        {/* ========================================== */}
        {/* TABLET/MOBILE VARIANTS (<1024px)          */}
        {/* ========================================== */}
        {/* Single column: Text first, then stacked cards (NO overlapping) */}
        <div className="lg:hidden flex flex-col gap-12">
          
          {/* TEXT CONTENT - Appears FIRST on tablet/mobile */}
          <div className="text-block-stacked space-y-7">
            {/* Section Label */}
            <div 
              className="premium-section-label"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                fontWeight: 500,
                color: '#FF0000',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              WHY OPTICHORE
            </div>

            {/* Main Heading - Responsive font size */}
            <h2 
              className="premium-main-heading leading-tight md:text-[42px] text-[36px]"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                color: '#151561',
                letterSpacing: '-0.02em',
              }}
            >
              Built for Performance. Designed for Growth.
            </h2>

            {/* Paragraph - Responsive font size */}
            <p 
              className="premium-paragraph md:text-[17px] text-[16px]"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                color: '#505050',
                lineHeight: '1.7',
              }}
            >
              Optichore blends strategy, creativity, and technology to deliver measurable business results. Our solutions are built to scale with your goals.
            </p>

            {/* Accent Line */}
            <div 
              className="accent-line-red mt-8"
              style={{
                width: '80px',
                height: '3px',
                backgroundColor: '#FF0000',
                borderRadius: '2px',
              }}
            />
          </div>

          {/* FEATURE CARDS - Vertically stacked (NO absolute positioning, NO overlapping) */}
          <div className="feature-blocks-stacked flex flex-col md:gap-6 gap-5 w-full">
            {featureBlocks.map((block, index) => (
              <div
                key={index}
                className="premium-feature-block-stacked w-full"
                style={{
                  animationDelay: `${index * 120}ms`,
                }}
              >
                <div
                  className="feature-block-inner p-8 rounded-xl"
                  style={{
                    backgroundColor: '#FFFFFF',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.07)',
                    border: '1px solid rgba(0, 0, 0, 0.04)',
                  }}
                >
                  {/* Icon */}
                  <div 
                    className="feature-icon-premium mb-5 inline-flex items-center justify-center w-14 h-14 rounded-xl"
                    style={{
                      backgroundColor: `${block.iconColor}0D`,
                      color: block.iconColor,
                    }}
                  >
                    {block.icon}
                  </div>

                  {/* Title */}
                  <h3 
                    className="feature-block-title mb-3"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '22px',
                      fontWeight: 600,
                      color: '#151561',
                      lineHeight: '1.3',
                    }}
                  >
                    {block.title}
                  </h3>

                  {/* Description */}
                  <p 
                    className="feature-block-description"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '15px',
                      fontWeight: 400,
                      color: '#505050',
                      lineHeight: '1.6',
                    }}
                  >
                    {block.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}