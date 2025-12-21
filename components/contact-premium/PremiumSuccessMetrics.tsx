import { Target, Users, TrendingUp, Shield, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function PremiumSuccessMetrics() {
  const features = [
    {
      icon: Target,
      title: 'Partner-Level Strategy Alignment',
      description: 'We follow Meta\'s best practices for campaign structure, budgeting, audience building, and creative testing.',
    },
    {
      icon: Users,
      title: 'Dedicated Campaign Manager',
      description: 'Real human monitoring, daily optimization, and tailored execution by a specialist.',
    },
    {
      icon: TrendingUp,
      title: 'Data-Driven Optimization',
      description: 'We refine targeting, creatives, and bidding strategies to maximize ROAS and reduce CPA.',
    },
  ];

  const badges = [
    {
      label: 'Meta Business Partner',
      icon: Shield,
    },
    {
      label: 'Verified Tech Provider',
      icon: CheckCircle2,
    },
  ];

  return (
    <section
      className="why-choose-premium-section w-full py-40"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FBFF 100%)',
      }}
    >
      <div className="why-choose-container max-w-[1440px] mx-auto px-12">
        <div className="why-choose-grid grid grid-cols-2 gap-20 items-center">

          {/* LEFT SIDE — VALUE PROPOSITION */}
          <div className="value-proposition-block">
            {/* Label */}
            <div
              className="why-label-animate why-choose-label mb-6"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                fontWeight: 600,
                color: '#FF0000',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              WHY CHOOSE US
            </div>

            {/* Main Heading */}
            <h2
              className="why-heading-animate why-choose-heading"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '52px',
                fontWeight: 700,
                color: '#151561',
                letterSpacing: '-0.02em',
                lineHeight: '1.15',
                marginBottom: '28px',
              }}
            >
              We Help Brands Grow Through Facebook — The Right Way
            </h2>

            {/* Subtext */}
            <p
              className="why-subtext-animate why-choose-paragraph"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '19px',
                fontWeight: 400,
                color: '#505050',
                lineHeight: '1.75',
                marginBottom: '56px',
              }}
            >
              Optichore specializes in performance-driven Facebook marketing for brands looking to scale with paid advertising, creative strategy, and data-backed optimization. With verified partner credentials and deep hands-on experience, we bring expertise you can trust.
            </p>

            {/* 3 FEATURE COLUMNS */}
            <div className="features-list why-choose-features mb-12">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="feature-row-item"
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '20px',
                      marginBottom: '32px',
                      animationDelay: `${index * 120}ms`,
                    }}
                  >
                    {/* Icon */}
                    <div
                      style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '14px',
                        background: 'linear-gradient(135deg, rgba(255, 0, 0, 0.08) 0%, rgba(21, 21, 97, 0.06) 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        transition: 'all 0.3s ease',
                      }}
                      className="feature-icon-box"
                    >
                      <IconComponent className="w-6 h-6" style={{ color: '#FF0000' }} />
                    </div>

                    {/* Text */}
                    <div className="feature-text-content">
                      <h4
                        className="feature-title"
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '20px',
                          fontWeight: 600,
                          color: '#151561',
                          marginBottom: '8px',
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {feature.title}
                      </h4>
                      <p
                        className="feature-description"
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '16px',
                          fontWeight: 400,
                          color: '#505050',
                          lineHeight: '1.65',
                        }}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* META PARTNER + TECH PROVIDER BADGES */}
            <div className="badges-row why-choose-badges flex gap-5">
              {badges.map((badge, index) => {
                const BadgeIcon = badge.icon;
                return (
                  <div
                    key={index}
                    className="glass-badge"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '14px 24px',
                      background: 'rgba(255, 255, 255, 0.6)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      border: '1px solid rgba(21, 21, 97, 0.12)',
                      borderRadius: '50px',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      animationDelay: `${index * 150}ms`,
                    }}
                  >
                    <BadgeIcon className="w-5 h-5" style={{ color: '#151561' }} />
                    <span
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '14px',
                        fontWeight: 600,
                        color: '#151561',
                      }}
                    >
                      {badge.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDE — PREMIUM IMAGE COMPOSITION */}
          <div className="image-composition-block why-choose-images" style={{ position: 'relative', height: '680px' }}>
            {/* Large Main Image */}
            <div
              className="main-image-float why-main-image"
              style={{
                position: 'absolute',
                top: '0',
                right: '0',
                width: '85%',
                height: '520px',
                borderRadius: '32px',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.12)',
                zIndex: 2,
              }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1762330466791-8db62b3c9eee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNlYm9vayUyMGFkcyUyMGRhc2hib2FyZCUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NjM2Njk3MDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Marketing Dashboard"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>

            {/* Smaller Floating Image Overlapping */}
            <div
              className="floating-image-overlap why-secondary-image"
              style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                width: '50%',
                height: '320px',
                borderRadius: '28px',
                overflow: 'hidden',
                boxShadow: '0 24px 64px rgba(0, 0, 0, 0.16)',
                zIndex: 3,
                border: '6px solid #FFFFFF',
              }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1547621008-d6d6d2e28e81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwc29jaWFsJTIwbWVkaWF8ZW58MXx8fHwxNzYzNjE0OTUxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Social Media Marketing"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>

            {/* Decorative Background Element */}
            <div
              className="decorative-bg"
              style={{
                position: 'absolute',
                top: '60px',
                left: '-40px',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(255, 0, 0, 0.06) 0%, transparent 70%)',
                borderRadius: '50%',
                zIndex: 1,
                filter: 'blur(40px)',
              }}
            />
          </div>

        </div>
      </div>

      {/* STYLES & ANIMATIONS */}
      <style>{`
        /* Text Fade-Up Animations */
        @keyframes whyLabelFade {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes whyHeadingFade {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes whySubtextFade {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .why-label-animate {
          animation: whyLabelFade 0.8s ease forwards;
        }

        .why-heading-animate {
          animation: whyHeadingFade 0.9s ease forwards 0.1s;
          opacity: 0;
        }

        .why-subtext-animate {
          animation: whySubtextFade 0.9s ease forwards 0.2s;
          opacity: 0;
        }

        /* Feature Row Slide-Up */
        @keyframes featureRowSlide {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .feature-row-item {
          opacity: 0;
          animation: featureRowSlide 0.8s ease forwards;
        }

        .feature-row-item:hover .feature-icon-box {
          transform: scale(1.08);
          background: linear-gradient(135deg, rgba(255, 0, 0, 0.12) 0%, rgba(21, 21, 97, 0.1) 100%);
        }

        /* Badge Animations */
        @keyframes badgeFadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .glass-badge {
          opacity: 0;
          animation: badgeFadeIn 0.8s ease forwards 0.5s;
        }

        .glass-badge:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
          background: rgba(255, 255, 255, 0.85);
          border-color: rgba(255, 0, 0, 0.2);
        }

        /* Image Floating Animations */
        @keyframes mainImageFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes floatingImageFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-16px);
          }
        }

        @keyframes imageFadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .main-image-float {
          animation: imageFadeIn 1s ease forwards, mainImageFloat 6s ease-in-out infinite 1s;
        }

        .floating-image-overlap {
          animation: imageFadeIn 1s ease forwards 0.3s, floatingImageFloat 5s ease-in-out infinite 1.3s;
          opacity: 0;
        }

        .decorative-bg {
          animation: mainImageFloat 8s ease-in-out infinite;
        }

        /* ===== TABLET BREAKPOINT (768px - 1024px) ===== */
        

        /* ===== MOBILE BREAKPOINT (≤767px) ===== */
        @media (max-width: 767px) {
          .why-choose-premium-section {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }

          .why-choose-container {
            padding-left: 1.25rem;
            padding-right: 1.25rem;
          }

          /* Single Column Layout */
          .why-choose-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }

          /* Content Order: Label -> Heading -> Paragraph -> Features -> Badges -> Images */
          .value-proposition-block {
            order: 1;
          }

          .image-composition-block {
            order: 2;
          }

          /* Label */
          .why-choose-label {
            text-align: center;
            font-size: 12px !important;
          }

          /* Heading */
          .why-choose-heading {
            font-size: 26px !important;
            text-align: center;
            margin-bottom: 20px !important;
          }

          /* Paragraph */
          .why-choose-paragraph {
            font-size: 15px !important;
            text-align: center;
            max-width: 90%;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 40px !important;
          }

          /* Features - Stack Vertically with Center Alignment */
          .why-choose-features {
            margin-bottom: 2rem !important;
          }

          .feature-row-item {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center;
            gap: 16px !important;
            margin-bottom: 28px !important;
          }

          .feature-icon-box {
            width: 48px !important;
            height: 48px !important;
            margin: 0 !important;
          }

          .feature-text-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .feature-title {
            font-size: 18px !important;
            text-align: center;
            margin-bottom: 6px !important;
          }

          .feature-description {
            font-size: 15px !important;
            text-align: center;
          }

          /* Disable hover effect on mobile */
          .feature-row-item:hover .feature-icon-box {
            transform: none;
          }

          /* Badges - Stack Vertically */
          .why-choose-badges {
            flex-direction: column;
            align-items: center;
            gap: 0.75rem !important;
            margin-bottom: 3rem;
          }

          .glass-badge {
            width: 100%;
            max-width: 280px;
            justify-content: center;
            padding: 12px 20px !important;
          }

          .glass-badge:hover {
            transform: none;
          }

          /* Images - Stack Vertically, No Overlapping */
          .why-choose-images {
            position: relative !important;
            height: auto !important;
            width: 100%;
          }

          .why-main-image {
            position: relative !important;
            top: auto !important;
            right: auto !important;
            left: auto !important;
            width: 100% !important;
            height: 280px !important;
            border-radius: 24px !important;
            margin-bottom: 1.25rem;
          }

          .why-secondary-image {
            position: relative !important;
            bottom: auto !important;
            left: auto !important;
            width: 100% !important;
            height: 240px !important;
            border-radius: 20px !important;
            border-width: 4px !important;
          }

          /* Hide decorative background on mobile */
          .decorative-bg {
            display: none;
          }

          /* Disable floating animations on mobile */
          .main-image-float,
          .floating-image-overlap {
            animation: imageFadeIn 1s ease forwards !important;
          }
        }
      `}</style>
    </section>
  );
}