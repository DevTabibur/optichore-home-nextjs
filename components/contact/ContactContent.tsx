import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export function ContactContent() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section 
      className="contact-content-section w-full"
      style={{
        background: '#FFFFFF',
        paddingTop: '100px',
        paddingBottom: '100px',
      }}
    >
      <div className="contact-content-container max-w-[1440px] mx-auto px-12">
        <div className="grid grid-cols-12 gap-12">
          {/* LEFT COLUMN — CONTACT INFORMATION */}
          <div className="col-span-5 space-y-6">
            {/* Card 1 — Phone */}
            <div 
              className="contact-info-card card-animate"
              style={{
                background: '#FFFFFF',
                borderRadius: '28px',
                padding: '40px 36px',
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                animationDelay: '0.1s',
              }}
            >
              <div className="flex items-start gap-4">
                <div 
                  className="contact-icon-wrapper"
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, #FF0000 0%, #CC0000 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Phone className="w-6 h-6" style={{ color: '#FFFFFF' }} />
                </div>

                <div className="flex-1">
                  <h3 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '20px',
                      fontWeight: 600,
                      color: '#151561',
                      marginBottom: '12px',
                    }}
                  >
                    Call Us
                  </h3>
                  <a 
                    href="tel:+4407404557047"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '18px',
                      fontWeight: 500,
                      color: '#FF0000',
                      textDecoration: 'none',
                      display: 'block',
                      marginBottom: '8px',
                    }}
                  >
                    +440 7404 557047
                  </a>
                  <p 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '15px',
                      fontWeight: 400,
                      color: '#6A6A6A',
                    }}
                  >
                    Mon–Sat, 09:00 AM – 06:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 — Email */}
            <div 
              className="contact-info-card card-animate"
              style={{
                background: '#FFFFFF',
                borderRadius: '28px',
                padding: '40px 36px',
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                animationDelay: '0.2s',
              }}
            >
              <div className="flex items-start gap-4">
                <div 
                  className="contact-icon-wrapper"
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, #151561 0%, #2A2A9E 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Mail className="w-6 h-6" style={{ color: '#FFFFFF' }} />
                </div>

                <div className="flex-1">
                  <h3 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '20px',
                      fontWeight: 600,
                      color: '#151561',
                      marginBottom: '12px',
                    }}
                  >
                    Email Us
                  </h3>
                  <a 
                    href="mailto:info@optichore.com"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '18px',
                      fontWeight: 500,
                      color: '#FF0000',
                      textDecoration: 'none',
                      display: 'block',
                      marginBottom: '8px',
                    }}
                  >
                    info@optichore.com
                  </a>
                  <p 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '15px',
                      fontWeight: 400,
                      color: '#6A6A6A',
                    }}
                  >
                    We respond within 24 hours
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 — Office Location */}
            <div 
              className="contact-info-card card-animate"
              style={{
                background: '#FFFFFF',
                borderRadius: '28px',
                padding: '40px 36px',
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                animationDelay: '0.3s',
              }}
            >
              <div className="flex items-start gap-4">
                <div 
                  className="contact-icon-wrapper"
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, #FF0000 0%, #CC0000 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <MapPin className="w-6 h-6" style={{ color: '#FFFFFF' }} />
                </div>

                <div className="flex-1">
                  <h3 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '20px',
                      fontWeight: 600,
                      color: '#151561',
                      marginBottom: '12px',
                    }}
                  >
                    Visit Our Office
                  </h3>
                  <p 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '16px',
                      fontWeight: 400,
                      color: '#505050',
                      lineHeight: '1.7',
                    }}
                  >
                    84–86 Roman Road,<br />
                    London, E2 0PJ
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN — CONTACT FORM */}
          <div className="col-span-7">
            <div 
              className="contact-form-wrapper form-animate"
              style={{
                background: '#FFFFFF',
                borderRadius: '28px',
                padding: '48px 44px',
                boxShadow: '0 4px 32px rgba(0, 0, 0, 0.08)',
              }}
            >
              <h2 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '32px',
                  fontWeight: 600,
                  color: '#151561',
                  marginBottom: '32px',
                }}
              >
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div className="form-field-animate" style={{ animationDelay: '0.1s' }}>
                  <label 
                    htmlFor="fullName"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '15px',
                      fontWeight: 500,
                      color: '#151561',
                      display: 'block',
                      marginBottom: '10px',
                    }}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="contact-form-input"
                    placeholder="John Doe"
                    style={{
                      width: '100%',
                      height: '52px',
                      padding: '0 20px',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '16px',
                      color: '#151561',
                      background: '#F8F9FF',
                      border: '1.5px solid rgba(21, 21, 97, 0.1)',
                      borderRadius: '12px',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                    }}
                  />
                </div>

                {/* Email Address */}
                <div className="form-field-animate" style={{ animationDelay: '0.2s' }}>
                  <label 
                    htmlFor="email"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '15px',
                      fontWeight: 500,
                      color: '#151561',
                      display: 'block',
                      marginBottom: '10px',
                    }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="contact-form-input"
                    placeholder="john@example.com"
                    style={{
                      width: '100%',
                      height: '52px',
                      padding: '0 20px',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '16px',
                      color: '#151561',
                      background: '#F8F9FF',
                      border: '1.5px solid rgba(21, 21, 97, 0.1)',
                      borderRadius: '12px',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                    }}
                  />
                </div>

                {/* Phone Number */}
                <div className="form-field-animate" style={{ animationDelay: '0.3s' }}>
                  <label 
                    htmlFor="phone"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '15px',
                      fontWeight: 500,
                      color: '#151561',
                      display: 'block',
                      marginBottom: '10px',
                    }}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="contact-form-input"
                    placeholder="+44 7XXX XXXXXX"
                    style={{
                      width: '100%',
                      height: '52px',
                      padding: '0 20px',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '16px',
                      color: '#151561',
                      background: '#F8F9FF',
                      border: '1.5px solid rgba(21, 21, 97, 0.1)',
                      borderRadius: '12px',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                    }}
                  />
                </div>

                {/* Service Category */}
                <div className="form-field-animate" style={{ animationDelay: '0.4s' }}>
                  <label 
                    htmlFor="service"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '15px',
                      fontWeight: 500,
                      color: '#151561',
                      display: 'block',
                      marginBottom: '10px',
                    }}
                  >
                    Service Category
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="contact-form-select"
                    style={{
                      width: '100%',
                      height: '52px',
                      padding: '0 20px',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '16px',
                      color: '#151561',
                      background: '#F8F9FF',
                      border: '1.5px solid rgba(21, 21, 97, 0.1)',
                      borderRadius: '12px',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                    }}
                  >
                    <option value="">Select a service</option>
                    <option value="branding">Branding & Design</option>
                    <option value="marketing">Digital Marketing</option>
                    <option value="development">Web Development</option>
                    <option value="seo">SEO & Analytics</option>
                    <option value="social">Social Media Management</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div className="form-field-animate" style={{ animationDelay: '0.5s' }}>
                  <label 
                    htmlFor="message"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '15px',
                      fontWeight: 500,
                      color: '#151561',
                      display: 'block',
                      marginBottom: '10px',
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="contact-form-textarea"
                    placeholder="Tell us about your project..."
                    style={{
                      width: '100%',
                      padding: '16px 20px',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '16px',
                      color: '#151561',
                      background: '#F8F9FF',
                      border: '1.5px solid rgba(21, 21, 97, 0.1)',
                      borderRadius: '12px',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      resize: 'vertical',
                    }}
                  />
                </div>

                {/* Submit Button */}
                <div className="form-field-animate" style={{ animationDelay: '0.6s' }}>
                  <button
                    type="submit"
                    className="contact-form-submit"
                    style={{
                      width: '100%',
                      height: '56px',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '17px',
                      fontWeight: 600,
                      color: '#FFFFFF',
                      background: '#FF0000',
                      border: 'none',
                      borderRadius: '50px',
                      cursor: 'pointer',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* ANIMATIONS & STYLES */}
      <style>{`
        @keyframes cardFadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .card-animate {
          opacity: 0;
          animation: cardFadeUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .form-animate {
          opacity: 0;
          animation: cardFadeUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards 0.2s;
        }

        .form-field-animate {
          opacity: 0;
          animation: cardFadeUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .contact-info-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
        }

        .contact-form-input:focus,
        .contact-form-select:focus,
        .contact-form-textarea:focus {
          background: #FFFFFF;
          border-color: #FF0000;
          box-shadow: 0 0 0 3px rgba(255, 0, 0, 0.08);
        }

        .contact-form-input::placeholder,
        .contact-form-textarea::placeholder {
          color: rgba(21, 21, 97, 0.4);
        }

        .contact-form-submit:hover {
          background: #E60000;
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(255, 0, 0, 0.3);
        }

        .contact-form-submit:active {
          transform: translateY(-1px);
        }
      `}</style>
    </section>
  );
}
