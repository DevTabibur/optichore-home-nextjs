/* eslint-disable react-hooks/set-state-in-effect */
"use client"

import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { SafeLink } from "@/components/SafeLink";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  imageUrl: string;
  slug?: string;
  tags: string[];
}

const tagData: Record<string, { name: string; description: string }> = {
  'social-media': {
    name: 'Social Media',
    description: 'Insights and strategies for leveraging social media platforms to grow your business and engage with your audience effectively.',
  },
  'advertising': {
    name: 'Advertising',
    description: 'Expert tips and techniques for creating high-performing advertising campaigns across digital platforms.',
  },
  'web-design': {
    name: 'Web Design',
    description: 'Explore modern web design principles, trends, and best practices for creating stunning digital experiences.',
  },
  'mobile': {
    name: 'Mobile',
    description: 'Mobile-first strategies, app development insights, and responsive design techniques for the mobile era.',
  },
  'branding': {
    name: 'Branding',
    description: 'Build powerful brand identities that resonate with your audience and create lasting impressions.',
  },
  'seo': {
    name: 'SEO',
    description: 'Search engine optimization strategies to improve your website visibility and organic traffic.',
  },
  'user-experience': {
    name: 'User Experience',
    description: 'Creating intuitive and delightful user experiences through thoughtful design and research.',
  },
  'digital-marketing': {
    name: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies to help you reach and convert your target audience.',
  },
  'trends': {
    name: 'Trends',
    description: 'Stay ahead of the curve with the latest trends in technology, design, and digital marketing.',
  },
  'strategy': {
    name: 'Strategy',
    description: 'Strategic insights and frameworks for building successful digital businesses.',
  },
};

const allBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Ultimate Guide to Facebook Marketing in 2024',
    excerpt: 'Discover the latest strategies and best practices for running successful Facebook marketing campaigns that drive real business results.',
    category: 'Facebook Marketing',
    date: 'November 15, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZ3xlbnwxfHx8fDE3NjM2NTgwNzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    slug: '/blog/facebook-marketing-guide',
    tags: ['social-media', 'advertising', 'digital-marketing', 'strategy'],
  },
  {
    id: '2',
    title: 'Modern Web Design Trends That Will Dominate 2024',
    excerpt: 'Explore the cutting-edge web design trends that are shaping the digital landscape and learn how to implement them in your projects.',
    category: 'Design',
    date: 'November 12, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1603985585179-3d71c35a537c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYzNjgwOTc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['web-design', 'trends', 'user-experience'],
  },
  {
    id: '3',
    title: 'Building Scalable Mobile Apps: Best Practices',
    excerpt: 'Learn the essential principles and techniques for developing mobile applications that can scale with your growing user base.',
    category: 'Development',
    date: 'November 10, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjM2MzM1NDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['mobile', 'strategy', 'trends'],
  },
  {
    id: '4',
    title: 'UI/UX Design Principles for Better User Experience',
    excerpt: 'Master the fundamental UI/UX design principles that create intuitive, engaging, and user-friendly digital experiences.',
    category: 'UI/UX',
    date: 'November 8, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMHV4JTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2MzYxNTQ2OHww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['user-experience', 'web-design', 'strategy'],
  },
  {
    id: '5',
    title: 'Creating a Strong Brand Identity: A Complete Guide',
    excerpt: 'Develop a powerful brand identity that resonates with your target audience and sets you apart from the competition.',
    category: 'Branding',
    date: 'November 5, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1633533451976-992e226e32d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwZGVzaWdufGVufDF8fHx8MTc2MzYwMDk4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['branding', 'strategy', 'web-design'],
  },
  {
    id: '6',
    title: 'Digital Marketing Strategies for Small Businesses',
    excerpt: 'Effective and budget-friendly digital marketing strategies that help small businesses grow their online presence and reach.',
    category: 'Tips',
    date: 'November 3, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzYzNjI3ODI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['digital-marketing', 'strategy', 'seo', 'social-media'],
  },
  {
    id: '7',
    title: 'The Future of Software Development: Trends to Watch',
    excerpt: 'Stay ahead of the curve with insights into emerging technologies and methodologies shaping the future of software development.',
    category: 'Development',
    date: 'November 1, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1531498860502-7c67cf02f657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kZXxlbnwxfHx8fDE3NjM2NDc1Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['trends', 'strategy', 'mobile'],
  },
  {
    id: '8',
    title: 'How Optichore Helps Businesses Transform Digitally',
    excerpt: 'Learn how our comprehensive digital marketing and IT solutions have helped businesses achieve their transformation goals.',
    category: 'Company News',
    date: 'October 28, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1603985585179-3d71c35a537c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYzNjgwOTc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['digital-marketing', 'branding', 'strategy'],
  },
  {
    id: '9',
    title: '10 Essential Tips for Effective Facebook Advertising',
    excerpt: 'Maximize your Facebook ad ROI with these proven tips and techniques from our digital marketing experts.',
    category: 'Facebook Marketing',
    date: 'October 25, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZ3xlbnwxfHx8fDE3NjM2NTgwNzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['social-media', 'advertising', 'digital-marketing'],
  },
  {
    id: '10',
    title: 'Responsive Design: Best Practices for 2024',
    excerpt: 'Master the art of creating responsive websites that provide seamless experiences across all devices and screen sizes.',
    category: 'Design',
    date: 'October 20, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1603985585179-3d71c35a537c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYzNjgwOTc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['web-design', 'mobile', 'user-experience'],
  },
  {
    id: '11',
    title: 'Advanced React Development Techniques',
    excerpt: 'Take your React skills to the next level with advanced patterns, hooks, and optimization techniques for building complex applications.',
    category: 'Development',
    date: 'October 15, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1531498860502-7c67cf02f657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kZXxlbnwxfHx8fDE3NjM2NDc1Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['trends', 'strategy'],
  },
  {
    id: '12',
    title: 'User Research Methods for Better UX',
    excerpt: 'Discover effective user research methods that help you understand your users and create better product experiences.',
    category: 'UI/UX',
    date: 'October 10, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMHV4JTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2MzYxNTQ2OHww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['user-experience', 'strategy'],
  },
];

export default function BlogTagPage() {
  const { tag } = useParams<{ tag: string }>();
  const [currentPage, setCurrentPage] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const postsPerPage = 6;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const tagInfo = tag ? tagData[tag] : null;

  if (!tagInfo) {
    return (
      <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '48px',
                fontWeight: 700,
                color: '#151561',
              }}
            >
              Tag Not Found
            </h1>
            <SafeLink
              href="/blog"
              className="inline-block mt-8 px-8 py-3 rounded-[50px]"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '16px',
                fontWeight: 600,
                backgroundColor: '#FF0000',
                color: '#FFFFFF',
              }}
            >
              Back to Blog
            </SafeLink>
          </div>
        </div>
      </div>
    );
  }

  // Filter posts by tag
  const taggedPosts = allBlogPosts.filter((post) => post.tags.includes(tag));

  // Pagination
  const totalPages = Math.ceil(taggedPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = taggedPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#FFFFFF' }}>

      {/* Hero Section */}
      <section
        className="tag-hero-section hero-section pt-32 pb-16"
        style={{
          background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFF 100%)',
        }}
      >
        <div className="tag-hero-container max-w-[1440px] mx-auto px-12">
          {/* Breadcrumb */}
          <div className={`tag-breadcrumb mb-6 flex items-center gap-2 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <SafeLink
              href="/blog"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '15px',
                fontWeight: 500,
                color: '#151561',
                opacity: 0.6,
                textDecoration: 'none',
              }}
              className="hover:opacity-100 transition-opacity duration-200"
            >
              Blog
            </SafeLink>
            <span style={{ color: '#151561', opacity: 0.3 }}>→</span>
            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '15px',
                fontWeight: 600,
                color: '#FF0000',
              }}
            >
              {tagInfo.name}
            </span>
          </div>

          <div className={`tag-header-content text-center max-w-[800px] mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1
              className="tag-page-title mb-6"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '64px',
                fontWeight: 700,
                color: '#151561',
                lineHeight: '1.1',
              }}
            >
              Tag: {tagInfo.name}
            </h1>
            <p
              className="tag-page-subtitle"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '22px',
                color: '#151561',
                opacity: 0.7,
                lineHeight: '1.6',
              }}
            >
              Articles tagged under {tagInfo.name}.
            </p>
          </div>
        </div>
      </section>

      {/* Tag Description */}
      <section className="tag-description-section description-section py-12" style={{ backgroundColor: '#F8FAFF' }}>
        <div className="tag-description-container max-w-[1440px] mx-auto px-12">
          <div className={`tag-intro-text max-w-[860px] mx-auto text-center ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '18px',
                color: '#151561',
                opacity: 0.8,
                lineHeight: '1.8',
              }}
            >
              {tagInfo.description}
            </p>
          </div>
        </div>
      </section>

      {/* Tagged Article Grid */}
      <section className="tag-article-grid-section article-grid-section py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="tag-article-grid-container max-w-[1440px] mx-auto px-12">
          {currentPosts.length > 0 ? (
            <div className="tag-posts-grid grid grid-cols-3 gap-8">
              {currentPosts.map((post, index) => (
                <article
                  key={post.id}
                  className="tag-blog-card blog-card rounded-[24px] overflow-hidden animate-stagger-fade-up"
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
                  {/* Image */}
                  <div className="relative h-[240px] overflow-hidden">
                    <ImageWithFallback
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="inline-block px-3 py-1 rounded-[16px]"
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '13px',
                          fontWeight: 600,
                          backgroundColor: 'rgba(255, 0, 0, 0.1)',
                          color: '#FF0000',
                        }}
                      >
                        {tagInfo.name}
                      </span>
                      <span
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '13px',
                          color: '#151561',
                          opacity: 0.5,
                        }}
                      >
                        {post.date}
                      </span>
                    </div>

                    <h3
                      className="mb-3"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '22px',
                        fontWeight: 700,
                        color: '#151561',
                        lineHeight: '1.3',
                      }}
                    >
                      {post.title}
                    </h3>

                    <p
                      className="mb-6"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '15px',
                        color: '#151561',
                        opacity: 0.7,
                        lineHeight: '1.6',
                      }}
                    >
                      {post.excerpt}
                    </p>

                    <SafeLink
                      href={post.slug || '#'}
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
          ) : (
            <div className="text-center py-20">
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '18px',
                  color: '#151561',
                  opacity: 0.5,
                }}
              >
                No articles found with this tag.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Pagination */}
      {totalPages > 1 && (
        <section className="pagination-section py-16" style={{ backgroundColor: '#F8FAFF' }}>
          <div className="max-w-[1440px] mx-auto px-12">
            <div className="flex justify-center items-center gap-3">
              {/* Previous Button */}
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="pagination-btn px-5 py-2.5 rounded-[14px] transition-all duration-300"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '15px',
                  fontWeight: 500,
                  backgroundColor: '#FFFFFF',
                  color: '#151561',
                  border: '1.5px solid rgba(21, 21, 97, 0.1)',
                  cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                  opacity: currentPage === 1 ? 0.4 : 1,
                }}
                onMouseEnter={(e) => {
                  if (currentPage !== 1) {
                    e.currentTarget.style.borderColor = '#FF0000';
                    e.currentTarget.style.color = '#FF0000';
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentPage !== 1) {
                    e.currentTarget.style.borderColor = 'rgba(21, 21, 97, 0.1)';
                    e.currentTarget.style.color = '#151561';
                  }
                }}
              >
                Prev
              </button>

              {/* Page Numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className="pagination-btn w-[44px] h-[44px] rounded-[14px] transition-all duration-300"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '15px',
                    fontWeight: 600,
                    backgroundColor: currentPage === pageNum ? '#FF0000' : '#FFFFFF',
                    color: currentPage === pageNum ? '#FFFFFF' : '#151561',
                    border: currentPage === pageNum ? 'none' : '1.5px solid rgba(21, 21, 97, 0.1)',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    if (currentPage !== pageNum) {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 0, 0, 0.1)';
                      e.currentTarget.style.borderColor = '#FF0000';
                      e.currentTarget.style.color = '#FF0000';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (currentPage !== pageNum) {
                      e.currentTarget.style.backgroundColor = '#FFFFFF';
                      e.currentTarget.style.borderColor = 'rgba(21, 21, 97, 0.1)';
                      e.currentTarget.style.color = '#151561';
                    }
                  }}
                >
                  {pageNum}
                </button>
              ))}

              {/* Next Button */}
              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="pagination-btn px-5 py-2.5 rounded-[14px] transition-all duration-300"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '15px',
                  fontWeight: 500,
                  backgroundColor: '#FFFFFF',
                  color: '#151561',
                  border: '1.5px solid rgba(21, 21, 97, 0.1)',
                  cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                  opacity: currentPage === totalPages ? 0.4 : 1,
                }}
                onMouseEnter={(e) => {
                  if (currentPage !== totalPages) {
                    e.currentTarget.style.borderColor = '#FF0000';
                    e.currentTarget.style.color = '#FF0000';
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentPage !== totalPages) {
                    e.currentTarget.style.borderColor = 'rgba(21, 21, 97, 0.1)';
                    e.currentTarget.style.color = '#151561';
                  }
                }}
              >
                Next
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}

      {/* Animation Styles */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
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

        .animate-fade-in {
          animation: fade-in 0.8s ease-out backwards;
        }

        .animate-fade-up {
          animation: fade-up 0.8s ease-out backwards;
        }

        .animate-stagger-fade-up {
          animation: stagger-fade-up 0.6s ease-out backwards;
        }

        /* ===== TABLET BREAKPOINT (768px - 1024px) ===== */
        @media (min-width: 768px) and (max-width: 1024px) {
          /* Hero Section */
          .tag-hero-section {
            padding-top: 7rem;
            padding-bottom: 3rem;
          }

          .tag-hero-container {
            padding-left: 2rem;
            padding-right: 2rem;
          }

          .tag-breadcrumb {
            justify-content: center;
          }

          .tag-header-content {
            max-width: 90% !important;
          }

          .tag-page-title {
            font-size: 48px !important;
          }

          .tag-page-subtitle {
            font-size: 18px !important;
          }

          /* Description Section */
          .tag-description-section {
            padding-top: 2rem;
            padding-bottom: 2rem;
          }

          .tag-description-container {
            padding-left: 2rem;
            padding-right: 2rem;
          }

          .tag-intro-text {
            max-width: 90% !important;
          }

          .tag-intro-text p {
            font-size: 17px !important;
          }

          /* Article Grid - 2 Columns on Tablet */
          .tag-article-grid-section {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }

          .tag-article-grid-container {
            padding-left: 2rem;
            padding-right: 2rem;
          }

          .tag-posts-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 2rem !important;
          }

          .tag-blog-card:hover {
            transform: translateY(-4px) !important;
          }
        }

        /* ===== MOBILE BREAKPOINT (≤414px) ===== */
        @media (max-width: 414px) {
          /* Hero Section */
          .tag-hero-section {
            padding-top: 5rem;
            padding-bottom: 2rem;
          }

          .tag-hero-container {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }

          .tag-breadcrumb {
            justify-content: center;
            margin-bottom: 1.25rem !important;
          }

          .tag-breadcrumb span,
          .tag-breadcrumb a {
            font-size: 14px !important;
          }

          .tag-header-content {
            max-width: 100% !important;
          }

          .tag-page-title {
            font-size: 32px !important;
            margin-bottom: 1rem !important;
            text-align: center;
          }

          .tag-page-subtitle {
            font-size: 16px !important;
            text-align: center;
            line-height: 1.65 !important;
          }

          /* Description Section */
          .tag-description-section {
            padding-top: 1.5rem;
            padding-bottom: 1.5rem;
          }

          .tag-description-container {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }

          .tag-intro-text {
            max-width: 100% !important;
          }

          .tag-intro-text p {
            font-size: 15px !important;
            line-height: 1.7 !important;
            text-align: center;
          }

          /* Article Grid - CRITICAL SINGLE COLUMN LAYOUT */
          .tag-article-grid-section {
            padding-top: 2rem;
            padding-bottom: 2rem;
          }

          .tag-article-grid-container {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }

          .tag-posts-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }

          /* Blog Card Internal Layout */
          .tag-blog-card {
            border-radius: 20px !important;
          }

          .tag-blog-card:hover {
            transform: none !important;
          }

          .tag-blog-card .relative {
            height: 200px !important;
          }

          .tag-blog-card .p-8 {
            padding: 1.5rem !important;
          }

          .tag-blog-card .flex {
            flex-wrap: wrap;
            gap: 0.5rem;
          }

          .tag-blog-card .inline-block {
            font-size: 12px !important;
            padding: 0.375rem 0.75rem !important;
          }

          .tag-blog-card h3 {
            font-size: 18px !important;
            line-height: 1.35 !important;
            margin-bottom: 0.625rem !important;
          }

          .tag-blog-card p {
            font-size: 14px !important;
            line-height: 1.65 !important;
            margin-bottom: 1rem !important;
          }

          .tag-blog-card a {
            font-size: 14px !important;
            min-height: 44px;
            display: inline-flex;
            align-items: center;
          }

          /* Pagination */
          .pagination-section {
            padding-top: 2rem;
            padding-bottom: 2rem;
          }

          .pagination-btn {
            min-height: 44px !important;
          }
        }
      `}</style>
    </div>
  );
}