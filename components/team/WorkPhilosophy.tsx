import { ImageWithFallback } from '../figma/ImageWithFallback';

export function WorkPhilosophy() {
  return (
    <section className="work-philosophy-section py-32" style={{ background: '#FFFFFF' }}>
      <div className="max-w-[1440px] mx-auto px-12">
        {/* Heading & Subtext */}
        <div className="text-center mb-20">
          <h2 
            className="philosophy-heading-animate"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '54px',
              fontWeight: 700,
              color: '#151561',
              letterSpacing: '-0.02em',
              lineHeight: '1.15',
              marginBottom: '28px',
            }}
          >
            Driven by Creativity.<br />Powered by Strategy.
          </h2>

          <p 
            className="philosophy-subtext-animate"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '20px',
              fontWeight: 400,
              color: '#505050',
              lineHeight: '1.7',
              maxWidth: '800px',
              margin: '0 auto',
            }}
          >
            We believe in delivering exceptional value through collaboration, innovation, and continuous improvement. Our team works hand-in-hand with clients to create digital experiences that truly matter.
          </p>
        </div>

        {/* Image Collage */}
        <div className="image-collage-container">
          <div className="grid grid-cols-12 gap-6">
            {/* Large Left Image */}
            <div className="col-span-7">
              <div 
                className="collage-image-1"
                style={{
                  width: '100%',
                  height: '520px',
                  borderRadius: '32px',
                  overflow: 'hidden',
                  boxShadow: '0 12px 48px rgba(0, 0, 0, 0.1)',
                }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758873272921-4b64aef3c32b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlYW0lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYzNjU2MzY4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Creative Team Workspace"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
            </div>

            {/* Right Column — Two Stacked Images */}
            <div className="col-span-5 flex flex-col gap-6">
              {/* Top Right Image */}
              <div 
                className="collage-image-2"
                style={{
                  width: '100%',
                  height: '250px',
                  borderRadius: '28px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1590649681928-4b179f773bd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBjb2xsYWJvcmF0aW9uJTIwbWVldGluZ3xlbnwxfHx8fDE3NjM2MzQ1NTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Office Collaboration Meeting"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>

              {/* Bottom Right Image */}
              <div 
                className="collage-image-3"
                style={{
                  width: '100%',
                  height: '250px',
                  borderRadius: '28px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1622127800587-1ce716f1981e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzYzNjIxNzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Modern Workspace Design"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Styles & Animations */}
      <style>{`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floatingImage {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        @keyframes floatingImageAlt {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .philosophy-heading-animate {
          animation: fadeSlideUp 0.8s ease forwards;
        }

        .philosophy-subtext-animate {
          animation: fadeSlideUp 0.8s ease forwards 0.15s;
          opacity: 0;
        }

        .collage-image-1 {
          animation: fadeSlideUp 0.8s ease forwards 0.3s, floatingImage 4s ease-in-out infinite 1.2s;
          opacity: 0;
        }

        .collage-image-2 {
          animation: fadeSlideUp 0.8s ease forwards 0.4s, floatingImageAlt 5s ease-in-out infinite 1.5s;
          opacity: 0;
        }

        .collage-image-3 {
          animation: fadeSlideUp 0.8s ease forwards 0.5s, floatingImage 4.5s ease-in-out infinite 1.8s;
          opacity: 0;
        }

        .collage-image-1:hover,
        .collage-image-2:hover,
        .collage-image-3:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
