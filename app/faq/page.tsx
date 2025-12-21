"use client"
import { useState } from 'react';
import { Search, ChevronDown, ArrowRight } from 'lucide-react';
import Link from 'next/link';


interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const faqData: FAQCategory[] = [
    {
      title: 'GENERAL',
      items: [
        {
          question: 'What services does Optichore provide?',
          answer: 'Optichore offers a comprehensive suite of digital services including Meta-certified Facebook and Instagram ads management, TikTok advertising, web design and development, mobile app development, UI/UX design, branding, SEO, and full-stack IT solutions tailored to help businesses scale globally.'
        },
        {
          question: 'Do you work internationally?',
          answer: 'Yes! We work with clients from all around the world. Our team is experienced in handling international projects across different time zones, and we provide remote collaboration tools to ensure seamless communication regardless of your location.'
        },
        {
          question: 'Who are your main clients?',
          answer: 'We work with a diverse range of clients from startups to established enterprises across various industries including e-commerce, SaaS, healthcare, finance, education, and retail. Our client portfolio spans small businesses looking to establish their digital presence to large corporations seeking advanced digital transformation.'
        }
      ]
    },
    {
      title: 'SERVICES',
      items: [
        {
          question: 'Do you offer Facebook ads management?',
          answer: 'Absolutely! We are Meta-certified partners specializing in Facebook and Instagram ads management. Our team creates data-driven campaigns, handles audience targeting, ad creative development, A/B testing, and provides detailed performance analytics to maximize your ROI.'
        },
        {
          question: 'Can you develop custom software or mobile apps?',
          answer: 'Yes, we have an experienced development team that builds custom software solutions and mobile applications for both iOS and Android platforms. We use modern technologies and agile methodologies to deliver scalable, high-performance applications tailored to your business needs.'
        },
        {
          question: 'Do you provide UI/UX design services?',
          answer: 'UI/UX design is one of our core strengths. Our design team creates user-centered interfaces that are not only visually stunning but also intuitive and conversion-optimized. We conduct user research, create wireframes, prototypes, and deliver complete design systems.'
        },
        {
          question: 'What industries do you specialize in?',
          answer: 'We have extensive experience across multiple industries including e-commerce, SaaS, healthcare, finance, education, real estate, hospitality, and technology startups. Our diverse portfolio allows us to bring best practices from various sectors to your project.'
        }
      ]
    },
    {
      title: 'PROCESS',
      items: [
        {
          question: 'How do I start a project with Optichore?',
          answer: 'Starting a project is simple! First, reach out to us via our contact form or email. We\'ll schedule a discovery call to understand your goals and requirements. Then, we\'ll provide a detailed proposal with timeline and pricing. Once approved, we kick off with a strategic planning session and begin execution.'
        },
        {
          question: 'Do you offer long-term support or monthly packages?',
          answer: 'Yes, we offer flexible engagement models including one-time projects, monthly retainers, and long-term support packages. Our monthly packages include ongoing marketing management, website maintenance, technical support, and continuous optimization based on your needs.'
        },
        {
          question: 'How long does a typical project take from start to finish?',
          answer: 'Project timelines vary based on scope and complexity. A website design typically takes 4-8 weeks, mobile app development 3-6 months, and marketing campaigns can be launched within 1-2 weeks. We provide detailed timelines during the proposal phase and maintain transparent communication throughout.'
        }
      ]
    },
    {
      title: 'SUPPORT',
      items: [
        {
          question: 'How can I reach your support team?',
          answer: 'You can reach our support team via email at info@optichore.com, call us at +440 7404 557047, or use the contact form on our website. We also offer direct messaging for active project clients through our project management platform.'
        },
        {
          question: 'Do you offer 24/7 support?',
          answer: 'We provide support during business hours (Monday-Saturday, 9:00 AM - 6:00 PM GMT). For clients on premium support packages, we offer extended hours and priority response times. Critical issues are addressed promptly, even outside regular hours.'
        },
        {
          question: 'How fast is your response time?',
          answer: 'We typically respond to all inquiries within 24 hours on business days. Urgent issues from active clients receive priority attention, often within 2-4 hours. Premium support package clients enjoy even faster response times with dedicated account managers.'
        }
      ]
    },
    {
      title: 'TECHNICAL',
      items: [
        {
          question: 'What technologies do you use for development?',
          answer: 'We use modern, industry-standard technologies including React, Next.js, Node.js, Python, and various cloud platforms. Our tech stack is chosen based on your project requirements to ensure scalability, performance, and maintainability. We stay updated with the latest technologies and best practices.'
        },
        {
          question: 'Do you ensure data security and compliance?',
          answer: 'Data security and compliance are top priorities. We follow industry best practices including SSL encryption, secure authentication, regular security audits, and compliance with GDPR, CCPA, and other relevant regulations. We implement role-based access controls and data protection measures across all projects.'
        },
        {
          question: 'Do you provide cloud hosting or server management?',
          answer: 'Yes, we offer cloud hosting solutions and server management services. We work with leading providers like AWS, Google Cloud, and Azure to ensure your applications are hosted on reliable, scalable infrastructure. Our team handles deployment, monitoring, backups, and ongoing server maintenance.'
        }
      ]
    }
  ];

  const toggleAccordion = (category: string, index: number) => {
    const key = `${category}-${index}`;
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <div className="faq-page-wrapper">

      {/* ⭐ 1. HERO SECTION */}
      <section 
        className="faq-hero-section py-40"
        style={{
          background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFF 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background Detail */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 20% 30%, rgba(21, 21, 97, 0.05) 0%, transparent 50%),
                         radial-gradient(circle at 80% 70%, rgba(255, 0, 0, 0.04) 0%, transparent 50%)`,
            opacity: 0.6,
          }}
        />

        <div className="max-w-[1440px] mx-auto px-12 relative z-10">
          <div className="text-center max-w-[900px] mx-auto space-y-8">
            {/* Heading */}
            <h1 
              className="faq-hero-heading"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '58px',
                fontWeight: 700,
                color: '#151561',
                letterSpacing: '-0.02em',
                lineHeight: '1.15',
              }}
            >
              Frequently Asked Questions
            </h1>

            {/* Subheading */}
            <p 
              className="faq-hero-subtext"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '20px',
                fontWeight: 400,
                color: '#505050',
                lineHeight: '1.7',
                maxWidth: '760px',
                margin: '0 auto',
              }}
            >
              Find clear answers to the most common questions our clients ask about our services, process, and support.
            </p>
          </div>
        </div>
      </section>

      {/* ⭐ 2. SEARCH BAR */}
      <section 
        className="faq-search-section py-16"
        style={{ backgroundColor: '#F8FAFF' }}
      >
        <div className="max-w-[1440px] mx-auto px-12">
          <div className="flex justify-center">
            <div 
              className="faq-search-container"
              style={{
                position: 'relative',
                width: '720px',
                maxWidth: '100%',
              }}
            >
              <Search 
                className="absolute left-6 top-1/2 transform -translate-y-1/2 w-5 h-5"
                style={{ color: '#9CA3AF' }}
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search your question..."
                className="faq-search-input w-full"
                style={{
                  height: '64px',
                  paddingLeft: '56px',
                  paddingRight: '24px',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  borderRadius: '50px',
                  outline: 'none',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.04)',
                  transition: 'all 0.3s ease',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ⭐ 3. FAQ ACCORDION SECTION */}
      <section 
        className="faq-accordion-section py-24"
        style={{ backgroundColor: '#F8FAFF' }}
      >
        <div className="max-w-[1440px] mx-auto px-12">
          <div className="max-w-[960px] mx-auto space-y-16">
            {faqData.map((category, categoryIndex) => (
              <div 
                key={categoryIndex} 
                className="faq-category-block faq-category-fade"
                style={{ animationDelay: `${categoryIndex * 100}ms` }}
              >
                {/* Category Title */}
                <h2 
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    fontWeight: 700,
                    color: '#FF0000',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: '24px',
                  }}
                >
                  {category.title}
                </h2>

                {/* Accordion Items */}
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => {
                    const key = `${category.title}-${itemIndex}`;
                    const isOpen = openIndex === key;

                    return (
                      <div
                        key={itemIndex}
                        className="faq-accordion-item"
                        style={{
                          backgroundColor: '#FFFFFF',
                          borderRadius: '20px',
                          border: '1px solid rgba(0, 0, 0, 0.06)',
                          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
                          overflow: 'hidden',
                          transition: 'all 0.3s ease',
                        }}
                      >
                        {/* Question Header */}
                        <button
                          onClick={() => toggleAccordion(category.title, itemIndex)}
                          className="faq-question-btn w-full flex items-center justify-between p-6 text-left"
                          style={{
                            cursor: 'pointer',
                            backgroundColor: 'transparent',
                            border: 'none',
                            transition: 'all 0.3s ease',
                          }}
                        >
                          <span 
                            style={{
                              fontFamily: 'Inter, sans-serif',
                              fontSize: '18px',
                              fontWeight: 600,
                              color: '#151561',
                              paddingRight: '20px',
                            }}
                          >
                            {item.question}
                          </span>
                          <ChevronDown
                            className="faq-chevron flex-shrink-0"
                            style={{
                              width: '20px',
                              height: '20px',
                              color: '#FF0000',
                              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                              transition: 'transform 0.3s ease',
                            }}
                          />
                        </button>

                        {/* Answer Content */}
                        <div
                          className="faq-answer-content"
                          style={{
                            maxHeight: isOpen ? '500px' : '0',
                            overflow: 'hidden',
                            transition: 'max-height 0.4s ease',
                          }}
                        >
                          <div 
                            style={{
                              padding: '0 24px 24px 24px',
                              fontFamily: 'Inter, sans-serif',
                              fontSize: '16px',
                              fontWeight: 400,
                              color: '#505050',
                              lineHeight: '1.7',
                            }}
                          >
                            {item.answer}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⭐ 5. FINAL CTA SECTION */}
      <section 
        className="faq-final-cta py-32"
        style={{
          background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFF 100%)',
        }}
      >
        <div className="max-w-[1440px] mx-auto px-12">
          <div className="text-center space-y-10">
            {/* Heading */}
            <h2 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '48px',
                fontWeight: 700,
                color: '#151561',
                letterSpacing: '-0.02em',
                lineHeight: '1.2',
              }}
            >
              Still have questions?
            </h2>

            {/* Subtext */}
            <p 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '20px',
                fontWeight: 400,
                color: '#505050',
                lineHeight: '1.7',
              }}
            >
              Our team is here to help you.
            </p>

            {/* CTA Button */}
            <div>
              <Link href="/contact">
                <button
                  className="faq-cta-btn"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '18px',
                    fontWeight: 600,
                    backgroundColor: '#FF0000',
                    color: '#FFFFFF',
                    padding: '18px 48px',
                    border: 'none',
                    borderRadius: '50px',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: '0 8px 24px rgba(255, 0, 0, 0.25)',
                  }}
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ⭐ 6. FOOTER */}

      {/* ⭐ ANIMATIONS & STYLES */}
      <style>{`
        /* Hero Animations */
        @keyframes fadeDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .faq-hero-heading {
          animation: fadeDown 1s ease forwards;
        }

        .faq-hero-subtext {
          animation: fadeIn 1s ease forwards 0.2s;
          opacity: 0;
        }

        .faq-search-container {
          animation: fadeUp 1s ease forwards 0.4s;
          opacity: 0;
        }

        /* Search Input Focus */
        .faq-search-input:focus {
          border-color: rgba(255, 0, 0, 0.4);
          box-shadow: 0 0 0 4px rgba(255, 0, 0, 0.08), 0 8px 24px rgba(0, 0, 0, 0.08);
        }

        .faq-search-input::placeholder {
          color: rgba(0, 0, 0, 0.4);
        }

        /* FAQ Category Fade */
        .faq-category-fade {
          animation: fadeUp 0.8s ease forwards;
          opacity: 0;
        }

        /* Accordion Hover */
        .faq-accordion-item:hover {
          box-shadow: 0 8px 28px rgba(0, 0, 0, 0.12);
          transform: translateY(-2px);
        }

        .faq-question-btn:hover {
          background-color: rgba(21, 21, 97, 0.02);
        }

        /* Final CTA Button */
        .faq-cta-btn:hover {
          background-color: #E60000;
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(255, 0, 0, 0.35);
        }

        /* Smooth Scrolling */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}