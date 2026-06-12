import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Mariana Dinis Remodelações | Remodelações em Coimbra",
    template: "%s | Mariana Dinis Remodelações",
  },
  description:
    "Remodelações em Coimbra, cozinhas por medida, roupeiros por medida e interiores premium. Projetos personalizados com elegância, funcionalidade e acabamentos cuidados.",
  keywords: [
    "remodelações em Coimbra",
    "cozinhas por medida em Coimbra",
    "roupeiros por medida em Coimbra",
    "interiores premium em Coimbra",
    "Mariana Dinis Remodelações",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mariana Dinis Remodelações | Remodelações em Coimbra",
    description:
      "Remodelações, cozinhas por medida, roupeiros por medida e interiores premium em Coimbra.",
    url: "/",
    siteName: "Mariana Dinis Remodelações",
    locale: "pt_PT",
    type: "website",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Mariana Dinis Remodelações",
  image: "https://marianadinis.com/logo.png",
  "@id": "https://marianadinis.com",
  url: "https://marianadinis.com",
  telephone: "+351963582819",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua dos Combatentes da Grande Guerra nº 14 loja 5",
    addressLocality: "Coimbra",
    postalCode: "3030-181",
    addressCountry: "PT",
  },
  areaServed: {
    "@type": "City",
    name: "Coimbra",
  },
  priceRange: "€€",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

  return (
    <html lang="pt">
      <body className="bg-white text-neutral-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />

        <Header />
        <main>{children}</main>
        <Footer />

        {process.env.NEXT_PUBLIC_GA_ID ? (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        ) : null}

        {googleAdsId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`}
              strategy="afterInteractive"
            />
            <Script
              id="google-ads"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${googleAdsId}');
                `,
              }}
            />
          </>
        ) : null}
      </body>
    </html>
  );
}