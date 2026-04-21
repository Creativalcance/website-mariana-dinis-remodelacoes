"use client";

import Link from "next/link";

const navigation = [
  { href: "/", label: "Homepage" },
  { href: "/cozinhas", label: "Cozinhas" },
  { href: "/roupeiros", label: "Roupeiros" },
  { href: "/contactos", label: "Contactos" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#d8c39a]/35 bg-[rgba(255,251,245,0.94)] backdrop-blur-md">
      <div className="h-[1px] w-full bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(198,162,92,0.9)_50%,rgba(0,0,0,0)_100%)]" />

      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-5">
        <Link href="/" className="group flex items-center gap-4">
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
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d8c39a]/45 bg-white/80 text-[#2a211a] lg:hidden"
          aria-label="Abrir menu"
        >
          <span className="text-lg leading-none">☰</span>
        </button>
      </div>
    </header>
  );
}