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

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    // 🔥 CORREÇÃO: bloquear scroll apenas quando menu está aberto
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
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
          onClick={toggleMobileMenu}
        >
          <span>{isMobileMenuOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 z-40 bg-[rgba(23,18,15,0.32)] backdrop-blur-[2px] transition-all duration-300 lg:hidden ${
          isMobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={closeMobileMenu}
      />

      {/* MENU MOBILE */}
      <div
        className={`fixed right-0 top-0 z-50 h-screen w-full max-w-[380px] border-l border-[#d8c39a]/20 bg-[linear-gradient(180deg,#1f1813_0%,#17120f_100%)] shadow-[0_30px_80px_rgba(0,0,0,0.35)] transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col px-6 py-6">
          <nav className="flex flex-col gap-3 mt-10">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                className="text-lg text-[#f6ead1]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto">
            <Link
              href="/orcamento"
              onClick={closeMobileMenu}
              className="inline-flex w-full min-h-[48px] items-center justify-center rounded-full bg-[#c8a96b] text-[#1f1813]"
            >
              Pedir orçamento
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}