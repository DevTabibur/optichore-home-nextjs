import { Linkedin, Github, Twitter } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function CoreTeamGrid() {
  const teamMembers = [
    {
      name: 'Alex Thompson',
      role: 'Senior UI/UX Designer',
      image: 'https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc2MzYyOTgxOXww&ixlib=rb-4.1.0&q=80&w=1080',
      delay: '0ms',
    },
    {
      name: 'Maya Patel',
      role: 'Full Stack Developer',
      image: 'https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc2MzYyOTgxOXww&ixlib=rb-4.1.0&q=80&w=1080',
      delay: '50ms',
    },
    {
      name: 'Jordan Lee',
      role: 'Content Strategist',
      image: 'https://images.unsplash.com/photo-1610631066894-62452ccb927c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBDRU8lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjM2MjYwMjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      delay: '100ms',
    },
    {
      name: 'Sophie Williams',
      role: 'Brand Designer',
      image: 'https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc2MzYyOTgxOXww&ixlib=rb-4.1.0&q=80&w=1080',
      delay: '150ms',
    },
    {
      name: 'Ryan Martinez',
      role: 'Frontend Developer',
      image: 'https://images.unsplash.com/photo-1610631066894-62452ccb927c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBDRU8lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjM2MjYwMjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      delay: '200ms',
    },
    {
      name: 'Olivia Brown',
      role: 'Social Media Manager',
      image: 'https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc2MzYyOTgxOXww&ixlib=rb-4.1.0&q=80&w=1080',
      delay: '250ms',
    },
    {
      name: 'Liam Johnson',
      role: 'SEO Specialist',
      image: 'https://images.unsplash.com/photo-1610631066894-62452ccb927c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBDRU8lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjM2MjYwMjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      delay: '300ms',
    },
    {
      name: 'Emma Davis',
      role: 'Product Designer',
      image: 'https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc2MzYyOTgxOXww&ixlib=rb-4.1.0&q=80&w=1080',
      delay: '350ms',
    },
    {
      name: 'Noah Anderson',
      role: 'Backend Developer',
      image: 'https://images.unsplash.com/photo-1610631066894-62452ccb927c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBDRU8lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjM2MjYwMjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      delay: '400ms',
    },
  ];

  return (
    <section 
      className="core-team-section py-32" 
      style={{ 
        background: 'linear-gradient(180deg, #F8F9FF 0%, #FFFFFF 100%)',
      }}
    >
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
          Meet the Team
        </h2>

        {/* Core Team Grid */}
        <div className="grid grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="team-member-card"
              style={{
                animationDelay: member.delay,
              }}
            >
              {/* Photo */}
              <div 
                style={{
                  width: '100%',
                  height: '280px',
                  overflow: 'hidden',
                  borderRadius: '24px 24px 0 0',
                  background: '#F8F9FF',
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
                  {member.name}
                </h3>
                <p 
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '15px',
                    fontWeight: 400,
                    color: '#505050',
                    marginBottom: '18px',
                  }}
                >
                  {member.role}
                </p>

                {/* Social Icons */}
                <div className="social-icons-container flex items-center gap-2">
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon-link"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon-link"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon-link"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
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

        @keyframes teamCardStagger {
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

        .team-member-card {
          background: #FFFFFF;
          border: 1px solid rgba(0, 0, 0, 0.06);
          borderRadius: 26px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          animation: teamCardStagger 0.7s ease forwards;
          opacity: 0;
        }

        .team-member-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 36px rgba(21, 21, 97, 0.1);
          border-color: rgba(255, 0, 0, 0.1);
        }

        .social-icon-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          borderRadius: 50%;
          background: #F8F9FF;
          border: 1px solid rgba(0, 0, 0, 0.08);
          color: #151561;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .social-icon-link:hover {
          background: #151561;
          border-color: #151561;
          color: #FFFFFF;
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
}
