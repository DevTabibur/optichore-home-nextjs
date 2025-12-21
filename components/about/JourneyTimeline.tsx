import { Calendar } from 'lucide-react';

export function JourneyTimeline() {
  const milestones = [
    {
      date: 'Jan 2025',
      title: 'Foundation',
      description: 'Optichore was founded with a vision to redefine digital innovation and empower brands through strategic design and technology.',
    },
    {
      date: 'Feb 2025',
      title: 'Meta Business Partner',
      description: 'Achieved official Meta Business Partner recognition, unlocking access to advanced tools, partner insights, and platform-level support.',
    },
    {
      date: 'Nov 2025',
      title: 'Verified Tech Provider',
      description: 'Became a Verified Technology Provider, ensuring secure, scalable, and performance-driven digital solutions.',
    },
  ];

  return (
    <section className="journey-timeline-section w-full lg:py-40 md:py-32 py-24" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="timeline-container max-w-[1440px] mx-auto lg:px-12 md:px-8 px-6">
        {/* Section Header */}
        <div className="timeline-header text-center lg:mb-24 md:mb-20 mb-16">
          <div 
            className="timeline-label lg:mb-6 md:mb-5 mb-4"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              fontWeight: 500,
              color: '#FF0000',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            OUR JOURNEY
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
            Milestones That Define Us
          </h2>
        </div>

        {/* DESKTOP & TABLET: Horizontal Timeline (≥768px) */}
        <div className="hidden md:block timeline-wrapper-horizontal relative">
          {/* Timeline Line */}
          <div 
            className="timeline-line absolute lg:top-10 md:top-9"
            style={{
              left: '0',
              right: '0',
              height: '3px',
              backgroundColor: 'rgba(21, 21, 97, 0.15)',
              zIndex: 0,
            }}
          />

          {/* Milestones Grid */}
          <div className="milestones-grid grid lg:grid-cols-3 md:grid-cols-3 lg:gap-12 md:gap-8 relative z-10">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="milestone-item"
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                {/* Circle Marker */}
                <div className="milestone-circle-wrapper flex justify-center lg:mb-8 md:mb-6">
                  <div 
                    className="milestone-circle lg:w-20 lg:h-20 md:w-[72px] md:h-[72px]"
                    style={{
                      borderRadius: '50%',
                      backgroundColor: '#FFFFFF',
                      border: '4px solid #FF0000',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 24px rgba(255, 0, 0, 0.2)',
                      transition: 'all 0.4s ease',
                    }}
                  >
                    <Calendar className="lg:w-8 lg:h-8 md:w-7 md:h-7" style={{ color: '#FF0000' }} />
                  </div>
                </div>

                {/* Card */}
                <div 
                  className="milestone-card lg:p-8 md:p-6"
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '20px',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  {/* Date */}
                  <div 
                    className="lg:text-[15px] md:text-sm lg:mb-3 md:mb-3"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 600,
                      color: '#FF0000',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {milestone.date}
                  </div>

                  {/* Title */}
                  <h3 
                    className="lg:text-2xl md:text-xl lg:mb-3 md:mb-3"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 700,
                      color: '#151561',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {milestone.title}
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
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE: Vertical Timeline (≤767px) */}
        <div className="md:hidden timeline-wrapper-vertical">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="milestone-item-mobile relative pb-10 last:pb-0"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              {/* Vertical Line (except for last item) */}
              {index < milestones.length - 1 && (
                <div 
                  className="timeline-vertical-line absolute left-8"
                  style={{
                    top: '64px',
                    bottom: '-40px',
                    width: '3px',
                    backgroundColor: 'rgba(21, 21, 97, 0.15)',
                    zIndex: 0,
                  }}
                />
              )}

              <div className="flex gap-6 relative z-10">
                {/* Circle Marker */}
                <div className="milestone-circle-mobile flex-shrink-0">
                  <div 
                    className="milestone-circle"
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      backgroundColor: '#FFFFFF',
                      border: '4px solid #FF0000',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 24px rgba(255, 0, 0, 0.2)',
                    }}
                  >
                    <Calendar className="w-7 h-7" style={{ color: '#FF0000' }} />
                  </div>
                </div>

                {/* Card */}
                <div 
                  className="milestone-card-mobile flex-1 p-6"
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '16px',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06)',
                  }}
                >
                  {/* Date */}
                  <div 
                    className="text-sm mb-2"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 600,
                      color: '#FF0000',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {milestone.date}
                  </div>

                  {/* Title */}
                  <h3 
                    className="text-xl mb-2"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 700,
                      color: '#151561',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {milestone.title}
                  </h3>

                  {/* Description */}
                  <p 
                    className="text-[15px]"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 400,
                      color: '#505050',
                      lineHeight: '1.65',
                    }}
                  >
                    {milestone.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* STYLES */}
      <style>{`
        /* Milestone Item Animation */
        @keyframes milestonePopUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .milestone-item,
        .milestone-item-mobile {
          opacity: 0;
          animation: milestonePopUp 0.9s ease forwards;
        }

        /* Desktop/Tablet Hover Effects */
        @media (min-width: 768px) {
          .milestone-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 16px 56px rgba(0, 0, 0, 0.12);
          }

          .milestone-item:hover .milestone-circle {
            transform: scale(1.15);
            box-shadow: 0 12px 32px rgba(255, 0, 0, 0.35);
          }
        }

        /* Mobile: No Hover Effects */
        .milestone-card-mobile {
          /* Static on mobile */
        }
      `}</style>
    </section>
  );
}