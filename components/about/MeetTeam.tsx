import { ImageWithFallback } from '../figma/ImageWithFallback';
// import ceoImage from 'figma:asset/b59948c16a20b39c9dc10bb32b623e6f5f7b78aa.png';

export function MeetTeam() {
  // Leadership team data
  const leadership = [
    {
      name: 'MD Mahbubur Rahman',
      title: 'Chief Executive Officer (CEO)',
      // image: ceoImage,
    },
    {
      name: 'Riadur Rahman Chowdhury',
      title: 'Founder & Director',
      image: 'https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzY1Mjc5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  // Core team data
  const coreTeam = [
    {
      name: 'Sarah Mitchell',
      title: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1761522002071-67755dc6c820?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXNpZ25lciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzY0MDAzNXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'James Carter',
      title: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1737575655055-e3967cbefd03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjM2NTU5MzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Emily Rodriguez',
      title: 'Marketing Strategist',
      image: 'https://images.unsplash.com/photo-1763479169474-728a7de108c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYXJrZXRpbmclMjBzcGVjaWFsaXN0fGVufDF8fHx8MTc2MzY2NzUzNHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Michael Chen',
      title: 'UI/UX Designer',
      image: 'https://images.unsplash.com/photo-1761522002071-67755dc6c820?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXNpZ25lciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzY0MDAzNXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Sophia Patel',
      title: 'Project Manager',
      image: 'https://images.unsplash.com/photo-1570215171424-f74325192b55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwcm9qZWN0JTIwbWFuYWdlcnxlbnwxfHx8fDE3NjM2Njc1MzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'David Thompson',
      title: 'Business Strategist',
      image: 'https://images.unsplash.com/photo-1760545182201-9b187e9edfa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWdpc3QlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjM2Njc1MzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Olivia Bennett',
      title: 'Content Strategist',
      image: 'https://images.unsplash.com/photo-1763479169474-728a7de108c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYXJrZXRpbmclMjBzcGVjaWFsaXN0fGVufDF8fHx8MTc2MzY2NzUzNHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Alexander Wright',
      title: 'Senior Developer',
      image: 'https://images.unsplash.com/photo-1737575655055-e3967cbefd03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjM2NTU5MzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <section
      className="team-section-premium w-full py-32"
      style={{
        background: '#FFFFFF',
      }}
    >
      <div className="max-w-[1440px] mx-auto px-12">
        {/* SECTION HEADER - CENTERED */}
        <div className="team-header text-center mb-24">
          <h2
            className="team-heading-animate"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '56px',
              fontWeight: 700,
              color: '#151561',
              letterSpacing: '-0.02em',
              lineHeight: '1.15',
              marginBottom: '24px',
            }}
          >
            Our Team
          </h2>
          <p
            className="team-subheading-animate"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '20px',
              fontWeight: 400,
              color: '#505050',
              lineHeight: '1.7',
              maxWidth: '900px',
              margin: '0 auto',
            }}
          >
            Meet the people behind Optichore — a multidisciplinary team of strategists, designers, developers, and marketing experts.
          </p>
        </div>

        {/* A. LEADERSHIP TEAM - 2 LARGE PREMIUM CARDS */}
        <div
          className="leadership-team-section"
          style={{
            marginBottom: '120px',
          }}
        >
          <div className="grid grid-cols-2 gap-12">
            {leadership.map((leader, index) => (
              <div
                key={index}
                className="leadership-card-premium"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '32px',
                  border: '1px solid rgba(0, 0, 0, 0.06)',
                  padding: '48px',
                  boxShadow: '0 12px 48px rgba(0, 0, 0, 0.06)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  animationDelay: `${index * 150}ms`,
                }}
              >
                {/* Portrait */}
                <div
                  style={{
                    width: '100%',
                    height: '480px',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    marginBottom: '32px',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                  }}
                >
                  <ImageWithFallback
                    src={leader.image}
                    alt={leader.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>

                {/* Name */}
                <h3
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '32px',
                    fontWeight: 700,
                    color: '#151561',
                    marginBottom: '12px',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {leader.name}
                </h3>

                {/* Title */}
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '18px',
                    fontWeight: 500,
                    color: '#FF0000',
                  }}
                >
                  {leader.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* B. CORE TEAM GRID - 4 COLUMN */}
        <div className="core-team-section">
          <div className="grid grid-cols-4 gap-8">
            {coreTeam.map((member, index) => (
              <div
                key={index}
                className="core-team-card"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '24px',
                  border: '1px solid rgba(0, 0, 0, 0.06)',
                  padding: '32px',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.05)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  animationDelay: `${index * 80}ms`,
                }}
              >
                {/* Portrait */}
                <div
                  style={{
                    width: '100%',
                    height: '280px',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    marginBottom: '24px',
                    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.06)',
                  }}
                >
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>

                {/* Name */}
                <h4
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '20px',
                    fontWeight: 600,
                    color: '#151561',
                    marginBottom: '8px',
                    textAlign: 'center',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {member.name}
                </h4>

                {/* Title */}
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '15px',
                    fontWeight: 400,
                    color: '#505050',
                    textAlign: 'center',
                  }}
                >
                  {member.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ANIMATIONS & HOVER STYLES */}
      <style>{`
        /* Header Animations */
        @keyframes teamHeadingFade {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes teamSubheadingFade {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .team-heading-animate {
          animation: teamHeadingFade 0.9s ease forwards;
        }

        .team-subheading-animate {
          animation: teamSubheadingFade 0.9s ease forwards 0.15s;
          opacity: 0;
        }

        /* Leadership Card Animation */
        @keyframes leadershipFadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .leadership-card-premium {
          opacity: 0;
          animation: leadershipFadeUp 0.9s ease forwards;
        }

        .leadership-card-premium:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
          border-color: rgba(255, 0, 0, 0.15);
        }

        /* Core Team Card Animation */
        @keyframes coreTeamStagger {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .core-team-card {
          opacity: 0;
          animation: coreTeamStagger 0.8s ease forwards;
        }

        .core-team-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.12);
          border-color: rgba(255, 0, 0, 0.12);
        }
      `}</style>
    </section>
  );
}
