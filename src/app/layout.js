import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://studentglobalsummit.com"),

  title: {
    default: "Students Global Summit 2025 | India's Biggest Youth Leadership Summit",
    template: "%s | Students Global Summit 2025",
  },

  description: "Join the Students Global Summit 2025 — A 3-day transformative event featuring startups, policy debates, innovation showcases, cultural events, and networking with leaders.",

  keywords: [
    "Student Global Summit",
    "Students Global Summit",
    "Youth Summit India",
    "Startup Exhibition",
    "Policy Debate Event",
    "Innovation Summit 2025",
    "Tech Summit India",
    "Student Conference 2025",
  ],

  alternates: {
    canonical: "https://studentglobalsummit.com",
  },

  category: "Education",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  authors: [{ name: "Students Global Summit Team" }],
  creator: "Students Global Summit",
  publisher: "Students Global Summit",

  openGraph: {
    title: "Students Global Summit 2025",
    description:
      "A global summit empowering youth through innovation, leadership, and entrepreneurship.",
    url: "https://studentglobalsummit.com",
    siteName: "Students Global Summit",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Students Global Summit 2025 Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Students Global Summit 2025",
    description:
      "Empowering youth through innovation, entrepreneurship, global policy, and leadership.",
    site: "@sgsummit2025",
    creator: "@sgsummit2025",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/icon.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",

  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Preloader />
        {children}
      </body>
    </html>
  );
}
