import { MapPin } from 'lucide-react';

export function ContactMap() {
  return (
    <section 
      className="contact-map-section w-full"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F8F9FF 100%)',
        paddingTop: '100px',
        paddingBottom: '100px',
      }}
    >
      <div className="contact-map-container max-w-[1440px] mx-auto px-12">
        {/* Map Placeholder */}
        <div 
          className="map-wrapper map-animate"
          style={{
            width: '100%',
            height: '480px',
            borderRadius: '24px',
            background: 'linear-gradient(135deg, #E8EBFF 0%, #F0F2FF 100%)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Background Pattern */}
          <div 
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23151561' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              opacity: 0.4,
            }}
          />

          {/* Map Icon */}
          <div 
            className="map-icon-wrapper"
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, #FF0000 0%, #CC0000 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '24px',
              boxShadow: '0 8px 24px rgba(255, 0, 0, 0.25)',
            }}
          >
            <MapPin className="w-10 h-10" style={{ color: '#FFFFFF' }} />
          </div>

          {/* Text */}
          <h3 
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '24px',
              fontWeight: 600,
              color: '#151561',
              marginBottom: '12px',
            }}
          >
            Find Us Here
          </h3>
          <p 
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '17px',
              fontWeight: 400,
              color: '#505050',
              textAlign: 'center',
              lineHeight: '1.6',
            }}
          >
            84–86 Roman Road, London, E2 0PJ<br />
            United Kingdom
          </p>

          {/* Optional: Add a "Get Directions" button */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=84-86+Roman+Road+London+E2+0PJ"
            target="_blank"
            rel="noopener noreferrer"
            className="map-directions-btn"
            style={{
              marginTop: '28px',
              padding: '12px 32px',
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              color: '#FFFFFF',
              background: '#151561',
              borderRadius: '50px',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              display: 'inline-block',
            }}
          >
            Get Directions
          </a>
        </div>
      </div>

      {/* ANIMATIONS & STYLES */}
      <style>{`
        @keyframes mapFadeIn {
          from {
            opacity: 0;
            transform: scale(0.96);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .map-animate {
          animation: mapFadeIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .map-directions-btn:hover {
          background: #2A2A9E;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(21, 21, 97, 0.3);
        }

        .map-icon-wrapper {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
}
