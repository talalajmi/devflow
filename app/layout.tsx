import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import ThemeProvider from "../contexts/Theme";
import Navbar from "@/components/navigation/navbar";

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
  title: "DevFlow",
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} ${spaceGrotesk.variable} antialiased`}
      >
        <ThemeProvider
          enableSystem
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
