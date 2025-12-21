import { Shield, Lightbulb, Award, Eye, Heart, Handshake } from 'lucide-react';

export function CoreValues() {
  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We uphold the highest standards of honesty, transparency, and ethical conduct in everything we do.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We continuously push boundaries, embracing new technologies and creative approaches to solve complex challenges.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We are committed to delivering exceptional quality and outstanding results in every project we undertake.',
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'We believe in open communication, clear reporting, and building trust through honest collaboration.',
    },
    {
      icon: Heart,
      title: 'Reliability',
      description: 'Our clients count on us to deliver consistent, dependable results that exceed expectations every time.',
    },
    {
      icon: Handshake,
      title: 'Long-term Partnerships',
      description: 'We focus on building lasting relationships, investing in our clients\' success as if it were our own.',
    },
  ];

  return (
    <section className="core-values-section w-full lg:py-40 md:py-32 py-24" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="values-container max-w-[1440px] mx-auto lg:px-12 md:px-8 px-6">
        {/* Section Header */}
        <div className="values-header text-center lg:mb-20 md:mb-16 mb-12">
          <div 
            className="values-label lg:mb-6 md:mb-5 mb-4"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              fontWeight: 500,
              color: '#FF0000',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            OUR CORE VALUES
          </div>
          <h2 
            className="lg:text-[48px] md:text-4xl text-4xl"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              color: '#151561',
              letterSpacing: '-0.02em',
              lineHeight: '1.15',
            }}
          >
            What Drives Us Forward
          </h2>
        </div>

        {/* Values Grid */}
        <div className="values-grid grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-8 gap-6">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={index}
                className="value-card lg:p-10 md:p-8 p-6"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Icon */}
                <div 
                  className="value-icon-wrapper mb-6"
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '14px',
                    backgroundColor: 'rgba(21, 21, 97, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <IconComponent className="w-7 h-7" style={{ color: '#151561' }} />
                </div>

                {/* Title */}
                <h3 
                  className="lg:text-2xl md:text-xl text-xl lg:mb-3 md:mb-3 mb-3"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    color: '#151561',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {value.title}
                </h3>

                {/* Description */}
                <p 
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    fontWeight: 400,
                    color: '#505050',
                    lineHeight: '1.65',
                  }}
                >
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* STYLES */}
      <style>{`
        /* Value Card Stagger Animation */
        @keyframes valueCardSlideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .value-card {
          opacity: 0;
          animation: valueCardSlideUp 0.8s ease forwards;
        }

        .value-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 56px rgba(0, 0, 0, 0.12);
        }

        .value-card:hover .value-icon-wrapper {
          background-color: rgba(21, 21, 97, 0.15);
          transform: scale(1.1);
        }

        .value-icon-wrapper {
          transition: all 0.3s ease;
        }
      `}</style>
    </section>
  );
}