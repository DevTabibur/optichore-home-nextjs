"use client"
import { useState, useEffect } from 'react';
import { ArrowRight, Users, TrendingUp, Target, Palette, Search, Layers, Pencil, Monitor, TestTube, CheckCircle, Zap, Eye, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { UIUXHero } from '@/components/services/UIUXHero';


export default function UIUXDesignPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const impactCards = [
    {
      icon: Users,
      title: 'User-Centered Experiences',
      description: 'We put your users first, crafting interfaces that are intuitive, accessible, and delightful to use.'
    },
    {
      icon: TrendingUp,
      title: 'Data-Backed Decision Making',
      description: 'Every design decision is informed by research, analytics, and user feedback to ensure optimal results.'
    },
    {
      icon: Target,
      title: 'Conversion-Optimized Flows',
      description: 'Strategic design that guides users seamlessly through their journey, maximizing engagement and conversions.'
    },
    {
      icon: Palette,
      title: 'Brand-Consistent Interface Design',
      description: 'Beautiful interfaces that authentically reflect your brand identity and create lasting impressions.'
    }
  ];

  const capabilities = [
    {
      icon: Search,
      title: 'UX Research & Interviews',
      description: 'Deep user insights through qualitative research, surveys, and stakeholder interviews to inform design strategy.'
    },
    {
      icon: Layers,
      title: 'User Flows',
      description: 'Strategic mapping of user journeys to optimize navigation, reduce friction, and improve task completion.'
    },
    {
      icon: Pencil,
      title: 'Wireframes',
      description: 'Low-fidelity structural blueprints that establish layout, hierarchy, and interaction patterns before design.'
    },
    {
      icon: Monitor,
      title: 'Interface Design & Design Systems',
      description: 'Pixel-perfect UI design with scalable component libraries and design systems for consistency.'
    },
    {
      icon: Zap,
      title: 'Prototyping',
      description: 'Interactive, high-fidelity prototypes that bring designs to life and validate concepts before development.'
    },
    {
      icon: TestTube,
      title: 'Usability Testing',
      description: 'Real user testing to identify pain points, validate assumptions, and refine the experience iteratively.'
    }
  ];

  const processSteps = [
    { icon: Search, label: 'Discovery & Research', description: 'Understanding users, goals, and context' },
    { icon: Layers, label: 'Journey Mapping', description: 'Defining flows and touchpoints' },
    { icon: Pencil, label: 'Wireframes', description: 'Structuring layouts and hierarchy' },
    { icon: Palette, label: 'Interface Design', description: 'Crafting visual experiences' },
    { icon: Zap, label: 'Prototyping', description: 'Building interactive models' },
    { icon: TestTube, label: 'Testing & Revision', description: 'Validating and refining' }
  ];

  return (
    <div className="uiux-design-page" style={{ backgroundColor: '#FFFFFF' }}>

      {/* 🌟 HERO SECTION — RESPONSIVE UIUXHero Component */}
      <UIUXHero />

      {/* 🎯 IMPACT SECTION — WHY UI/UX MATTERS */}
      <section 
        className="impact-section lg:py-[120px] md:py-[100px] py-20"
        style={{
          backgroundColor: '#FFFFFF',
        }}
      >
        <div className="max-w-[1440px] mx-auto lg:px-12 md:px-8 px-5">
          <div className="text-center lg:mb-20 md:mb-16 mb-12">
            <h2 
              className="md:max-w-none max-w-[320px] mx-auto"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '48px',
                fontWeight: 700,
                color: '#151561',
                letterSpacing: '-0.02em',
                marginBottom: '16px',
              }}
            >
              Why UI/UX Design Matters
            </h2>
            <p 
              className="md:max-w-[700px] max-w-[300px] mx-auto"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '20px',
                fontWeight: 400,
                color: '#505050',
                lineHeight: '1.7',
              }}
            >
              Great design isn&apos;t just about aesthetics—it&apos;s about creating experiences that drive real business results.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-6 gap-6 md:max-w-none max-w-[340px] mx-auto">
            {impactCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={index}
                  className="impact-card animate-fade-in-up"
                  style={{
                    background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)',
                    borderRadius: '24px',
                    padding: window.innerWidth < 768 ? '32px 24px' : '40px 32px',
                    border: '1px solid rgba(0, 0, 0, 0.06)',
                    boxShadow: '0 8px 32px rgba(21, 21, 97, 0.08)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div 
                    style={{
                      width: '64px',
                      height: '64px',
                      background: 'linear-gradient(135deg, #FF0000 0%, #FF3333 100%)',
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '24px',
                      boxShadow: '0 8px 24px rgba(255, 0, 0, 0.25)',
                    }}
                  >
                    <Icon size={32} color="#FFFFFF" />
                  </div>

                  <h3 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '22px',
                      fontWeight: 600,
                      color: '#151561',
                      marginBottom: '12px',
                      lineHeight: '1.3',
                      textAlign: 'left',
                    }}
                  >
                    {card.title}
                  </h3>

                  <p 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '16px',
                      fontWeight: 400,
                      color: '#505050',
                      lineHeight: '1.65',
                      textAlign: 'left',
                    }}
                  >
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 🎨 CAPABILITIES GRID */}
      <section 
        className="capabilities-section lg:py-[120px] md:py-[100px] py-20"
        style={{
          background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFF 100%)',
        }}
      >
        <div className="max-w-[1440px] mx-auto lg:px-12 md:px-8 px-5">
          <div className="text-center lg:mb-20 md:mb-16 mb-12">
            <h2 
              className="md:max-w-none max-w-[320px] mx-auto"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '48px',
                fontWeight: 700,
                color: '#151561',
                letterSpacing: '-0.02em',
                marginBottom: '16px',
              }}
            >
              Our UI/UX Capabilities
            </h2>
            <p 
              className="md:max-w-[700px] max-w-[300px] mx-auto"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '20px',
                fontWeight: 400,
                color: '#505050',
                lineHeight: '1.7',
              }}
            >
              Comprehensive design services that cover every stage of the user experience journey.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-x-6 md:gap-y-8 gap-6 md:max-w-none max-w-[360px] mx-auto">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div
                  key={index}
                  className="capability-card glassmorphism animate-fade-in-up"
                  style={{
                    background: 'rgba(255, 255, 255, 0.7)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    borderRadius: '24px',
                    padding: window.innerWidth < 768 ? '28px 20px' : '40px',
                    border: '1px solid rgba(255, 255, 255, 0.4)',
                    boxShadow: '0 8px 32px rgba(21, 21, 97, 0.1)',
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
                      textAlign: 'left',
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
                      textAlign: 'left',
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

      {/* 🔄 PROCESS TIMELINE */}
      <section 
        className="process-timeline-section lg:py-[120px] md:py-[100px] py-20"
        style={{
          backgroundColor: '#FFFFFF',
        }}
      >
        <div className="max-w-[1440px] mx-auto lg:px-12 md:px-8 px-5">
          <div className="text-center lg:mb-20 md:mb-16 mb-12">
            <h2 
              className="md:max-w-none max-w-[320px] mx-auto"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '48px',
                fontWeight: 700,
                color: '#151561',
                letterSpacing: '-0.02em',
                marginBottom: '16px',
              }}
            >
              Our Design Process
            </h2>
            <p 
              className="md:max-w-[700px] max-w-[300px] mx-auto"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '20px',
                fontWeight: 400,
                color: '#505050',
                lineHeight: '1.7',
              }}
            >
              A systematic approach that ensures every pixel serves a purpose.
            </p>
          </div>

          {/* ========================================== */}
          {/* DESKTOP: Horizontal Timeline (≥1024px) — LOCKED */}
          {/* ========================================== */}
          <div className="hidden lg:block relative" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
            {/* Timeline Line */}
            <div 
              style={{
                position: 'absolute',
                top: '100px',
                left: '5%',
                right: '5%',
                height: '3px',
                background: 'linear-gradient(90deg, #151561 0%, #FF0000 100%)',
                opacity: 0.2,
              }}
            />

            <div className="grid grid-cols-6 gap-6">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className="process-step animate-fade-in-up"
                    style={{
                      textAlign: 'center',
                      position: 'relative',
                      animationDelay: `${index * 0.15}s`,
                    }}
                  >
                    {/* Icon Circle */}
                    <div 
                      style={{
                        width: '90px',
                        height: '90px',
                        background: index % 2 === 0 
                          ? 'linear-gradient(135deg, #151561 0%, #3434A0 100%)' 
                          : 'linear-gradient(135deg, #FF0000 0%, #FF3333 100%)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 24px',
                        boxShadow: index % 2 === 0 
                          ? '0 12px 32px rgba(21, 21, 97, 0.3)' 
                          : '0 12px 32px rgba(255, 0, 0, 0.3)',
                        position: 'relative',
                        zIndex: 2,
                      }}
                    >
                      <Icon size={36} color="#FFFFFF" />
                    </div>

                    <h4 
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '18px',
                        fontWeight: 600,
                        color: '#151561',
                        marginBottom: '8px',
                        lineHeight: '1.3',
                      }}
                    >
                      {step.label}
                    </h4>

                    <p 
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '14px',
                        fontWeight: 400,
                        color: '#505050',
                        lineHeight: '1.5',
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ========================================== */}
          {/* TABLET: Two-Row Layout (768px-1023px) */}
          {/* ========================================== */}
          <div className="hidden md:block lg:hidden" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
            {/* Row 1: Steps 1-3 */}
            <div className="relative mb-12">
              {/* Connector Line for Row 1 */}
              <div 
                style={{
                  position: 'absolute',
                  top: '45px',
                  left: '15%',
                  right: '15%',
                  height: '2px',
                  background: 'linear-gradient(90deg, #151561 0%, #FF0000 100%)',
                  opacity: 0.2,
                  zIndex: 1,
                }}
              />
              
              <div className="grid grid-cols-3 gap-8">
                {processSteps.slice(0, 3).map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={index}
                      className="process-step animate-fade-in-up"
                      style={{
                        textAlign: 'center',
                        position: 'relative',
                        animationDelay: `${index * 0.15}s`,
                      }}
                    >
                      <div 
                        style={{
                          width: '90px',
                          height: '90px',
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
                        <Icon size={36} color="#FFFFFF" />
                      </div>

                      <h4 
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '18px',
                          fontWeight: 600,
                          color: '#151561',
                          marginBottom: '8px',
                          lineHeight: '1.3',
                        }}
                      >
                        {step.label}
                      </h4>

                      <p 
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '14px',
                          fontWeight: 400,
                          color: '#505050',
                          lineHeight: '1.5',
                        }}
                      >
                        {step.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Row 2: Steps 4-6 */}
            <div className="relative">
              {/* Connector Line for Row 2 */}
              <div 
                style={{
                  position: 'absolute',
                  top: '45px',
                  left: '15%',
                  right: '15%',
                  height: '2px',
                  background: 'linear-gradient(90deg, #151561 0%, #FF0000 100%)',
                  opacity: 0.2,
                  zIndex: 1,
                }}
              />
              
              <div className="grid grid-cols-3 gap-8">
                {processSteps.slice(3, 6).map((step, index) => {
                  const Icon = step.icon;
                  const actualIndex = index + 3;
                  return (
                    <div
                      key={actualIndex}
                      className="process-step animate-fade-in-up"
                      style={{
                        textAlign: 'center',
                        position: 'relative',
                        animationDelay: `${actualIndex * 0.15}s`,
                      }}
                    >
                      <div 
                        style={{
                          width: '90px',
                          height: '90px',
                          background: actualIndex % 2 === 0 
                            ? 'linear-gradient(135deg, #151561 0%, #3434A0 100%)' 
                            : 'linear-gradient(135deg, #FF0000 0%, #FF3333 100%)',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: '0 auto 20px',
                          boxShadow: actualIndex % 2 === 0 
                            ? '0 12px 32px rgba(21, 21, 97, 0.3)' 
                            : '0 12px 32px rgba(255, 0, 0, 0.3)',
                          position: 'relative',
                          zIndex: 2,
                        }}
                      >
                        <Icon size={36} color="#FFFFFF" />
                      </div>

                      <h4 
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '18px',
                          fontWeight: 600,
                          color: '#151561',
                          marginBottom: '8px',
                          lineHeight: '1.3',
                        }}
                      >
                        {step.label}
                      </h4>

                      <p 
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '14px',
                          fontWeight: 400,
                          color: '#505050',
                          lineHeight: '1.5',
                        }}
                      >
                        {step.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ========================================== */}
          {/* MOBILE: Vertical Timeline (≤767px) */}
          {/* ========================================== */}
          <div className="md:hidden relative" style={{ paddingTop: '20px', paddingBottom: '20px', maxWidth: '320px', margin: '0 auto' }}>
            {/* Vertical Dotted Line */}
            <div 
              style={{
                position: 'absolute',
                top: '45px',
                bottom: '45px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '2px',
                backgroundImage: 'linear-gradient(to bottom, #151561 50%, transparent 50%)',
                backgroundSize: '2px 12px',
                backgroundRepeat: 'repeat-y',
                opacity: 0.3,
                zIndex: 1,
              }}
            />

            {/* Steps */}
            <div className="space-y-10">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className="process-step-mobile animate-fade-in-up"
                    style={{
                      textAlign: 'center',
                      position: 'relative',
                      animationDelay: `${index * 0.1}s`,
                    }}
                  >
                    {/* Icon Circle */}
                    <div 
                      style={{
                        width: '90px',
                        height: '90px',
                        background: index % 2 === 0 
                          ? 'linear-gradient(135deg, #151561 0%, #3434A0 100%)' 
                          : 'linear-gradient(135deg, #FF0000 0%, #FF3333 100%)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 16px',
                        boxShadow: index % 2 === 0 
                          ? '0 12px 32px rgba(21, 21, 97, 0.3)' 
                          : '0 12px 32px rgba(255, 0, 0, 0.3)',
                        position: 'relative',
                        zIndex: 2,
                        backgroundColor: '#FFFFFF',
                      }}
                    >
                      <Icon size={36} color="#FFFFFF" />
                    </div>

                    <h4 
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '18px',
                        fontWeight: 600,
                        color: '#151561',
                        marginBottom: '8px',
                        lineHeight: '1.3',
                        textAlign: 'center',
                      }}
                    >
                      {step.label}
                    </h4>

                    <p 
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '14px',
                        fontWeight: 400,
                        color: '#505050',
                        lineHeight: '1.5',
                        textAlign: 'center',
                        maxWidth: '300px',
                        margin: '0 auto',
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 💬 TESTIMONIAL BLOCK */}
      <section 
        className="testimonial-section lg:py-[120px] md:py-[100px] py-20"
        style={{
          backgroundColor: '#FFFFFF',
        }}
      >
        <div className="max-w-[1440px] mx-auto lg:px-12 md:px-8 px-5">
          <div 
            className="testimonial-card animate-fade-in lg:p-[60px] md:p-10 p-5 md:rounded-[32px] rounded-3xl"
            style={{
              maxWidth: '900px',
              margin: '0 auto',
              background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)',
              border: '1px solid rgba(0, 0, 0, 0.06)',
              boxShadow: '0 20px 60px rgba(21, 21, 97, 0.12)',
            }}
          >
            {/* DESKTOP & TABLET: Horizontal Layout */}
            <div className="hidden md:flex items-start md:gap-6 lg:gap-8">
              <div 
                className="md:w-[70px] md:h-[70px] lg:w-20 lg:h-20"
                style={{
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #151561 0%, #3434A0 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: '0 8px 24px rgba(21, 21, 97, 0.25)',
                }}
              >
                <MessageCircle className="md:w-8 md:h-8 lg:w-9 lg:h-9" color="#FFFFFF" />
              </div>

              <div style={{ flex: 1 }}>
                <p 
                  className="lg:text-[22px] md:text-xl lg:mb-7 md:mb-6"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    color: '#151561',
                    lineHeight: '1.7',
                    fontStyle: 'italic',
                  }}
                >
                  &quot;The UI/UX work Optichore delivered transformed our digital presence. Our user engagement increased by 150% and conversions doubled within the first quarter.&quot;
                </p>

                <div>
                  <div 
                    className="lg:text-lg md:text-base"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 600,
                      color: '#151561',
                      marginBottom: '4px',
                    }}
                  >
                    Michael Rodriguez
                  </div>
                  <div 
                    className="lg:text-base md:text-sm"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 400,
                      color: '#505050',
                    }}
                  >
                    Product Director, TechFlow Solutions
                  </div>
                </div>
              </div>
            </div>

            {/* MOBILE: Vertical Stacked Layout */}
            <div className="md:hidden flex flex-col items-center text-center">
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
                  marginBottom: '24px',
                }}
              >
                <MessageCircle size={36} color="#FFFFFF" />
              </div>

              <p 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '18px',
                  fontWeight: 400,
                  color: '#151561',
                  lineHeight: '1.7',
                  marginBottom: '24px',
                  fontStyle: 'italic',
                }}
              >
                &quot;The UI/UX work Optichore delivered transformed our digital presence. Our user engagement increased by 150% and conversions doubled within the first quarter.&quot;
              </p>

              <div>
                <div 
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '17px',
                    fontWeight: 600,
                    color: '#151561',
                    marginBottom: '4px',
                  }}
                >
                  Michael Rodriguez
                </div>
                <div 
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '15px',
                    fontWeight: 400,
                    color: '#505050',
                  }}
                >
                  Product Director, TechFlow Solutions
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 FINAL CTA SECTION */}
      <section 
        className="final-cta-section lg:py-[140px] md:py-[120px] py-20"
        style={{
          background: 'linear-gradient(180deg, #F8FAFF 0%, #FFFFFF 100%)',
        }}
      >
        <div className="max-w-[1440px] mx-auto lg:px-12 md:px-8 px-5">
          <div className="text-center animate-fade-in">
            <h2 
              className="lg:text-[56px] md:text-5xl text-4xl lg:mb-6 md:mb-6 mb-5"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                color: '#151561',
                letterSpacing: '-0.02em',
                lineHeight: '1.15',
              }}
            >
              <span className="md:inline block">Let&apos;s Design Exceptional</span><br className="md:inline hidden" /><span className="md:inline block">User Experiences Together</span>
            </h2>

            <p 
              className="lg:text-xl md:text-lg text-base lg:mb-12 md:mb-10 mb-8 md:max-w-[700px] max-w-[90%] mx-auto"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                color: '#505050',
                lineHeight: '1.7',
              }}
            >
              Ready to create interfaces that users love and conversions that drive growth?
            </p>

            {/* DESKTOP & TABLET: Buttons Side by Side */}
            <div className="hidden md:flex items-center justify-center lg:gap-5 md:gap-4">
              <button
                className="cta-primary-btn lg:px-10 md:px-8"
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
                Start Your Project
                <ArrowRight size={20} />
              </button>

              <button
                className="cta-secondary-btn lg:px-10 md:px-8"
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

            {/* MOBILE: Buttons Stacked Vertically */}
            <div className="md:hidden flex flex-col gap-4 max-w-[340px] mx-auto">
              <button
                className="cta-primary-btn w-full"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '17px',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  backgroundColor: '#FF0000',
                  padding: '18px 32px',
                  borderRadius: '50px',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 8px 24px rgba(255, 0, 0, 0.25)',
                  transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  minHeight: '56px',
                }}
              >
                Start Your Project
                <ArrowRight size={20} />
              </button>

              <button
                className="cta-secondary-btn w-full"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '17px',
                  fontWeight: 600,
                  color: '#151561',
                  backgroundColor: 'transparent',
                  padding: '18px 32px',
                  borderRadius: '50px',
                  border: '2px solid #151561',
                  cursor: 'pointer',
                  transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  minHeight: '56px',
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

        /* Card Hover Effects */
        .impact-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(21, 21, 97, 0.15);
        }

        .capability-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(21, 21, 97, 0.18);
          background: rgba(255, 255, 255, 0.85);
        }

        .showcase-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(21, 21, 97, 0.15);
        }

        /* Glassmorphism */
        .glassmorphism {
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }

        /* Smooth Scroll */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}