"use client";
 

import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
// import logo from "../public/images/58999c323b4341362baed6ec5f1b9d3f7db35c54.png"
import { ServicesDropdown } from "./ServicesDropdown";
import { BlogDropdown } from "./BlogDropdown";
import { SafeLink } from "./SafeLink";
import { usePathname } from "next/navigation";

export function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const [isTabletMenuOpen, setIsTabletMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [tabletServicesExpanded, setTabletServicesExpanded] = useState(false);
  const [tabletBlogExpanded, setTabletBlogExpanded] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const [mobileBlogExpanded, setMobileBlogExpanded] = useState(false);
  const pathname = usePathname();

  // Lock body scroll when menus are open
  useEffect(() => {
    if (isTabletMenuOpen || isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isTabletMenuOpen, isMobileMenuOpen]);

  const navItems = [
    { label: "Home", href: "#/", path: "/" },
    {
      label: "Services",
      href: "#services",
      hasDropdown: true,
      dropdownType: "services",
    },
    { label: "About", href: "#/about", path: "/about" },
    {
      label: "Blog",
      href: "#/blog",
      path: "/blog",
      hasDropdown: true,
      dropdownType: "blog",
    },
    { label: "Contact", href: "#/contact", path: "/contact" },
  ];

  const serviceLinks = [
    { label: "Facebook Marketing", path: "/facebook-marketing" },
    { label: "Web Design", path: "/web-design" },
    { label: "Web Development", path: "/web-development" },
    { label: "UI/UX Design", path: "/uiux-design" },
    { label: "Brand Identity & Creative Design", path: "/brand-identity" },
    { label: "Software Development", path: "/software-development" },
    { label: "Mobile App Development", path: "/mobile-app-development" },
  ];

  const blogLinks = [
    { label: "All Articles", path: "/blog" },
    { label: "Facebook Marketing", path: "/blog/category/facebook-marketing" },
    { label: "Design", path: "/blog/category/design" },
    { label: "Development", path: "/blog/category/development" },
    { label: "UI/UX", path: "/blog/category/uiux" },
    { label: "Branding", path: "/blog/category/branding" },
  ];

  const isActive = (path: string | undefined) => {
    if (!path) return false;
    return pathname === path;
  };

  return (
    <>
      {/* ========== HEADER BAR (ALL VIEWPORTS) ========== */}
      <header className="header-container sticky top-0 z-50 w-full">
        <div
          className="header-inner lg:h-[84px] md:h-[72px] h-[64px]"
          style={{
            backgroundColor: "#FFFFFF",
            borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
          }}
        >
          <div className="max-w-[1440px] mx-auto h-full lg:px-12 md:px-8 px-6">
            <div className="flex items-center justify-between h-full">
              {/* ========== LOGO (ALL VIEWPORTS) ========== */}
              <div className="header-logo-group flex-shrink-0">
                {/* <SafeLink href="/" className="inline-block">
                  <img
                    src={logo.src}
                    alt="Optichore"
                    className="lg:h-[40px] md:h-[36px] h-[34px] w-auto"
                    style={{ imageRendering: "-webkit-optimize-contrast" }}
                  />
                </SafeLink> */}
              </div>

              {/* ========== CENTER NAVIGATION (DESKTOP ONLY) ========== */}
              <nav className="header-nav-group flex-shrink-0 hidden lg:block">
                <ul className="flex items-center gap-[34px]">
                  {navItems.map((item) => (
                    <li
                      key={item.label}
                      className="nav-item relative"
                      onMouseEnter={() => {
                        if (item.dropdownType === "services")
                          setIsServicesOpen(true);
                        if (item.dropdownType === "blog") setIsBlogOpen(true);
                      }}
                      onMouseLeave={() => {
                        if (item.dropdownType === "services")
                          setIsServicesOpen(false);
                        if (item.dropdownType === "blog") setIsBlogOpen(false);
                      }}
                    >
                      {item.path ? (
                        <SafeLink
                          href={item.path}
                          className={`nav-link-animated flex items-center gap-1.5 text-[17px] font-medium transition-all duration-200 ${
                            isActive(item.path) ? "active-nav-link" : ""
                          }`}
                          style={{
                            fontFamily: "Inter, sans-serif",
                            color: isActive(item.path) ? "#FF0000" : "#151561",
                            cursor: "pointer",
                            pointerEvents: "auto",
                          }}
                        >
                          {item.label}
                          {item.hasDropdown && (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </SafeLink>
                      ) : (
                        <SafeLink
                          href={item.href}
                          className="nav-link-animated flex items-center gap-1.5 text-[17px] font-medium transition-all duration-200"
                          style={{
                            fontFamily: "Inter, sans-serif",
                            color: "#151561",
                            cursor: "pointer",
                            pointerEvents: "auto",
                          }}
                        >
                          {item.label}
                          {item.hasDropdown && (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </SafeLink>
                      )}

                      {/* Desktop Dropdowns */}
                      {item.dropdownType === "services" && isServicesOpen && (
                        <ServicesDropdown />
                      )}

                      {item.dropdownType === "blog" && isBlogOpen && (
                        <BlogDropdown />
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              {/* ========== RIGHT BUTTONS GROUP ========== */}
              <div className="header-buttons-group flex items-center gap-[22px] flex-shrink-0">
                {/* Login Button - DESKTOP ONLY (≥1024px) */}
                <SafeLink
                  href="#login"
                  className="login-button-animated hidden lg:inline-flex h-[40px] px-[23px] text-[16px] font-medium rounded-[50px] items-center justify-center whitespace-nowrap"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    backgroundColor: "#FFFFFF",
                    border: "1.5px solid #FF0000",
                    color: "#FF0000",
                  }}
                >
                  Login
                </SafeLink>

                {/* Get Free Consultation - DESKTOP (≥1024px) + TABLET (768-1023px) ONLY */}
                <SafeLink
                  href="/consultation"
                  className="cta-button-animated hidden md:inline-flex lg:inline-flex h-[42px] px-[31px] text-[16px] font-semibold text-white rounded-[50px] whitespace-nowrap items-center justify-center"
                  style={{
                    backgroundColor: "#FF0000",
                    fontFamily: "Inter, sans-serif",
                    cursor: "pointer",
                    pointerEvents: "auto",
                  }}
                >
                  Get Free Consultation
                </SafeLink>

                {/* Hamburger Menu - MOBILE (<768px) + TABLET (768-1023px) ONLY */}
                <button
                  onClick={() => {
                    if (window.innerWidth >= 768) {
                      setIsTabletMenuOpen(!isTabletMenuOpen);
                    } else {
                      setIsMobileMenuOpen(!isMobileMenuOpen);
                    }
                  }}
                  className="hamburger-menu-button flex lg:hidden items-center justify-center w-10 h-10 rounded-lg transition-colors hover:bg-gray-100"
                  style={{ color: "#151561" }}
                  aria-label="Toggle menu"
                >
                  <Menu className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ========== TABLET DRAWER MENU (RIGHT-SIDE) ========== */}
      {isTabletMenuOpen && (
        <div className="fixed inset-0 z-50 hidden md:block lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"
            onClick={() => setIsTabletMenuOpen(false)}
          />

          {/* Drawer Panel */}
          <div
            className="absolute top-0 right-0 h-full w-[400px] bg-white shadow-2xl overflow-y-auto"
            style={{
              animation: "slideInRight 280ms ease-out",
            }}
          >
            {/* Top Bar - Logo + Close */}
            <div
              className="drawer-top-bar flex items-center justify-between px-8 border-b"
              style={{
                height: "72px",
                borderColor: "rgba(0, 0, 0, 0.06)",
              }}
            >
              {/* <img  src={logo.src} alt="Optichore" className="h-[36px] w-auto" /> */}
              <button
                onClick={() => setIsTabletMenuOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                style={{ color: "#151561" }}
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Items */}
            <div className="drawer-menu-items px-6 py-6 space-y-2">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.hasDropdown ? (
                    <>
                      {/* Accordion Button */}
                      <button
                        onClick={() => {
                          if (item.dropdownType === "services") {
                            setTabletServicesExpanded(!tabletServicesExpanded);
                          } else if (item.dropdownType === "blog") {
                            setTabletBlogExpanded(!tabletBlogExpanded);
                          }
                        }}
                        className="w-full flex items-center justify-between py-3 px-4 text-left rounded-lg transition-colors hover:bg-gray-50"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "17px",
                          fontWeight: 500,
                          color: "#151561",
                          minHeight: "44px",
                        }}
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-5 h-5 transition-transform ${
                            (item.dropdownType === "services" &&
                              tabletServicesExpanded) ||
                            (item.dropdownType === "blog" && tabletBlogExpanded)
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </button>

                      {/* Accordion Content - Services */}
                      {item.dropdownType === "services" &&
                        tabletServicesExpanded && (
                          <div className="ml-4 mt-1 space-y-1">
                            {serviceLinks.map((service) => (
                              <SafeLink
                                key={service.path}
                                href={service.path}
                                onClick={() => setIsTabletMenuOpen(false)}
                                className="block py-2 px-4 rounded-lg transition-colors hover:bg-gray-50 hover:text-[#FF0000]"
                                style={{
                                  fontFamily: "Inter, sans-serif",
                                  fontSize: "16px",
                                  color: "#505050",
                                  minHeight: "44px",
                                }}
                              >
                                {service.label}
                              </SafeLink>
                            ))}
                          </div>
                        )}

                      {/* Accordion Content - Blog */}
                      {item.dropdownType === "blog" && tabletBlogExpanded && (
                        <div className="ml-4 mt-1 space-y-1">
                          {blogLinks.map((blog) => (
                            <SafeLink
                              key={blog.path}
                              href={blog.path}
                              onClick={() => setIsTabletMenuOpen(false)}
                              className="block py-2 px-4 rounded-lg transition-colors hover:bg-gray-50 hover:text-[#FF0000]"
                              style={{
                                fontFamily: "Inter, sans-serif",
                                fontSize: "16px",
                                color: "#505050",
                                minHeight: "44px",
                              }}
                            >
                              {blog.label}
                            </SafeLink>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <SafeLink
                      href={item.path || item.href}
                      onClick={() => setIsTabletMenuOpen(false)}
                      className={`block py-3 px-4 rounded-lg transition-colors hover:bg-gray-50 ${
                        isActive(item.path) ? "bg-red-50" : ""
                      }`}
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "17px",
                        fontWeight: 500,
                        color: isActive(item.path) ? "#FF0000" : "#151561",
                        minHeight: "44px",
                      }}
                    >
                      {item.label}
                    </SafeLink>
                  )}
                </div>
              ))}
            </div>

            {/* Divider */}
            <div
              className="mx-6 border-t"
              style={{ borderColor: "rgba(0, 0, 0, 0.06)" }}
            />

            {/* Bottom Action Buttons */}
            <div className="drawer-bottom-actions px-6 py-6 space-y-3">
              {/* Login Button */}
              <SafeLink
                href="#login"
                onClick={() => setIsTabletMenuOpen(false)}
                className="block w-full h-[44px] px-[23px] rounded-[50px] flex items-center justify-center transition-all hover:bg-red-50"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "16px",
                  fontWeight: 500,
                  border: "1.5px solid #FF0000",
                  color: "#FF0000",
                  backgroundColor: "#FFFFFF",
                }}
              >
                Login
              </SafeLink>

              {/* Get Free Consultation - Full Width */}
              <SafeLink
                href="/consultation"
                onClick={() => setIsTabletMenuOpen(false)}
                className="block w-full h-[44px] px-[31px] rounded-[50px] flex items-center justify-center transition-all hover:brightness-110"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "16px",
                  fontWeight: 600,
                  backgroundColor: "#FF0000",
                  color: "#FFFFFF",
                }}
              >
                Get Free Consultation
              </SafeLink>
            </div>
          </div>
        </div>
      )}

      {/* ========== MOBILE FULL-SCREEN OVERLAY ========== */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Full-Screen Overlay */}
          <div className="absolute inset-0 bg-white flex flex-col">
            {/* Top Bar - Logo + Close */}
            <div
              className="mobile-top-bar flex items-center justify-between px-6 border-b"
              style={{
                height: "64px",
                borderColor: "rgba(0, 0, 0, 0.06)",
              }}
            >
              {/* <img  src={logo.src} alt="Optichore" className="h-[34px] w-auto" /> */}
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                style={{ color: "#151561" }}
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Middle - Scrollable Menu */}
            <div className="flex-1 overflow-y-auto px-5 py-6 space-y-2">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.hasDropdown ? (
                    <>
                      {/* Accordion Button */}
                      <button
                        onClick={() => {
                          if (item.dropdownType === "services") {
                            setMobileServicesExpanded(!mobileServicesExpanded);
                          } else if (item.dropdownType === "blog") {
                            setMobileBlogExpanded(!mobileBlogExpanded);
                          }
                        }}
                        className="w-full flex items-center justify-between py-4 px-4 text-left rounded-lg transition-colors hover:bg-gray-50"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "17px",
                          fontWeight: 500,
                          color: "#151561",
                          minHeight: "48px",
                        }}
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-5 h-5 transition-transform ${
                            (item.dropdownType === "services" &&
                              mobileServicesExpanded) ||
                            (item.dropdownType === "blog" && mobileBlogExpanded)
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </button>

                      {/* Accordion Content - Services */}
                      {item.dropdownType === "services" &&
                        mobileServicesExpanded && (
                          <div className="ml-4 mt-1 space-y-1">
                            {serviceLinks.map((service) => (
                              <SafeLink
                                key={service.path}
                                href={service.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block py-3 px-4 rounded-lg transition-colors hover:bg-gray-50 hover:text-[#FF0000]"
                                style={{
                                  fontFamily: "Inter, sans-serif",
                                  fontSize: "16px",
                                  color: "#505050",
                                  minHeight: "48px",
                                }}
                              >
                                {service.label}
                              </SafeLink>
                            ))}
                          </div>
                        )}

                      {/* Accordion Content - Blog */}
                      {item.dropdownType === "blog" && mobileBlogExpanded && (
                        <div className="ml-4 mt-1 space-y-1">
                          {blogLinks.map((blog) => (
                            <SafeLink
                              key={blog.path}
                              href={blog.path}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block py-3 px-4 rounded-lg transition-colors hover:bg-gray-50 hover:text-[#FF0000]"
                              style={{
                                fontFamily: "Inter, sans-serif",
                                fontSize: "16px",
                                color: "#505050",
                                minHeight: "48px",
                              }}
                            >
                              {blog.label}
                            </SafeLink>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <SafeLink
                      href={item.path || item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block py-4 px-4 rounded-lg transition-colors hover:bg-gray-50 ${
                        isActive(item.path) ? "bg-red-50" : ""
                      }`}
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "17px",
                        fontWeight: 500,
                        color: isActive(item.path) ? "#FF0000" : "#151561",
                        minHeight: "48px",
                      }}
                    >
                      {item.label}
                    </SafeLink>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom - Fixed CTA Zone */}
            <div
              className="mobile-bottom-cta border-t px-5 py-6 space-y-3 bg-white"
              style={{
                borderColor: "rgba(0, 0, 0, 0.06)",
                boxShadow: "0 -4px 20px rgba(0, 0, 0, 0.06)",
              }}
            >
              {/* Get Free Consultation - Primary */}
              <SafeLink
                href="/consultation"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full h-[52px] px-[31px] rounded-[50px] flex items-center justify-center transition-all hover:brightness-110"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "17px",
                  fontWeight: 600,
                  backgroundColor: "#FF0000",
                  color: "#FFFFFF",
                }}
              >
                Get Free Consultation
              </SafeLink>

              {/* Login - Secondary */}
              <SafeLink
                href="#login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full h-[48px] px-[23px] rounded-[50px] flex items-center justify-center transition-all hover:bg-red-50"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "16px",
                  fontWeight: 500,
                  border: "1.5px solid #FF0000",
                  color: "#FF0000",
                  backgroundColor: "#FFFFFF",
                }}
              >
                Login
              </SafeLink>
            </div>
          </div>
        </div>
      )}

      {/* Slide-in Animation */}
      <style>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
