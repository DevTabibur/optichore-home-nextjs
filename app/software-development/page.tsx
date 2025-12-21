"use client"
import { useState, useEffect } from 'react';
import { ArrowRight, Phone, Monitor, Server, Cloud, Code, Settings, Database, Layers, Workflow, Shield, Cog, GitBranch, TestTube, Rocket, Wrench, Globe, Box, Zap, Lock, BarChart, Users } from 'lucide-react';


export default function SoftwareDevelopmentPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const capabilityTiles = [
    { icon: Monitor, title: 'Web Applications', gradient: 'linear-gradient(135deg, #151561 0%, #3434A0 100%)' },
    { icon: Server, title: 'Enterprise Software', gradient: 'linear-gradient(135deg, #FF0000 0%, #FF3333 100%)' },
    { icon: Cloud, title: 'SaaS Platforms', gradient: 'linear-gradient(135deg, #151561 0%, #3434A0 100%)' },
    { icon: Zap, title: 'API + Integrations', gradient: 'linear-gradient(135deg, #FF0000 0%, #FF3333 100%)' },
    { icon: Settings, title: 'Automation Tools', gradient: 'linear-gradient(135deg, #151561 0%, #3434A0 100%)' },
    { icon: BarChart, title: 'Admin Dashboards', gradient: 'linear-gradient(135deg, #FF0000 0%, #FF3333 100%)' }
  ];

  const engineeringCapabilities = [
    {
      icon: Layers,
      title: 'System Architecture',
      description: 'Scalable, maintainable architecture design using modern patterns and best practices for enterprise applications.'
    },
    {
      icon: Monitor,
      title: 'Frontend Engineering',
      description: 'Modern, responsive interfaces built with React, Next.js, and TypeScript for optimal user experiences.'
    },
    {
      icon: Server,
      title: 'Backend Engineering',
      description: 'Robust server-side solutions with Node.js, Python, PHP/Laravel for secure and performant applications.'
    },
    {
      icon: Database,
      title: 'Cloud & Database',
      description: 'Cloud infrastructure and database design on AWS, DigitalOcean, MySQL, PostgreSQL, and MongoDB.'
    },
    {
      icon: Code,
      title: 'API Development',
      description: 'RESTful and GraphQL APIs with comprehensive documentation, authentication, and rate limiting.'
    },
    {
      icon: Shield,
      title: 'QA & Maintenance',
      description: 'Comprehensive testing, monitoring, security audits, and ongoing support for production systems.'
    }
  ];

  const processSteps = [
    { icon: Users, label: 'Requirements', description: 'Discovery & specification' },
    { icon: Layers, label: 'Architecture', description: 'System design & planning' },
    { icon: Workflow, label: 'UI/UX Collaboration', description: 'Design integration' },
    { icon: Code, label: 'Development', description: 'Agile implementation' },
    { icon: TestTube, label: 'Testing', description: 'QA & validation' },
    { icon: Rocket, label: 'Deployment', description: 'Launch & migration' },
    { icon: Wrench, label: 'Maintenance', description: 'Support & updates' }
  ];

  const techStack = [
    { name: 'React', color: '#61DAFB' },
    { name: 'Next.js', color: '#000000' },
    { name: 'Node.js', color: '#339933' },
    { name: 'PHP/Laravel', color: '#FF2D20' },
    { name: 'Python/Django', color: '#092E20' },
    { name: 'MySQL', color: '#4479A1' },
    { name: 'PostgreSQL', color: '#336791' },
    { name: 'AWS', color: '#FF9900' },
    { name: 'DigitalOcean', color: '#0080FF' },
    { name: 'REST APIs', color: '#151561' },
    { name: 'GraphQL', color: '#E10098' },
    { name: 'Docker', color: '#2496ED' }
  ];

  return (
    <div className="software-development-page" style={{ backgroundColor: '#FFFFFF' }}>

      {/* 🌟 HERO SECTION */}
      <section 
        className="software-hero-section relative overflow-hidden lg:pt-[140px] lg:pb-[120px] md:pt-24 md:pb-20 pt-20 pb-16"
        style={{
          background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFF 100%)',
        }}
      >
        {/* Technical Grid Background */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(21, 21, 97, 0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(21, 21, 97, 0.02) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            opacity: 0.5,
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
                Custom Software Development for Scalable, Modern Businesses
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
                We build robust, secure, and scalable software solutions tailored to your business goals, using modern architecture, clean code, and enterprise engineering practices.
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
                  Start a Project
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

            {/* Right — System Architecture Visual */}
            <div 
              className="hero-visual-right relative animate-fade-in-right"
              style={{
                transform: `translateY(${scrollY * 0.1}px)`,
                transition: 'transform 0.1s ease-out',
              }}
            >
              <div className="relative" style={{ height: '600px' }}>
                {/* Main Dashboard UI */}
                <div 
                  className="absolute"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '480px',
                    height: '560px',
                    background: 'linear-gradient(135deg, #FFFFFF 0%, #F0F4FF 100%)',
                    borderRadius: '28px',
                    boxShadow: '0 30px 80px rgba(21, 21, 97, 0.15)',
                    border: '1px solid rgba(0, 0, 0, 0.06)',
                    padding: '32px',
                  }}
                >
                  <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {/* Header Bar */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingBottom: '16px', borderBottom: '1px solid rgba(0, 0, 0, 0.06)' }}>
                      <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FF0000' }} />
                      <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FFB800' }} />
                      <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#00D26A' }} />
                    </div>

                    {/* Dashboard Content */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                      <div style={{ height: '120px', background: 'linear-gradient(135deg, #151561 0%, #3434A0 100%)', borderRadius: '16px', padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <Server size={28} color="#FFFFFF" />
                        <div style={{ width: '60%', height: '12px', background: 'rgba(255, 255, 255, 0.4)', borderRadius: '4px' }} />
                      </div>
                      <div style={{ height: '120px', background: 'linear-gradient(135deg, #FF0000 0%, #FF3333 100%)', borderRadius: '16px', padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <Database size={28} color="#FFFFFF" />
                        <div style={{ width: '50%', height: '12px', background: 'rgba(255, 255, 255, 0.4)', borderRadius: '4px' }} />
                      </div>
                    </div>

                    {/* Chart Area */}
                    <div style={{ height: '180px', background: 'rgba(21, 21, 97, 0.04)', borderRadius: '16px', padding: '20px' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '12px', height: '100%' }}>
                        <div style={{ flex: 1, height: '60%', background: 'linear-gradient(180deg, #151561 0%, #3434A0 100%)', borderRadius: '8px' }} />
                        <div style={{ flex: 1, height: '85%', background: 'linear-gradient(180deg, #FF0000 0%, #FF3333 100%)', borderRadius: '8px' }} />
                        <div style={{ flex: 1, height: '45%', background: 'linear-gradient(180deg, #151561 0%, #3434A0 100%)', borderRadius: '8px' }} />
                        <div style={{ flex: 1, height: '70%', background: 'linear-gradient(180deg, #FF0000 0%, #FF3333 100%)', borderRadius: '8px' }} />
                      </div>
                    </div>

                    {/* API Nodes */}
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <div style={{ flex: 1, height: '70px', background: 'rgba(21, 21, 97, 0.06)', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Code size={24} color="#151561" />
                      </div>
                      <div style={{ flex: 1, height: '70px', background: 'rgba(21, 21, 97, 0.06)', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Zap size={24} color="#151561" />
                      </div>
                      <div style={{ flex: 1, height: '70px', background: 'rgba(21, 21, 97, 0.06)', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Lock size={24} color="#151561" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Element 1 - API */}
                <div 
                  className="floating-element"
                  style={{
                    position: 'absolute',
                    top: '8%',
                    right: '0%',
                    width: '90px',
                    height: '90px',
                    background: 'linear-gradient(135deg, #FF0000 0%, #FF3333 100%)',
                    borderRadius: '22px',
                    boxShadow: '0 20px 40px rgba(255, 0, 0, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    animation: 'float 3s ease-in-out infinite',
                  }}
                >
                  <GitBranch size={40} color="#FFFFFF" />
                </div>

                {/* Floating Element 2 - Cloud */}
                <div 
                  className="floating-element"
                  style={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '-3%',
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, #151561 0%, #3434A0 100%)',
                    borderRadius: '20px',
                    boxShadow: '0 20px 40px rgba(21, 21, 97, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    animation: 'float 3s ease-in-out infinite 1.5s',
                  }}
                >
                  <Cloud size={36} color="#FFFFFF" />
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
                Custom Software Development for Scalable, Modern Businesses
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
                We build robust, secure, and scalable software solutions tailored to your business goals, using modern architecture, clean code, and enterprise engineering practices.
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
                  Start a Project
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

            {/* Right — System Architecture Visual (Scaled) */}
            <div 
              className="hero-visual-right relative animate-fade-in-right"
              style={{
                transform: `translateY(${scrollY * 0.1}px) scale(0.8)`,
                transition: 'transform 0.1s ease-out',
                transformOrigin: 'center center',
              }}
            >
              <div className="relative" style={{ height: '500px' }}>
                {/* Main Dashboard UI */}
                <div 
                  className="absolute"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '480px',
                    height: '560px',
                    background: 'linear-gradient(135deg, #FFFFFF 0%, #F0F4FF 100%)',
                    borderRadius: '28px',
                    boxShadow: '0 30px 80px rgba(21, 21, 97, 0.15)',
                    border: '1px solid rgba(0, 0, 0, 0.06)',
                    padding: '32px',
                  }}
                >
                  <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {/* Header Bar */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingBottom: '16px', borderBottom: '1px solid rgba(0, 0, 0, 0.06)' }}>
                      <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FF0000' }} />
                      <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FFB800' }} />
                      <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#00D26A' }} />
                    </div>

                    {/* Dashboard Content */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                      <div style={{ height: '120px', background: 'linear-gradient(135deg, #151561 0%, #3434A0 100%)', borderRadius: '16px', padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <Server size={28} color="#FFFFFF" />
                        <div style={{ width: '60%', height: '12px', background: 'rgba(255, 255, 255, 0.4)', borderRadius: '4px' }} />
                      </div>
                      <div style={{ height: '120px', background: 'linear-gradient(135deg, #FF0000 0%, #FF3333 100%)', borderRadius: '16px', padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <Database size={28} color="#FFFFFF" />
                        <div style={{ width: '50%', height: '12px', background: 'rgba(255, 255, 255, 0.4)', borderRadius: '4px' }} />
                      </div>
                    </div>

                    {/* Chart Area */}
                    <div style={{ height: '180px', background: 'rgba(21, 21, 97, 0.04)', borderRadius: '16px', padding: '20px' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '12px', height: '100%' }}>
                        <div style={{ flex: 1, height: '60%', background: 'linear-gradient(180deg, #151561 0%, #3434A0 100%)', borderRadius: '8px' }} />
                        <div style={{ flex: 1, height: '85%', background: 'linear-gradient(180deg, #FF0000 0%, #FF3333 100%)', borderRadius: '8px' }} />
                        <div style={{ flex: 1, height: '45%', background: 'linear-gradient(180deg, #151561 0%, #3434A0 100%)', borderRadius: '8px' }} />
                        <div style={{ flex: 1, height: '70%', background: 'linear-gradient(180deg, #FF0000 0%, #FF3333 100%)', borderRadius: '8px' }} />
                      </div>
                    </div>

                    {/* API Nodes */}
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <div style={{ flex: 1, height: '70px', background: 'rgba(21, 21, 97, 0.06)', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Code size={24} color="#151561" />
                      </div>
                      <div style={{ flex: 1, height: '70px', background: 'rgba(21, 21, 97, 0.06)', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Zap size={24} color="#151561" />
                      </div>
                      <div style={{ flex: 1, height: '70px', background: 'rgba(21, 21, 97, 0.06)', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Lock size={24} color="#151561" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Element 1 - API */}
                <div 
                  className="floating-element"
                  style={{
                    position: 'absolute',
                    top: '8%',
                    right: '0%',
                    width: '90px',
                    height: '90px',
                    background: 'linear-gradient(135deg, #FF0000 0%, #FF3333 100%)',
                    borderRadius: '22px',
                    boxShadow: '0 20px 40px rgba(255, 0, 0, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    animation: 'float 3s ease-in-out infinite',
                  }}
                >
                  <GitBranch size={40} color="#FFFFFF" />
                </div>

                {/* Floating Element 2 - Cloud */}
                <div 
                  className="floating-element"
                  style={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '-3%',
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, #151561 0%, #3434A0 100%)',
                    borderRadius: '20px',
                    boxShadow: '0 20px 40px rgba(21, 21, 97, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    animation: 'float 3s ease-in-out infinite 1.5s',
                  }}
                >
                  <Cloud size={36} color="#FFFFFF" />
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
              Custom Software Development for Scalable, Modern Businesses
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
              We build robust, secure, and scalable software solutions tailored to your business goals, using modern architecture, clean code, and enterprise engineering practices.
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
                Start a Project
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

            {/* 4) Illustration Card (Centered, Scaled, No Floating Icons) */}
            <div 
              className="hero-visual-mobile relative animate-fade-in-right w-full flex justify-center"
              style={{
                marginTop: '20px',
              }}
            >
              <div className="relative" style={{ width: '340px', height: '420px' }}>
                {/* Main Dashboard UI */}
                <div 
                  style={{
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(135deg, #FFFFFF 0%, #F0F4FF 100%)',
                    borderRadius: '24px',
                    boxShadow: '0 30px 80px rgba(21, 21, 97, 0.15)',
                    border: '1px solid rgba(0, 0, 0, 0.06)',
                    padding: '24px',
                  }}
                >
                  <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {/* Header Bar */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingBottom: '12px', borderBottom: '1px solid rgba(0, 0, 0, 0.06)' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FF0000' }} />
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FFB800' }} />
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00D26A' }} />
                    </div>

                    {/* Dashboard Content */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                      <div style={{ height: '90px', background: 'linear-gradient(135deg, #151561 0%, #3434A0 100%)', borderRadius: '14px', padding: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <Server size={22} color="#FFFFFF" />
                        <div style={{ width: '60%', height: '10px', background: 'rgba(255, 255, 255, 0.4)', borderRadius: '4px' }} />
                      </div>
                      <div style={{ height: '90px', background: 'linear-gradient(135deg, #FF0000 0%, #FF3333 100%)', borderRadius: '14px', padding: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <Database size={22} color="#FFFFFF" />
                        <div style={{ width: '50%', height: '10px', background: 'rgba(255, 255, 255, 0.4)', borderRadius: '4px' }} />
                      </div>
                    </div>

                    {/* Chart Area */}
                    <div style={{ height: '130px', background: 'rgba(21, 21, 97, 0.04)', borderRadius: '14px', padding: '16px' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '10px', height: '100%' }}>
                        <div style={{ flex: 1, height: '60%', background: 'linear-gradient(180deg, #151561 0%, #3434A0 100%)', borderRadius: '6px' }} />
                        <div style={{ flex: 1, height: '85%', background: 'linear-gradient(180deg, #FF0000 0%, #FF3333 100%)', borderRadius: '6px' }} />
                        <div style={{ flex: 1, height: '45%', background: 'linear-gradient(180deg, #151561 0%, #3434A0 100%)', borderRadius: '6px' }} />
                        <div style={{ flex: 1, height: '70%', background: 'linear-gradient(180deg, #FF0000 0%, #FF3333 100%)', borderRadius: '6px' }} />
                      </div>
                    </div>

                    {/* API Nodes */}
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <div style={{ flex: 1, height: '55px', background: 'rgba(21, 21, 97, 0.06)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Code size={20} color="#151561" />
                      </div>
                      <div style={{ flex: 1, height: '55px', background: 'rgba(21, 21, 97, 0.06)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Zap size={20} color="#151561" />
                      </div>
                      <div style={{ flex: 1, height: '55px', background: 'rgba(21, 21, 97, 0.06)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Lock size={20} color="#151561" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🎯 IMPACT SECTION — WHAT WE BUILD */}
      <section 
        className="impact-section lg:py-[120px] md:py-24 py-20"
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
              Enterprise-grade software solutions for modern businesses.
            </p>
          </div>

          {/* DESKTOP: 6 Cards in 1 Row (≥1280px) — LOCKED */}
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

          {/* TABLET: 3 Cards per Row, 2 Rows (768px-1024px) */}
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

          {/* MOBILE: Single Column (≤767px) */}
          <div className="md:hidden flex flex-col gap-4">
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
                    width: '100%',
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

      {/* 🔧 ENGINEERING CAPABILITIES GRID */}
      <section 
        className="engineering-section lg:py-[120px] md:py-24 py-20"
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
              Engineering Capabilities
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
              Full-stack expertise with modern development practices.
            </p>
          </div>

          {/* DESKTOP: 3×2 Grid (≥1280px) — LOCKED */}
          <div className="hidden lg:grid grid-cols-3 gap-8">
            {engineeringCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div
                  key={index}
                  className="engineering-card animate-fade-in-up"
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
                      background: 'linear-gradient(135deg, #151561 0%, #3434A0 100%)',
                      borderRadius: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px',
                      boxShadow: '0 6px 20px rgba(21, 21, 97, 0.25)',
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

          {/* TABLET: 2×3 Grid (768px-1024px) */}
          <div className="hidden md:grid lg:hidden grid-cols-2 gap-8">
            {engineeringCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div
                  key={index}
                  className="engineering-card animate-fade-in-up"
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
                      background: 'linear-gradient(135deg, #151561 0%, #3434A0 100%)',
                      borderRadius: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px',
                      boxShadow: '0 6px 20px rgba(21, 21, 97, 0.25)',
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

          {/* MOBILE: Single Column (≤767px) */}
          <div className="md:hidden flex flex-col gap-5">
            {engineeringCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div
                  key={index}
                  className="engineering-card animate-fade-in-up"
                  style={{
                    background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)',
                    borderRadius: '24px',
                    padding: '40px',
                    border: '1px solid rgba(0, 0, 0, 0.06)',
                    boxShadow: '0 8px 32px rgba(21, 21, 97, 0.08)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    animationDelay: `${index * 0.1}s`,
                    width: '100%',
                  }}
                >
                  <div 
                    style={{
                      width: '60px',
                      height: '60px',
                      background: 'linear-gradient(135deg, #151561 0%, #3434A0 100%)',
                      borderRadius: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px',
                      boxShadow: '0 6px 20px rgba(21, 21, 97, 0.25)',
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
              Agile methodology with continuous delivery and quality assurance.
            </p>
          </div>

          {/* DESKTOP: Horizontal Timeline (≥1280px) — LOCKED */}
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

          {/* TABLET: Wrapped Grid (768px-1024px) */}
          <div className="hidden md:block lg:hidden">
            <div className="flex flex-wrap justify-center gap-8">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className="process-step animate-fade-in-up"
                    style={{
                      textAlign: 'center',
                      width: 'calc(33.333% - 24px)',
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

          {/* MOBILE: Vertical Stack (≤767px) */}
          <div className="md:hidden flex flex-col items-center gap-6">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="process-step animate-fade-in-up"
                  style={{
                    textAlign: 'center',
                    width: '100%',
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

                  {/* Subtle Divider (Optional) */}
                  {index < processSteps.length - 1 && (
                    <div 
                      style={{
                        width: '60px',
                        height: '1px',
                        background: 'rgba(21, 21, 97, 0.1)',
                        margin: '24px auto 0',
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 💻 TECHNOLOGY STACK */}
      <section 
        className="tech-stack-section lg:py-[120px] md:py-24 py-20"
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
              Technology Stack
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
              Modern, battle-tested technologies for enterprise-grade solutions.
            </p>
          </div>

          {/* DESKTOP: 6×2 Grid (≥1280px) — LOCKED */}
          <div className="hidden lg:grid grid-cols-6 gap-6">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="tech-card animate-fade-in-up"
                style={{
                  background: '#FFFFFF',
                  borderRadius: '18px',
                  padding: '32px 24px',
                  border: '1px solid rgba(0, 0, 0, 0.06)',
                  boxShadow: '0 6px 24px rgba(21, 21, 97, 0.06)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  animationDelay: `${index * 0.05}s`,
                  textAlign: 'center',
                }}
              >
                <div 
                  style={{
                    width: '50px',
                    height: '50px',
                    background: `${tech.color}15`,
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px',
                  }}
                >
                  <Code size={24} color={tech.color} />
                </div>

                <h4 
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#151561',
                    lineHeight: '1.3',
                  }}
                >
                  {tech.name}
                </h4>
              </div>
            ))}
          </div>

          {/* TABLET: 3×4 Grid (768px-1024px) */}
          <div className="hidden md:grid lg:hidden grid-cols-3 gap-6">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="tech-card animate-fade-in-up"
                style={{
                  background: '#FFFFFF',
                  borderRadius: '18px',
                  padding: '32px 24px',
                  border: '1px solid rgba(0, 0, 0, 0.06)',
                  boxShadow: '0 6px 24px rgba(21, 21, 97, 0.06)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  animationDelay: `${index * 0.05}s`,
                  textAlign: 'center',
                }}
              >
                <div 
                  style={{
                    width: '50px',
                    height: '50px',
                    background: `${tech.color}15`,
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px',
                  }}
                >
                  <Code size={24} color={tech.color} />
                </div>

                <h4 
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#151561',
                    lineHeight: '1.3',
                  }}
                >
                  {tech.name}
                </h4>
              </div>
            ))}
          </div>

          {/* MOBILE: 2×6 Grid (≤767px) */}
          <div className="md:hidden grid grid-cols-2 gap-4">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="tech-card animate-fade-in-up"
                style={{
                  background: '#FFFFFF',
                  borderRadius: '18px',
                  padding: '32px 24px',
                  border: '1px solid rgba(0, 0, 0, 0.06)',
                  boxShadow: '0 6px 24px rgba(21, 21, 97, 0.06)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  animationDelay: `${index * 0.05}s`,
                  textAlign: 'center',
                }}
              >
                <div 
                  style={{
                    width: '50px',
                    height: '50px',
                    background: `${tech.color}15`,
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px',
                  }}
                >
                  <Code size={24} color={tech.color} />
                </div>

                <h4 
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#151561',
                    lineHeight: '1.3',
                  }}
                >
                  {tech.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 💬 TESTIMONIAL */}
      <section 
        className="testimonial-section lg:py-[120px] md:py-20 py-16"
        style={{
          background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFF 100%)',
        }}
      >
        <div className="max-w-[1440px] mx-auto lg:px-12 md:px-8 px-4">
          {/* DESKTOP: Original Layout (≥1280px) — LOCKED */}
          <div 
            className="hidden lg:block testimonial-card animate-fade-in"
            style={{
              maxWidth: '900px',
              margin: '0 auto',
              background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)',
              borderRadius: '32px',
              padding: '60px',
              border: '1px solid rgba(0, 0, 0, 0.06)',
              boxShadow: '0 20px 60px rgba(21, 21, 97, 0.12)',
            }}
          >
            <div className="flex items-start gap-8">
              <div 
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #151561 0%, #3434A0 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: '0 8px 24px rgba(21, 21, 97, 0.25)',
                }}
              >
                <Users size={36} color="#FFFFFF" />
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
                  &quot;Optichore built our entire SaaS platform from the ground up. Their technical expertise, clean code, and enterprise architecture have scaled with us from 100 to 10,000 users seamlessly.&quot;
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
                    David Chen
                  </div>
                  <div 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '16px',
                      fontWeight: 400,
                      color: '#505050',
                    }}
                  >
                    CTO, CloudMetrics Inc.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TABLET: Reduced Padding (768px-1024px) */}
          <div 
            className="hidden md:block lg:hidden testimonial-card animate-fade-in"
            style={{
              maxWidth: '90%',
              margin: '0 auto',
              background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)',
              borderRadius: '32px',
              padding: '48px',
              border: '1px solid rgba(0, 0, 0, 0.06)',
              boxShadow: '0 20px 60px rgba(21, 21, 97, 0.12)',
            }}
          >
            <div className="flex items-start gap-6">
              <div 
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #151561 0%, #3434A0 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: '0 8px 24px rgba(21, 21, 97, 0.25)',
                }}
              >
                <Users size={36} color="#FFFFFF" />
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
                  &quot;Optichore built our entire SaaS platform from the ground up. Their technical expertise, clean code, and enterprise architecture have scaled with us from 100 to 10,000 users seamlessly.&quot;
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
                    David Chen
                  </div>
                  <div 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '16px',
                      fontWeight: 400,
                      color: '#505050',
                    }}
                  >
                    CTO, CloudMetrics Inc.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* MOBILE: Full-Width with Side Padding (≤767px) */}
          <div 
            className="md:hidden testimonial-card animate-fade-in"
            style={{
              width: '100%',
              background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)',
              borderRadius: '24px',
              padding: '32px 20px',
              border: '1px solid rgba(0, 0, 0, 0.06)',
              boxShadow: '0 20px 60px rgba(21, 21, 97, 0.12)',
            }}
          >
            <div className="flex flex-col gap-6">
              <div 
                style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #151561 0%, #3434A0 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: '0 8px 24px rgba(21, 21, 97, 0.25)',
                }}
              >
                <Users size={32} color="#FFFFFF" />
              </div>

              <div>
                <p 
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '22px',
                    fontWeight: 400,
                    color: '#151561',
                    lineHeight: '1.7',
                    marginBottom: '24px',
                    fontStyle: 'italic',
                    textAlign: 'left',
                  }}
                >
                  &quot;Optichore built our entire SaaS platform from the ground up. Their technical expertise, clean code, and enterprise architecture have scaled with us from 100 to 10,000 users seamlessly.&quot;
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
                    David Chen
                  </div>
                  <div 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '16px',
                      fontWeight: 400,
                      color: '#505050',
                    }}
                  >
                    CTO, CloudMetrics Inc.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 FINAL CTA SECTION */}
      <section 
        className="final-cta-section lg:py-[140px] md:py-24 py-20"
        style={{
          background: 'linear-gradient(180deg, #F8FAFF 0%, #FFFFFF 100%)',
        }}
      >
        <div className="max-w-[1440px] mx-auto lg:px-12 md:px-8 px-4">
          {/* DESKTOP: Original Layout (≥1280px) — LOCKED */}
          <div className="hidden lg:block text-center animate-fade-in">
            <h2 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '56px',
                fontWeight: 700,
                color: '#151561',
                letterSpacing: '-0.02em',
                marginBottom: '24px',
                lineHeight: '1.15',
              }}
            >
              Let&apos;s Build Your Next<br />Scalable Software Solution
            </h2>

            <p 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '20px',
                fontWeight: 400,
                color: '#505050',
                lineHeight: '1.7',
                maxWidth: '700px',
                margin: '0 auto 48px',
              }}
            >
              Ready to transform your business with custom software built for scale?
            </p>

            <div className="flex items-center justify-center gap-5">
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
          </div>

          {/* TABLET: Centered with Inline Buttons (768px-1024px) */}
          <div className="hidden md:block lg:hidden text-center animate-fade-in">
            <h2 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '56px',
                fontWeight: 700,
                color: '#151561',
                letterSpacing: '-0.02em',
                marginBottom: '24px',
                lineHeight: '1.15',
              }}
            >
              Let&apos;s Build Your Next Scalable Software Solution
            </h2>

            <p 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '20px',
                fontWeight: 400,
                color: '#505050',
                lineHeight: '1.7',
                maxWidth: '90%',
                margin: '0 auto 48px',
              }}
            >
              Ready to transform your business with custom software built for scale?
            </p>

            <div className="flex items-center justify-center flex-wrap gap-4">
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
          </div>

          {/* MOBILE: Stacked Buttons (≤767px) */}
          <div className="md:hidden text-center animate-fade-in">
            <h2 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '56px',
                fontWeight: 700,
                color: '#151561',
                letterSpacing: '-0.02em',
                marginBottom: '24px',
                lineHeight: '1.15',
              }}
            >
              Let&apos;s Build Your Next Scalable Software Solution
            </h2>

            <p 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '20px',
                fontWeight: 400,
                color: '#505050',
                lineHeight: '1.7',
                maxWidth: '90%',
                margin: '0 auto 48px',
              }}
            >
              Ready to transform your business with custom software built for scale?
            </p>

            <div className="flex flex-col items-center gap-4">
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
                  maxWidth: '320px',
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
                  maxWidth: '320px',
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

        /* Engineering Cards Hover */
        .engineering-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(21, 21, 97, 0.15);
        }

        /* Tech Cards Hover */
        .tech-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 40px rgba(21, 21, 97, 0.12);
        }

        /* Showcase Cards Hover */
        .showcase-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(21, 21, 97, 0.15);
        }

        /* Smooth Scroll */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}