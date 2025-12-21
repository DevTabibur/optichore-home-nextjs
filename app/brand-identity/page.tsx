"use client";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  Heart,
  Shield,
  Target,
  Globe,
  CheckCircle,
  Palette,
  Lightbulb,
  Layers,
  BookOpen,
  FileText,
  Zap,
  Sparkles,
  Award,
  TrendingUp,
  Phone,
  Users,
  Eye,
} from "lucide-react";


export default function BrandIdentityPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const impactCards = [
    {
      icon: Eye,
      title: "Builds Recognition",
      description:
        "A distinctive brand identity makes your business instantly recognizable and memorable in crowded markets.",
    },
    {
      icon: Shield,
      title: "Establishes Trust",
      description:
        "Professional branding signals credibility and quality, building confidence with your audience from first impression.",
    },
    {
      icon: Heart,
      title: "Communicates Values",
      description:
        "Visual identity conveys your mission, vision, and values without words, creating emotional connections.",
    },
    {
      icon: Globe,
      title: "Enhances Digital Presence",
      description:
        "Cohesive branding across all digital touchpoints elevates your online presence and engagement.",
    },
    {
      icon: CheckCircle,
      title: "Ensures Consistency",
      description:
        "A unified visual system maintains consistency across every customer interaction and platform.",
    },
  ];

  const capabilities = [
    {
      icon: Palette,
      title: "Logo Design",
      description:
        "Crafting unique, timeless logos that capture your brand essence and create lasting impressions.",
    },
    {
      icon: Lightbulb,
      title: "Brand Strategy",
      description:
        "Strategic positioning and messaging that differentiates your brand and resonates with your audience.",
    },
    {
      icon: Layers,
      title: "Color & Typography System",
      description:
        "Cohesive color palettes and typography hierarchies that reinforce brand personality and improve readability.",
    },
    {
      icon: BookOpen,
      title: "Brand Guidelines",
      description:
        "Comprehensive brand books documenting usage rules, ensuring consistent application across all media.",
    },
    {
      icon: FileText,
      title: "Creative Marketing Assets",
      description:
        "Business cards, letterheads, presentations, and print materials that bring your brand to life.",
    },
    {
      icon: Zap,
      title: "Social Media Branding",
      description:
        "Platform-optimized visual templates and content frameworks for consistent social presence.",
    },
  ];

  const processSteps = [
    {
      icon: Target,
      label: "Brand Discovery",
      description: "Understanding your vision and audience",
    },
    {
      icon: Sparkles,
      label: "Creative Direction Moodboard",
      description: "Defining visual direction and style",
    },
    {
      icon: Palette,
      label: "Logo Concepts",
      description: "Exploring multiple design directions",
    },
    {
      icon: Layers,
      label: "Visual System Development",
      description: "Building complete identity system",
    },
    {
      icon: BookOpen,
      label: "Brand Guidelines",
      description: "Documenting standards and usage",
    },
    {
      icon: Award,
      label: "Final Delivery",
      description: "Complete brand package handoff",
    },
  ];

  return (
    <div className="brand-identity-page" style={{ backgroundColor: "#FFFFFF" }}>

      {/* 🌟 HERO SECTION */}
      <section
        className="brand-hero-section relative overflow-hidden lg:pt-[140px] lg:pb-[120px] md:pt-24 md:pb-20 pt-20 pb-16"
        style={{
          background: "linear-gradient(180deg, #FFFFFF 0%, #F8FAFF 100%)",
        }}
      >
        {/* Abstract Background Shapes */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 25% 35%, rgba(21, 21, 97, 0.04) 0%, transparent 50%),
                         radial-gradient(circle at 75% 65%, rgba(255, 0, 0, 0.03) 0%, transparent 50%)`,
            opacity: 0.8,
          }}
        />

        <div className="max-w-[1440px] mx-auto lg:px-12 md:px-8 px-4 relative z-10">
          {/* DESKTOP: Two-Column Layout (≥1280px) — LOCKED */}
          <div className="hidden lg:grid grid-cols-2 gap-20 items-center">
            {/* Left — Content */}
            <div className="hero-content-left animate-fade-in-left">
              <h1
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "64px",
                  fontWeight: 700,
                  color: "#151561",
                  lineHeight: "1.15",
                  letterSpacing: "-0.02em",
                  marginBottom: "28px",
                }}
              >
                Brand Identity & Creative Design That Defines Who You Are
              </h1>

              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "20px",
                  fontWeight: 400,
                  color: "#505050",
                  lineHeight: "1.7",
                  marginBottom: "44px",
                  maxWidth: "580px",
                }}
              >
                We craft distinctive brand identities and visual systems that
                build trust, recognition, and lasting emotional connection with
                your audience.
              </p>

              <div className="flex items-center gap-5">
                <button
                  className="cta-primary-btn"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "17px",
                    fontWeight: 600,
                    color: "#FFFFFF",
                    backgroundColor: "#FF0000",
                    padding: "18px 40px",
                    borderRadius: "50px",
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 8px 24px rgba(255, 0, 0, 0.25)",
                    transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  Start Branding Project
                </button>

                <button
                  className="cta-secondary-btn"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "17px",
                    fontWeight: 600,
                    color: "#151561",
                    backgroundColor: "transparent",
                    padding: "18px 40px",
                    borderRadius: "50px",
                    border: "2px solid #151561",
                    cursor: "pointer",
                    transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  Contact Us
                </button>
              </div>
            </div>

            {/* Right — Visual Branding Elements */}
            <div
              className="hero-visual-right relative animate-fade-in-right"
              style={{
                transform: `translateY(${scrollY * 0.1}px)`,
                transition: "transform 0.1s ease-out",
              }}
            >
              <div className="relative" style={{ height: "600px" }}>
                {/* Main Branding Board */}
                <div
                  className="absolute"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "450px",
                    height: "550px",
                    background:
                      "linear-gradient(135deg, #FFFFFF 0%, #F0F4FF 100%)",
                    borderRadius: "28px",
                    boxShadow: "0 30px 80px rgba(21, 21, 97, 0.15)",
                    border: "1px solid rgba(0, 0, 0, 0.06)",
                    padding: "40px",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      gap: "24px",
                    }}
                  >
                    {/* Logo Concept Area */}
                    <div
                      style={{
                        height: "180px",
                        background:
                          "linear-gradient(135deg, #151561 0%, #3434A0 100%)",
                        borderRadius: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 12px 32px rgba(21, 21, 97, 0.25)",
                      }}
                    >
                      <Sparkles size={64} color="#FFFFFF" />
                    </div>

                    {/* Color Palette */}
                    <div style={{ display: "flex", gap: "12px" }}>
                      <div
                        style={{
                          flex: 1,
                          height: "90px",
                          background: "#151561",
                          borderRadius: "16px",
                          boxShadow: "0 8px 20px rgba(21, 21, 97, 0.2)",
                        }}
                      />
                      <div
                        style={{
                          flex: 1,
                          height: "90px",
                          background: "#FF0000",
                          borderRadius: "16px",
                          boxShadow: "0 8px 20px rgba(255, 0, 0, 0.2)",
                        }}
                      />
                      <div
                        style={{
                          flex: 1,
                          height: "90px",
                          background:
                            "linear-gradient(135deg, #F0F4FF 0%, #FFFFFF 100%)",
                          borderRadius: "16px",
                          border: "1px solid rgba(0, 0, 0, 0.06)",
                        }}
                      />
                    </div>

                    {/* Typography Cards */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px",
                      }}
                    >
                      <div
                        style={{
                          height: "60px",
                          background: "rgba(21, 21, 97, 0.08)",
                          borderRadius: "14px",
                          padding: "16px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            width: "70%",
                            height: "24px",
                            background:
                              "linear-gradient(90deg, #151561 0%, #3434A0 100%)",
                            borderRadius: "6px",
                          }}
                        />
                      </div>
                      <div
                        style={{
                          height: "50px",
                          background: "rgba(21, 21, 97, 0.06)",
                          borderRadius: "14px",
                          padding: "14px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            width: "85%",
                            height: "18px",
                            background: "rgba(21, 21, 97, 0.4)",
                            borderRadius: "5px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Logo Card 1 */}
                <div
                  className="floating-element"
                  style={{
                    position: "absolute",
                    top: "8%",
                    right: "0%",
                    width: "100px",
                    height: "100px",
                    background:
                      "linear-gradient(135deg, #FF0000 0%, #FF3333 100%)",
                    borderRadius: "24px",
                    boxShadow: "0 20px 40px rgba(255, 0, 0, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    animation: "float 3s ease-in-out infinite",
                  }}
                >
                  <Award size={48} color="#FFFFFF" />
                </div>

                {/* Floating Color Card 2 */}
                <div
                  className="floating-element"
                  style={{
                    position: "absolute",
                    bottom: "12%",
                    left: "-5%",
                    width: "90px",
                    height: "90px",
                    background:
                      "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)",
                    borderRadius: "22px",
                    boxShadow: "0 20px 40px rgba(21, 21, 97, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    animation: "float 3s ease-in-out infinite 1.5s",
                    border: "2px solid #151561",
                  }}
                >
                  <Palette size={40} color="#151561" />
                </div>
              </div>
            </div>
          </div>

          {/* TABLET: Two-Column Layout (768px-1024px) */}
          <div className="hidden md:grid lg:hidden grid-cols-2 gap-12 items-center">
            {/* Left — Content */}
            <div className="hero-content-left animate-fade-in-left">
              <h1
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "64px",
                  fontWeight: 700,
                  color: "#151561",
                  lineHeight: "1.15",
                  letterSpacing: "-0.02em",
                  marginBottom: "28px",
                }}
              >
                Brand Identity & Creative Design That Defines Who You Are
              </h1>

              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "20px",
                  fontWeight: 400,
                  color: "#505050",
                  lineHeight: "1.7",
                  marginBottom: "44px",
                }}
              >
                We craft distinctive brand identities and visual systems that
                build trust, recognition, and lasting emotional connection with
                your audience.
              </p>

              <div className="flex items-center gap-4">
                <button
                  className="cta-primary-btn"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "17px",
                    fontWeight: 600,
                    color: "#FFFFFF",
                    backgroundColor: "#FF0000",
                    padding: "18px 40px",
                    borderRadius: "50px",
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 8px 24px rgba(255, 0, 0, 0.25)",
                    transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  Start Branding Project
                </button>

                <button
                  className="cta-secondary-btn"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "17px",
                    fontWeight: 600,
                    color: "#151561",
                    backgroundColor: "transparent",
                    padding: "18px 40px",
                    borderRadius: "50px",
                    border: "2px solid #151561",
                    cursor: "pointer",
                    transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  Contact Us
                </button>
              </div>
            </div>

            {/* Right — Visual Branding Elements (Scaled) */}
            <div
              className="hero-visual-right relative animate-fade-in-right"
              style={{
                transform: `translateY(${scrollY * 0.1}px) scale(0.85)`,
                transition: "transform 0.1s ease-out",
                transformOrigin: "center center",
              }}
            >
              <div className="relative" style={{ height: "500px" }}>
                {/* Main Branding Board */}
                <div
                  className="absolute"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "450px",
                    height: "550px",
                    background:
                      "linear-gradient(135deg, #FFFFFF 0%, #F0F4FF 100%)",
                    borderRadius: "28px",
                    boxShadow: "0 30px 80px rgba(21, 21, 97, 0.15)",
                    border: "1px solid rgba(0, 0, 0, 0.06)",
                    padding: "40px",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      gap: "24px",
                    }}
                  >
                    {/* Logo Concept Area */}
                    <div
                      style={{
                        height: "180px",
                        background:
                          "linear-gradient(135deg, #151561 0%, #3434A0 100%)",
                        borderRadius: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 12px 32px rgba(21, 21, 97, 0.25)",
                      }}
                    >
                      <Sparkles size={64} color="#FFFFFF" />
                    </div>

                    {/* Color Palette */}
                    <div style={{ display: "flex", gap: "12px" }}>
                      <div
                        style={{
                          flex: 1,
                          height: "90px",
                          background: "#151561",
                          borderRadius: "16px",
                          boxShadow: "0 8px 20px rgba(21, 21, 97, 0.2)",
                        }}
                      />
                      <div
                        style={{
                          flex: 1,
                          height: "90px",
                          background: "#FF0000",
                          borderRadius: "16px",
                          boxShadow: "0 8px 20px rgba(255, 0, 0, 0.2)",
                        }}
                      />
                      <div
                        style={{
                          flex: 1,
                          height: "90px",
                          background:
                            "linear-gradient(135deg, #F0F4FF 0%, #FFFFFF 100%)",
                          borderRadius: "16px",
                          border: "1px solid rgba(0, 0, 0, 0.06)",
                        }}
                      />
                    </div>

                    {/* Typography Cards */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px",
                      }}
                    >
                      <div
                        style={{
                          height: "60px",
                          background: "rgba(21, 21, 97, 0.08)",
                          borderRadius: "14px",
                          padding: "16px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            width: "70%",
                            height: "24px",
                            background:
                              "linear-gradient(90deg, #151561 0%, #3434A0 100%)",
                            borderRadius: "6px",
                          }}
                        />
                      </div>
                      <div
                        style={{
                          height: "50px",
                          background: "rgba(21, 21, 97, 0.06)",
                          borderRadius: "14px",
                          padding: "14px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            width: "85%",
                            height: "18px",
                            background: "rgba(21, 21, 97, 0.4)",
                            borderRadius: "5px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Logo Card 1 */}
                <div
                  className="floating-element"
                  style={{
                    position: "absolute",
                    top: "8%",
                    right: "0%",
                    width: "100px",
                    height: "100px",
                    background:
                      "linear-gradient(135deg, #FF0000 0%, #FF3333 100%)",
                    borderRadius: "24px",
                    boxShadow: "0 20px 40px rgba(255, 0, 0, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    animation: "float 3s ease-in-out infinite",
                  }}
                >
                  <Award size={48} color="#FFFFFF" />
                </div>

                {/* Floating Color Card 2 */}
                <div
                  className="floating-element"
                  style={{
                    position: "absolute",
                    bottom: "12%",
                    left: "-5%",
                    width: "90px",
                    height: "90px",
                    background:
                      "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)",
                    borderRadius: "22px",
                    boxShadow: "0 20px 40px rgba(21, 21, 97, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    animation: "float 3s ease-in-out infinite 1.5s",
                    border: "2px solid #151561",
                  }}
                >
                  <Palette size={40} color="#151561" />
                </div>
              </div>
            </div>
          </div>

          {/* MOBILE: Vertical Stack (≤767px) */}
          <div className="md:hidden flex flex-col items-center gap-10">
            {/* 1) Headline */}
            <h1
              className="animate-fade-in-left"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "64px",
                fontWeight: 700,
                color: "#151561",
                lineHeight: "1.15",
                letterSpacing: "-0.02em",
                textAlign: "center",
              }}
            >
              Brand Identity & Creative Design That Defines Who You Are
            </h1>

            {/* 2) Description */}
            <p
              className="animate-fade-in-left"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "20px",
                fontWeight: 400,
                color: "#505050",
                lineHeight: "1.7",
                textAlign: "center",
              }}
            >
              We craft distinctive brand identities and visual systems that
              build trust, recognition, and lasting emotional connection with
              your audience.
            </p>

            {/* 3) CTA Buttons */}
            <div className="flex flex-col items-stretch gap-3 w-full">
              <button
                className="cta-primary-btn"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "17px",
                  fontWeight: 600,
                  color: "#FFFFFF",
                  backgroundColor: "#FF0000",
                  padding: "18px 40px",
                  borderRadius: "50px",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 8px 24px rgba(255, 0, 0, 0.25)",
                  transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                  width: "100%",
                }}
              >
                Start Branding Project
              </button>

              <button
                className="cta-secondary-btn"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "17px",
                  fontWeight: 600,
                  color: "#151561",
                  backgroundColor: "transparent",
                  padding: "18px 40px",
                  borderRadius: "50px",
                  border: "2px solid #151561",
                  cursor: "pointer",
                  transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                  width: "100%",
                }}
              >
                Contact Us
              </button>
            </div>

            {/* 4) Visual Mockup Card */}
            <div
              className="hero-visual-mobile relative animate-fade-in-right w-full flex justify-center"
              style={{
                marginTop: "20px",
              }}
            >
              <div
                className="relative"
                style={{ width: "340px", height: "420px" }}
              >
                {/* Main Branding Board */}
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    background:
                      "linear-gradient(135deg, #FFFFFF 0%, #F0F4FF 100%)",
                    borderRadius: "24px",
                    boxShadow: "0 30px 80px rgba(21, 21, 97, 0.15)",
                    border: "1px solid rgba(0, 0, 0, 0.06)",
                    padding: "32px",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      gap: "18px",
                    }}
                  >
                    {/* Logo Concept Area */}
                    <div
                      style={{
                        height: "140px",
                        background:
                          "linear-gradient(135deg, #151561 0%, #3434A0 100%)",
                        borderRadius: "16px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 12px 32px rgba(21, 21, 97, 0.25)",
                      }}
                    >
                      <Sparkles size={48} color="#FFFFFF" />
                    </div>

                    {/* Color Palette */}
                    <div style={{ display: "flex", gap: "10px" }}>
                      <div
                        style={{
                          flex: 1,
                          height: "70px",
                          background: "#151561",
                          borderRadius: "14px",
                          boxShadow: "0 8px 20px rgba(21, 21, 97, 0.2)",
                        }}
                      />
                      <div
                        style={{
                          flex: 1,
                          height: "70px",
                          background: "#FF0000",
                          borderRadius: "14px",
                          boxShadow: "0 8px 20px rgba(255, 0, 0, 0.2)",
                        }}
                      />
                      <div
                        style={{
                          flex: 1,
                          height: "70px",
                          background:
                            "linear-gradient(135deg, #F0F4FF 0%, #FFFFFF 100%)",
                          borderRadius: "14px",
                          border: "1px solid rgba(0, 0, 0, 0.06)",
                        }}
                      />
                    </div>

                    {/* Typography Cards */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <div
                        style={{
                          height: "48px",
                          background: "rgba(21, 21, 97, 0.08)",
                          borderRadius: "12px",
                          padding: "12px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            width: "70%",
                            height: "20px",
                            background:
                              "linear-gradient(90deg, #151561 0%, #3434A0 100%)",
                            borderRadius: "5px",
                          }}
                        />
                      </div>
                      <div
                        style={{
                          height: "40px",
                          background: "rgba(21, 21, 97, 0.06)",
                          borderRadius: "12px",
                          padding: "10px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            width: "85%",
                            height: "16px",
                            background: "rgba(21, 21, 97, 0.4)",
                            borderRadius: "4px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Logo Card 1 (Top Right) */}
                <div
                  className="floating-element"
                  style={{
                    position: "absolute",
                    top: "-10px",
                    right: "-10px",
                    width: "80px",
                    height: "80px",
                    background:
                      "linear-gradient(135deg, #FF0000 0%, #FF3333 100%)",
                    borderRadius: "20px",
                    boxShadow: "0 20px 40px rgba(255, 0, 0, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    animation: "float 3s ease-in-out infinite",
                  }}
                >
                  <Award size={36} color="#FFFFFF" />
                </div>

                {/* Floating Color Card 2 (Bottom Left) */}
                <div
                  className="floating-element"
                  style={{
                    position: "absolute",
                    bottom: "-10px",
                    left: "-10px",
                    width: "70px",
                    height: "70px",
                    background:
                      "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)",
                    borderRadius: "18px",
                    boxShadow: "0 20px 40px rgba(21, 21, 97, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    animation: "float 3s ease-in-out infinite 1.5s",
                    border: "2px solid #151561",
                  }}
                >
                  <Palette size={32} color="#151561" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🎯 IMPACT SECTION — WHY BRANDING MATTERS */}
      <section
        className="impact-section lg:py-[120px] md:py-20 py-16"
        style={{
          backgroundColor: "#FFFFFF",
        }}
      >
        <div className="max-w-[1440px] mx-auto lg:px-12 md:px-8 px-4">
          <div className="text-center lg:mb-20 md:mb-16 mb-12">
            <h2
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "48px",
                fontWeight: 700,
                color: "#151561",
                letterSpacing: "-0.02em",
                marginBottom: "16px",
              }}
            >
              Why Brand Identity Matters
            </h2>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "20px",
                fontWeight: 400,
                color: "#505050",
                lineHeight: "1.7",
                maxWidth: "700px",
                margin: "0 auto",
              }}
            >
              Your brand is more than a logo—it&apos;s the story, feeling, and
              promise that defines your business.
            </p>
          </div>

          {/* ========================================== */}
          {/* DESKTOP: 5 Cards in Single Row (≥1280px) — LOCKED */}
          {/* ========================================== */}
          <div className="hidden lg:grid grid-cols-5 gap-6">
            {impactCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={index}
                  className="impact-card animate-fade-in-up"
                  style={{
                    background:
                      "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)",
                    borderRadius: "24px",
                    padding: "36px 28px",
                    border: "1px solid rgba(0, 0, 0, 0.06)",
                    boxShadow: "0 8px 32px rgba(21, 21, 97, 0.08)",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      background:
                        "linear-gradient(135deg, #FF0000 0%, #FF3333 100%)",
                      borderRadius: "14px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "20px",
                      boxShadow: "0 8px 24px rgba(255, 0, 0, 0.25)",
                    }}
                  >
                    <Icon size={28} color="#FFFFFF" />
                  </div>

                  <h3
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "20px",
                      fontWeight: 600,
                      color: "#151561",
                      marginBottom: "10px",
                      lineHeight: "1.3",
                    }}
                  >
                    {card.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "15px",
                      fontWeight: 400,
                      color: "#505050",
                      lineHeight: "1.65",
                    }}
                  >
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* ========================================== */}
          {/* TABLET: 2-Column Grid (768px-1024px) */}
          {/* ========================================== */}
          <div className="hidden md:grid lg:hidden grid-cols-2 gap-6">
            {impactCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={index}
                  className="impact-card animate-fade-in-up"
                  style={{
                    background:
                      "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)",
                    borderRadius: "24px",
                    padding: "36px 28px",
                    border: "1px solid rgba(0, 0, 0, 0.06)",
                    boxShadow: "0 8px 32px rgba(21, 21, 97, 0.08)",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      background:
                        "linear-gradient(135deg, #FF0000 0%, #FF3333 100%)",
                      borderRadius: "14px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 20px",
                      boxShadow: "0 8px 24px rgba(255, 0, 0, 0.25)",
                    }}
                  >
                    <Icon size={28} color="#FFFFFF" />
                  </div>

                  <h3
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "20px",
                      fontWeight: 600,
                      color: "#151561",
                      marginBottom: "10px",
                      lineHeight: "1.3",
                    }}
                  >
                    {card.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "15px",
                      fontWeight: 400,
                      color: "#505050",
                      lineHeight: "1.65",
                    }}
                  >
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* ========================================== */}
          {/* MOBILE: Single Column Vertical Stack (≤767px) */}
          {/* ========================================== */}
          <div className="md:hidden flex flex-col gap-5">
            {impactCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={index}
                  className="impact-card animate-fade-in-up"
                  style={{
                    background:
                      "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)",
                    borderRadius: "24px",
                    padding: "20px",
                    border: "1px solid rgba(0, 0, 0, 0.06)",
                    boxShadow: "0 8px 32px rgba(21, 21, 97, 0.08)",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      background:
                        "linear-gradient(135deg, #FF0000 0%, #FF3333 100%)",
                      borderRadius: "14px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "0px",
                      marginBottom: "16px",
                      boxShadow: "0 8px 24px rgba(255, 0, 0, 0.25)",
                    }}
                  >
                    <Icon size={28} color="#FFFFFF" />
                  </div>

                  <h3
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "20px",
                      fontWeight: 600,
                      color: "#151561",
                      marginBottom: "10px",
                      lineHeight: "1.3",
                      textAlign: "left",
                    }}
                  >
                    {card.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "15px",
                      fontWeight: 400,
                      color: "#505050",
                      lineHeight: "1.65",
                      textAlign: "left",
                    }}
                  >
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 🎨 BRANDING CAPABILITIES GRID */}
      <section
        className="capabilities-section lg:py-[120px] md:py-20 py-16"
        style={{
          background: "linear-gradient(180deg, #FFFFFF 0%, #F8FAFF 100%)",
        }}
      >
        <div className="max-w-[1440px] mx-auto lg:px-12 md:px-8 px-4">
          <div className="text-center lg:mb-20 md:mb-16 mb-12">
            <h2
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "48px",
                fontWeight: 700,
                color: "#151561",
                letterSpacing: "-0.02em",
                marginBottom: "16px",
              }}
            >
              Our Branding Capabilities
            </h2>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "20px",
                fontWeight: 400,
                color: "#505050",
                lineHeight: "1.7",
                maxWidth: "700px",
                margin: "0 auto",
              }}
            >
              End-to-end brand development from strategy to visual execution.
            </p>
          </div>

          {/* ========================================== */}
          {/* DESKTOP: 3-Column Grid (≥1280px) — LOCKED */}
          {/* ========================================== */}
          <div className="hidden lg:grid grid-cols-3 gap-8">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div
                  key={index}
                  className="capability-card glassmorphism animate-fade-in-up"
                  style={{
                    background: "rgba(255, 255, 255, 0.7)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    borderRadius: "24px",
                    padding: "40px",
                    border: "1px solid rgba(255, 255, 255, 0.4)",
                    boxShadow: "0 8px 32px rgba(21, 21, 97, 0.1)",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      background:
                        "linear-gradient(135deg, #151561 0%, #3434A0 100%)",
                      borderRadius: "14px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "20px",
                      boxShadow: "0 6px 20px rgba(21, 21, 97, 0.25)",
                    }}
                  >
                    <Icon size={28} color="#FFFFFF" />
                  </div>

                  <h3
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "21px",
                      fontWeight: 600,
                      color: "#151561",
                      marginBottom: "12px",
                      lineHeight: "1.3",
                    }}
                  >
                    {capability.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "16px",
                      fontWeight: 400,
                      color: "#505050",
                      lineHeight: "1.65",
                    }}
                  >
                    {capability.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* ========================================== */}
          {/* TABLET: 2-Column Grid (768px-1024px) */}
          {/* ========================================== */}
          <div className="hidden md:grid lg:hidden grid-cols-2 gap-6">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div
                  key={index}
                  className="capability-card glassmorphism animate-fade-in-up"
                  style={{
                    background: "rgba(255, 255, 255, 0.7)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    borderRadius: "24px",
                    padding: "40px",
                    border: "1px solid rgba(255, 255, 255, 0.4)",
                    boxShadow: "0 8px 32px rgba(21, 21, 97, 0.1)",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      background:
                        "linear-gradient(135deg, #151561 0%, #3434A0 100%)",
                      borderRadius: "14px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "20px",
                      boxShadow: "0 6px 20px rgba(21, 21, 97, 0.25)",
                    }}
                  >
                    <Icon size={28} color="#FFFFFF" />
                  </div>

                  <h3
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "21px",
                      fontWeight: 600,
                      color: "#151561",
                      marginBottom: "12px",
                      lineHeight: "1.3",
                    }}
                  >
                    {capability.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "16px",
                      fontWeight: 400,
                      color: "#505050",
                      lineHeight: "1.65",
                    }}
                  >
                    {capability.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* ========================================== */}
          {/* MOBILE: Single Column Stack (≤767px) */}
          {/* ========================================== */}
          <div className="md:hidden flex flex-col gap-5">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div
                  key={index}
                  className="capability-card glassmorphism animate-fade-in-up"
                  style={{
                    background: "rgba(255, 255, 255, 0.7)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    borderRadius: "24px",
                    padding: "20px",
                    border: "1px solid rgba(255, 255, 255, 0.4)",
                    boxShadow: "0 8px 32px rgba(21, 21, 97, 0.1)",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      background:
                        "linear-gradient(135deg, #151561 0%, #3434A0 100%)",
                      borderRadius: "14px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "20px",
                      boxShadow: "0 6px 20px rgba(21, 21, 97, 0.25)",
                    }}
                  >
                    <Icon size={28} color="#FFFFFF" />
                  </div>

                  <h3
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "21px",
                      fontWeight: 600,
                      color: "#151561",
                      marginBottom: "12px",
                      lineHeight: "1.3",
                      textAlign: "left",
                    }}
                  >
                    {capability.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "16px",
                      fontWeight: 400,
                      color: "#505050",
                      lineHeight: "1.65",
                      textAlign: "left",
                    }}
                  >
                    {capability.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 🔄 BRANDING PROCESS TIMELINE */}
      <section
        className="process-timeline-section lg:py-[120px] md:py-20 py-16"
        style={{
          backgroundColor: "#FFFFFF",
        }}
      >
        <div className="max-w-[1440px] mx-auto lg:px-12 md:px-8 px-4">
          <div className="text-center lg:mb-20 md:mb-16 mb-12">
            <h2
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "48px",
                fontWeight: 700,
                color: "#151561",
                letterSpacing: "-0.02em",
                marginBottom: "16px",
              }}
            >
              Our Branding Process
            </h2>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "20px",
                fontWeight: 400,
                color: "#505050",
                lineHeight: "1.7",
                maxWidth: "700px",
                margin: "0 auto",
              }}
            >
              A proven methodology that transforms business vision into powerful
              brand identity.
            </p>
          </div>

          {/* ========================================== */}
          {/* DESKTOP: Horizontal Timeline - 6 Steps (≥1280px) — LOCKED */}
          {/* ========================================== */}
          <div
            className="hidden lg:block relative"
            style={{ paddingTop: "40px", paddingBottom: "40px" }}
          >
            {/* Timeline Line */}
            <div
              style={{
                position: "absolute",
                top: "100px",
                left: "5%",
                right: "5%",
                height: "3px",
                background: "linear-gradient(90deg, #151561 0%, #FF0000 100%)",
                opacity: 0.2,
              }}
            />

            <div className="grid grid-cols-6 gap-6">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className="process-step animate-fade-in-up"
                    style={{
                      textAlign: "center",
                      position: "relative",
                      animationDelay: `${index * 0.15}s`,
                    }}
                  >
                    {/* Icon Circle */}
                    <div
                      style={{
                        width: "90px",
                        height: "90px",
                        background:
                          index % 2 === 0
                            ? "linear-gradient(135deg, #151561 0%, #3434A0 100%)"
                            : "linear-gradient(135deg, #FF0000 0%, #FF3333 100%)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 24px",
                        boxShadow:
                          index % 2 === 0
                            ? "0 12px 32px rgba(21, 21, 97, 0.3)"
                            : "0 12px 32px rgba(255, 0, 0, 0.3)",
                        position: "relative",
                        zIndex: 2,
                      }}
                    >
                      <Icon size={36} color="#FFFFFF" />
                    </div>

                    <h4
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "18px",
                        fontWeight: 600,
                        color: "#151561",
                        marginBottom: "8px",
                        lineHeight: "1.3",
                      }}
                    >
                      {step.label}
                    </h4>

                    <p
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "14px",
                        fontWeight: 400,
                        color: "#505050",
                        lineHeight: "1.5",
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ========================================== */}
          {/* TABLET: Two-Row Timeline - 3+3 Steps (768px-1024px) */}
          {/* ========================================== */}
          <div
            className="hidden md:block lg:hidden"
            style={{ paddingTop: "40px", paddingBottom: "40px" }}
          >
            {/* Row 1: Steps 1-3 */}
            <div className="relative mb-16">
              {/* Timeline Line Row 1 */}
              <div
                style={{
                  position: "absolute",
                  top: "45px",
                  left: "8%",
                  right: "8%",
                  height: "3px",
                  background:
                    "linear-gradient(90deg, #151561 0%, #FF0000 100%)",
                  opacity: 0.2,
                }}
              />

              <div className="grid grid-cols-3 gap-6">
                {processSteps.slice(0, 3).map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={index}
                      className="process-step animate-fade-in-up"
                      style={{
                        textAlign: "center",
                        position: "relative",
                        animationDelay: `${index * 0.15}s`,
                      }}
                    >
                      <div
                        style={{
                          width: "90px",
                          height: "90px",
                          background:
                            index % 2 === 0
                              ? "linear-gradient(135deg, #151561 0%, #3434A0 100%)"
                              : "linear-gradient(135deg, #FF0000 0%, #FF3333 100%)",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          margin: "0 auto 24px",
                          boxShadow:
                            index % 2 === 0
                              ? "0 12px 32px rgba(21, 21, 97, 0.3)"
                              : "0 12px 32px rgba(255, 0, 0, 0.3)",
                          position: "relative",
                          zIndex: 2,
                        }}
                      >
                        <Icon size={36} color="#FFFFFF" />
                      </div>

                      <h4
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "18px",
                          fontWeight: 600,
                          color: "#151561",
                          marginBottom: "8px",
                          lineHeight: "1.3",
                        }}
                      >
                        {step.label}
                      </h4>

                      <p
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "14px",
                          fontWeight: 400,
                          color: "#505050",
                          lineHeight: "1.5",
                        }}
                      >
                        {step.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Row 2: Steps 4-6 */}
            <div className="relative">
              {/* Timeline Line Row 2 */}
              <div
                style={{
                  position: "absolute",
                  top: "45px",
                  left: "8%",
                  right: "8%",
                  height: "3px",
                  background:
                    "linear-gradient(90deg, #151561 0%, #FF0000 100%)",
                  opacity: 0.2,
                }}
              />

              <div className="grid grid-cols-3 gap-6">
                {processSteps.slice(3, 6).map((step, index) => {
                  const Icon = step.icon;
                  const originalIndex = index + 3;
                  return (
                    <div
                      key={originalIndex}
                      className="process-step animate-fade-in-up"
                      style={{
                        textAlign: "center",
                        position: "relative",
                        animationDelay: `${originalIndex * 0.15}s`,
                      }}
                    >
                      <div
                        style={{
                          width: "90px",
                          height: "90px",
                          background:
                            originalIndex % 2 === 0
                              ? "linear-gradient(135deg, #151561 0%, #3434A0 100%)"
                              : "linear-gradient(135deg, #FF0000 0%, #FF3333 100%)",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          margin: "0 auto 24px",
                          boxShadow:
                            originalIndex % 2 === 0
                              ? "0 12px 32px rgba(21, 21, 97, 0.3)"
                              : "0 12px 32px rgba(255, 0, 0, 0.3)",
                          position: "relative",
                          zIndex: 2,
                        }}
                      >
                        <Icon size={36} color="#FFFFFF" />
                      </div>

                      <h4
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "18px",
                          fontWeight: 600,
                          color: "#151561",
                          marginBottom: "8px",
                          lineHeight: "1.3",
                        }}
                      >
                        {step.label}
                      </h4>

                      <p
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "14px",
                          fontWeight: 400,
                          color: "#505050",
                          lineHeight: "1.5",
                        }}
                      >
                        {step.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ========================================== */}
          {/* MOBILE: Vertical Timeline - 6 Steps Stacked (≤767px) */}
          {/* ========================================== */}
          <div
            className="md:hidden relative"
            style={{ paddingTop: "20px", paddingBottom: "20px" }}
          >
            {/* Vertical Timeline Line */}
            <div
              style={{
                position: "absolute",
                top: "65px",
                bottom: "65px",
                left: "50%",
                width: "3px",
                background: "linear-gradient(180deg, #151561 0%, #FF0000 100%)",
                opacity: 0.2,
                transform: "translateX(-50%)",
              }}
            />

            <div className="flex flex-col gap-10">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className="process-step animate-fade-in-up"
                    style={{
                      textAlign: "center",
                      position: "relative",
                      animationDelay: `${index * 0.15}s`,
                    }}
                  >
                    {/* Icon Circle */}
                    <div
                      style={{
                        width: "90px",
                        height: "90px",
                        background:
                          index % 2 === 0
                            ? "linear-gradient(135deg, #151561 0%, #3434A0 100%)"
                            : "linear-gradient(135deg, #FF0000 0%, #FF3333 100%)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 20px",
                        boxShadow:
                          index % 2 === 0
                            ? "0 12px 32px rgba(21, 21, 97, 0.3)"
                            : "0 12px 32px rgba(255, 0, 0, 0.3)",
                        position: "relative",
                        zIndex: 2,
                        backgroundColor: "#FFFFFF",
                      }}
                    >
                      <Icon size={36} color="#FFFFFF" />
                    </div>

                    <h4
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "18px",
                        fontWeight: 600,
                        color: "#151561",
                        marginBottom: "8px",
                        lineHeight: "1.3",
                        textAlign: "center",
                      }}
                    >
                      {step.label}
                    </h4>

                    <p
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "14px",
                        fontWeight: 400,
                        color: "#505050",
                        lineHeight: "1.5",
                        textAlign: "center",
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 💬 TESTIMONIAL BLOCK */}
      <section
        className="testimonial-section lg:py-[120px] md:py-20 py-16"
        style={{
          backgroundColor: "#FFFFFF",
        }}
      >
        <div className="max-w-[1440px] mx-auto lg:px-12 md:px-8 px-4">
          {/* DESKTOP: Horizontal Layout (≥1280px) — LOCKED */}
          <div
            className="hidden lg:block testimonial-card animate-fade-in"
            style={{
              maxWidth: "900px",
              margin: "0 auto",
              background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)",
              borderRadius: "32px",
              padding: "60px",
              border: "1px solid rgba(0, 0, 0, 0.06)",
              boxShadow: "0 20px 60px rgba(21, 21, 97, 0.12)",
            }}
          >
            <div className="flex items-start gap-8">
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, #FF0000 0%, #FF3333 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  boxShadow: "0 8px 24px rgba(255, 0, 0, 0.25)",
                }}
              >
                <Users size={36} color="#FFFFFF" />
              </div>

              <div style={{ flex: 1 }}>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "22px",
                    fontWeight: 400,
                    color: "#151561",
                    lineHeight: "1.7",
                    marginBottom: "28px",
                    fontStyle: "italic",
                  }}
                >
                  &quot;Optichore transformed our entire brand identity from the
                  ground up. The new visual system perfectly captures who we are
                  and has dramatically increased our brand recognition in the
                  market.&quot;
                </p>

                <div>
                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "18px",
                      fontWeight: 600,
                      color: "#151561",
                      marginBottom: "4px",
                    }}
                  >
                    Jennifer Martinez
                  </div>
                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "16px",
                      fontWeight: 400,
                      color: "#505050",
                    }}
                  >
                    CEO, Momentum Ventures
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TABLET: Horizontal Layout (768px-1024px) */}
          <div
            className="hidden md:block lg:hidden testimonial-card animate-fade-in"
            style={{
              maxWidth: "100%",
              margin: "0 auto",
              background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)",
              borderRadius: "32px",
              padding: "60px",
              border: "1px solid rgba(0, 0, 0, 0.06)",
              boxShadow: "0 20px 60px rgba(21, 21, 97, 0.12)",
            }}
          >
            <div className="flex items-start gap-8">
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, #FF0000 0%, #FF3333 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  boxShadow: "0 8px 24px rgba(255, 0, 0, 0.25)",
                }}
              >
                <Users size={36} color="#FFFFFF" />
              </div>

              <div style={{ flex: 1 }}>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "22px",
                    fontWeight: 400,
                    color: "#151561",
                    lineHeight: "1.7",
                    marginBottom: "28px",
                    fontStyle: "italic",
                    textAlign: "left",
                  }}
                >
                  &quot;Optichore transformed our entire brand identity from the
                  ground up. The new visual system perfectly captures who we are
                  and has dramatically increased our brand recognition in the
                  market.&quot;
                </p>

                <div>
                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "18px",
                      fontWeight: 600,
                      color: "#151561",
                      marginBottom: "4px",
                      textAlign: "left",
                    }}
                  >
                    Jennifer Martinez
                  </div>
                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "16px",
                      fontWeight: 400,
                      color: "#505050",
                      textAlign: "left",
                    }}
                  >
                    CEO, Momentum Ventures
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* MOBILE: Vertical Stack (≤767px) */}
          <div
            className="md:hidden testimonial-card animate-fade-in"
            style={{
              maxWidth: "100%",
              margin: "0 auto",
              background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)",
              borderRadius: "32px",
              padding: "40px 24px",
              border: "1px solid rgba(0, 0, 0, 0.06)",
              boxShadow: "0 20px 60px rgba(21, 21, 97, 0.12)",
            }}
          >
            <div className="flex flex-col items-center gap-4">
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, #FF0000 0%, #FF3333 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  boxShadow: "0 8px 24px rgba(255, 0, 0, 0.25)",
                }}
              >
                <Users size={36} color="#FFFFFF" />
              </div>

              <div style={{ width: "100%" }}>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "22px",
                    fontWeight: 400,
                    color: "#151561",
                    lineHeight: "1.7",
                    marginBottom: "24px",
                    fontStyle: "italic",
                    textAlign: "center",
                  }}
                >
                  &quot;Optichore transformed our entire brand identity from the
                  ground up. The new visual system perfectly captures who we are
                  and has dramatically increased our brand recognition in the
                  market.&quot;
                </p>

                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "18px",
                      fontWeight: 600,
                      color: "#151561",
                      marginBottom: "4px",
                    }}
                  >
                    Jennifer Martinez
                  </div>
                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "16px",
                      fontWeight: 400,
                      color: "#505050",
                    }}
                  >
                    CEO, Momentum Ventures
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 FINAL CTA SECTION */}
      <section
        className="final-cta-section lg:py-[140px] md:py-24 py-20"
        style={{
          background: "linear-gradient(180deg, #F8FAFF 0%, #FFFFFF 100%)",
        }}
      >
        <div className="max-w-[1440px] mx-auto lg:px-12 md:px-8 px-4">
          {/* DESKTOP: Centered with Horizontal Buttons (≥1280px) — LOCKED */}
          <div className="hidden lg:block text-center animate-fade-in">
            <h2
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "56px",
                fontWeight: 700,
                color: "#151561",
                letterSpacing: "-0.02em",
                marginBottom: "24px",
                lineHeight: "1.15",
              }}
            >
              Let&apos;s Build a Brand
              <br />
              That People Remember
            </h2>

            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "20px",
                fontWeight: 400,
                color: "#505050",
                lineHeight: "1.7",
                maxWidth: "700px",
                margin: "0 auto 48px",
              }}
            >
              Ready to create a brand identity that stands out and drives
              business growth?
            </p>

            <div className="flex items-center justify-center gap-5">
              <button
                className="cta-primary-btn"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "17px",
                  fontWeight: 600,
                  color: "#FFFFFF",
                  backgroundColor: "#FF0000",
                  padding: "18px 40px",
                  borderRadius: "50px",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 8px 24px rgba(255, 0, 0, 0.25)",
                  transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                Start Project
                <ArrowRight size={20} />
              </button>

              <button
                className="cta-secondary-btn"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "17px",
                  fontWeight: 600,
                  color: "#151561",
                  backgroundColor: "transparent",
                  padding: "18px 40px",
                  borderRadius: "50px",
                  border: "2px solid #151561",
                  cursor: "pointer",
                  transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Phone size={20} />
                Talk to Us
              </button>
            </div>
          </div>

          {/* TABLET: Centered with Horizontal Buttons (768px-1024px) */}
          <div className="hidden md:block lg:hidden text-center animate-fade-in">
            <h2
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "56px",
                fontWeight: 700,
                color: "#151561",
                letterSpacing: "-0.02em",
                marginBottom: "24px",
                lineHeight: "1.15",
              }}
            >
              Let&apos;s Build a Brand
              <br />
              That People Remember
            </h2>

            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "20px",
                fontWeight: 400,
                color: "#505050",
                lineHeight: "1.7",
                maxWidth: "80%",
                margin: "0 auto 48px",
              }}
            >
              Ready to create a brand identity that stands out and drives
              business growth?
            </p>

            <div className="flex items-center justify-center gap-4">
              <button
                className="cta-primary-btn"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "17px",
                  fontWeight: 600,
                  color: "#FFFFFF",
                  backgroundColor: "#FF0000",
                  padding: "18px 40px",
                  borderRadius: "50px",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 8px 24px rgba(255, 0, 0, 0.25)",
                  transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                Start Project
                <ArrowRight size={20} />
              </button>

              <button
                className="cta-secondary-btn"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "17px",
                  fontWeight: 600,
                  color: "#151561",
                  backgroundColor: "transparent",
                  padding: "18px 40px",
                  borderRadius: "50px",
                  border: "2px solid #151561",
                  cursor: "pointer",
                  transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Phone size={20} />
                Talk to Us
              </button>
            </div>
          </div>

          {/* MOBILE: Centered with Stacked Full-Width Buttons (≤767px) */}
          <div className="md:hidden text-center animate-fade-in">
            <h2
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "56px",
                fontWeight: 700,
                color: "#151561",
                letterSpacing: "-0.02em",
                marginBottom: "24px",
                lineHeight: "1.15",
              }}
            >
              Let&apos;s Build a Brand
              <br />
              That People Remember
            </h2>

            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "20px",
                fontWeight: 400,
                color: "#505050",
                lineHeight: "1.7",
                margin: "0 auto 40px",
              }}
            >
              Ready to create a brand identity that stands out and drives
              business growth?
            </p>

            <div className="flex flex-col items-stretch gap-3">
              <button
                className="cta-primary-btn"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "17px",
                  fontWeight: 600,
                  color: "#FFFFFF",
                  backgroundColor: "#FF0000",
                  padding: "18px 40px",
                  borderRadius: "50px",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 8px 24px rgba(255, 0, 0, 0.25)",
                  transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  width: "100%",
                }}
              >
                Start Project
                <ArrowRight size={20} />
              </button>

              <button
                className="cta-secondary-btn"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "17px",
                  fontWeight: 600,
                  color: "#151561",
                  backgroundColor: "transparent",
                  padding: "18px 40px",
                  borderRadius: "50px",
                  border: "2px solid #151561",
                  cursor: "pointer",
                  transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  width: "100%",
                }}
              >
                <Phone size={20} />
                Talk to Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      {/* 🎨 ANIMATIONS & STYLES */}
      <style>{`
        /* Fade In Animations */
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
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

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-fade-in-left {
          animation: fadeInLeft 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .animate-fade-in-right {
          animation: fadeInRight 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .animate-fade-in {
          animation: fadeIn 1s ease forwards;
        }

        /* Button Hover Effects */
        .cta-primary-btn:hover {
          background-color: #E60000;
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(255, 0, 0, 0.35);
        }

        .cta-secondary-btn:hover {
          background-color: #151561;
          color: #FFFFFF;
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(21, 21, 97, 0.25);
        }

        /* Card Hover Effects */
        .impact-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(21, 21, 97, 0.15);
        }

        .capability-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(21, 21, 97, 0.18);
          background: rgba(255, 255, 255, 0.85);
        }

        .showcase-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(21, 21, 97, 0.15);
        }

        /* Glassmorphism */
        .glassmorphism {
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }

        /* Smooth Scroll */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
