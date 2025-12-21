import { ArrowRight, Sparkles } from 'lucide-react';
import { SafeButton } from '../SafeButton';

export function WebDesignHero() {
  return (
    <section 
      className="web-design-hero-section w-full lg:pt-40 lg:pb-32 md:pt-36 md:pb-24 pt-32 pb-20 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFF 100%)',
      }}
    >
      {/* ========================================== */}
      {/* DESKTOP VARIANT (≥1024px) — LOCKED        */}
      {/* ========================================== */}
      <div className="hidden lg:block max-w-[1440px] mx-auto px-12">
        <div className="grid grid-cols-2 gap-16 items-center">
          {/* LEFT COLUMN - Content */}
          <div className="hero-content-left space-y-8">
            {/* Label Tag */}
            <div 
              className="facebook-section-label inline-block px-4 py-2 rounded-full"
              style={{
                backgroundColor: 'rgba(255, 0, 0, 0.1)',
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                fontWeight: 600,
                color: '#FF0000',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                WEB DESIGN
              </div>
            </div>

            {/* Main Heading */}
            <h1 
              className="facebook-main-heading"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '64px',
                fontWeight: 700,
                color: '#151561',
                lineHeight: '1.1',
                letterSpacing: '-0.02em',
              }}
            >
              Web Design
            </h1>

            {/* Subtext */}
            <p 
              className="facebook-subparagraph"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '20px',
                fontWeight: 400,
                color: '#505050',
                lineHeight: '1.7',
                maxWidth: '540px',
              }}
            >
              Eye-catching, conversion-driven web design crafted for modern brands.
            </p>

            {/* CTA Buttons Row */}
            <div className="cta-buttons-row flex items-center gap-4 pt-4">
              {/* Primary CTA */}
              <SafeButton
                to="/contact"
                className="facebook-primary-cta"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '17px',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  backgroundColor: '#FF0000',
                  padding: '16px 36px',
                  borderRadius: '50px',
                  border: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  boxShadow: '0 4px 16px rgba(255, 0, 0, 0.25)',
                }}
              >
                Start Project
                <ArrowRight className="w-5 h-5" />
              </SafeButton>

              {/* Secondary CTA */}
              <SafeButton
                to="/contact"
                className="facebook-secondary-cta"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '17px',
                  fontWeight: 600,
                  color: '#151561',
                  backgroundColor: 'transparent',
                  padding: '16px 36px',
                  borderRadius: '50px',
                  border: '2px solid #151561',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </SafeButton>
            </div>
          </div>

          {/* RIGHT COLUMN - Website Mockup Illustration */}
          <div className="hero-visual-right relative">
            <div 
              className="mockup-container relative"
              style={{
                animation: 'float-gentle 6s ease-in-out infinite',
              }}
            >
              {/* Browser Window Mockup */}
              <div 
                className="browser-window"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  overflow: 'hidden',
                }}
              >
                {/* Browser Header */}
                <div 
                  className="browser-header flex items-center gap-2 px-4 py-3"
                  style={{
                    backgroundColor: '#F5F5F7',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
                  }}
                >
                  <div className="flex gap-2">
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FF5F57' }} />
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FEBC2E' }} />
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#28C840' }} />
                  </div>
                  <div 
                    className="url-bar flex-1 ml-4 px-3 py-1.5 rounded-md"
                    style={{
                      backgroundColor: '#FFFFFF',
                      fontSize: '12px',
                      color: '#999',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    optichore.com
                  </div>
                </div>

                {/* Website Content Preview */}
                <div className="website-preview p-8 space-y-6">
                  {/* Header Bar */}
                  <div className="flex items-center justify-between">
                    <div style={{ width: '120px', height: '32px', backgroundColor: '#151561', borderRadius: '6px' }} />
                    <div className="flex gap-3">
                      <div style={{ width: '60px', height: '24px', backgroundColor: '#E5E5EA', borderRadius: '4px' }} />
                      <div style={{ width: '60px', height: '24px', backgroundColor: '#E5E5EA', borderRadius: '4px' }} />
                      <div style={{ width: '80px', height: '24px', backgroundColor: '#FF0000', borderRadius: '20px' }} />
                    </div>
                  </div>

                  {/* Hero Section */}
                  <div className="space-y-3 pt-8">
                    <div style={{ width: '80%', height: '20px', backgroundColor: '#151561', borderRadius: '4px' }} />
                    <div style={{ width: '60%', height: '20px', backgroundColor: '#E5E5EA', borderRadius: '4px' }} />
                    <div style={{ width: '40%', height: '16px', backgroundColor: '#E5E5EA', borderRadius: '4px', marginTop: '16px' }} />
                  </div>

                  {/* Cards Grid */}
                  <div className="grid grid-cols-3 gap-3 pt-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} style={{ height: '80px', backgroundColor: '#F5F5F7', borderRadius: '8px' }} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Card */}
              <div 
                className="floating-card absolute"
                style={{
                  top: '50%',
                  right: '-40px',
                  backgroundColor: '#FFFFFF',
                  padding: '20px',
                  borderRadius: '12px',
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.12)',
                  animation: 'float-card 4s ease-in-out infinite',
                  zIndex: 10,
                }}
              >
                <div className="flex items-center gap-3">
                  <div 
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      backgroundColor: '#FF0000',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '20px',
                      fontWeight: 700,
                    }}
                  >
                    98
                  </div>
                  <div>
                    <div 
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '13px',
                        fontWeight: 600,
                        color: '#151561',
                      }}
                    >
                      Design Score
                    </div>
                    <div 
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '11px',
                        fontWeight: 400,
                        color: '#999',
                      }}
                    >
                      Premium Quality
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* TABLET/MOBILE VARIANTS (<1024px)          */}
      {/* ========================================== */}
      <div className="lg:hidden max-w-[1440px] mx-auto md:px-8 px-6">
        {/* TABLET: Two-column layout, MOBILE: Single-column layout */}
        <div className="md:grid md:grid-cols-2 md:gap-12 md:items-center flex flex-col gap-0">
          {/* LEFT COLUMN - Content */}
          <div className="hero-content-left-responsive md:space-y-7 space-y-6">
            {/* Label Tag */}
            <div 
              className="facebook-section-label inline-block px-4 py-2 rounded-full"
              style={{
                backgroundColor: 'rgba(255, 0, 0, 0.1)',
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                fontWeight: 600,
                color: '#FF0000',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                WEB DESIGN
              </div>
            </div>

            {/* Main Heading */}
            <h1 
              className="facebook-main-heading-responsive md:text-[54px] text-[42px]"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                color: '#151561',
                lineHeight: '1.1',
                letterSpacing: '-0.02em',
              }}
            >
              Web Design
            </h1>

            {/* Subtext */}
            <p 
              className="facebook-subparagraph-responsive md:text-[19px] text-[18px]"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                color: '#505050',
                lineHeight: '1.7',
                maxWidth: '540px',
              }}
            >
              Eye-catching, conversion-driven web design crafted for modern brands.
            </p>

            {/* CTA Buttons - Tablet: Horizontal, Mobile: Vertical */}
            <div className="cta-buttons-row-responsive md:flex md:items-center md:gap-4 md:pt-4 md:flex-row flex flex-col gap-4 pt-6">
              {/* Primary CTA */}
              <SafeButton
                to="/contact"
                className="facebook-primary-cta-responsive w-full md:w-auto"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '17px',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  backgroundColor: '#FF0000',
                  padding: '16px 36px',
                  borderRadius: '50px',
                  border: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  boxShadow: '0 4px 16px rgba(255, 0, 0, 0.25)',
                }}
              >
                Start Project
                <ArrowRight className="w-5 h-5" />
              </SafeButton>

              {/* Secondary CTA */}
              <SafeButton
                to="/contact"
                className="facebook-secondary-cta-responsive w-full md:w-auto"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '17px',
                  fontWeight: 600,
                  color: '#151561',
                  backgroundColor: 'transparent',
                  padding: '16px 36px',
                  borderRadius: '50px',
                  border: '2px solid #151561',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                }}
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </SafeButton>
            </div>
          </div>

          {/* RIGHT COLUMN - Website Mockup Illustration */}
          <div className="hero-visual-right-responsive relative md:mt-0 mt-12">
            <div 
              className="mockup-container relative md:mx-0 mx-auto md:max-w-none max-w-[480px]"
              style={{
                animation: 'float-gentle 6s ease-in-out infinite',
              }}
            >
              {/* Browser Window Mockup */}
              <div 
                className="browser-window"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  overflow: 'hidden',
                }}
              >
                {/* Browser Header */}
                <div 
                  className="browser-header flex items-center gap-2 px-4 py-3"
                  style={{
                    backgroundColor: '#F5F5F7',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
                  }}
                >
                  <div className="flex gap-2">
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FF5F57' }} />
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FEBC2E' }} />
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#28C840' }} />
                  </div>
                  <div 
                    className="url-bar flex-1 ml-4 px-3 py-1.5 rounded-md"
                    style={{
                      backgroundColor: '#FFFFFF',
                      fontSize: '12px',
                      color: '#999',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    optichore.com
                  </div>
                </div>

                {/* Website Content Preview */}
                <div className="website-preview p-8 space-y-6">
                  {/* Header Bar */}
                  <div className="flex items-center justify-between">
                    <div style={{ width: '120px', height: '32px', backgroundColor: '#151561', borderRadius: '6px' }} />
                    <div className="flex gap-3">
                      <div style={{ width: '60px', height: '24px', backgroundColor: '#E5E5EA', borderRadius: '4px' }} />
                      <div style={{ width: '60px', height: '24px', backgroundColor: '#E5E5EA', borderRadius: '4px' }} />
                      <div style={{ width: '80px', height: '24px', backgroundColor: '#FF0000', borderRadius: '20px' }} />
                    </div>
                  </div>

                  {/* Hero Section */}
                  <div className="space-y-3 pt-8">
                    <div style={{ width: '80%', height: '20px', backgroundColor: '#151561', borderRadius: '4px' }} />
                    <div style={{ width: '60%', height: '20px', backgroundColor: '#E5E5EA', borderRadius: '4px' }} />
                    <div style={{ width: '40%', height: '16px', backgroundColor: '#E5E5EA', borderRadius: '4px', marginTop: '16px' }} />
                  </div>

                  {/* Cards Grid */}
                  <div className="grid grid-cols-3 gap-3 pt-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} style={{ height: '80px', backgroundColor: '#F5F5F7', borderRadius: '8px' }} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Card - Repositioned for mobile */}
              <div 
                className="floating-card absolute md:block block"
                style={{
                  top: '50%',
                  right: '-20px',
                  backgroundColor: '#FFFFFF',
                  padding: '20px',
                  borderRadius: '12px',
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.12)',
                  animation: 'float-card 4s ease-in-out infinite',
                  zIndex: 10,
                }}
              >
                <div className="flex items-center gap-3">
                  <div 
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      backgroundColor: '#FF0000',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '20px',
                      fontWeight: 700,
                    }}
                  >
                    98
                  </div>
                  <div>
                    <div 
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '13px',
                        fontWeight: 600,
                        color: '#151561',
                      }}
                    >
                      Design Score
                    </div>
                    <div 
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '11px',
                        fontWeight: 400,
                        color: '#999',
                      }}
                    >
                      Premium Quality
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float-gentle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes float-card {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(-2deg);
          }
        }
      `}</style>
    </section>
  );
}
