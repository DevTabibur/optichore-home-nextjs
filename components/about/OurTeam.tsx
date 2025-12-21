import { ImageWithFallback } from '../figma/ImageWithFallback';

export function OurTeam() {
  // Leadership Team (2 cards - More Prominent)
  const leadership = [
    {
      name: 'MD Mahbubur Rahman',
      role: 'Chief Executive Officer (CEO)',
      image: 'https://images.unsplash.com/photo-1758518727592-706e80ebc354?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMGxlYWRlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTgwMDAyMXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Riadur Rahman Chowdhury',
      role: 'Founder & Director',
      image: 'https://images.unsplash.com/photo-1742119971773-57e0131095b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwbWVtYmVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY1OTA5MTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  // Core Team Members (8 cards)
  const teamMembers = [
    {
      name: 'Sarah Mitchell',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1762341116897-921e2a52f7ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBidXNpbmVzcyUyMGV4ZWN1dGl2ZXxlbnwxfHx8fDE3NjU5MDkxNDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'James Carter',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1718179804654-7c3720b78e67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTgzNzU3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Strategist',
      image: 'https://images.unsplash.com/photo-1762522927402-f390672558d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc2NTg5OTQ0MXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Michael Chen',
      role: 'UI/UX Designer',
      image: 'https://images.unsplash.com/photo-1752859951149-7d3fc700a7ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY1ODYwODM3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Sophia Patel',
      role: 'Project Manager',
      image: 'https://images.unsplash.com/photo-1719257751404-1dea075324bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc2NTg2OTg4NXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'David Thompson',
      role: 'Business Strategist',
      image: 'https://images.unsplash.com/photo-1758518727592-706e80ebc354?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMGxlYWRlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTgwMDAyMXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Olivia Bennett',
      role: 'Content Strategist',
      image: 'https://images.unsplash.com/photo-1689120038250-5e35bb75223d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NjU5MDkxNDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Alexander Wright',
      role: 'Senior Developer',
      image: 'https://images.unsplash.com/photo-1742119971773-57e0131095b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwbWVtYmVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY1OTA5MTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <>
      <section id="about-team" className="optichore-team-section">
        <div className="optichore-team-wrapper">
          
          {/* ===== SECTION HEADER ===== */}
          <div className="optichore-team-header">
            <h2 className="optichore-team-title">Our Team</h2>
            <p className="optichore-team-desc">
              Meet the people behind Optichore — a multidisciplinary team of strategists, designers, developers, and marketing experts.
            </p>
          </div>

          {/* ===== A) LEADERSHIP TEAM (2 Cards) ===== */}
          <div className="optichore-leadership-grid">
            {leadership.map((leader, index) => (
              <div key={index} className="optichore-leader-card">
                <div className="optichore-leader-img-box">
                  <ImageWithFallback
                    src={leader.image}
                    alt={leader.name}
                    className="optichore-leader-img"
                  />
                </div>
                <div className="optichore-leader-text">
                  <h3 className="optichore-leader-name">{leader.name}</h3>
                  <p className="optichore-leader-role">{leader.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ===== B) CORE TEAM GRID (8 Cards) ===== */}
          <div className="optichore-team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="optichore-member-card">
                <div className="optichore-member-img-box">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="optichore-member-img"
                  />
                </div>
                <div className="optichore-member-text">
                  <h4 className="optichore-member-name">{member.name}</h4>
                  <p className="optichore-member-role">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SCOPED STYLES ===== */}
      <style jsx>{`
        /* ===== ROOT SECTION ===== */
        .optichore-team-section {
          width: 100%;
          background-color: #ffffff;
          padding: 48px 0;
        }

        .optichore-team-wrapper {
          width: 100%;
          max-width: 1320px;
          margin: 0 auto;
          padding-left: 24px;
          padding-right: 24px;
          box-sizing: border-box;
        }

        /* ===== HEADER ===== */
        .optichore-team-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .optichore-team-title {
          font-family: 'Inter', sans-serif;
          font-size: 36px;
          font-weight: 700;
          color: #151561;
          letter-spacing: -0.02em;
          line-height: 1.15;
          margin: 0 0 16px 0;
        }

        .optichore-team-desc {
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          font-weight: 400;
          color: #505050;
          line-height: 1.7;
          max-width: 820px;
          margin: 0 auto;
        }

        /* ===== LEADERSHIP GRID (MOBILE FIRST) ===== */
        .optichore-leadership-grid {
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin-bottom: 40px;
          width: 100%;
        }

        .optichore-leader-card {
          background-color: #ffffff;
          border-radius: 20px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
          overflow: hidden;
          width: 100%;
          box-sizing: border-box;
        }

        .optichore-leader-img-box {
          width: 100%;
          position: relative;
          padding-bottom: 100%;
          overflow: hidden;
          background-color: #f5f5f5;
        }

        .optichore-leader-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .optichore-leader-text {
          padding: 20px;
          text-align: center;
        }

        .optichore-leader-name {
          font-family: 'Inter', sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #151561;
          letter-spacing: -0.01em;
          line-height: 1.4;
          margin: 0 0 8px 0;
        }

        .optichore-leader-role {
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          font-weight: 500;
          color: #ff0000;
          letter-spacing: -0.005em;
          line-height: 1.5;
          margin: 0;
        }

        /* ===== CORE TEAM GRID (MOBILE FIRST) ===== */
        .optichore-team-grid {
          display: flex;
          flex-direction: column;
          gap: 24px;
          width: 100%;
        }

        .optichore-member-card {
          background-color: #ffffff;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
          overflow: hidden;
          width: 100%;
          box-sizing: border-box;
        }

        .optichore-member-img-box {
          width: 100%;
          position: relative;
          padding-bottom: 100%;
          overflow: hidden;
          background-color: #f5f5f5;
        }

        .optichore-member-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .optichore-member-text {
          padding: 20px;
          text-align: center;
        }

        .optichore-member-name {
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: #151561;
          letter-spacing: -0.01em;
          line-height: 1.4;
          margin: 0 0 4px 0;
        }

        .optichore-member-role {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 400;
          color: #6a6a6a;
          letter-spacing: -0.005em;
          line-height: 1.5;
          margin: 0;
        }

        /* ===== TABLET (768px - 1199px) ===== */
        @media (min-width: 768px) {
          .optichore-team-section {
            padding: 64px 0;
          }

          .optichore-team-wrapper {
            padding-left: 32px;
            padding-right: 32px;
          }

          .optichore-team-header {
            margin-bottom: 48px;
          }

          .optichore-team-title {
            font-size: 36px;
            margin-bottom: 20px;
          }

          .optichore-team-desc {
            font-size: 18px;
          }

          /* Leadership: 1 column centered on tablet */
          .optichore-leadership-grid {
            gap: 32px;
            margin-bottom: 48px;
            max-width: 520px;
            margin-left: auto;
            margin-right: auto;
          }

          .optichore-leader-text {
            padding: 32px;
          }

          .optichore-leader-name {
            font-size: 24px;
          }

          .optichore-leader-role {
            font-size: 18px;
          }

          /* Core Team: Switch to 2-column GRID */
          .optichore-team-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }

          .optichore-member-text {
            text-align: left;
          }
        }

        /* ===== DESKTOP (≥1200px) ===== */
        @media (min-width: 1200px) {
          .optichore-team-section {
            padding: 80px 0;
          }

          .optichore-team-wrapper {
            padding-left: 48px;
            padding-right: 48px;
          }

          .optichore-team-header {
            margin-bottom: 64px;
          }

          .optichore-team-title {
            font-size: 48px;
            margin-bottom: 24px;
          }

          .optichore-team-desc {
            font-size: 20px;
          }

          /* Leadership: 2 columns on desktop */
          .optichore-leadership-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
            margin-bottom: 64px;
            max-width: 100%;
          }

          .optichore-leader-text {
            text-align: left;
          }

          /* Core Team: 4 columns on desktop */
          .optichore-team-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 32px;
          }

          .optichore-member-text {
            padding: 24px;
          }

          .optichore-member-name {
            font-size: 18px;
          }

          /* Hover effects */
          .optichore-leader-card:hover,
          .optichore-member-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
            transition: all 0.3s ease;
          }
        }
      `}</style>
    </>
  );
}
