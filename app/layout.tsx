import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ricky Jostaga | Flutter Mobile Developer",
  description:
    "Professional portfolio for Ricky Jostaga, a Flutter and React Native mobile developer building production apps for Android and iOS.",
  openGraph: {
    title: "Ricky Jostaga | Flutter Mobile Developer",
    description:
      "Mobile developer portfolio highlighting Flutter, React Native, REST API integration, and Project Moonshot app contributions.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
