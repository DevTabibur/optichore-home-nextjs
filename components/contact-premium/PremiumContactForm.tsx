"use client"
import { useState } from 'react';
import { Send, CheckCircle, Home, Briefcase } from 'lucide-react';
import Link from 'next/link';

export function PremiumContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceCategory: '',
    budgetRange: '',
    companyName: '',
    message: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Trigger success state
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const serviceCategories = [
    'Select a service',
    'Digital Marketing',
    'Web Development',
    'Branding & Design',
    'IT Consulting',
    'Social Media Management',
    'SEO Services',
  ];

  const budgetRanges = [
    'Select budget range',
    '< £5,000',
    '£5,000 - £10,000',
    '£10,000 - £25,000',
    '£25,000 - £50,000',
    '£50,000+',
  ];

  return (
    <section className="premium-form-section py-32" style={{ background: 'linear-gradient(180deg, #F8F9FF 0%, #FFFFFF 100%)' }}>
      <div className="form-section-container max-w-[1440px] mx-auto px-12">
        {/* Section Header */}
        <div className="text-center mb-16 section-header-animate form-section-header">
          <h2 
            className="form-section-heading"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '48px',
              fontWeight: 700,
              color: '#151561',
              letterSpacing: '-0.02em',
              marginBottom: '16px',
            }}
          >
            Send Us a Message
          </h2>
          <p 
            className="form-section-subtext"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '18px',
              fontWeight: 400,
              color: '#505050',
              maxWidth: '640px',
              margin: '0 auto',
            }}
          >
            Fill out the form below and our team will get back to you within 24 hours.
          </p>
        </div>

        {/* Form Container */}
        <div 
          className="form-container-premium"
          style={{
            background: '#FFFFFF',
            borderRadius: '36px',
            border: '1px solid rgba(0, 0, 0, 0.06)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06)',
            padding: '64px',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            {/* Two Column Layout */}
            <div className="form-grid-layout grid grid-cols-2 gap-8 mb-8">
              {/* Left Column */}
              <div className="form-column-left space-y-8">
                {/* Full Name */}
                <div className="form-field-wrapper" style={{ animationDelay: '0ms' }}>
                  <label 
                    htmlFor="fullName"
                    className="form-label"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '15px',
                      fontWeight: 500,
                      color: '#151561',
                      display: 'block',
                      marginBottom: '10px',
                    }}
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="premium-input"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email Address */}
                <div className="form-field-wrapper" style={{ animationDelay: '100ms' }}>
                  <label 
                    htmlFor="email"
                    className="form-label"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '15px',
                      fontWeight: 500,
                      color: '#151561',
                      display: 'block',
                      marginBottom: '10px',
                    }}
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="premium-input"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone Number */}
                <div className="form-field-wrapper" style={{ animationDelay: '200ms' }}>
                  <label 
                    htmlFor="phone"
                    className="form-label"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '15px',
                      fontWeight: 500,
                      color: '#151561',
                      display: 'block',
                      marginBottom: '10px',
                    }}
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="premium-input"
                    placeholder="+44 7404 557047"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="form-column-right space-y-8">
                {/* Service Category */}
                <div className="form-field-wrapper" style={{ animationDelay: '300ms' }}>
                  <label 
                    htmlFor="serviceCategory"
                    className="form-label"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '15px',
                      fontWeight: 500,
                      color: '#151561',
                      display: 'block',
                      marginBottom: '10px',
                    }}
                  >
                    Service Category *
                  </label>
                  <select
                    id="serviceCategory"
                    name="serviceCategory"
                    value={formData.serviceCategory}
                    onChange={handleChange}
                    required
                    className="premium-select"
                  >
                    {serviceCategories.map((category, index) => (
                      <option key={index} value={category} disabled={index === 0}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Budget Range */}
                <div className="form-field-wrapper" style={{ animationDelay: '400ms' }}>
                  <label 
                    htmlFor="budgetRange"
                    className="form-label"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '15px',
                      fontWeight: 500,
                      color: '#151561',
                      display: 'block',
                      marginBottom: '10px',
                    }}
                  >
                    Budget Range *
                  </label>
                  <select
                    id="budgetRange"
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleChange}
                    required
                    className="premium-select"
                  >
                    {budgetRanges.map((range, index) => (
                      <option key={index} value={range} disabled={index === 0}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Company Name */}
                <div className="form-field-wrapper" style={{ animationDelay: '500ms' }}>
                  <label 
                    htmlFor="companyName"
                    className="form-label"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '15px',
                      fontWeight: 500,
                      color: '#151561',
                      display: 'block',
                      marginBottom: '10px',
                    }}
                  >
                    Company Name <span style={{ color: '#999', fontWeight: 400 }}>(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="premium-input"
                    placeholder="Your company"
                  />
                </div>
              </div>
            </div>

            {/* Full Width Message */}
            <div className="form-field-wrapper form-message-field" style={{ animationDelay: '600ms' }}>
              <label 
                htmlFor="message"
                className="form-label"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '15px',
                  fontWeight: 500,
                  color: '#151561',
                  display: 'block',
                  marginBottom: '10px',
                }}
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="premium-textarea"
                placeholder="Tell us about your project..."
                rows={6}
              />
            </div>

            {/* Submit Button */}
            <div className="text-center mt-12 form-button-wrapper">
              <button
                type="submit"
                className="premium-submit-btn"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5 ml-2" />
              </button>
            </div>
          </form>
          ) : (
            // SUCCESS STATE
            <div className="success-state-container text-center">
              {/* Success Icon */}
              <div className="success-icon-wrapper">
                <CheckCircle 
                  className="success-icon"
                  style={{ 
                    width: '80px', 
                    height: '80px',
                    color: '#10B981',
                  }} 
                />
              </div>

              {/* Heading */}
              <h3
                className="success-heading"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '40px',
                  fontWeight: 700,
                  color: '#151561',
                  letterSpacing: '-0.02em',
                  lineHeight: '1.2',
                  marginBottom: '24px',
                }}
              >
                Message Sent Successfully
              </h3>

              {/* Subtext */}
              <p
                className="success-subtext"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '18px',
                  fontWeight: 400,
                  color: '#505050',
                  lineHeight: '1.75',
                  marginBottom: '48px',
                  maxWidth: '600px',
                  margin: '0 auto 48px',
                }}
              >
                Thank you for contacting Optichore. Our team has received your message and will get back to you shortly.<br />
                We typically respond within 24 hours.
              </p>

              {/* Buttons */}
              <div className="success-buttons flex items-center justify-center gap-5">
                <Link href="/">
                  <button
                    className="success-btn-primary"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '17px',
                      fontWeight: 600,
                      backgroundColor: '#FF0000',
                      color: '#FFFFFF',
                      border: 'none',
                      borderRadius: '50px',
                      padding: '18px 40px',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '12px',
                      transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                      boxShadow: '0 8px 24px rgba(255, 0, 0, 0.25)',
                    }}
                  >
                    <Home className="w-5 h-5" />
                    Return to Homepage
                  </button>
                </Link>

                <Link href="/services">
                  <button
                    className="success-btn-secondary"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '17px',
                      fontWeight: 600,
                      backgroundColor: 'transparent',
                      color: '#151561',
                      border: '2px solid #151561',
                      borderRadius: '50px',
                      padding: '16px 40px',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '12px',
                      transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    <Briefcase className="w-5 h-5" />
                    Explore Our Services
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Styles */}
      <style>{`
        @keyframes sectionFadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fieldStagger {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* SUCCESS STATE ANIMATIONS */
        @keyframes successFadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes successIconPulse {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes successHeadingFadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes successSubtextFade {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes successButtonsFade {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .section-header-animate {
          animation: sectionFadeIn 0.8s ease forwards;
        }

        .form-container-premium {
          animation: sectionFadeIn 1s ease forwards 0.2s;
          opacity: 0;
        }

        .form-field-wrapper {
          animation: fieldStagger 0.6s ease forwards;
          opacity: 0;
        }

        .form-button-wrapper {
          animation: fieldStagger 0.6s ease forwards;
          opacity: 0;
        }

        /* SUCCESS STATE STYLES */
        .success-state-container {
          animation: successFadeIn 0.7s ease forwards;
          padding: 60px 40px;
        }

        .success-icon-wrapper {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 120px;
          height: 120px;
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%);
          border-radius: 50%;
          margin: 0 auto 32px;
          animation: successIconPulse 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          box-shadow: 0 8px 32px rgba(16, 185, 129, 0.15);
        }

        .success-icon {
          animation: successIconPulse 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards 0.2s;
          opacity: 0;
        }

        .success-heading {
          animation: successHeadingFadeUp 0.8s ease forwards 0.3s;
          opacity: 0;
        }

        .success-subtext {
          animation: successSubtextFade 0.8s ease forwards 0.5s;
          opacity: 0;
        }

        .success-buttons {
          animation: successButtonsFade 0.8s ease forwards 0.7s;
          opacity: 0;
        }

        .success-btn-primary:hover {
          background-color: #E60000;
          transform: translateY(-4px);
          box-shadow: 0 12px 36px rgba(255, 0, 0, 0.35);
        }

        .success-btn-secondary:hover {
          background-color: #151561;
          color: #FFFFFF;
          border-color: #151561;
        }

        .premium-input,
        .premium-select,
        .premium-textarea {
          width: 100%;
          padding: 16px 20px;
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          color: #151561;
          background: #FFFFFF;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 16px;
          outline: none;
          transition: all 0.3s ease;
        }

        .premium-input::placeholder,
        .premium-textarea::placeholder {
          color: rgba(0, 0, 0, 0.3);
        }

        .premium-input:focus,
        .premium-select:focus,
        .premium-textarea:focus {
          border-color: rgba(21, 21, 97, 0.3);
          box-shadow: 0 0 0 4px rgba(21, 21, 97, 0.06);
        }

        .premium-select {
          cursor: pointer;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23151561' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 20px center;
          padding-right: 48px;
        }

        .premium-textarea {
          resize: vertical;
          min-height: 140px;
        }

        .premium-submit-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 18px 48px;
          font-family: 'Inter', sans-serif;
          font-size: 17px;
          font-weight: 600;
          color: #FFFFFF;
          background: #FF0000;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 20px rgba(255, 0, 0, 0.3);
        }

        .premium-submit-btn:hover {
          background: #E60000;
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(255, 0, 0, 0.45);
        }

        .premium-submit-btn:active {
          transform: translateY(-2px);
        }

        /* ===== TABLET BREAKPOINT (768px - 1024px) ===== */
        @media (min-width: 768px) and (max-width: 1024px) {
          .premium-form-section {
            padding-top: 6rem;
            padding-bottom: 6rem;
          }

          .form-section-container {
            padding-left: 2rem;
            padding-right: 2rem;
          }

          .form-section-heading {
            font-size: 36px !important;
          }

          .form-section-subtext {
            font-size: 16px !important;
            max-width: 90% !important;
          }

          .form-container-premium {
            padding: 48px !important;
            border-radius: 28px !important;
          }

          .form-grid-layout {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
          }

          .form-column-left,
          .form-column-right {
            gap: 1.5rem !important;
          }

          .premium-input,
          .premium-select,
          .premium-textarea {
            min-height: 52px;
          }

          /* SUCCESS STATE - TABLET */
          .success-state-container {
            padding: 52px 40px !important;
          }

          .success-icon-wrapper {
            width: 110px !important;
            height: 110px !important;
          }

          .success-icon {
            width: 72px !important;
            height: 72px !important;
          }

          .success-heading {
            font-size: 34px !important;
          }

          .success-subtext {
            font-size: 17px !important;
            max-width: 80% !important;
          }

          .success-buttons {
            flex-wrap: wrap;
            gap: 1rem !important;
          }

          .success-btn-primary,
          .success-btn-secondary {
            padding: 17px 36px !important;
          }
        }

        /* ===== MOBILE BREAKPOINT (≤414px) ===== */
        @media (max-width: 414px) {
          .premium-form-section {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }

          .form-section-container {
            padding-left: 1.25rem;
            padding-right: 1.25rem;
          }

          .form-section-header {
            margin-bottom: 2rem;
          }

          .form-section-heading {
            font-size: 28px !important;
            text-align: center;
          }

          .form-section-subtext {
            font-size: 15px !important;
            max-width: 90% !important;
            text-align: center;
          }

          .form-container-premium {
            padding: 28px 20px !important;
            border-radius: 24px !important;
          }

          /* Single Column Layout */
          .form-grid-layout {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
            margin-bottom: 1.25rem !important;
          }

          /* Reorder fields for mobile */
          .form-column-left {
            display: flex;
            flex-direction: column;
            gap: 1.25rem !important;
          }

          .form-column-right {
            display: flex;
            flex-direction: column;
            gap: 1.25rem !important;
            margin-top: 1.25rem;
          }

          /* All form inputs */
          .premium-input,
          .premium-select {
            width: 100% !important;
            min-height: 48px !important;
            padding: 14px 16px !important;
            font-size: 16px !important;
          }

          /* Labels */
          .form-label {
            font-size: 14px !important;
            margin-bottom: 8px !important;
          }

          /* Textarea */
          .premium-textarea {
            min-height: 160px !important;
            resize: none !important;
            padding: 14px 16px !important;
            font-size: 16px !important;
          }

          .form-message-field {
            margin-top: 1.25rem;
          }

          /* Submit Button */
          .form-button-wrapper {
            margin-top: 2rem !important;
          }

          .premium-submit-btn {
            width: 100% !important;
            min-height: 52px !important;
            padding: 16px 32px !important;
            font-size: 16px !important;
            justify-content: center;
          }

          /* Disable hover on mobile */
          .premium-submit-btn:hover {
            transform: none;
          }

          /* ===== SUCCESS STATE - MOBILE ===== */
          .success-state-container {
            padding: 36px 20px !important;
          }

          .success-icon-wrapper {
            width: 92px !important;
            height: 92px !important;
            margin-bottom: 20px !important;
          }

          .success-icon {
            width: 60px !important;
            height: 60px !important;
          }

          .success-heading {
            font-size: 24px !important;
            margin-bottom: 16px !important;
            line-height: 1.3 !important;
          }

          .success-subtext {
            font-size: 15px !important;
            margin-bottom: 32px !important;
            max-width: 90% !important;
            line-height: 1.65 !important;
          }

          .success-buttons {
            flex-direction: column !important;
            gap: 14px !important;
            width: 100%;
          }

          .success-btn-primary,
          .success-btn-secondary {
            width: 100% !important;
            min-height: 50px !important;
            justify-content: center !important;
            padding: 15px 24px !important;
            font-size: 16px !important;
          }

          .success-btn-primary svg,
          .success-btn-secondary svg {
            margin-right: auto;
            margin-left: 0;
            order: -1;
          }

          .success-btn-primary:hover,
          .success-btn-secondary:hover {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}