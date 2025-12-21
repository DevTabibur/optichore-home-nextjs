import { Linkedin } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function LeadershipTeam() {
  // Single Founder & Director card
  const founderDirector = {
    name: 'Riadur Rahman Chowdhury',
    title: 'Founder & Director',
    image: 'https://images.unsplash.com/photo-1758691737644-ef8be18256c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMGZvdW5kZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjM1NDQyNjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  };

  // Other leadership members (Creative, Technical, Marketing, Operations Directors)
  const otherLeaders = [
    {
      name: 'Sarah Mitchell',
      title: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc2MzYyOTgxOXww&ixlib=rb-4.1.0&q=80&w=1080',
      delay: '100ms',
    },
    {
      name: 'James Carter',
      title: 'Technical Director',
      image: 'https://images.unsplash.com/photo-1610631066894-62452ccb927c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBDRU8lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjM2MjYwMjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      delay: '200ms',
    },
    {
      name: 'Emily Rodriguez',
      title: 'Marketing Director',
      image: 'https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc2MzYyOTgxOXww&ixlib=rb-4.1.0&q=80&w=1080',
      delay: '300ms',
    },
    {
      name: 'Michael Chen',
      title: 'Operations Director',
      image: 'https://images.unsplash.com/photo-1610631066894-62452ccb927c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBDRU8lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjM2MjYwMjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      delay: '400ms',
    },
  ];

  return (
    <section className="leadership-section py-32" style={{ background: '#FFFFFF' }}>
      <div className="max-w-[1440px] mx-auto px-12">
        {/* Section Heading */}
        <h2 
          className="section-heading-animate"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '48px',
            fontWeight: 700,
            color: '#151561',
            letterSpacing: '-0.02em',
            textAlign: 'center',
            marginBottom: '64px',
          }}
        >
          Leadership Team
        </h2>

        {/* Leadership Grid */}
        <div className="grid grid-cols-4 gap-8">
          {/* Founder & Director Card */}
          <div
            className="leadership-card"
            style={{
              animationDelay: '0ms',
            }}
          >
            {/* Portrait */}
            <div 
              style={{
                width: '100%',
                height: '320px',
                overflow: 'hidden',
                borderRadius: '24px 24px 0 0',
                background: '#F8F9FF',
              }}
            >
              <ImageWithFallback
                src={founderDirector.image}
                alt={founderDirector.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>

            {/* Info */}
            <div style={{ padding: '24px 20px' }}>
              <h3 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '20px',
                  fontWeight: 600,
                  color: '#151561',
                  marginBottom: '6px',
                }}
              >
                {founderDirector.name}
              </h3>
              <p 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '15px',
                  fontWeight: 400,
                  color: '#505050',
                  marginBottom: '16px',
                }}
              >
                {founderDirector.title}
              </p>

              {/* LinkedIn Icon */}
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="linkedin-icon-link"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: '#F8F9FF',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s ease',
                }}
              >
                <Linkedin className="w-4 h-4" style={{ color: '#151561' }} />
              </a>
            </div>
          </div>

          {/* Other Leadership Cards */}
          {otherLeaders.map((leader, index) => (
            <div
              key={index}
              className="leadership-card"
              style={{
                animationDelay: leader.delay,
              }}
            >
              {/* Portrait */}
              <div 
                style={{
                  width: '100%',
                  height: '320px',
                  overflow: 'hidden',
                  borderRadius: '24px 24px 0 0',
                  background: '#F8F9FF',
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

              {/* Info */}
              <div style={{ padding: '24px 20px' }}>
                <h3 
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '20px',
                    fontWeight: 600,
                    color: '#151561',
                    marginBottom: '6px',
                  }}
                >
                  {leader.name}
                </h3>
                <p 
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '15px',
                    fontWeight: 400,
                    color: '#505050',
                    marginBottom: '16px',
                  }}
                >
                  {leader.title}
                </p>

                {/* LinkedIn Icon */}
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="linkedin-icon-link"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: '#F8F9FF',
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Linkedin className="w-4 h-4" style={{ color: '#151561' }} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Styles & Animations */}
      <style>{`
        @keyframes sectionHeadingFade {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes leadershipCardStagger {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .section-heading-animate {
          animation: sectionHeadingFade 0.8s ease forwards;
        }

        .leadership-card {
          background: #FFFFFF;
          border: 1px solid rgba(0, 0, 0, 0.06);
          borderRadius: 26px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          animation: leadershipCardStagger 0.7s ease forwards;
          opacity: 0;
        }

        .leadership-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 16px 48px rgba(21, 21, 97, 0.12);
          border-color: rgba(255, 0, 0, 0.12);
        }

        .linkedin-icon-link:hover {
          background: #151561;
          border-color: #151561;
          transform: scale(1.1);
        }

        .linkedin-icon-link:hover svg {
          color: #FFFFFF !important;
        }
      `}</style>
    </section>
  );
}