import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import './globals.css';

import type { Metadata } from 'next';
import localFont from 'next/font/local';

const aspekta = localFont({
  src: [
    {
      path: '../../public/assets/fonts/aspekta_webfonts/Aspekta-350.woff2',
      weight: '350',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/aspekta_webfonts/Aspekta-400.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/aspekta_webfonts/Aspekta-450.woff2',
      weight: '450',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/aspekta_webfonts/Aspekta-500.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-aspekta',
  display: 'swap',
});

const appleGaramond = localFont({
  src: [
    {
      path: '../../public/assets/fonts/apple_garamond/AppleGaramond-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/apple_garamond/AppleGaramond-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../public/assets/fonts/apple_garamond/AppleGaramond.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/apple_garamond/AppleGaramond-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/assets/fonts/apple_garamond/AppleGaramond-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/apple_garamond/AppleGaramond-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-apple-garamond',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MonoHR | Hire the Top 1% of Engineering Talent',
  description: 'MonoHR helps you ship faster by connecting you with vetted engineering talent. Payroll, compliance, and benefits handled remotely with confidence.',
  openGraph: {
    title: 'MonoHR | Hire the Top 1% of Engineering Talent',
    description: 'MonoHR helps you ship faster by connecting you with vetted engineering talent.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${aspekta.variable} ${appleGaramond.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground transition-colors duration-300 overflow-x-hidden">
        <div className='relative'>
          <Navbar />
        </div>
        <main
          className={`[&>section:first-of-type]:lg:pt-44.5 [&>section:first-of-type]:pt-32 `}
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
