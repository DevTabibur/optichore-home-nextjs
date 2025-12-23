/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { SafeLink } from "@/components/SafeLink";
import { BookOpen, Calendar, Facebook, Linkedin, Mail, Quote, Twitter } from "lucide-react";
import { useEffect, useState } from "react";

interface AuthorData {
  id: string;
  name: string;
  position: string;
  bio: string;
  avatar: string;
  email?: string;
  joinDate: string;
  quote: string;
  social: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
  };
}

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  imageUrl: string;
  slug?: string;
  authorId: string;
}

const authorsData: Record<string, AuthorData> = {
  'sarah-johnson': {
    id: 'sarah-johnson',
    name: 'Sarah Johnson',
    position: 'Senior Digital Marketing Strategist',
    bio: 'Sarah is a seasoned digital marketing professional with over 8 years of experience in social media marketing and paid advertising. She specializes in helping businesses maximize their ROI through strategic campaigns.',
    avatar: 'https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbnxlbnwxfHx8fDE3NjM2Mzk1NDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    email: 'sarah.johnson@optichore.com',
    joinDate: 'January 2022',
    quote: 'Success in digital marketing comes from understanding your audience deeply and delivering value at every touchpoint.',
    social: {
      linkedin: '#',
      twitter: '#',
      facebook: '#',
    },
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
    authorId: 'sarah-johnson',
  },
  {
    id: '9',
    title: '10 Essential Tips for Effective Facebook Advertising',
    excerpt: 'Maximize your Facebook ad ROI with these proven tips and techniques from our digital marketing experts.',
    category: 'Facebook Marketing',
    date: 'October 25, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZ3xlbnwxfHx8fDE3NjM2NTgwNzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    authorId: 'sarah-johnson',
  },
  {
    id: '6',
    title: 'Digital Marketing Strategies for Small Businesses',
    excerpt: 'Effective and budget-friendly digital marketing strategies that help small businesses grow their online presence and reach.',
    category: 'Tips',
    date: 'November 3, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzYzNjI3ODI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    authorId: 'sarah-johnson',
  },
];


const AuthorClient = ({authorId}:{authorId: string}) => {

    // const { authorId } = useParams<{ authorId: string }>();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const author = authorId ? authorsData[authorId] : null;

  if (!author) {
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
              Author Not Found
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

  const authorPosts = allBlogPosts.filter((post) => post.authorId === authorId);


  return (
    <>
      <div
        className="min-h-screen flex flex-col"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        {/* Hero - Author Banner */}
        <section
          className="author-hero-section hero-section pt-32 pb-20"
          style={{
            background: "linear-gradient(180deg, #FFFFFF 0%, #F8FAFF 100%)",
          }}
        >
          <div className="author-hero-container max-w-[1440px] mx-auto px-12">
            {/* Breadcrumb */}
            <div
              className={`author-breadcrumb mb-6 flex items-center justify-center gap-2 ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
            >
              <SafeLink
                href="/blog"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "15px",
                  fontWeight: 500,
                  color: "#151561",
                  opacity: 0.6,
                  textDecoration: "none",
                }}
                className="hover:opacity-100 transition-opacity duration-200"
              >
                Blog
              </SafeLink>
              <span style={{ color: "#151561", opacity: 0.3 }}>→</span>
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#FF0000",
                }}
              >
                {author.name}
              </span>
            </div>

            <div
              className={`author-header-content text-center max-w-[800px] mx-auto ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
            >
              {/* Avatar */}
              <div className="author-avatar-wrapper mb-8 flex justify-center">
                <div
                  className="author-avatar rounded-full overflow-hidden"
                  style={{
                    width: "160px",
                    height: "160px",
                    border: "4px solid #FF0000",
                    boxShadow: "0 8px 24px rgba(255, 0, 0, 0.15)",
                  }}
                >
                  <ImageWithFallback
                    src={author.avatar}
                    alt={author.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Name */}
              <h1
                className="author-name mb-3"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "48px",
                  fontWeight: 700,
                  color: "#151561",
                  lineHeight: "1.2",
                }}
              >
                {author.name}
              </h1>

              {/* Position */}
              <p
                className="author-position mb-6"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "#FF0000",
                }}
              >
                {author.position}
              </p>

              {/* Bio */}
              <p
                className="author-bio"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "18px",
                  color: "#151561",
                  opacity: 0.8,
                  lineHeight: "1.7",
                }}
              >
                {author.bio}
              </p>
            </div>
          </div>
        </section>

        {/* Author Info Block */}
        <section
          className="author-info-section info-section py-12"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <div className="author-info-container max-w-[1440px] mx-auto px-12">
            <div
              className={`author-info-card max-w-[900px] mx-auto rounded-[24px] p-10 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{
                backgroundColor: "#F8FAFF",
                border: "1px solid rgba(21, 21, 97, 0.06)",
                boxShadow: "0 4px 16px rgba(21, 21, 97, 0.06)",
                animationDelay: "0.2s",
              }}
            >
              <div className="author-info-grid flex items-center justify-between flex-wrap gap-8">
                {/* Email */}
                {author.email && (
                  <div className="author-info-item flex items-center gap-3">
                    <div
                      className="w-[48px] h-[48px] rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "rgba(255, 0, 0, 0.1)" }}
                    >
                      <Mail size={20} style={{ color: "#FF0000" }} />
                    </div>
                    <div>
                      <p
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "13px",
                          color: "#151561",
                          opacity: 0.6,
                          marginBottom: "2px",
                        }}
                      >
                        Email
                      </p>
                      <p
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "15px",
                          fontWeight: 600,
                          color: "#151561",
                        }}
                      >
                        {author.email}
                      </p>
                    </div>
                  </div>
                )}

                {/* Published Posts */}
                <div className="author-info-item flex items-center gap-3">
                  <div
                    className="w-[48px] h-[48px] rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(255, 0, 0, 0.1)" }}
                  >
                    <BookOpen size={20} style={{ color: "#FF0000" }} />
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "13px",
                        color: "#151561",
                        opacity: 0.6,
                        marginBottom: "2px",
                      }}
                    >
                      Published
                    </p>
                    <p
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "15px",
                        fontWeight: 600,
                        color: "#151561",
                      }}
                    >
                      {authorPosts.length}{" "}
                      {authorPosts.length === 1 ? "Article" : "Articles"}
                    </p>
                  </div>
                </div>

                {/* Join Date */}
                <div className="author-info-item flex items-center gap-3">
                  <div
                    className="w-[48px] h-[48px] rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(255, 0, 0, 0.1)" }}
                  >
                    <Calendar size={20} style={{ color: "#FF0000" }} />
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "13px",
                        color: "#151561",
                        opacity: 0.6,
                        marginBottom: "2px",
                      }}
                    >
                      Joined
                    </p>
                    <p
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "15px",
                        fontWeight: 600,
                        color: "#151561",
                      }}
                    >
                      {author.joinDate}
                    </p>
                  </div>
                </div>

                {/* Social Icons */}
                <div className="author-info-item flex items-center gap-3">
                  {author.social.linkedin && (
                    <SafeLink
                      href={author.social.linkedin}
                      className="w-[44px] h-[44px] rounded-full flex items-center justify-center transition-all duration-300"
                      style={{
                        backgroundColor: "rgba(21, 21, 97, 0.06)",
                        color: "#151561",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#FF0000";
                        e.currentTarget.style.color = "#FFFFFF";
                      }}
                      onMouseLeave={(e: any) => {
                        e.currentTarget.style.backgroundColor =
                          "rgba(21, 21, 97, 0.06)";
                        e.currentTarget.style.color = "#151561";
                      }}
                    >
                      <Linkedin size={18} />
                    </SafeLink>
                  )}
                  {author.social.twitter && (
                    <SafeLink
                      href={author.social.twitter}
                      className="w-[44px] h-[44px] rounded-full flex items-center justify-center transition-all duration-300"
                      style={{
                        backgroundColor: "rgba(21, 21, 97, 0.06)",
                        color: "#151561",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#FF0000";
                        e.currentTarget.style.color = "#FFFFFF";
                      }}
                      onMouseLeave={(e: any) => {
                        e.currentTarget.style.backgroundColor =
                          "rgba(21, 21, 97, 0.06)";
                        e.currentTarget.style.color = "#151561";
                      }}
                    >
                      <Twitter size={18} />
                    </SafeLink>
                  )}
                  {author.social.facebook && (
                    <SafeLink
                      href={author.social.facebook}
                      className="w-[44px] h-[44px] rounded-full flex items-center justify-center transition-all duration-300"
                      style={{
                        backgroundColor: "rgba(21, 21, 97, 0.06)",
                        color: "#151561",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#FF0000";
                        e.currentTarget.style.color = "#FFFFFF";
                      }}
                      onMouseLeave={(e: any) => {
                        e.currentTarget.style.backgroundColor =
                          "rgba(21, 21, 97, 0.06)";
                        e.currentTarget.style.color = "#151561";
                      }}
                    >
                      <Facebook size={18} />
                    </SafeLink>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Author Article Grid */}
        <section
          className="author-articles-section articles-section py-20"
          style={{ backgroundColor: "#F8FAFF" }}
        >
          <div className="author-articles-container max-w-[1440px] mx-auto px-12">
            <h2
              className="author-articles-heading mb-12 text-center"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "42px",
                fontWeight: 700,
                color: "#151561",
              }}
            >
              Articles by {author.name}
            </h2>

            {authorPosts.length > 0 ? (
              <div className="author-posts-grid grid grid-cols-3 gap-8">
                {authorPosts.map((post, index) => (
                  <article
                    key={post.id}
                    className="blog-card rounded-[24px] overflow-hidden animate-stagger-fade-up"
                    style={{
                      backgroundColor: "#FFFFFF",
                      border: "1px solid rgba(21, 21, 97, 0.08)",
                      boxShadow: "0 4px 16px rgba(21, 21, 97, 0.06)",
                      transition: "all 0.3s ease",
                      animationDelay: `${index * 100}ms`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-8px)";
                      e.currentTarget.style.boxShadow =
                        "0 12px 32px rgba(21, 21, 97, 0.12)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 16px rgba(21, 21, 97, 0.06)";
                    }}
                  >
                    <div className="relative h-[240px] overflow-hidden">
                      <ImageWithFallback
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>

                    <div className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className="inline-block px-3 py-1 rounded-[16px]"
                          style={{
                            fontFamily: "Inter, sans-serif",
                            fontSize: "13px",
                            fontWeight: 600,
                            backgroundColor: "rgba(255, 0, 0, 0.1)",
                            color: "#FF0000",
                          }}
                        >
                          {post.category}
                        </span>
                        <span
                          style={{
                            fontFamily: "Inter, sans-serif",
                            fontSize: "13px",
                            color: "#151561",
                            opacity: 0.5,
                          }}
                        >
                          {post.date}
                        </span>
                      </div>

                      <h3
                        className="mb-3"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "22px",
                          fontWeight: 700,
                          color: "#151561",
                          lineHeight: "1.3",
                        }}
                      >
                        {post.title}
                      </h3>

                      <p
                        className="mb-6"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "15px",
                          color: "#151561",
                          opacity: 0.7,
                          lineHeight: "1.6",
                        }}
                      >
                        {post.excerpt}
                      </p>

                      <SafeLink
                        href={post.slug || "#"}
                        className="inline-flex items-center gap-2 group"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "15px",
                          fontWeight: 600,
                          color: "#FF0000",
                          textDecoration: "none",
                        }}
                      >
                        Read More
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </SafeLink>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "18px",
                    color: "#151561",
                    opacity: 0.5,
                  }}
                >
                  No articles published yet.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Author Pull Quote */}
        <section
          className="quote-section py-20"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <div className="max-w-[1440px] mx-auto px-12">
            <div
              className="max-w-[900px] mx-auto p-12 rounded-[32px] relative animate-fade-up"
              style={{
                background: "linear-gradient(135deg, #F8FAFF 0%, #FFFFFF 100%)",
                border: "2px solid rgba(255, 0, 0, 0.1)",
                boxShadow: "0 12px 32px rgba(21, 21, 97, 0.1)",
              }}
            >
              <Quote
                size={64}
                style={{
                  color: "#FF0000",
                  opacity: 0.2,
                  position: "absolute",
                  top: "40px",
                  left: "40px",
                }}
              />
              <blockquote
                className="relative z-10 text-center"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "32px",
                  fontWeight: 600,
                  color: "#151561",
                  lineHeight: "1.5",
                  fontStyle: "italic",
                  paddingTop: "20px",
                }}
              >
                &quot;{author.quote}&quot;
              </blockquote>
              <p
                className="text-center mt-6"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#FF0000",
                }}
              >
                — {author.name}
              </p>
            </div>
          </div>
        </section>

        {/* CTA Block */}
        <section
          className="cta-section py-24"
          style={{
            background: "linear-gradient(135deg, #F8FAFF 0%, #FFFFFF 100%)",
          }}
        >
          <div className="max-w-[1440px] mx-auto px-12">
            <div className="text-center max-w-[700px] mx-auto">
              <h2
                className="mb-10"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "48px",
                  fontWeight: 700,
                  color: "#151561",
                  lineHeight: "1.2",
                }}
              >
                Want to read more insights?
              </h2>
              <div className="flex justify-center items-center gap-5">
                <SafeLink
                  href="/blog"
                  className="px-10 py-4 rounded-[50px] inline-flex items-center justify-center transition-all duration-300"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "17px",
                    fontWeight: 600,
                    backgroundColor: "#FF0000",
                    color: "#FFFFFF",
                    boxShadow: "0 4px 16px rgba(255, 0, 0, 0.25)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 24px rgba(255, 0, 0, 0.35)";
                  }}
                  onMouseLeave={(e: any) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 16px rgba(255, 0, 0, 0.25)";
                  }}
                >
                  Back to Blog
                </SafeLink>
                <SafeLink
                  href="/contact"
                  className="px-10 py-4 rounded-[50px] inline-flex items-center justify-center transition-all duration-300"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "17px",
                    fontWeight: 600,
                    backgroundColor: "#FFFFFF",
                    color: "#FF0000",
                    border: "2px solid #FF0000",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#FF0000";
                    e.currentTarget.style.color = "#FFFFFF";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e: any) => {
                    e.currentTarget.style.backgroundColor = "#FFFFFF";
                    e.currentTarget.style.color = "#FF0000";
                    e.currentTarget.style.transform = "translateY(0)";
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
        @keyframes fade-in {
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
          .author-hero-section {
            padding-top: 7rem;
            padding-bottom: 3.5rem;
          }

          .author-hero-container {
            padding-left: 2rem;
            padding-right: 2rem;
          }

          .author-header-content {
            max-width: 90% !important;
          }

          .author-avatar {
            width: 140px !important;
            height: 140px !important;
          }

          .author-name {
            font-size: 40px !important;
          }

          .author-position {
            font-size: 18px !important;
          }

          .author-bio {
            font-size: 16px !important;
          }

          /* Info Section */
          .author-info-section {
            padding-top: 2rem;
            padding-bottom: 2rem;
          }

          .author-info-container {
            padding-left: 2rem;
            padding-right: 2rem;
          }

          .author-info-card {
            padding: 2rem !important;
            max-width: 95% !important;
          }

          .author-info-grid {
            gap: 1.5rem !important;
          }

          /* Articles Section */
          .author-articles-section {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }

          .author-articles-container {
            padding-left: 2rem;
            padding-right: 2rem;
          }

          .author-articles-heading {
            font-size: 36px !important;
            margin-bottom: 2rem !important;
          }

          .author-posts-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 2rem !important;
          }

          /* Quote & CTA sections */
          .quote-section,
          .cta-section {
            padding-left: 2rem;
            padding-right: 2rem;
          }
        }

        /* ===== MOBILE BREAKPOINT (≤414px) ===== */
        @media (max-width: 414px) {
          /* Hero Section */
          .author-hero-section {
            padding-top: 5rem;
            padding-bottom: 2.5rem;
          }

          .author-hero-container {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }

          .author-breadcrumb {
            margin-bottom: 1.25rem !important;
          }

          .author-breadcrumb span,
          .author-breadcrumb a {
            font-size: 14px !important;
          }

          .author-header-content {
            max-width: 100% !important;
          }

          .author-avatar-wrapper {
            margin-bottom: 1.5rem !important;
          }

          .author-avatar {
            width: 120px !important;
            height: 120px !important;
            border-width: 3px !important;
          }

          .author-name {
            font-size: 28px !important;
            margin-bottom: 0.75rem !important;
          }

          .author-position {
            font-size: 16px !important;
            margin-bottom: 1.25rem !important;
          }

          .author-bio {
            font-size: 15px !important;
            line-height: 1.7 !important;
          }

          /* Info Section - CRITICAL VERTICAL STACK */
          .author-info-section {
            padding-top: 1.5rem;
            padding-bottom: 1.5rem;
          }

          .author-info-container {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }

          .author-info-card {
            padding: 1.5rem !important;
            max-width: 100% !important;
            border-radius: 20px !important;
          }

          .author-info-grid {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 1.25rem !important;
          }

          .author-info-item {
            width: 100%;
            justify-content: flex-start;
          }

          .author-info-item:last-child {
            justify-content: center;
            width: 100%;
            padding-top: 0.5rem;
          }

          /* Articles Section */
          .author-articles-section {
            padding-top: 2.5rem;
            padding-bottom: 2.5rem;
          }

          .author-articles-container {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }

          .author-articles-heading {
            font-size: 28px !important;
            margin-bottom: 1.5rem !important;
          }

          .author-posts-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }

          .blog-card {
            border-radius: 20px !important;
          }

          .blog-card:hover {
            transform: none !important;
          }

          .blog-card .relative {
            height: 200px !important;
          }

          .blog-card .p-8 {
            padding: 1.5rem !important;
          }

          .blog-card h3 {
            font-size: 18px !important;
          }

          .blog-card p {
            font-size: 14px !important;
            margin-bottom: 1rem !important;
          }

          .blog-card a {
            font-size: 14px !important;
            min-height: 44px;
            display: inline-flex;
            align-items: center;
          }

          /* Quote Section */
          .quote-section {
            padding-top: 2.5rem;
            padding-bottom: 2.5rem;
          }

          .quote-section > div {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }

          .quote-section > div > div {
            padding: 2rem 1.5rem !important;
            border-radius: 24px !important;
            max-width: 100% !important;
          }

          .quote-section Quote {
            display: none !important;
          }

          .quote-section blockquote {
            font-size: 20px !important;
            line-height: 1.5 !important;
            padding-top: 0 !important;
          }

          .quote-section p {
            font-size: 14px !important;
            margin-top: 1rem !important;
          }

          /* CTA Section */
          .cta-section {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }

          .cta-section > div {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }

          .cta-section > div > div {
            max-width: 100% !important;
          }

          .cta-section h2 {
            font-size: 28px !important;
            margin-bottom: 2rem !important;
          }

          .cta-section .flex {
            flex-direction: column !important;
            gap: 1rem !important;
            width: 100%;
          }

          .cta-section .flex a {
            width: 100% !important;
            padding: 1rem 2rem !important;
            font-size: 16px !important;
            min-height: 48px;
          }
        }
      `}</style>
      </div>
    </>
  );
};

export default AuthorClient;
