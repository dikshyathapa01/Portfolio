import type { Metadata } from "next";
import { Manrope, Syne, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Layout } from "@/components/layout/Layout";
import { siteConfig } from "@/config/siteConfig";

const headingFont = Syne({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: siteConfig.author }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const petals = [
    { left: '4%', size: '10px', delay: '-2s', duration: '15s', drift: '36px', opacity: 0.55 },
    { left: '10%', size: '12px', delay: '-7s', duration: '18s', drift: '48px', opacity: 0.5 },
    { left: '16%', size: '9px', delay: '-4s', duration: '14s', drift: '28px', opacity: 0.6 },
    { left: '22%', size: '13px', delay: '-10s', duration: '20s', drift: '56px', opacity: 0.45 },
    { left: '29%', size: '11px', delay: '-1s', duration: '16s', drift: '44px', opacity: 0.5 },
    { left: '35%', size: '8px', delay: '-6s', duration: '13s', drift: '26px', opacity: 0.62 },
    { left: '42%', size: '12px', delay: '-9s', duration: '19s', drift: '58px', opacity: 0.48 },
    { left: '49%', size: '10px', delay: '-3s', duration: '15s', drift: '34px', opacity: 0.58 },
    { left: '55%', size: '14px', delay: '-11s', duration: '21s', drift: '62px', opacity: 0.44 },
    { left: '61%', size: '9px', delay: '-5s', duration: '14s', drift: '30px', opacity: 0.6 },
    { left: '68%', size: '11px', delay: '-8s', duration: '17s', drift: '46px', opacity: 0.52 },
    { left: '74%', size: '12px', delay: '-12s', duration: '20s', drift: '60px', opacity: 0.46 },
    { left: '80%', size: '8px', delay: '-4.5s', duration: '13s', drift: '25px', opacity: 0.62 },
    { left: '85%', size: '13px', delay: '-7.5s', duration: '18s', drift: '52px', opacity: 0.5 },
    { left: '90%', size: '10px', delay: '-1.5s', duration: '16s', drift: '40px', opacity: 0.56 },
    { left: '95%', size: '9px', delay: '-6.5s', duration: '14s', drift: '30px', opacity: 0.6 },
  ] as const;

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${headingFont.variable} ${bodyFont.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="lighting-layer" aria-hidden />

          <div className="sakura-layer" aria-hidden>
            {petals.map((petal, index) => (
              <span
                key={index}
                className="sakura-petal"
                style={{
                  ['--left' as never]: petal.left,
                  ['--size' as never]: petal.size,
                  ['--delay' as never]: petal.delay,
                  ['--duration' as never]: petal.duration,
                  ['--drift' as never]: petal.drift,
                  ['--opacity' as never]: petal.opacity,
                }}
              />
            ))}
          </div>

          <div className="relative z-10">
            <Layout>{children}</Layout>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
