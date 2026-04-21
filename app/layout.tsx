import "./globals.css";
import type { ReactNode } from "react";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";

export const metadata = {
  title: "Mariana Dinis Remodelações",
  description: "Transforme a sua casa com elegância e qualidade.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="pt">
      <body className="bg-white text-neutral-900">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}