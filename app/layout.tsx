import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const inter = localFont({
  src: "./fonts/InterVF.ttf",
  variable: "--font-inter",
  weight: "100 200 300 400 500 700 800 900",
});

const spaceGrotesk = localFont({
  src: "./fonts/SpaceGroteskVF.ttf",
  variable: "--font-space-grotesk",
  weight: "300 400 500 700 ",
});

export const metadata: Metadata = {
  title: "Devflow",
  icons: {
    icon: "/images/site-logo.svg",
  },
  description:
    "A different version of StackOverflow is a Q&A platform designed to provide a unique and improved user experience for developers seeking solutions to their coding problems. This platform offers enhanced features, a modern interface, and a more engaging community-driven approach to knowledge sharing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
