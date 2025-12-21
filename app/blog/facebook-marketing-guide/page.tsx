/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/set-state-in-effect */
"use client"
import { useEffect, useRef, useState } from 'react';
import { Quote, Linkedin, Twitter, Facebook } from 'lucide-react';
import { SafeLink } from '@/components/SafeLink';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';


interface RelatedArticle {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  imageUrl: string;
  slug?: string;
}

const relatedArticles: RelatedArticle[] = [
  {
    id: '1',
    title: 'Modern Web Design Trends That Will Dominate 2024',
    excerpt: 'Explore the cutting-edge web design trends that are shaping the digital landscape.',
    category: 'Design',
    imageUrl: 'https://images.unsplash.com/photo-1603985585179-3d71c35a537c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYzNjgwOTc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '2',
    title: 'UI/UX Design Principles for Better User Experience',
    excerpt: 'Master the fundamental UI/UX design principles that create intuitive experiences.',
    category: 'UI/UX',
    imageUrl: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMHV4JTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2MzYxNTQ2OHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '3',
    title: 'Digital Marketing Strategies for Small Businesses',
    excerpt: 'Effective and budget-friendly digital marketing strategies that help businesses grow.',
    category: 'Tips',
    imageUrl: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzYzNjI3ODI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export default function BlogArticlePage() {
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);

    // Scroll animation for content blocks
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#FFFFFF' }}>

      {/* Hero Section - Article Header */}
      <section 
        className="hero-section pt-32 pb-16"
        style={{
          background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFF 100%)',
        }}
      >
        <div className="max-w-[1440px] mx-auto px-12">
          <div className="max-w-[1000px] mx-auto">
            {/* Category Tag */}
            <div className={`mb-6 ${isVisible ? 'animate-fade-down' : 'opacity-0'}`}>
              <span
                className="inline-block px-5 py-2.5 rounded-[24px]"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  fontWeight: 600,
                  backgroundColor: '#FF0000',
                  color: '#FFFFFF',
                }}
              >
                Facebook Marketing
              </span>
            </div>

            {/* Main Title */}
            <h1
              className={`mb-6 ${isVisible ? 'animate-fade-down' : 'opacity-0'}`}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '56px',
                fontWeight: 700,
                color: '#151561',
                lineHeight: '1.15',
                animationDelay: '0.1s',
              }}
            >
              The Ultimate Guide to Facebook Marketing in 2024
            </h1>

            {/* Excerpt */}
            <p
              className={`mb-10 ${isVisible ? 'animate-fade-down' : 'opacity-0'}`}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '22px',
                color: '#151561',
                opacity: 0.7,
                lineHeight: '1.6',
                animationDelay: '0.2s',
              }}
            >
              Discover the latest strategies and best practices for running successful Facebook marketing campaigns that drive real business results and ROI.
            </p>

            {/* Author Info & Meta */}
            <div className={`flex items-center gap-6 mb-12 ${isVisible ? 'animate-fade-down' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              <SafeLink href="/blog/author/sarah-johnson" className="flex items-center gap-4 group">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbnxlbnwxfHx8fDE3NjM2Mzk1NDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Sarah Johnson"
                  className="w-[56px] h-[56px] rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
                  style={{ border: '2px solid #FF0000' }}
                />
                <div>
                  <p
                    className="transition-colors duration-300 group-hover:text-[#FF0000]"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '16px',
                      fontWeight: 600,
                      color: '#151561',
                    }}
                  >
                    Sarah Johnson
                  </p>
                  <p
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '14px',
                      color: '#151561',
                      opacity: 0.6,
                    }}
                  >
                    Senior Digital Marketing Strategist
                  </p>
                </div>
              </SafeLink>
              <div className="h-[40px] w-[1px]" style={{ backgroundColor: 'rgba(21, 21, 97, 0.1)' }} />
              <div>
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    color: '#151561',
                    opacity: 0.6,
                  }}
                >
                  November 15, 2024
                </p>
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    color: '#151561',
                    opacity: 0.6,
                  }}
                >
                  8 min read
                </p>
              </div>
            </div>

            {/* Featured Image */}
            <div 
              className={`rounded-[32px] overflow-hidden ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
              style={{
                boxShadow: '0 12px 40px rgba(21, 21, 97, 0.12)',
                animationDelay: '0.4s',
              }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZ3xlbnwxfHx8fDE3NjM2NTgwNzR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Facebook Marketing Guide"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="content-section py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-[1440px] mx-auto px-12">
          <article className="max-w-[860px] mx-auto" ref={contentRef}>
            {/* Introduction */}
            <div className="animate-on-scroll opacity-0">
              <p
                className="mb-8"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '18px',
                  color: '#151561',
                  lineHeight: '1.8',
                }}
              >
                Facebook remains one of the most powerful platforms for digital marketing, with over 2.9 billion monthly active users. Whether you&apos;re a small business owner or a marketing professional, understanding how to leverage Facebook&apos;s advertising ecosystem is crucial for success in 2024.
              </p>
              <p
                className="mb-8"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '18px',
                  color: '#151561',
                  lineHeight: '1.8',
                }}
              >
                In this comprehensive guide, we&apos;ll walk you through everything you need to know about Facebook marketing, from setting up your business page to running profitable ad campaigns that convert.
              </p>
            </div>

            {/* Heading 2 */}
            <div className="animate-on-scroll opacity-0">
              <h2
                className="mb-6 mt-12"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '36px',
                  fontWeight: 700,
                  color: '#151561',
                  lineHeight: '1.3',
                }}
              >
                Why Facebook Marketing Still Matters in 2024
              </h2>
              <p
                className="mb-6"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '18px',
                  color: '#151561',
                  lineHeight: '1.8',
                }}
              >
                Despite the emergence of newer social platforms, Facebook continues to dominate the social media landscape. Here&apos;s why your business should still invest in Facebook marketing:
              </p>
            </div>

            {/* Bullet List */}
            <div className="animate-on-scroll opacity-0">
              <ul className="mb-8 pl-6 space-y-4">
                <li
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '18px',
                    color: '#151561',
                    lineHeight: '1.8',
                    listStyleType: 'disc',
                  }}
                >
                  <strong>Massive Reach:</strong> With billions of active users, Facebook offers unparalleled audience reach across demographics and geographies.
                </li>
                <li
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '18px',
                    color: '#151561',
                    lineHeight: '1.8',
                    listStyleType: 'disc',
                  }}
                >
                  <strong>Advanced Targeting:</strong> Facebook&apos;s sophisticated targeting options allow you to reach your ideal customers with precision.
                </li>
                <li
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '18px',
                    color: '#151561',
                    lineHeight: '1.8',
                    listStyleType: 'disc',
                  }}
                >
                  <strong>Cost-Effective:</strong> Compared to traditional advertising, Facebook ads offer excellent ROI with flexible budget options.
                </li>
                <li
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '18px',
                    color: '#151561',
                    lineHeight: '1.8',
                    listStyleType: 'disc',
                  }}
                >
                  <strong>Detailed Analytics:</strong> Comprehensive insights help you track performance and optimize campaigns in real-time.
                </li>
              </ul>
            </div>

            {/* Pull Quote Block */}
            <div className="animate-on-scroll opacity-0">
              <div
                className="my-16 p-10 rounded-[24px] relative"
                style={{
                  background: 'linear-gradient(135deg, #F8FAFF 0%, #FFFFFF 100%)',
                  border: '2px solid rgba(255, 0, 0, 0.1)',
                  boxShadow: '0 8px 24px rgba(21, 21, 97, 0.08)',
                }}
              >
                <Quote 
                  size={48} 
                  style={{ 
                    color: '#FF0000', 
                    opacity: 0.3,
                    position: 'absolute',
                    top: '32px',
                    left: '32px',
                  }} 
                />
                <blockquote
                  className="relative z-10 pl-8"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '28px',
                    fontWeight: 600,
                    color: '#151561',
                    lineHeight: '1.5',
                    fontStyle: 'italic',
                  }}
                >
                  &quot;The key to successful Facebook marketing isn&apos;t just about running ads—it&apos;s about creating meaningful connections with your audience and delivering value at every touchpoint.&quot;
                </blockquote>
              </div>
            </div>

            {/* Heading 3 & Content */}
            <div className="animate-on-scroll opacity-0">
              <h3
                className="mb-4 mt-12"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '28px',
                  fontWeight: 700,
                  color: '#151561',
                  lineHeight: '1.3',
                }}
              >
                Setting Up Your Facebook Business Page
              </h3>
              <p
                className="mb-6"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '18px',
                  color: '#151561',
                  lineHeight: '1.8',
                }}
              >
                Before you can start advertising, you need a well-optimized business page. Here&apos;s a step-by-step guide to setting up your presence:
              </p>
            </div>

            {/* Numbered List */}
            <div className="animate-on-scroll opacity-0">
              <ol className="mb-8 pl-6 space-y-4">
                <li
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '18px',
                    color: '#151561',
                    lineHeight: '1.8',
                    listStyleType: 'decimal',
                  }}
                >
                  <strong>Create Your Page:</strong> Choose the right category and fill in all business information completely.
                </li>
                <li
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '18px',
                    color: '#151561',
                    lineHeight: '1.8',
                    listStyleType: 'decimal',
                  }}
                >
                  <strong>Optimize Your Profile:</strong> Use high-quality profile and cover photos that represent your brand.
                </li>
                <li
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '18px',
                    color: '#151561',
                    lineHeight: '1.8',
                    listStyleType: 'decimal',
                  }}
                >
                  <strong>Complete Your About Section:</strong> Write a compelling description that includes relevant keywords.
                </li>
                <li
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '18px',
                    color: '#151561',
                    lineHeight: '1.8',
                    listStyleType: 'decimal',
                  }}
                >
                  <strong>Add Contact Information:</strong> Make it easy for customers to reach you with accurate contact details.
                </li>
                <li
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '18px',
                    color: '#151561',
                    lineHeight: '1.8',
                    listStyleType: 'decimal',
                  }}
                >
                  <strong>Enable Messaging:</strong> Set up automated responses and quick replies for better customer service.
                </li>
              </ol>
            </div>

            {/* Callout Box */}
            <div className="animate-on-scroll opacity-0">
              <div
                className="my-12 p-8 rounded-[20px]"
                style={{
                  backgroundColor: '#F8FAFF',
                  borderLeft: '4px solid #FF0000',
                  boxShadow: '0 4px 16px rgba(21, 21, 97, 0.06)',
                }}
              >
                <p
                  className="mb-2"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    fontWeight: 700,
                    color: '#FF0000',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                  }}
                >
                  Pro Tip
                </p>
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '17px',
                    color: '#151561',
                    lineHeight: '1.7',
                  }}
                >
                  Verify your business page to build trust and unlock additional features. The blue verification badge signals authenticity to potential customers and can significantly improve your credibility.
                </p>
              </div>
            </div>

            {/* Inline Image */}
            <div className="animate-on-scroll opacity-0">
              <div className="my-12">
                <div 
                  className="rounded-[20px] overflow-hidden"
                  style={{ boxShadow: '0 8px 24px rgba(21, 21, 97, 0.1)' }}
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1693159682660-c125e71844d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRlc2t8ZW58MXx8fHwxNzYzNjQ0MTExfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Facebook Marketing Strategy"
                    className="w-full h-[400px] object-cover"
                  />
                </div>
                <p
                  className="mt-4 text-center"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    color: '#151561',
                    opacity: 0.6,
                    fontStyle: 'italic',
                  }}
                >
                  Planning your Facebook marketing strategy
                </p>
              </div>
            </div>

            {/* More Content */}
            <div className="animate-on-scroll opacity-0">
              <h2
                className="mb-6 mt-12"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '36px',
                  fontWeight: 700,
                  color: '#151561',
                  lineHeight: '1.3',
                }}
              >
                Creating Effective Facebook Ad Campaigns
              </h2>
              <p
                className="mb-6"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '18px',
                  color: '#151561',
                  lineHeight: '1.8',
                }}
              >
                Once your page is set up, it&apos;s time to create campaigns that convert. Facebook&apos;s ad platform offers various campaign objectives, from brand awareness to conversions. Understanding which objective aligns with your business goals is crucial for success.
              </p>
              <p
                className="mb-6"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '18px',
                  color: '#151561',
                  lineHeight: '1.8',
                }}
              >
                Start by defining your target audience using Facebook&apos;s detailed targeting options. Consider demographics, interests, behaviors, and even create custom audiences based on website visitors or email lists. The more specific your targeting, the better your results will be.
              </p>
            </div>

            {/* Divider */}
            <div className="animate-on-scroll opacity-0">
              <div 
                className="my-12 h-[1px]"
                style={{ backgroundColor: 'rgba(21, 21, 97, 0.1)' }}
              />
            </div>

            {/* Final Section */}
            <div className="animate-on-scroll opacity-0">
              <h2
                className="mb-6"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '36px',
                  fontWeight: 700,
                  color: '#151561',
                  lineHeight: '1.3',
                }}
              >
                Measuring Success and Optimization
              </h2>
              <p
                className="mb-6"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '18px',
                  color: '#151561',
                  lineHeight: '1.8',
                }}
              >
                The final piece of the puzzle is tracking your results and continuously optimizing your campaigns. Facebook provides robust analytics through Ads Manager, giving you insights into reach, engagement, clicks, conversions, and ROI.
              </p>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '18px',
                  color: '#151561',
                  lineHeight: '1.8',
                }}
              >
                Regular testing and iteration are key to long-term success. Experiment with different ad formats, audiences, and creative elements to find what works best for your business. Remember, Facebook marketing is not a set-it-and-forget-it strategy—it requires ongoing attention and refinement.
              </p>
            </div>

            {/* Tags Section */}
            <div className="tags-section mt-12 animate-on-scroll opacity-0">
              <div className="flex items-center gap-3 flex-wrap">
                <span
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#151561',
                  }}
                >
                  Tags:
                </span>
                <SafeLink
                  href="/blog/tag/social-media"
                  className="tag-pill px-4 py-2 rounded-[20px] transition-all duration-300"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    fontWeight: 500,
                    backgroundColor: 'rgba(21, 21, 97, 0.06)',
                    color: '#151561',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#FF0000';
                    e.currentTarget.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e: any) => {
                    e.currentTarget.style.backgroundColor = 'rgba(21, 21, 97, 0.06)';
                    e.currentTarget.style.color = '#151561';
                  }}
                >
                  Social Media
                </SafeLink>
                <SafeLink
                  href="/blog/tag/advertising"
                  className="tag-pill px-4 py-2 rounded-[20px] transition-all duration-300"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    fontWeight: 500,
                    backgroundColor: 'rgba(21, 21, 97, 0.06)',
                    color: '#151561',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#FF0000';
                    e.currentTarget.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e: any) => {
                    e.currentTarget.style.backgroundColor = 'rgba(21, 21, 97, 0.06)';
                    e.currentTarget.style.color = '#151561';
                  }}
                >
                  Advertising
                </SafeLink>
                <SafeLink
                  href="/blog/tag/digital-marketing"
                  className="tag-pill px-4 py-2 rounded-[20px] transition-all duration-300"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    fontWeight: 500,
                    backgroundColor: 'rgba(21, 21, 97, 0.06)',
                    color: '#151561',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#FF0000';
                    e.currentTarget.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e: any) => {
                    e.currentTarget.style.backgroundColor = 'rgba(21, 21, 97, 0.06)';
                    e.currentTarget.style.color = '#151561';
                  }}
                >
                  Digital Marketing
                </SafeLink>
                <SafeLink
                  href="/blog/tag/strategy"
                  className="tag-pill px-4 py-2 rounded-[20px] transition-all duration-300"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    fontWeight: 500,
                    backgroundColor: 'rgba(21, 21, 97, 0.06)',
                    color: '#151561',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#FF0000';
                    e.currentTarget.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e: any) => {
                    e.currentTarget.style.backgroundColor = 'rgba(21, 21, 97, 0.06)';
                    e.currentTarget.style.color = '#151561';
                  }}
                >
                  Strategy
                </SafeLink>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Author Bio Block */}
      <section className="author-bio-section py-20" style={{ backgroundColor: '#F8FAFF' }}>
        <div className="max-w-[1440px] mx-auto px-12">
          <div className="max-w-[860px] mx-auto">
            <div
              className="p-10 rounded-[24px] animate-on-scroll opacity-0"
              style={{
                backgroundColor: '#FFFFFF',
                boxShadow: '0 8px 24px rgba(21, 21, 97, 0.1)',
                border: '1px solid rgba(21, 21, 97, 0.06)',
              }}
            >
              <div className="flex items-start gap-8">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbnxlbnwxfHx8fDE3NjM2Mzk1NDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Sarah Johnson"
                  className="w-[120px] h-[120px] rounded-full object-cover flex-shrink-0"
                  style={{ border: '3px solid #FF0000' }}
                />
                <div className="flex-1">
                  <h3
                    className="mb-2"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '24px',
                      fontWeight: 700,
                      color: '#151561',
                    }}
                  >
                    Sarah Johnson
                  </h3>
                  <p
                    className="mb-4"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '16px',
                      fontWeight: 600,
                      color: '#FF0000',
                    }}
                  >
                    Senior Digital Marketing Strategist
                  </p>
                  <p
                    className="mb-6"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '16px',
                      color: '#151561',
                      opacity: 0.8,
                      lineHeight: '1.7',
                    }}
                  >
                    Sarah is a seasoned digital marketing professional with over 8 years of experience in social media marketing and paid advertising. She specializes in helping businesses maximize their ROI through strategic Facebook and Instagram campaigns.
                  </p>
                  <div className="flex gap-4">
                    <SafeLink
                      href="#"
                      className="w-[40px] h-[40px] rounded-full flex items-center justify-center transition-all duration-300"
                      style={{
                        backgroundColor: 'rgba(21, 21, 97, 0.06)',
                        color: '#151561',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#FF0000';
                        e.currentTarget.style.color = '#FFFFFF';
                      }}
                      onMouseLeave={(e: any) => {
                        e.currentTarget.style.backgroundColor = 'rgba(21, 21, 97, 0.06)';
                        e.currentTarget.style.color = '#151561';
                      }}
                    >
                      <Linkedin size={18} />
                    </SafeLink>
                    <SafeLink
                      href="#"
                      className="w-[40px] h-[40px] rounded-full flex items-center justify-center transition-all duration-300"
                      style={{
                        backgroundColor: 'rgba(21, 21, 97, 0.06)',
                        color: '#151561',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#FF0000';
                        e.currentTarget.style.color = '#FFFFFF';
                      }}
                      onMouseLeave={(e: any) => {
                        e.currentTarget.style.backgroundColor = 'rgba(21, 21, 97, 0.06)';
                        e.currentTarget.style.color = '#151561';
                      }}
                    >
                      <Twitter size={18} />
                    </SafeLink>
                    <SafeLink
                      href="#"
                      className="w-[40px] h-[40px] rounded-full flex items-center justify-center transition-all duration-300"
                      style={{
                        backgroundColor: 'rgba(21, 21, 97, 0.06)',
                        color: '#151561',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#FF0000';
                        e.currentTarget.style.color = '#FFFFFF';
                      }}
                      onMouseLeave={(e: any) => {
                        e.currentTarget.style.backgroundColor = 'rgba(21, 21, 97, 0.06)';
                        e.currentTarget.style.color = '#151561';
                      }}
                    >
                      <Facebook size={18} />
                    </SafeLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="related-articles-section py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-[1440px] mx-auto px-12">
          <h2
            className="mb-12 text-center"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '42px',
              fontWeight: 700,
              color: '#151561',
            }}
          >
            Related Articles
          </h2>
          <div className="grid grid-cols-3 gap-8">
            {relatedArticles.map((article, index) => (
              <article
                key={article.id}
                className="blog-card rounded-[24px] overflow-hidden animate-stagger-fade-up"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid rgba(21, 21, 97, 0.08)',
                  boxShadow: '0 4px 16px rgba(21, 21, 97, 0.06)',
                  transition: 'all 0.3s ease',
                  animationDelay: `${index * 100}ms`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(21, 21, 97, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(21, 21, 97, 0.06)';
                }}
              >
                <div className="relative h-[220px] overflow-hidden">
                  <ImageWithFallback
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-7">
                  <span
                    className="inline-block px-3 py-1 rounded-[16px] mb-4"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '13px',
                      fontWeight: 600,
                      backgroundColor: 'rgba(255, 0, 0, 0.1)',
                      color: '#FF0000',
                    }}
                  >
                    {article.category}
                  </span>
                  <h3
                    className="mb-3"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '20px',
                      fontWeight: 700,
                      color: '#151561',
                      lineHeight: '1.3',
                    }}
                  >
                    {article.title}
                  </h3>
                  <p
                    className="mb-5"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '15px',
                      color: '#151561',
                      opacity: 0.7,
                      lineHeight: '1.6',
                    }}
                  >
                    {article.excerpt}
                  </p>
                  <SafeLink
                    href={article.slug || '#'}
                    className="inline-flex items-center gap-2 group"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '15px',
                      fontWeight: 600,
                      color: '#FF0000',
                      textDecoration: 'none',
                    }}
                  >
                    Read More
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </SafeLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Block */}
      <section 
        className="cta-section py-24"
        style={{
          background: 'linear-gradient(135deg, #F8FAFF 0%, #FFFFFF 100%)',
        }}
      >
        <div className="max-w-[1440px] mx-auto px-12">
          <div className="text-center max-w-[700px] mx-auto">
            <h2
              className="mb-6"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '48px',
                fontWeight: 700,
                color: '#151561',
                lineHeight: '1.2',
              }}
            >
              Want more insights like this?
            </h2>
            <p
              className="mb-10"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '20px',
                color: '#151561',
                opacity: 0.7,
                lineHeight: '1.6',
              }}
            >
              Stay updated with the latest trends, tips, and strategies in digital marketing and technology.
            </p>
            <div className="flex justify-center items-center gap-5">
              <SafeLink
                href="/blog"
                className="px-10 py-4 rounded-[50px] inline-flex items-center justify-center transition-all duration-300"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '17px',
                  fontWeight: 600,
                  backgroundColor: '#FF0000',
                  color: '#FFFFFF',
                  boxShadow: '0 4px 16px rgba(255, 0, 0, 0.25)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 0, 0, 0.35)';
                }}
                onMouseLeave={(e: any) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(255, 0, 0, 0.25)';
                }}
              >
                Visit Blog
              </SafeLink>
              <SafeLink
                href="/contact"
                className="px-10 py-4 rounded-[50px] inline-flex items-center justify-center transition-all duration-300"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '17px',
                  fontWeight: 600,
                  backgroundColor: '#FFFFFF',
                  color: '#FF0000',
                  border: '2px solid #FF0000',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#FF0000';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e: any) => {
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                  e.currentTarget.style.color = '#FF0000';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Contact Us
              </SafeLink>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}

      {/* Animation Styles */}
      <style>{`
        @keyframes fade-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes stagger-fade-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-down {
          animation: fade-down 0.8s ease-out backwards;
        }

        .animate-fade-up {
          animation: fade-up 0.8s ease-out backwards;
        }

        .animate-stagger-fade-up {
          animation: stagger-fade-up 0.6s ease-out backwards;
        }

        .animate-on-scroll {
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .animate-fade-up-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        .animate-on-scroll:not(.animate-fade-up-visible) {
          opacity: 0;
          transform: translateY(30px);
        }
      `}</style>
    </div>
  );
}