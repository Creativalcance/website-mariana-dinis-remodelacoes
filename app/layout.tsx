import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mariana Dinis Remodelações",
  description:
    "Remodelações em Coimbra, cozinhas por medida, roupeiros por medida e interiores premium.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body>
        {/* SEO LOCAL BUSINESS */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Mariana Dinis Remodelações",
              image: "https://marianadinis.com/logo.png",
              "@id": "https://marianadinis.com",
              url: "https://marianadinis.com",
              telephone: "+351963582631",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Rua dos Combatentes da Grande Guerra nº 14 loja 5",
                addressLocality: "Coimbra",
                postalCode: "3030-181",
                addressCountry: "PT",
              },
              areaServed: "Coimbra",
              priceRange: "€€",
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}