import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Student Global Summit 2025 | India's Biggest Youth Leadership Summit",
  description: "Join the Student Global Summit 2025 — A 3-day transformative event featuring startups, policy debates, innovation showcases, cultural events, and networking with leaders.",
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
  authors: [{ name: "Student Global Summit Team" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Student Global Summit 2025",
    description:
      "A global summit empowering youth through innovation, leadership, and entrepreneurship.",
    url: "https://studentglobalsummit.com",
    siteName: "Student Global Summit",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/icon.png",
    apple: "/apple-touch-icon.png",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
