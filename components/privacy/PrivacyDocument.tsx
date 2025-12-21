export function PrivacyDocument() {
  const sections = [
    {
      id: 1,
      title: '1. Introduction',
      content: [
        'Welcome to Optichore Limited ("we," "us," or "our"). This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you visit our website, use our services, or engage with us in any way.',
        'By accessing or using our services, you agree to the terms outlined in this Privacy Policy. If you do not agree with these terms, please do not use our services.',
        'We are committed to protecting your privacy and ensuring that your personal data is handled in a secure and responsible manner in compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.',
      ],
    },
    {
      id: 2,
      title: '2. Information We Collect',
      content: [],
      subsections: [
        {
          title: '2.1 Personal Data',
          paragraphs: [
            'We may collect personal information that you provide directly to us, including but not limited to:',
            '• Full name and contact details (email address, phone number)',
            '• Company name and business information',
            '• Billing and payment information',
            '• Login credentials and account information',
            '• Communication preferences',
            '• Any other information you choose to provide when contacting us or using our services',
          ],
        },
        {
          title: '2.2 Usage Data',
          paragraphs: [
            'We automatically collect certain information when you visit our website, including:',
            '• IP address and device information',
            '• Browser type and operating system',
            '• Pages visited and time spent on our website',
            '• Referring website addresses',
            '• Click patterns and navigation paths',
            '• Date and time of access',
          ],
        },
        {
          title: '2.3 Tracking Cookies and Technologies',
          paragraphs: [
            'We use cookies, web beacons, and similar tracking technologies to collect information about your browsing activities. These technologies help us:',
            '• Remember your preferences and settings',
            '• Analyze website traffic and user behavior',
            '• Deliver targeted advertising and marketing content',
            '• Improve our website performance and user experience',
            'You can control cookie preferences through your browser settings. Please note that disabling cookies may affect your ability to use certain features of our website.',
          ],
        },
      ],
    },
    {
      id: 3,
      title: '3. How We Use Your Information',
      content: [
        'We use the information we collect for the following purposes:',
      ],
      subsections: [
        {
          title: '3.1 Service Delivery',
          paragraphs: [
            '• To provide, maintain, and improve our digital marketing, design, and IT services',
            '• To process transactions and manage your account',
            '• To deliver customer support and respond to inquiries',
            '• To fulfill contractual obligations',
          ],
        },
        {
          title: '3.2 Communication',
          paragraphs: [
            '• To send you important updates about our services',
            '• To notify you about changes to our terms, policies, or services',
            '• To respond to your requests, questions, and feedback',
          ],
        },
        {
          title: '3.3 Marketing',
          paragraphs: [
            '• To send promotional materials, newsletters, and marketing communications (with your consent)',
            '• To provide you with tailored advertising based on your interests',
            '• To conduct market research and improve our marketing strategies',
            'You may opt out of receiving marketing communications at any time by following the unsubscribe instructions in our emails or contacting us directly.',
          ],
        },
        {
          title: '3.4 Analytics',
          paragraphs: [
            '• To analyze website traffic and user behavior',
            '• To measure the effectiveness of our marketing campaigns',
            '• To improve our services, website functionality, and user experience',
            '• To detect, prevent, and address technical issues or security threats',
          ],
        },
      ],
    },
    {
      id: 4,
      title: '4. Data Protection & Security',
      content: [
        'We take the security of your personal data seriously and implement appropriate technical and organizational measures to protect it against unauthorized access, alteration, disclosure, or destruction.',
        'Our security measures include:',
        '• Encryption of sensitive data during transmission and storage',
        '• Regular security assessments and vulnerability testing',
        '• Access controls and authentication procedures',
        '• Employee training on data protection and privacy practices',
        '• Secure backup systems and disaster recovery protocols',
        'However, please note that no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.',
        'We retain your personal data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law.',
      ],
    },
    {
      id: 5,
      title: '5. Your Rights (GDPR)',
      content: [
        'Under the UK General Data Protection Regulation (UK GDPR), you have the following rights regarding your personal data:',
      ],
      subsections: [
        {
          title: '5.1 Right of Access',
          paragraphs: [
            'You have the right to request access to the personal data we hold about you. You may request a copy of your data and information about how we process it.',
          ],
        },
        {
          title: '5.2 Right to Correction',
          paragraphs: [
            'You have the right to request that we correct any inaccurate or incomplete personal data we hold about you.',
          ],
        },
        {
          title: '5.3 Right to Deletion',
          paragraphs: [
            'You have the right to request the deletion of your personal data under certain circumstances, such as when the data is no longer necessary for the purposes for which it was collected or if you withdraw your consent.',
          ],
        },
        {
          title: '5.4 Right to Data Portability',
          paragraphs: [
            'You have the right to request that we transfer your personal data to another organization or directly to you in a structured, commonly used, and machine-readable format.',
          ],
        },
        {
          title: '5.5 Right to Object',
          paragraphs: [
            'You have the right to object to the processing of your personal data for certain purposes, including direct marketing.',
          ],
        },
        {
          title: '5.6 Right to Restrict Processing',
          paragraphs: [
            'You have the right to request that we restrict the processing of your personal data under certain circumstances.',
          ],
        },
      ],
      footer: [
        'To exercise any of these rights, please contact us using the contact information provided below. We will respond to your request within one month, unless the request is particularly complex, in which case we may extend the response time by up to two additional months.',
      ],
    },
    {
      id: 6,
      title: '6. Cookies & Tracking Technologies',
      content: [
        'We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small text files stored on your device that help us recognize you, remember your preferences, and analyze how you use our website.',
        'Types of cookies we use:',
        '• Essential Cookies: Necessary for the website to function properly and cannot be disabled.',
        '• Performance Cookies: Help us understand how visitors interact with our website by collecting and reporting information anonymously.',
        '• Functionality Cookies: Enable enhanced functionality and personalization, such as remembering your preferences.',
        '• Targeting/Advertising Cookies: Used to deliver relevant advertisements and track the effectiveness of our marketing campaigns.',
        'You can manage your cookie preferences through your browser settings. Most browsers allow you to block or delete cookies, but doing so may affect your ability to use certain features of our website.',
        'For more information about cookies and how to manage them, please visit www.allaboutcookies.org.',
      ],
    },
    {
      id: 7,
      title: '7. Third-Party Services',
      content: [
        'We may share your personal data with trusted third-party service providers to help us deliver our services, improve our operations, or fulfill legal obligations. These third parties may include:',
        '• Meta Business Partners: For advertising and marketing campaign management',
        '• Analytics Providers: Such as Google Analytics, to analyze website traffic and user behavior',
        '• Hosting Providers: To store and manage our website and databases',
        '• Payment Processors: To process transactions securely',
        '• Email Marketing Platforms: To send newsletters and promotional communications',
        '• Customer Relationship Management (CRM) Systems: To manage customer interactions and support',
        'We require all third-party service providers to respect the security of your personal data and to treat it in accordance with the law. We do not allow them to use your personal data for their own purposes and only permit them to process it for specified purposes and in accordance with our instructions.',
        'Please note that third-party websites linked from our website are not covered by this Privacy Policy. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party websites you visit.',
      ],
    },
    {
      id: 8,
      title: '8. International Data Transfers',
      content: [
        'Optichore Limited is based in the United Kingdom (84–86 Roman Road, London, E2 0PJ), and we primarily process personal data within the UK and the European Economic Area (EEA).',
        'However, in some cases, your personal data may be transferred to, stored, or processed in countries outside the UK or EEA. When we transfer personal data internationally, we ensure that appropriate safeguards are in place to protect your data in accordance with UK GDPR requirements.',
        'These safeguards may include:',
        '• Standard Contractual Clauses (SCCs) approved by the UK Information Commissioner\'s Office (ICO)',
        '• Adequacy decisions recognizing that certain countries provide an adequate level of data protection',
        '• Binding Corporate Rules (BCRs) for transfers within multinational organizations',
        'If you have any questions about international data transfers, please contact us using the details provided below.',
      ],
    },
    {
      id: 9,
      title: '9. Children\'s Privacy',
      content: [
        'Our services are not intended for children under the age of 16. We do not knowingly collect or process personal data from children.',
        'If we become aware that we have inadvertently collected personal data from a child under 16 without appropriate parental consent, we will take steps to delete such information as soon as possible.',
        'If you believe that we may have collected information from a child, please contact us immediately using the contact details provided below.',
      ],
    },
    {
      id: 10,
      title: '10. Updates to This Policy',
      content: [
        'We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or for other operational, legal, or regulatory reasons.',
        'When we make significant changes to this Privacy Policy, we will notify you by:',
        '• Posting the updated policy on our website with a revised "Last Updated" date',
        '• Sending you an email notification (if you have provided us with your email address)',
        '• Displaying a prominent notice on our website',
        'We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your personal data. Your continued use of our services after any changes to this Privacy Policy constitutes your acceptance of the updated terms.',
      ],
    },
    {
      id: 11,
      title: '11. Contact Information',
      content: [
        'If you have any questions, concerns, or requests regarding this Privacy Policy or our data protection practices, please contact us:',
      ],
    },
  ];

  return (
    <section 
      className="privacy-document-section w-full py-24"
      style={{
        background: 'linear-gradient(180deg, #F8FAFF 0%, #FFFFFF 50%, #F8FAFF 100%)',
      }}
    >
      <div className="privacy-outer-container max-w-[1440px] mx-auto px-12">
        {/* Document Container - Max Width 860px */}
        <div className="privacy-document-container max-w-[860px] mx-auto">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className="privacy-section-block"
              style={{
                marginBottom: index === sections.length - 1 ? '0' : '64px',
                animationDelay: `${index * 80}ms`,
              }}
            >
              {/* Section Heading */}
              <h2
                className="privacy-section-heading"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '32px',
                  fontWeight: 700,
                  color: '#151561',
                  letterSpacing: '-0.01em',
                  lineHeight: '1.3',
                  marginBottom: '24px',
                }}
              >
                {section.title}
              </h2>

              {/* Section Content - Paragraphs */}
              {section.content && section.content.length > 0 && (
                <div className="section-content-paragraphs">
                  {section.content.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="privacy-paragraph"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '17px',
                        fontWeight: 400,
                        color: '#505050',
                        lineHeight: '1.75',
                        marginBottom: '20px',
                      }}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}

              {/* Subsections */}
              {section.subsections && section.subsections.length > 0 && (
                <div className="subsections-container" style={{ marginTop: '28px' }}>
                  {section.subsections.map((subsection, subIndex) => (
                    <div
                      key={subIndex}
                      style={{
                        marginBottom: '32px',
                      }}
                    >
                      {/* Subsection Title */}
                      <h3
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '22px',
                          fontWeight: 600,
                          color: '#151561',
                          letterSpacing: '-0.01em',
                          lineHeight: '1.4',
                          marginBottom: '16px',
                        }}
                      >
                        {subsection.title}
                      </h3>

                      {/* Subsection Paragraphs */}
                      {subsection.paragraphs.map((para, paraIndex) => (
                        <p
                          key={paraIndex}
                          style={{
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '17px',
                            fontWeight: 400,
                            color: '#505050',
                            lineHeight: '1.75',
                            marginBottom: '12px',
                          }}
                        >
                          {para}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              )}

              {/* Section Footer (if exists) */}
              {section.footer && section.footer.length > 0 && (
                <div className="section-footer-paragraphs" style={{ marginTop: '28px' }}>
                  {section.footer.map((footerPara, fIndex) => (
                    <p
                      key={fIndex}
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '17px',
                        fontWeight: 400,
                        color: '#505050',
                        lineHeight: '1.75',
                        marginBottom: '20px',
                      }}
                    >
                      {footerPara}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Contact Information Block */}
          <div
            className="contact-info-block"
            style={{
              marginTop: '48px',
              padding: '40px',
              background: '#F8FAFF',
              borderRadius: '20px',
              border: '1px solid rgba(0, 0, 0, 0.06)',
            }}
          >
            <h3
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '24px',
                fontWeight: 600,
                color: '#151561',
                marginBottom: '24px',
              }}
            >
              Optichore Limited
            </h3>

            <div style={{ marginBottom: '16px' }}>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '17px',
                  fontWeight: 500,
                  color: '#151561',
                  lineHeight: '1.65',
                  marginBottom: '6px',
                }}
              >
                Registered Address:
              </p>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '17px',
                  fontWeight: 400,
                  color: '#505050',
                  lineHeight: '1.65',
                }}
              >
                84–86 Roman Road<br />
                London, E2 0PJ<br />
                United Kingdom
              </p>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '17px',
                  fontWeight: 500,
                  color: '#151561',
                  lineHeight: '1.65',
                  marginBottom: '6px',
                }}
              >
                Email:
              </p>
              <a
                href="mailto:info@optichore.com"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '17px',
                  fontWeight: 400,
                  color: '#FF0000',
                  lineHeight: '1.65',
                  textDecoration: 'none',
                }}
              >
                info@optichore.com
              </a>
            </div>

            <div>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '17px',
                  fontWeight: 500,
                  color: '#151561',
                  lineHeight: '1.65',
                  marginBottom: '6px',
                }}
              >
                Company Registration:
              </p>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '17px',
                  fontWeight: 400,
                  color: '#505050',
                  lineHeight: '1.65',
                }}
              >
                Company No: 16188042<br />
                VAT No: 485563158
              </p>
            </div>
          </div>

          {/* Last Updated Notice */}
          <div
            style={{
              marginTop: '48px',
              paddingTop: '32px',
              borderTop: '1px solid rgba(0, 0, 0, 0.08)',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '15px',
                fontWeight: 400,
                color: '#6A6A6A',
                fontStyle: 'italic',
              }}
            >
              Last Updated: November 20, 2025
            </p>
          </div>
        </div>
      </div>

      {/* ANIMATIONS */}
      <style>{`
        /* Section Block Fade-In Animation */
        @keyframes privacySectionFade {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .privacy-section-block {
          opacity: 0;
          animation: privacySectionFade 0.8s ease forwards;
        }

        /* Contact Info Block Animation */
        @keyframes contactBlockFade {
          from {
            opacity: 0;
            transform: scale(0.98);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .contact-info-block {
          animation: contactBlockFade 0.9s ease forwards 0.5s;
          opacity: 0;
        }

        /* Smooth Transitions */
        .privacy-document-container a:hover {
          opacity: 0.8;
          transition: opacity 0.3s ease;
        }

        /* ===== TABLET BREAKPOINT (768px - 1024px) ===== */
        @media (min-width: 768px) and (max-width: 1024px) {
          .privacy-document-section {
            padding-top: 4rem;
            padding-bottom: 4rem;
          }

          .privacy-outer-container {
            padding-left: 2rem;
            padding-right: 2rem;
          }

          .privacy-document-container {
            max-width: 95% !important;
          }

          .privacy-section-block {
            margin-bottom: 48px !important;
          }

          .privacy-section-heading {
            font-size: 28px !important;
            margin-bottom: 20px !important;
          }

          .privacy-paragraph {
            font-size: 16px !important;
            margin-bottom: 18px !important;
          }

          .subsections-container h3 {
            font-size: 20px !important;
          }

          .contact-info-block {
            padding: 32px !important;
          }

          .contact-info-block h3 {
            font-size: 22px !important;
          }
        }

        /* ===== MOBILE BREAKPOINT (≤414px) ===== */
        @media (max-width: 414px) {
          .privacy-document-section {
            padding-top: 2.5rem;
            padding-bottom: 2.5rem;
          }

          .privacy-outer-container {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }

          .privacy-document-container {
            max-width: 100% !important;
          }

          .privacy-section-block {
            margin-bottom: 40px !important;
          }

          .privacy-section-heading {
            font-size: 22px !important;
            letter-spacing: 0 !important;
            line-height: 1.35 !important;
            margin-bottom: 16px !important;
            text-align: left;
          }

          .privacy-paragraph {
            font-size: 15px !important;
            line-height: 1.65 !important;
            margin-bottom: 16px !important;
            text-align: left;
          }

          .section-content-paragraphs {
            margin-bottom: 0;
          }

          .subsections-container {
            margin-top: 20px !important;
          }

          .subsections-container > div {
            margin-bottom: 24px !important;
          }

          .subsections-container h3 {
            font-size: 18px !important;
            line-height: 1.4 !important;
            margin-bottom: 12px !important;
          }

          .subsections-container p {
            font-size: 15px !important;
            line-height: 1.65 !important;
            margin-bottom: 10px !important;
            padding-left: 0;
          }

          .section-footer-paragraphs {
            margin-top: 20px !important;
          }

          .section-footer-paragraphs p {
            font-size: 15px !important;
            line-height: 1.65 !important;
            margin-bottom: 16px !important;
          }

          .contact-info-block {
            margin-top: 32px !important;
            padding: 1.5rem !important;
            border-radius: 16px !important;
          }

          .contact-info-block h3 {
            font-size: 20px !important;
            margin-bottom: 20px !important;
          }

          .contact-info-block > div {
            margin-bottom: 14px !important;
          }

          .contact-info-block p {
            font-size: 15px !important;
            line-height: 1.6 !important;
          }

          .contact-info-block a {
            font-size: 15px !important;
            line-height: 1.6 !important;
          }

          /* Last Updated */
          .privacy-document-container > div:last-child {
            margin-top: 32px !important;
            padding-top: 24px !important;
          }

          .privacy-document-container > div:last-child p {
            font-size: 14px !important;
          }
        }
      `}</style>
    </section>
  );
}