"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navigation = [
  { href: "/", label: "Homepage" },
  { href: "/cozinhas", label: "Cozinhas" },
  { href: "/roupeiros", label: "Roupeiros" },
  { href: "/contactos", label: "Contactos" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    }

    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isMobileMenuOpen]);

  function toggleMobileMenu() {
    setIsMobileMenuOpen((current) => !current);
  }

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#d8c39a]/35 bg-[rgba(255,251,245,0.94)] backdrop-blur-md">
      <div className="h-[1px] w-full bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(198,162,92,0.9)_50%,rgba(0,0,0,0)_100%)]" />

      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="group flex items-center gap-4"
          onClick={closeMobileMenu}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d8c39a]/45 bg-[linear-gradient(180deg,#3a2d22_0%,#1f1813_100%)] shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
            <span className="font-serif text-lg text-[#e4c98f]">MD</span>
          </div>

          <div className="flex flex-col">
            <span className="font-serif text-[1.15rem] leading-none tracking-[0.08em] text-[#241c16] transition-colors group-hover:text-[#b88d3b]">
              Mariana Dinis
            </span>
            <span className="mt-1 text-[10px] uppercase tracking-[0.34em] text-[#b88d3b]">
              Remodelações
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-[13px] font-medium uppercase tracking-[0.24em] text-[#5f5348] transition-colors duration-300 hover:text-[#b88d3b]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="/orcamento"
            className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-[#cfb279] bg-[linear-gradient(180deg,#d8bc82_0%,#b88d3b_100%)] px-6 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#1f1813] shadow-[0_14px_30px_rgba(184,141,59,0.22)] transition duration-300 hover:translate-y-[-1px] hover:shadow-[0_18px_34px_rgba(184,141,59,0.28)]"
          >
            Pedir orçamento
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d8c39a]/45 bg-[linear-gradient(180deg,rgba(255,255,255,0.95)_0%,rgba(246,238,226,0.95)_100%)] text-[#2a211a] shadow-[0_8px_18px_rgba(0,0,0,0.06)] transition hover:border-[#c8a76b] hover:text-[#b88d3b] lg:hidden"
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={toggleMobileMenu}
        >
          <span className="relative block h-4 w-4">
            <span
              className={`absolute left-0 top-0 h-[1.5px] w-4 rounded-full bg-current transition-all duration-300 ${
                isMobileMenuOpen ? "top-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-[1.5px] w-4 rounded-full bg-current transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-[1.5px] w-4 rounded-full bg-current transition-all duration-300 ${
                isMobileMenuOpen ? "top-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-[rgba(23,18,15,0.32)] backdrop-blur-[2px] transition-all duration-300 lg:hidden ${
          isMobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={closeMobileMenu}
        aria-hidden={!isMobileMenuOpen}
      />

      <div
        id="mobile-navigation"
        className={`fixed right-0 top-0 z-50 h-screen w-full max-w-[380px] border-l border-[#d8c39a]/20 bg-[linear-gradient(180deg,#1f1813_0%,#17120f_100%)] shadow-[0_30px_80px_rgba(0,0,0,0.35)] transition-transform duration-300 ease-out lg:hidden ${
          isMobileMenuOpen
            ? "pointer-events-auto translate-x-0"
            : "pointer-events-none translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-[#cba96a]/12 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d8c39a]/35 bg-[linear-gradient(180deg,#3a2d22_0%,#1f1813_100%)]">
              <span className="font-serif text-sm text-[#e4c98f]">MD</span>
            </div>

            <div className="flex flex-col">
              <span className="font-serif text-base leading-none text-[#f6ead1]">
                Mariana Dinis
              </span>
              <span className="mt-1 text-[9px] uppercase tracking-[0.24em] text-[#c8a76b]">
                Remodelações
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={closeMobileMenu}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#d8c39a]/20 bg-white/5 text-[#f6ead1] transition hover:border-[#c8a76b] hover:text-[#d8bc82]"
            aria-label="Fechar menu"
          >
            ✕
          </button>
        </div>

        <div className="flex h-[calc(100vh-73px)] flex-col px-4 py-3">
          <nav className="flex flex-col gap-1.5">
            {navigation.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                className="group flex items-center justify-between rounded-[18px] border border-[#cba96a]/10 bg-white/[0.03] px-4 py-2.5 transition duration-300 hover:border-[#cba96a]/25 hover:bg-white/[0.06]"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#cba96a]/18 text-[9px] font-medium text-[#c8a76b]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-serif text-[1rem] leading-none text-[#f6ead1] transition-colors group-hover:text-[#d8bc82]">
                    {item.label}
                  </span>
                </div>

                <span className="text-sm leading-none text-[#8f7e67] transition-colors group-hover:text-[#d8bc82]">
                  →
                </span>
              </Link>
            ))}
          </nav>

          <div className="mt-3 rounded-[22px] border border-[#cba96a]/14 bg-[radial-gradient(circle_at_top,rgba(209,171,95,0.14),rgba(255,255,255,0.03)_42%)] p-4">
            <span className="text-[8px] uppercase tracking-[0.24em] text-[#c8a76b]">
              Novo projeto
            </span>

            <h3 className="mt-2 font-serif text-lg leading-tight text-[#f6ead1]">
              Vamos criar algo único para o seu espaço
            </h3>

            <p className="mt-2 text-[13px] leading-5 text-[#cfc5b8]">
              Peça uma proposta personalizada com uma abordagem elegante,
              funcional e pensada ao detalhe.
            </p>

            <Link
              href="/orcamento"
              onClick={closeMobileMenu}
              className="mt-3 inline-flex min-h-[42px] w-full items-center justify-center rounded-full border border-[#cfb279] bg-[linear-gradient(180deg,#d8bc82_0%,#b88d3b_100%)] px-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1f1813] shadow-[0_16px_30px_rgba(184,141,59,0.18)] transition duration-300 hover:translate-y-[-1px] hover:shadow-[0_20px_34px_rgba(184,141,59,0.24)]"
            >
              Pedir orçamento
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}