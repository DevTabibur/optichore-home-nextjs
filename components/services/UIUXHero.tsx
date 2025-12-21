import { ArrowRight, Sparkles, Eye } from 'lucide-react';
import { SafeButton } from '../SafeButton';

export function UIUXHero() {
  return (
    <section 
      className="uiux-hero-section w-full lg:pt-40 lg:pb-32 md:pt-36 md:pb-24 pt-32 pb-20 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFF 100%)',
      }}
    >
      {/* ========================================== */}
      {/* DESKTOP VARIANT (≥1024px) — LOCKED        */}
      {/* ========================================== */}
      <div className="hidden lg:block max-w-[1280px] mx-auto px-12">
        <div className="grid grid-cols-2 gap-20 items-center">
          {/* LEFT COLUMN - Content */}
          <div className="hero-content space-y-8">
            {/* Badge */}
            <div 
              className="service-badge inline-block px-4 py-2 rounded-full"
              style={{
                backgroundColor: 'rgba(21, 21, 97, 0.08)',
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                fontWeight: 600,
                color: '#151561',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              UI/UX DESIGN
            </div>

            {/* Headline */}
            <h1 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '64px',
                fontWeight: 700,
                color: '#151561',
                lineHeight: '1.2',
                letterSpacing: '-0.02em',
                maxWidth: '560px',
              }}
            >
              UI/UX Design That Creates Meaningful User Experiences
            </h1>

            {/* Description */}
            <p 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '20px',
                fontWeight: 400,
                color: '#505050',
                lineHeight: '1.6',
                maxWidth: '520px',
              }}
            >
              We design intuitive interfaces and seamless journeys that elevate engagement, drive conversions, and define your brand's digital identity.
            </p>

            {/* CTA Row */}
            <div className="flex items-center gap-4 pt-4">
              {/* Primary Button */}
              <SafeButton
                to="/contact"
                className="primary-cta"
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
                  transition: 'all 0.3s ease',
                }}
              >
                Start UI/UX Project
                <ArrowRight className="w-5 h-5" />
              </SafeButton>

              {/* Secondary Button */}
              <SafeButton
                to="/contact"
                className="secondary-cta"
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
                  transition: 'all 0.3s ease',
                }}
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </SafeButton>
            </div>
          </div>

          {/* RIGHT COLUMN - Visual */}
          <div className="hero-visual relative">
            <div 
              className="mockup-container relative"
              style={{
                animation: 'float-gentle 6s ease-in-out infinite',
              }}
            >
              {/* Main Card - UI Mockup */}
              <div 
                className="ui-mockup"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.12)',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  padding: '32px',
                  overflow: 'hidden',
                }}
              >
                {/* Wireframe Content */}
                <div className="space-y-6">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                    <div style={{ width: '100px', height: '28px', backgroundColor: '#151561', borderRadius: '6px' }} />
                    <div className="flex gap-2">
                      <div style={{ width: '32px', height: '32px', backgroundColor: '#F5F5F7', borderRadius: '50%' }} />
                      <div style={{ width: '32px', height: '32px', backgroundColor: '#F5F5F7', borderRadius: '50%' }} />
                    </div>
                  </div>

                  {/* Hero Section */}
                  <div className="space-y-4 pt-4">
                    <div style={{ width: '70%', height: '24px', backgroundColor: '#151561', borderRadius: '6px' }} />
                    <div style={{ width: '85%', height: '16px', backgroundColor: '#E5E5EA', borderRadius: '4px' }} />
                    <div style={{ width: '60%', height: '16px', backgroundColor: '#E5E5EA', borderRadius: '4px' }} />
                    <div style={{ width: '140px', height: '40px', backgroundColor: '#FF0000', borderRadius: '20px', marginTop: '12px' }} />
                  </div>

                  {/* Feature Cards */}
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div 
                        key={i} 
                        style={{ 
                          height: '100px', 
                          backgroundColor: '#F5F5F7', 
                          borderRadius: '12px',
                          border: '1px solid rgba(0, 0, 0, 0.05)',
                        }} 
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Icon - Top Right (Sparkles/Magic) */}
              <div 
                className="floating-icon-1 absolute"
                style={{
                  top: '-20px',
                  right: '40px',
                  width: '64px',
                  height: '64px',
                  borderRadius: '16px',
                  backgroundColor: '#FF0000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 12px 32px rgba(255, 0, 0, 0.3)',
                  animation: 'float-icon-1 4s ease-in-out infinite',
                  zIndex: 10,
                }}
              >
                <Sparkles className="w-7 h-7" style={{ color: '#FFFFFF' }} />
              </div>

              {/* Floating Icon - Mid Left (Eye) */}
              <div 
                className="floating-icon-2 absolute"
                style={{
                  bottom: '60px',
                  left: '-30px',
                  width: '56px',
                  height: '56px',
                  borderRadius: '14px',
                  backgroundColor: '#151561',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 12px 32px rgba(21, 21, 97, 0.25)',
                  animation: 'float-icon-2 5s ease-in-out infinite',
                  zIndex: 10,
                }}
              >
                <Eye className="w-6 h-6" style={{ color: '#FFFFFF' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* TABLET/MOBILE VARIANTS (<1024px)          */}
      {/* ========================================== */}
      <div className="lg:hidden max-w-[1440px] mx-auto md:px-8 px-6">
        {/* TABLET: Two-column, MOBILE: Single-column */}
        <div className="md:grid md:grid-cols-2 md:gap-12 md:items-center flex flex-col gap-0">
          {/* LEFT COLUMN - Content */}
          <div className="hero-content-responsive md:space-y-7 space-y-6 text-center md:text-left">
            {/* Badge */}
            <div 
              className="service-badge inline-block px-4 py-2 rounded-full"
              style={{
                backgroundColor: 'rgba(21, 21, 97, 0.08)',
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                fontWeight: 600,
                color: '#151561',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              UI/UX DESIGN
            </div>

            {/* Headline */}
            <h1 
              className="md:text-[48px] text-[36px]"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                color: '#151561',
                lineHeight: '1.2',
                letterSpacing: '-0.02em',
                maxWidth: '320px',
                margin: '0 auto',
              }}
            >
              UI/UX Design That Creates Meaningful User Experiences
            </h1>

            {/* Description */}
            <p 
              className="md:text-[18px] text-[17px]"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                color: '#505050',
                lineHeight: '1.6',
                maxWidth: '300px',
                margin: '0 auto',
              }}
            >
              We design intuitive interfaces and seamless journeys that elevate engagement, drive conversions, and define your brand's digital identity.
            </p>

            {/* CTA Buttons - Stack on mobile */}
            <div className="md:flex md:items-center md:gap-4 md:pt-4 md:justify-start flex flex-col gap-3 pt-6 items-center">
              {/* Primary Button */}
              <SafeButton
                to="/contact"
                className="primary-cta-responsive w-full md:w-auto"
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
                  transition: 'all 0.3s ease',
                }}
              >
                Start UI/UX Project
                <ArrowRight className="w-5 h-5" />
              </SafeButton>

              {/* Secondary Button */}
              <SafeButton
                to="/contact"
                className="secondary-cta-responsive w-full md:w-auto"
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
                  transition: 'all 0.3s ease',
                }}
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </SafeButton>
            </div>
          </div>

          {/* RIGHT COLUMN - Visual */}
          <div className="hero-visual-responsive relative md:mt-0 mt-12">
            <div 
              className="mockup-container relative md:mx-0 mx-auto md:max-w-none max-w-[400px]"
              style={{
                animation: 'float-gentle 6s ease-in-out infinite',
                transform: 'scale(0.85)',
              }}
            >
              {/* Main Card - UI Mockup */}
              <div 
                className="ui-mockup"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.12)',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  padding: '32px',
                  overflow: 'hidden',
                }}
              >
                {/* Wireframe Content */}
                <div className="space-y-6">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                    <div style={{ width: '100px', height: '28px', backgroundColor: '#151561', borderRadius: '6px' }} />
                    <div className="flex gap-2">
                      <div style={{ width: '32px', height: '32px', backgroundColor: '#F5F5F7', borderRadius: '50%' }} />
                      <div style={{ width: '32px', height: '32px', backgroundColor: '#F5F5F7', borderRadius: '50%' }} />
                    </div>
                  </div>

                  {/* Hero Section */}
                  <div className="space-y-4 pt-4">
                    <div style={{ width: '70%', height: '24px', backgroundColor: '#151561', borderRadius: '6px' }} />
                    <div style={{ width: '85%', height: '16px', backgroundColor: '#E5E5EA', borderRadius: '4px' }} />
                    <div style={{ width: '60%', height: '16px', backgroundColor: '#E5E5EA', borderRadius: '4px' }} />
                    <div style={{ width: '140px', height: '40px', backgroundColor: '#FF0000', borderRadius: '20px', marginTop: '12px' }} />
                  </div>

                  {/* Feature Cards */}
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div 
                        key={i} 
                        style={{ 
                          height: '100px', 
                          backgroundColor: '#F5F5F7', 
                          borderRadius: '12px',
                          border: '1px solid rgba(0, 0, 0, 0.05)',
                        }} 
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Icons - Repositioned for mobile */}
              <div 
                className="floating-icon-1 absolute md:block block"
                style={{
                  top: '-15px',
                  right: '20px',
                  width: '56px',
                  height: '56px',
                  borderRadius: '14px',
                  backgroundColor: '#FF0000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 12px 32px rgba(255, 0, 0, 0.3)',
                  animation: 'float-icon-1 4s ease-in-out infinite',
                  zIndex: 10,
                }}
              >
                <Sparkles className="w-6 h-6" style={{ color: '#FFFFFF' }} />
              </div>

              <div 
                className="floating-icon-2 absolute md:block block"
                style={{
                  bottom: '50px',
                  left: '-20px',
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  backgroundColor: '#151561',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 12px 32px rgba(21, 21, 97, 0.25)',
                  animation: 'float-icon-2 5s ease-in-out infinite',
                  zIndex: 10,
                }}
              >
                <Eye className="w-5 h-5" style={{ color: '#FFFFFF' }} />
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

        @keyframes float-icon-1 {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
        }

        @keyframes float-icon-2 {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(-5deg);
          }
        }

        .primary-cta:hover,
        .primary-cta-responsive:hover {
          background-color: #CC0000 !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(255, 0, 0, 0.35) !important;
        }

        .secondary-cta:hover,
        .secondary-cta-responsive:hover {
          background-color: rgba(21, 21, 97, 0.05) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}
