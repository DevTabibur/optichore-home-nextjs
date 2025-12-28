import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Optichore_Footer } from "@/components/Optichore_Footer";

export const metadata: Metadata = {
  title: {
    default: "Optichore | Software Development & Digital Solutions Company",
    template: "%s | Optichore",
  },
  description:
    "Optichore is a professional software development company delivering scalable web applications, SaaS platforms, UI/UX design, and enterprise digital solutions worldwide.",
  keywords: [
    "Optichore",
    "software company",
    "software development company",
    "web application development",
    "SaaS development",
    "custom software solutions",
    "UI UX design services",
    "enterprise software",
    "digital solutions company",
  ],
  authors: [{ name: "Optichore Team" }],
  creator: "Optichore",
  publisher: "Optichore",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Optichore | Software Development & Digital Solutions Company",
    description:
      "We build scalable software, SaaS products, and digital platforms for startups and enterprises.",
    url: "https://optichore.com",
    siteName: "Optichore",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Optichore | Software Development Company",
    description:
      "Custom software, SaaS platforms, and digital solutions built by Optichore.",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>
        <Header />
        {children}
        <Optichore_Footer />
      </body>
    </html>
  );
}
