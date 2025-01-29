import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const RubikMono = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["400", "500", "700"]
});

export const metadata: Metadata = {
  title: "IP Address Tracker Challenge",
  description: "This project is a challenge from Frontend Mentor completed by Weston Vincze. Enter an IP address or domain to fetch and display geolocation data and render a map from the longitude and latitude.",
  authors: [{ name: "Weston Vincze", url: "https://westonvincze.com" }],
  openGraph: {
    title: "IP Address Tracker Challenge",
    description: "Enter an IP address or domain to fetch and display geolocation data and render a map from the longitude and latitude.",
    url: "https://ip-address-tracker-challenge-weston-vincze.vercel.com",
    type: "website",
    images: [
      {
        url: "https://ip-address-tracker-challenge-weston-vincze.vercel.com/og-image.jpg",
        width: 1440,
        height: 800,
        alt: "IP Address Tracker Challenge",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${RubikMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
