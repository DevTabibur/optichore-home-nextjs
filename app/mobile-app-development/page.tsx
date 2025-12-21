"use client"
import { useState, useEffect } from 'react';
import { ArrowRight, Phone, Smartphone, Zap, Cloud, CreditCard, TrendingUp, Palette, Code2, Layers, Database, TestTube, Rocket, Wrench, FileText, Users, MessageCircle, Grid3x3, Settings, Lock } from 'lucide-react';


export default function MobileAppDevelopmentPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const capabilityTiles = [
    { icon: Smartphone, title: 'iOS Apps', gradient: 'linear-gradient(135deg, #151561 0%, #3434A0 100%)' },
    { icon: Smartphone, title: 'Android Apps', gradient: 'linear-gradient(135deg, #FF0000 0%, #FF3333 100%)' },
    { icon: Layers, title: 'Cross-Platform Apps', gradient: 'linear-gradient(135deg, #151561 0%, #3434A0 100%)' },
    { icon: Database, title: 'App Backend + Admin Dashboard', gradient: 'linear-gradient(135deg, #FF0000 0%, #FF3333 100%)' },
    { icon: CreditCard, title: 'API & Payment Integrations', gradient: 'linear-gradient(135deg, #151561 0%, #3434A0 100%)' },
    { icon: TrendingUp, title: 'App Optimization', gradient: 'linear-gradient(135deg, #FF0000 0%, #FF3333 100%)' }
  ];

  const developmentCapabilities = [
    {
      icon: Palette,
      title: 'Mobile UI/UX Design',
      description: 'Beautiful, intuitive interfaces designed specifically for mobile interactions and gestures.'
    },
    {
      icon: Code2,
      title: 'Native iOS/Android Development',
      description: 'High-performance native apps built with Swift/Kotlin for optimal platform-specific experiences.'
    },
    {
      icon: Layers,
      title: 'Cross-Platform (Flutter/React Native)',
      description: 'Cost-effective cross-platform solutions with shared codebase and native-like performance.'
    },
    {
      icon: Database,
      title: 'API/Backend Development',
      description: 'Scalable backend infrastructure, RESTful APIs, and real-time data synchronization.'
    },
    {
      icon: TestTube,
      title: 'QA & Performance Testing',
      description: 'Comprehensive testing across devices, OS versions, and network conditions for flawless experiences.'
    },
    {
      icon: Rocket,
      title: 'Deployment & App Store Management',
      description: 'End-to-end launch support, App Store/Play Store optimization, and ongoing updates.'
    }
  ];

  const processSteps = [
    { icon: Users, label: 'Research & Requirements', description: 'Understanding user needs' },
    { icon: Layers, label: 'UX Flow & Wireframes', description: 'Mapping user journeys' },
    { icon: Palette, label: 'UI Design', description: 'Crafting visual interfaces' },
    { icon: Code2, label: 'App Development', description: 'Building the application' },
    { icon: TestTube, label: 'QA & Testing', description: 'Ensuring quality' },
    { icon: Rocket, label: 'Launch', description: 'App store deployment' },
    { icon: Wrench, label: 'Maintenance', description: 'Updates & support' }
  ];

  return (
    <div className="mobile-app-development-page" style={{ backgroundColor: '#FFFFFF' }}>

      {/* 🌟 HERO SECTION */}
      <section 
        className="mobile-hero-section relative overflow-hidden lg:pt-[140px] lg:pb-[120px] md:pt-24 md:pb-20 pt-20 pb-16"
        style={{
          background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFF 100%)',
        }}
      >
        {/* Abstract Background */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 20% 30%, rgba(21, 21, 97, 0.03) 0%, transparent 50%),
                         radial-gradient(circle at 80% 70%, rgba(255, 0, 0, 0.02) 0%, transparent 50%)`,
            opacity: 0.8,
          }}
        />

        <div className="max-w-[1440px] mx-auto lg:px-12 md:px-8 px-4 relative z-10">
          {/* DESKTOP: Two-Column Layout (≥1280px) — LOCKED */}
          <div className="hidden lg:grid grid-cols-2 gap-20 items-center">
            {/* Left — Content */}
            <div className="hero-content-left animate-fade-in-left">
              <h1 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '64px',
                  fontWeight: 700,
                  color: '#151561',
                  lineHeight: '1.15',
                  letterSpacing: '-0.02em',
                  marginBottom: '28px',
                }}
              >
                Mobile App Development for High-Performance iOS & Android Experiences
              </h1>

              <p 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '20px',
                  fontWeight: 400,
                  color: '#505050',
                  lineHeight: '1.7',
                  marginBottom: '44px',
                  maxWidth: '580px',
                }}
              >
                We design and develop fast, intuitive, and scalable mobile applications built with modern technologies and human-centered design.
              </p>

              <div className="flex items-center gap-5">
                <button
                  className="cta-primary-btn"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '17px',
                    fontWeight: 600,
                    color: '#FFFFFF',
                    backgroundColor: '#FF0000',
                    padding: '18px 40px',
                    borderRadius: '50px',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 8px 24px rgba(255, 0, 0, 0.25)',
                    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  Start App Project
                </button>

                <button
                  className="cta-secondary-btn"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '17px',
                    fontWeight: 600,
                    color: '#151561',
                    backgroundColor: 'transparent',
                    padding: '18px 40px',
                    borderRadius: '50px',
                    border: '2px solid #151561',
                    cursor: 'pointer',
                    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  Schedule Consultation
                </button>
              </div>
            </div>

            {/* Right — Mobile Screens Visual */}
            <div 
              className="hero-visual-right relative animate-fade-in-right"
              style={{
                transform: `translateY(${scrollY * 0.1}px)`,
                transition: 'transform 0.1s ease-out',
              }}
            >
              <div className="relative" style={{ height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {/* Screen 1 - Left */}
                <div 
                  className="floating-screen"
                  style={{
                    position: 'absolute',
                    left: '5%',
                    top: '15%',
                    width: '220px',
                    height: '450px',
                    background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)',
                    borderRadius: '32px',
                    boxShadow: '0 25px 60px rgba(21, 21, 97, 0.2)',
                    border: '8px solid #151561',
                    padding: '16px',
                    animation: 'float 4s ease-in-out infinite',
                    zIndex: 2,
                  }}
                >
                  <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {/* Notch */}
                    <div style={{ width: '40%', height: '24px', background: '#151561', borderRadius: '0 0 12px 12px', margin: '0 auto' }} />
                    
                    {/* Content */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ height: '60px', background: 'linear-gradient(135deg, #151561 0%, #3434A0 100%)', borderRadius: '16px' }} />
                      <div style={{ height: '80px', background: 'rgba(21, 21, 97, 0.08)', borderRadius: '14px' }} />
                      <div style={{ height: '80px', background: 'rgba(21, 21, 97, 0.08)', borderRadius: '14px' }} />
                      <div style={{ flex: 1, background: 'rgba(21, 21, 97, 0.05)', borderRadius: '14px' }} />
                    </div>
                  </div>
                </div>

                {/* Screen 2 - Center (Main) */}
                <div 
                  className="floating-screen"
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '240px',
                    height: '490px',
                    background: 'linear-gradient(135deg, #FFFFFF 0%, #F0F4FF 100%)',
                    borderRadius: '36px',
                    boxShadow: '0 35px 80px rgba(255, 0, 0, 0.25)',
                    border: '8px solid #FF0000',
                    padding: '18px',
                    animation: 'float 4s ease-in-out infinite 1s',
                    zIndex: 3,
                  }}
                >
                  <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    {/* Notch */}
                    <div style={{ width: '45%', height: '26px', background: '#FF0000', borderRadius: '0 0 13px 13px', margin: '0 auto' }} />
                    
                    {/* Header */}
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center', paddingBottom: '10px', borderBottom: '1px solid rgba(0, 0, 0, 0.06)' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #FF0000 0%, #FF3333 100%)' }} />
                      <div style={{ flex: 1 }}>
                        <div style={{ width: '70%', height: '10px', background: 'rgba(21, 21, 97, 0.4)', borderRadius: '4px', marginBottom: '6px' }} />
                        <div style={{ width: '50%', height: '8px', background: 'rgba(21, 21, 97, 0.2)', borderRadius: '3px' }} />
                      </div>
                    </div>

                    {/* Content Cards */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <div style={{ height: '100px', background: 'linear-gradient(135deg, #FF0000 0%, #FF3333 100%)', borderRadius: '18px', padding: '14px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div style={{ width: '30px', height: '30px', background: 'rgba(255, 255, 255, 0.3)', borderRadius: '8px' }} />
                        <div style={{ width: '60%', height: '10px', background: 'rgba(255, 255, 255, 0.5)', borderRadius: '4px' }} />
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                        <div style={{ height: '70px', background: 'rgba(21, 21, 97, 0.06)', borderRadius: '14px' }} />
                        <div style={{ height: '70px', background: 'rgba(21, 21, 97, 0.06)', borderRadius: '14px' }} />
                      </div>

                      <div style={{ height: '80px', background: 'rgba(21, 21, 97, 0.04)', borderRadius: '16px' }} />
                    </div>
                  </div>
                </div>

                {/* Screen 3 - Right */}
                <div 
                  className="floating-screen"
                  style={{
                    position: 'absolute',
                    right: '5%',
                    top: '20%',
                    width: '220px',
                    height: '450px',
                    background: 'linear-gradient(135deg, #FFFFFF 0%, #FFF5F5 100%)',
                    borderRadius: '32px',
                    boxShadow: '0 25px 60px rgba(21, 21, 97, 0.2)',
                    border: '8px solid #151561',
                    padding: '16px',
                    animation: 'float 4s ease-in-out infinite 2s',
                    zIndex: 1,
                  }}
                >
                  <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {/* Notch */}
                    <div style={{ width: '40%', height: '24px', background: '#151561', borderRadius: '0 0 12px 12px', margin: '0 auto' }} />
                    
                    {/* List Items */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {[1, 2, 3, 4, 5].map((item) => (
                        <div key={item} style={{ height: '60px', background: 'rgba(21, 21, 97, 0.05)', borderRadius: '12px', padding: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #151561 0%, #3434A0 100%)' }} />
                          <div style={{ flex: 1 }}>
                            <div style={{ width: '80%', height: '8px', background: 'rgba(21, 21, 97, 0.3)', borderRadius: '3px', marginBottom: '5px' }} />
                            <div style={{ width: '60%', height: '6px', background: 'rgba(21, 21, 97, 0.2)', borderRadius: '2px' }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TABLET: Two-Column Scaled (768px-1024px) */}
          <div className="hidden md:grid lg:hidden grid-cols-2 gap-12 items-center">
            {/* Left — Content */}
            <div className="hero-content-left animate-fade-in-left">
              <h1 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '64px',
                  fontWeight: 700,
                  color: '#151561',
                  lineHeight: '1.15',
                  letterSpacing: '-0.02em',
                  marginBottom: '28px',
                }}
              >
                Mobile App Development for High-Performance iOS & Android Experiences
              </h1>

              <p 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '20px',
                  fontWeight: 400,
                  color: '#505050',
                  lineHeight: '1.7',
                  marginBottom: '44px',
                }}
              >
                We design and develop fast, intuitive, and scalable mobile applications built with modern technologies and human-centered design.
              </p>

              <div className="flex items-center flex-wrap gap-4">
                <button
                  className="cta-primary-btn"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '17px',
                    fontWeight: 600,
                    color: '#FFFFFF',
                    backgroundColor: '#FF0000',
                    padding: '18px 40px',
                    borderRadius: '50px',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 8px 24px rgba(255, 0, 0, 0.25)',
                    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  Start App Project
                </button>

                <button
                  className="cta-secondary-btn"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '17px',
                    fontWeight: 600,
                    color: '#151561',
                    backgroundColor: 'transparent',
                    padding: '18px 40px',
                    borderRadius: '50px',
                    border: '2px solid #151561',
                    cursor: 'pointer',
                    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  Schedule Consultation
                </button>
              </div>
            </div>

            {/* Right — Mobile Screens Visual (Scaled) */}
            <div 
              className="hero-visual-right relative animate-fade-in-right"
              style={{
                transform: `translateY(${scrollY * 0.1}px) scale(0.75)`,
                transition: 'transform 0.1s ease-out',
                transformOrigin: 'center center',
              }}
            >
              <div className="relative" style={{ height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {/* Screen 1 - Left */}
                <div 
                  className="floating-screen"
                  style={{
                    position: 'absolute',
                    left: '5%',
                    top: '15%',
                    width: '220px',
                    height: '450px',
                    background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)',
                    borderRadius: '32px',
                    boxShadow: '0 25px 60px rgba(21, 21, 97, 0.2)',
                    border: '8px solid #151561',
                    padding: '16px',
                    animation: 'float 4s ease-in-out infinite',
                    zIndex: 2,
                  }}
                >
                  <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {/* Notch */}
                    <div style={{ width: '40%', height: '24px', background: '#151561', borderRadius: '0 0 12px 12px', margin: '0 auto' }} />
                    
                    {/* Content */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ height: '60px', background: 'linear-gradient(135deg, #151561 0%, #3434A0 100%)', borderRadius: '16px' }} />
                      <div style={{ height: '80px', background: 'rgba(21, 21, 97, 0.08)', borderRadius: '14px' }} />
                      <div style={{ height: '80px', background: 'rgba(21, 21, 97, 0.08)', borderRadius: '14px' }} />
                      <div style={{ flex: 1, background: 'rgba(21, 21, 97, 0.05)', borderRadius: '14px' }} />
                    </div>
                  </div>
                </div>

                {/* Screen 2 - Center (Main) */}
                <div 
                  className="floating-screen"
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '240px',
                    height: '490px',
                    background: 'linear-gradient(135deg, #FFFFFF 0%, #F0F4FF 100%)',
                    borderRadius: '36px',
                    boxShadow: '0 35px 80px rgba(255, 0, 0, 0.25)',
                    border: '8px solid #FF0000',
                    padding: '18px',
                    animation: 'float 4s ease-in-out infinite 1s',
                    zIndex: 3,
                  }}
                >
                  <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    {/* Notch */}
                    <div style={{ width: '45%', height: '26px', background: '#FF0000', borderRadius: '0 0 13px 13px', margin: '0 auto' }} />
                    
                    {/* Header */}
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center', paddingBottom: '10px', borderBottom: '1px solid rgba(0, 0, 0, 0.06)' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #FF0000 0%, #FF3333 100%)' }} />
                      <div style={{ flex: 1 }}>
                        <div style={{ width: '70%', height: '10px', background: 'rgba(21, 21, 97, 0.4)', borderRadius: '4px', marginBottom: '6px' }} />
                        <div style={{ width: '50%', height: '8px', background: 'rgba(21, 21, 97, 0.2)', borderRadius: '3px' }} />
                      </div>
                    </div>

                    {/* Content Cards */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <div style={{ height: '100px', background: 'linear-gradient(135deg, #FF0000 0%, #FF3333 100%)', borderRadius: '18px', padding: '14px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div style={{ width: '30px', height: '30px', background: 'rgba(255, 255, 255, 0.3)', borderRadius: '8px' }} />
                        <div style={{ width: '60%', height: '10px', background: 'rgba(255, 255, 255, 0.5)', borderRadius: '4px' }} />
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                        <div style={{ height: '70px', background: 'rgba(21, 21, 97, 0.06)', borderRadius: '14px' }} />
                        <div style={{ height: '70px', background: 'rgba(21, 21, 97, 0.06)', borderRadius: '14px' }} />
                      </div>

                      <div style={{ height: '80px', background: 'rgba(21, 21, 97, 0.04)', borderRadius: '16px' }} />
                    </div>
                  </div>
                </div>

                {/* Screen 3 - Right */}
                <div 
                  className="floating-screen"
                  style={{
                    position: 'absolute',
                    right: '5%',
                    top: '20%',
                    width: '220px',
                    height: '450px',
                    background: 'linear-gradient(135deg, #FFFFFF 0%, #FFF5F5 100%)',
                    borderRadius: '32px',
                    boxShadow: '0 25px 60px rgba(21, 21, 97, 0.2)',
                    border: '8px solid #151561',
                    padding: '16px',
                    animation: 'float 4s ease-in-out infinite 2s',
                    zIndex: 1,
                  }}
                >
                  <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {/* Notch */}
                    <div style={{ width: '40%', height: '24px', background: '#151561', borderRadius: '0 0 12px 12px', margin: '0 auto' }} />
                    
                    {/* List Items */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {[1, 2, 3, 4, 5].map((item) => (
                        <div key={item} style={{ height: '60px', background: 'rgba(21, 21, 97, 0.05)', borderRadius: '12px', padding: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #151561 0%, #3434A0 100%)' }} />
                          <div style={{ flex: 1 }}>
                            <div style={{ width: '80%', height: '8px', background: 'rgba(21, 21, 97, 0.3)', borderRadius: '3px', marginBottom: '5px' }} />
                            <div style={{ width: '60%', height: '6px', background: 'rgba(21, 21, 97, 0.2)', borderRadius: '2px' }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* MOBILE: Vertical Stack (≤767px) */}
          <div className="md:hidden flex flex-col items-center gap-10">
            {/* 1) Heading */}
            <h1 
              className="animate-fade-in-left"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '64px',
                fontWeight: 700,
                color: '#151561',
                lineHeight: '1.15',
                letterSpacing: '-0.02em',
                textAlign: 'center',
              }}
            >
              Mobile App Development for High-Performance iOS & Android Experiences
            </h1>

            {/* 2) Description */}
            <p 
              className="animate-fade-in-left"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '20px',
                fontWeight: 400,
                color: '#505050',
                lineHeight: '1.7',
                textAlign: 'center',
                maxWidth: '90%',
              }}
            >
              We design and develop fast, intuitive, and scalable mobile applications built with modern technologies and human-centered design.
            </p>

            {/* 3) CTA Buttons */}
            <div className="flex flex-col items-stretch gap-4 w-full" style={{ maxWidth: '320px' }}>
              <button
                className="cta-primary-btn"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '17px',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  backgroundColor: '#FF0000',
                  padding: '18px 40px',
                  borderRadius: '50px',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 8px 24px rgba(255, 0, 0, 0.25)',
                  transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  width: '100%',
                }}
              >
                Start App Project
              </button>

              <button
                className="cta-secondary-btn"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '17px',
                  fontWeight: 600,
                  color: '#151561',
                  backgroundColor: 'transparent',
                  padding: '18px 40px',
                  borderRadius: '50px',
                  border: '2px solid #151561',
                  cursor: 'pointer',
                  transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  width: '100%',
                }}
              >
                Schedule Consultation
              </button>
            </div>

            {/* 4) Mobile Screens Visual (Centered, Scaled Group) */}
            <div 
              className="hero-visual-mobile relative animate-fade-in-right"
              style={{
                marginTop: '20px',
                transform: 'scale(0.6)',
                transformOrigin: 'center center',
              }}
            >
              <div className="relative" style={{ height: '500px', width: '100%', maxWidth: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {/* Main Phone Screen (Center) */}
                <div 
                  className="floating-screen"
                  style={{
                    position: 'relative',
                    width: '200px',
                    height: '410px',
                    background: 'linear-gradient(135deg, #FFFFFF 0%, #F0F4FF 100%)',
                    borderRadius: '32px',
                    boxShadow: '0 35px 80px rgba(255, 0, 0, 0.25)',
                    border: '6px solid #FF0000',
                    padding: '16px',
                    zIndex: 3,
                    margin: '0 auto',
                  }}
                >
                  <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {/* Notch */}
                    <div style={{ width: '45%', height: '22px', background: '#FF0000', borderRadius: '0 0 11px 11px', margin: '0 auto' }} />
                    
                    {/* Header */}
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', paddingBottom: '8px', borderBottom: '1px solid rgba(0, 0, 0, 0.06)' }}>
                      <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, #FF0000 0%, #FF3333 100%)' }} />
                      <div style={{ flex: 1 }}>
                        <div style={{ width: '70%', height: '8px', background: 'rgba(21, 21, 97, 0.4)', borderRadius: '4px', marginBottom: '5px' }} />
                        <div style={{ width: '50%', height: '6px', background: 'rgba(21, 21, 97, 0.2)', borderRadius: '3px' }} />
                      </div>
                    </div>

                    {/* Content Cards */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ height: '80px', background: 'linear-gradient(135deg, #FF0000 0%, #FF3333 100%)', borderRadius: '16px', padding: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div style={{ width: '24px', height: '24px', background: 'rgba(255, 255, 255, 0.3)', borderRadius: '6px' }} />
                        <div style={{ width: '60%', height: '8px', background: 'rgba(255, 255, 255, 0.5)', borderRadius: '4px' }} />
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                        <div style={{ height: '60px', background: 'rgba(21, 21, 97, 0.06)', borderRadius: '12px' }} />
                        <div style={{ height: '60px', background: 'rgba(21, 21, 97, 0.06)', borderRadius: '12px' }} />
                      </div>

                      <div style={{ height: '70px', background: 'rgba(21, 21, 97, 0.04)', borderRadius: '14px' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🎯 WHAT WE BUILD */}
      <section 
        className="capability-tiles-section lg:py-[120px] md:py-24 py-20"
        style={{
          backgroundColor: '#FFFFFF',
        }}
      >
        <div className="max-w-[1440px] mx-auto lg:px-12 md:px-8 px-4">
          <div className="text-center lg:mb-20 md:mb-16 mb-12">
            <h2 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '48px',
                fontWeight: 700,
                color: '#151561',
                letterSpacing: '-0.02em',
                marginBottom: '16px',
              }}
            >
              What We Build
            </h2>
            <p 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '20px',
                fontWeight: 400,
                color: '#505050',
                lineHeight: '1.7',
                maxWidth: '700px',
                margin: '0 auto',
              }}
            >
              Complete mobile solutions from concept to App Store.
            </p>
          </div>

          {/* DESKTOP: 6 cards in single row (≥1280px) */}
          <div className="hidden lg:grid grid-cols-6 gap-6">
            {capabilityTiles.map((tile, index) => {
              const Icon = tile.icon;
              return (
                <div
                  key={index}
                  className="capability-tile animate-fade-in-up"
                  style={{
                    background: tile.gradient,
                    borderRadius: '20px',
                    padding: '32px 24px',
                    boxShadow: '0 8px 32px rgba(21, 21, 97, 0.15)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    animationDelay: `${index * 0.1}s`,
                    textAlign: 'center',
                  }}
                >
                  <div 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px',
                    }}
                  >
                    <Icon size={40} color="#FFFFFF" />
                  </div>

                  <h3 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '17px',
                      fontWeight: 600,
                      color: '#FFFFFF',
                      lineHeight: '1.3',
                    }}
                  >
                    {tile.title}
                  </h3>
                </div>
              );
            })}
          </div>

          {/* TABLET: 3×2 grid (768px-1024px) */}
          <div className="hidden md:grid lg:hidden grid-cols-3 gap-6">
            {capabilityTiles.map((tile, index) => {
              const Icon = tile.icon;
              return (
                <div
                  key={index}
                  className="capability-tile animate-fade-in-up"
                  style={{
                    background: tile.gradient,
                    borderRadius: '20px',
                    padding: '32px 24px',
                    boxShadow: '0 8px 32px rgba(21, 21, 97, 0.15)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    animationDelay: `${index * 0.1}s`,
                    textAlign: 'center',
                  }}
                >
                  <div 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px',
                    }}
                  >
                    <Icon size={40} color="#FFFFFF" />
                  </div>

                  <h3 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '17px',
                      fontWeight: 600,
                      color: '#FFFFFF',
                      lineHeight: '1.3',
                    }}
                  >
                    {tile.title}
                  </h3>
                </div>
              );
            })}
          </div>

          {/* MOBILE: Vertical stack (≤767px) */}
          <div className="md:hidden flex flex-col items-center gap-5">
            {capabilityTiles.map((tile, index) => {
              const Icon = tile.icon;
              return (
                <div
                  key={index}
                  className="capability-tile animate-fade-in-up w-full"
                  style={{
                    background: tile.gradient,
                    borderRadius: '20px',
                    padding: '32px 24px',
                    boxShadow: '0 8px 32px rgba(21, 21, 97, 0.15)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    animationDelay: `${index * 0.1}s`,
                    textAlign: 'center',
                    maxWidth: '340px',
                  }}
                >
                  <div 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px',
                    }}
                  >
                    <Icon size={40} color="#FFFFFF" />
                  </div>

                  <h3 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '17px',
                      fontWeight: 600,
                      color: '#FFFFFF',
                      lineHeight: '1.3',
                    }}
                  >
                    {tile.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 🔧 MOBILE DEVELOPMENT CAPABILITIES GRID */}
      <section 
        className="development-capabilities-section lg:py-[120px] md:py-24 py-20"
        style={{
          background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFF 100%)',
        }}
      >
        <div className="max-w-[1440px] mx-auto lg:px-12 md:px-8 px-4">
          <div className="text-center lg:mb-20 md:mb-16 mb-12">
            <h2 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '48px',
                fontWeight: 700,
                color: '#151561',
                letterSpacing: '-0.02em',
                marginBottom: '16px',
              }}
            >
              Mobile Development Capabilities
            </h2>
            <p 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '20px',
                fontWeight: 400,
                color: '#505050',
                lineHeight: '1.7',
                maxWidth: '700px',
                margin: '0 auto',
              }}
            >
              End-to-end mobile app development expertise.
            </p>
          </div>

          {/* DESKTOP: 3-column grid (≥1280px) */}
          <div className="hidden lg:grid grid-cols-3 gap-8">
            {developmentCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div
                  key={index}
                  className="development-card animate-fade-in-up"
                  style={{
                    background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)',
                    borderRadius: '24px',
                    padding: '40px',
                    border: '1px solid rgba(0, 0, 0, 0.06)',
                    boxShadow: '0 8px 32px rgba(21, 21, 97, 0.08)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div 
                    style={{
                      width: '60px',
                      height: '60px',
                      background: 'linear-gradient(135deg, #FF0000 0%, #FF3333 100%)',
                      borderRadius: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px',
                      boxShadow: '0 6px 20px rgba(255, 0, 0, 0.25)',
                    }}
                  >
                    <Icon size={28} color="#FFFFFF" />
                  </div>

                  <h3 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '21px',
                      fontWeight: 600,
                      color: '#151561',
                      marginBottom: '12px',
                      lineHeight: '1.3',
                    }}
                  >
                    {capability.title}
                  </h3>

                  <p 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '16px',
                      fontWeight: 400,
                      color: '#505050',
                      lineHeight: '1.65',
                    }}
                  >
                    {capability.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* TABLET: 2-column grid (768px-1024px) */}
          <div className="hidden md:grid lg:hidden grid-cols-2 gap-8">
            {developmentCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div
                  key={index}
                  className="development-card animate-fade-in-up"
                  style={{
                    background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)',
                    borderRadius: '24px',
                    padding: '40px',
                    border: '1px solid rgba(0, 0, 0, 0.06)',
                    boxShadow: '0 8px 32px rgba(21, 21, 97, 0.08)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div 
                    style={{
                      width: '60px',
                      height: '60px',
                      background: 'linear-gradient(135deg, #FF0000 0%, #FF3333 100%)',
                      borderRadius: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px',
                      boxShadow: '0 6px 20px rgba(255, 0, 0, 0.25)',
                    }}
                  >
                    <Icon size={28} color="#FFFFFF" />
                  </div>

                  <h3 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '21px',
                      fontWeight: 600,
                      color: '#151561',
                      marginBottom: '12px',
                      lineHeight: '1.3',
                    }}
                  >
                    {capability.title}
                  </h3>

                  <p 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '16px',
                      fontWeight: 400,
                      color: '#505050',
                      lineHeight: '1.65',
                    }}
                  >
                    {capability.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* MOBILE: Vertical stack (≤767px) */}
          <div className="md:hidden flex flex-col items-center gap-5">
            {developmentCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div
                  key={index}
                  className="development-card animate-fade-in-up w-full"
                  style={{
                    background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)',
                    borderRadius: '24px',
                    padding: '40px',
                    border: '1px solid rgba(0, 0, 0, 0.06)',
                    boxShadow: '0 8px 32px rgba(21, 21, 97, 0.08)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    animationDelay: `${index * 0.1}s`,
                    maxWidth: '340px',
                  }}
                >
                  <div 
                    style={{
                      width: '60px',
                      height: '60px',
                      background: 'linear-gradient(135deg, #FF0000 0%, #FF3333 100%)',
                      borderRadius: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px',
                      boxShadow: '0 6px 20px rgba(255, 0, 0, 0.25)',
                    }}
                  >
                    <Icon size={28} color="#FFFFFF" />
                  </div>

                  <h3 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '21px',
                      fontWeight: 600,
                      color: '#151561',
                      marginBottom: '12px',
                      lineHeight: '1.3',
                    }}
                  >
                    {capability.title}
                  </h3>

                  <p 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '16px',
                      fontWeight: 400,
                      color: '#505050',
                      lineHeight: '1.65',
                    }}
                  >
                    {capability.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 🔄 DEVELOPMENT PROCESS TIMELINE */}
      <section 
        className="process-timeline-section lg:py-[120px] md:py-24 py-20"
        style={{
          backgroundColor: '#FFFFFF',
        }}
      >
        <div className="max-w-[1440px] mx-auto lg:px-12 md:px-8 px-4">
          <div className="text-center lg:mb-20 md:mb-16 mb-12">
            <h2 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '48px',
                fontWeight: 700,
                color: '#151561',
                letterSpacing: '-0.02em',
                marginBottom: '16px',
              }}
            >
              Development Process
            </h2>
            <p 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '20px',
                fontWeight: 400,
                color: '#505050',
                lineHeight: '1.7',
                maxWidth: '700px',
                margin: '0 auto',
              }}
            >
              From concept to App Store in a structured, transparent workflow.
            </p>
          </div>

          {/* DESKTOP: Horizontal Timeline (≥1280px) */}
          <div className="hidden lg:block relative" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
            {/* Timeline Line */}
            <div 
              style={{
                position: 'absolute',
                top: '100px',
                left: '3%',
                right: '3%',
                height: '3px',
                background: 'linear-gradient(90deg, #151561 0%, #FF0000 100%)',
                opacity: 0.2,
              }}
            />

            <div className="grid grid-cols-7 gap-4">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className="process-step animate-fade-in-up"
                    style={{
                      textAlign: 'center',
                      position: 'relative',
                      animationDelay: `${index * 0.1}s`,
                    }}
                  >
                    {/* Icon Circle */}
                    <div 
                      style={{
                        width: '80px',
                        height: '80px',
                        background: index % 2 === 0 
                          ? 'linear-gradient(135deg, #151561 0%, #3434A0 100%)' 
                          : 'linear-gradient(135deg, #FF0000 0%, #FF3333 100%)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 20px',
                        boxShadow: index % 2 === 0 
                          ? '0 12px 32px rgba(21, 21, 97, 0.3)' 
                          : '0 12px 32px rgba(255, 0, 0, 0.3)',
                        position: 'relative',
                        zIndex: 2,
                      }}
                    >
                      <Icon size={32} color="#FFFFFF" />
                    </div>

                    <h4 
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '16px',
                        fontWeight: 600,
                        color: '#151561',
                        marginBottom: '6px',
                        lineHeight: '1.3',
                      }}
                    >
                      {step.label}
                    </h4>

                    <p 
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '13px',
                        fontWeight: 400,
                        color: '#505050',
                        lineHeight: '1.4',
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* TABLET: 2-Row Grid (768px-1024px) */}
          <div className="hidden md:block lg:hidden">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-10">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className="process-step animate-fade-in-up"
                    style={{
                      textAlign: 'center',
                      animationDelay: `${index * 0.1}s`,
                      width: 'calc(25% - 24px)',
                      minWidth: '140px',
                    }}
                  >
                    {/* Icon Circle */}
                    <div 
                      style={{
                        width: '80px',
                        height: '80px',
                        background: index % 2 === 0 
                          ? 'linear-gradient(135deg, #151561 0%, #3434A0 100%)' 
                          : 'linear-gradient(135deg, #FF0000 0%, #FF3333 100%)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 20px',
                        boxShadow: index % 2 === 0 
                          ? '0 12px 32px rgba(21, 21, 97, 0.3)' 
                          : '0 12px 32px rgba(255, 0, 0, 0.3)',
                      }}
                    >
                      <Icon size={32} color="#FFFFFF" />
                    </div>

                    <h4 
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '16px',
                        fontWeight: 600,
                        color: '#151561',
                        marginBottom: '6px',
                        lineHeight: '1.3',
                      }}
                    >
                      {step.label}
                    </h4>

                    <p 
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '13px',
                        fontWeight: 400,
                        color: '#505050',
                        lineHeight: '1.4',
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* MOBILE: Vertical Stack with Icon-Left Layout (≤767px) */}
          <div className="md:hidden flex flex-col gap-6">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="process-step-mobile animate-fade-in-up"
                  style={{
                    display: 'flex',
                    gap: '16px',
                    alignItems: 'flex-start',
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  {/* Icon Circle (Left) */}
                  <div 
                    style={{
                      width: '60px',
                      height: '60px',
                      background: index % 2 === 0 
                        ? 'linear-gradient(135deg, #151561 0%, #3434A0 100%)' 
                        : 'linear-gradient(135deg, #FF0000 0%, #FF3333 100%)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: index % 2 === 0 
                        ? '0 12px 32px rgba(21, 21, 97, 0.3)' 
                        : '0 12px 32px rgba(255, 0, 0, 0.3)',
                    }}
                  >
                    <Icon size={26} color="#FFFFFF" />
                  </div>

                  {/* Text Block (Right) */}
                  <div style={{ flex: 1 }}>
                    <h4 
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '16px',
                        fontWeight: 600,
                        color: '#151561',
                        marginBottom: '4px',
                        lineHeight: '1.3',
                      }}
                    >
                      {step.label}
                    </h4>

                    <p 
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '13px',
                        fontWeight: 400,
                        color: '#505050',
                        lineHeight: '1.5',
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 💬 TESTIMONIAL BLOCK */}
      <section 
        className="testimonial-section lg:py-[120px] md:py-24 py-20"
        style={{
          backgroundColor: '#FFFFFF',
        }}
      >
        <div className="max-w-[1440px] mx-auto lg:px-12 md:px-8 px-4">
          <div 
            className="testimonial-card animate-fade-in lg:p-[60px] md:p-10 p-6"
            style={{
              maxWidth: '900px',
              margin: '0 auto',
              background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)',
              borderRadius: '32px',
              border: '1px solid rgba(0, 0, 0, 0.06)',
              boxShadow: '0 20px 60px rgba(21, 21, 97, 0.12)',
            }}
          >
            {/* DESKTOP & TABLET: Horizontal Layout (≥768px) */}
            <div className="hidden md:flex items-start gap-8">
              <div 
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #FF0000 0%, #FF3333 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: '0 8px 24px rgba(255, 0, 0, 0.25)',
                }}
              >
                <Smartphone size={36} color="#FFFFFF" />
              </div>

              <div style={{ flex: 1 }}>
                <p 
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '22px',
                    fontWeight: 400,
                    color: '#151561',
                    lineHeight: '1.7',
                    marginBottom: '28px',
                    fontStyle: 'italic',
                  }}
                >
                  &quot;Optichore delivered an exceptional mobile app that our users absolutely love. The performance is flawless, the design is stunning, and it&apos;s helped us grow our active user base by 300%.&quot;
                </p>

                <div>
                  <div 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '18px',
                      fontWeight: 600,
                      color: '#151561',
                      marginBottom: '4px',
                    }}
                  >
                    Sarah Williams
                  </div>
                  <div 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '16px',
                      fontWeight: 400,
                      color: '#505050',
                    }}
                  >
                    Product Manager, FitLife App
                  </div>
                </div>
              </div>
            </div>

            {/* MOBILE: Vertical Layout (≤767px) */}
            <div className="md:hidden flex flex-col items-center text-center">
              <div 
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #FF0000 0%, #FF3333 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px',
                  boxShadow: '0 8px 24px rgba(255, 0, 0, 0.25)',
                }}
              >
                <Smartphone size={36} color="#FFFFFF" />
              </div>

              <p 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '22px',
                  fontWeight: 400,
                  color: '#151561',
                  lineHeight: '1.7',
                  marginBottom: '28px',
                  fontStyle: 'italic',
                }}
              >
                &quot;Optichore delivered an exceptional mobile app that our users absolutely love. The performance is flawless, the design is stunning, and it&apos;s helped us grow our active user base by 300%.&quot;
              </p>

              <div>
                <div 
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '18px',
                    fontWeight: 600,
                    color: '#151561',
                    marginBottom: '4px',
                  }}
                >
                  Sarah Williams
                </div>
                <div 
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    fontWeight: 400,
                    color: '#505050',
                  }}
                >
                  Product Manager, FitLife App
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 FINAL CTA SECTION */}
      <section 
        className="final-cta-section lg:py-[140px] md:py-28 py-24"
        style={{
          background: 'linear-gradient(180deg, #F8FAFF 0%, #FFFFFF 100%)',
        }}
      >
        <div className="max-w-[1440px] mx-auto lg:px-12 md:px-8 px-6">
          <div className="text-center animate-fade-in">
            <h2 
              className="lg:text-[56px] md:text-5xl text-4xl lg:mb-6 md:mb-5 mb-4"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                color: '#151561',
                letterSpacing: '-0.02em',
                lineHeight: '1.15',
              }}
            >
              Let&apos;s Build Your Next<br />High-Performance Mobile App
            </h2>

            <p 
              className="lg:mb-12 md:mb-10 mb-8"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '20px',
                fontWeight: 400,
                color: '#505050',
                lineHeight: '1.7',
                maxWidth: '700px',
                margin: '0 auto',
              }}
            >
              Ready to create an app that users love and drives real business growth?
            </p>

            {/* DESKTOP & TABLET: Horizontal Buttons (≥768px) */}
            <div className="hidden md:flex items-center justify-center gap-5">
              <button
                className="cta-primary-btn"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '17px',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  backgroundColor: '#FF0000',
                  padding: '18px 40px',
                  borderRadius: '50px',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 8px 24px rgba(255, 0, 0, 0.25)',
                  transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                Start Project
                <ArrowRight size={20} />
              </button>

              <button
                className="cta-secondary-btn"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '17px',
                  fontWeight: 600,
                  color: '#151561',
                  backgroundColor: 'transparent',
                  padding: '18px 40px',
                  borderRadius: '50px',
                  border: '2px solid #151561',
                  cursor: 'pointer',
                  transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <Phone size={20} />
                Book a Call
              </button>
            </div>

            {/* MOBILE: Vertical Stacked Buttons (≤767px) */}
            <div className="md:hidden flex flex-col gap-4">
              <button
                className="cta-primary-btn"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '17px',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  backgroundColor: '#FF0000',
                  padding: '18px 40px',
                  borderRadius: '50px',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 8px 24px rgba(255, 0, 0, 0.25)',
                  transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  width: '100%',
                }}
              >
                Start Project
                <ArrowRight size={20} />
              </button>

              <button
                className="cta-secondary-btn"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '17px',
                  fontWeight: 600,
                  color: '#151561',
                  backgroundColor: 'transparent',
                  padding: '18px 40px',
                  borderRadius: '50px',
                  border: '2px solid #151561',
                  cursor: 'pointer',
                  transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  width: '100%',
                }}
              >
                <Phone size={20} />
                Book a Call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      {/* 🎨 ANIMATIONS & STYLES */}
      <style>{`
        /* Fade In Animations */
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-fade-in-left {
          animation: fadeInLeft 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .animate-fade-in-right {
          animation: fadeInRight 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .animate-fade-in {
          animation: fadeIn 1s ease forwards;
        }

        /* Button Hover Effects */
        .cta-primary-btn:hover {
          background-color: #E60000;
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(255, 0, 0, 0.35);
        }

        .cta-secondary-btn:hover {
          background-color: #151561;
          color: #FFFFFF;
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(21, 21, 97, 0.25);
        }

        /* Capability Tiles Hover */
        .capability-tile:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 50px rgba(21, 21, 97, 0.25);
        }

        /* Development Cards Hover */
        .development-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(21, 21, 97, 0.15);
        }

        /* Mobile Screens Floating Animation */
        .floating-screen {
          will-change: transform;
        }

        /* Smooth Scroll */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}