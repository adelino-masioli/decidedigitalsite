import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import JsonLd from "@/components/json-ld"
import FixedActionButtons from "@/components/fixed-action-buttons"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://decidedigital.com.br'),
  title: {
    default: "Decide Digital | Soluções Digitais Inteligentes",
    template: "%s | Decide Digital"
  },
  description:
    "Desenvolvimento Web, Aplicativos sob Medida, Automação de Processos e Cibersegurança para impulsionar o crescimento do seu negócio.",
  keywords: [
    "desenvolvimento web", "aplicativos", "automação de processos", "cibersegurança", 
    "n8n", "Flutterflow", "Supabase", "Python", "JavaScript", "Ruby on Rails",
    "soluções digitais", "tecnologia para empresas", "transformação digital", "Rondônia", "Cacoal"
  ],
  authors: [{ name: "Decide Digital" }],
  creator: "Decide Digital",
  publisher: "Decide Digital",
  generator: 'Next.js',
  applicationName: "Decide Digital",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png'
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://decidedigital.com.br',
    title: 'Decide Digital | Soluções Digitais Inteligentes',
    description: 'Desenvolvimento Web, Aplicativos sob Medida, Automação de Processos e Cibersegurança para impulsionar o crescimento do seu negócio.',
    siteName: 'Decide Digital',
    images: [
      {
        url: '/logo-dark.png',
        width: 800,
        height: 600,
        alt: 'Decide Digital Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Decide Digital | Soluções Digitais Inteligentes',
    description: 'Desenvolvimento Web, Aplicativos sob Medida, Automação de Processos e Cibersegurança para impulsionar o crescimento do seu negócio.',
    images: ['/logo-dark.png'],
    creator: '@decidedigital',
  },
  alternates: {
    canonical: 'https://decidedigital.com.br',
  },
  verification: {
    google: 'google-site-verification-code', // Substitua pelo seu código real quando tiver
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Structured data for organization
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Decide Digital",
    "url": "https://decidedigital.com.br",
    "logo": "https://decidedigital.com.br/logo-dark.png",
    "sameAs": [
      "https://www.facebook.com/decidedigital",
      "https://www.instagram.com/decidedigital",
      "https://www.linkedin.com/company/decidedigital"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Cacoal",
      "addressRegion": "RO",
      "addressCountry": "BR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-69-99208-3972",
      "contactType": "customer service"
    },
    "description": "Desenvolvimento Web, Aplicativos sob Medida, Automação de Processos e Cibersegurança para impulsionar o crescimento do seu negócio."
  };

  // Structured data for local business
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Decide Digital",
    "image": "https://decidedigital.com.br/logo-dark.png",
    "url": "https://decidedigital.com.br",
    "telephone": "+55-69-99208-3972",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Cacoal",
      "addressRegion": "RO",
      "postalCode": "76960-000",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -11.4347,
      "longitude": -61.4370
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "priceRange": "$$$"
  };

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      </head>
      <body className={`${inter.className} min-h-screen bg-neutral-50 text-neutral-900`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <JsonLd data={organizationJsonLd} />
          <JsonLd data={localBusinessJsonLd} />
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <FixedActionButtons />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'