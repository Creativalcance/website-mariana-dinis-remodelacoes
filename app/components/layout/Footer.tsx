import Link from "next/link";

const navigation = [
  { href: "/", label: "Homepage" },
  { href: "/cozinhas", label: "Cozinhas" },
  { href: "/roupeiros", label: "Roupeiros" },
  { href: "/contactos", label: "Contactos" },
];

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-[#d8c39a]/25 bg-[#17120f] text-white">
      <div className="h-[1px] w-full bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(198,162,92,0.9)_50%,rgba(0,0,0,0)_100%)]" />

      <div className="mx-auto max-w-[1280px] px-6 py-14">
        <div className="mb-12 overflow-hidden rounded-[32px] border border-[#cba96a]/28 bg-[radial-gradient(circle_at_top,rgba(209,171,95,0.18),rgba(23,18,15,0.96)_38%),linear-gradient(180deg,#231b16_0%,#17120f_100%)] shadow-[0_24px_70px_rgba(0,0,0,0.3)]">
          <div className="grid gap-10 px-8 py-10 md:px-12 md:py-12 lg:grid-cols-[1.1fr_auto] lg:items-center">
            <div>
              <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#d8bc82]">
                Projetos
              </span>

              <h2 className="mt-4 max-w-[720px] font-serif text-3xl leading-tight text-[#f6ead1] md:text-4xl">
                Explore projetos com pormenores de destaque, materiais nobres e
                acabamento premium
              </h2>

              <p className="mt-4 max-w-[620px] text-sm leading-7 text-[#d7cec2] md:text-base">
                Uma seleção visual pensada para valorizar a qualidade da
                execução, a elegância dos materiais e o detalhe que distingue
                cada espaço.
              </p>
            </div>

            <div className="flex items-center">
              <Link
                href="/projetos"
                className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-[#cfb279] bg-[linear-gradient(180deg,#d8bc82_0%,#b88d3b_100%)] px-7 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#1f1813] shadow-[0_16px_36px_rgba(184,141,59,0.2)] transition duration-300 hover:translate-y-[-1px] hover:shadow-[0_20px_40px_rgba(184,141,59,0.28)]"
              >
                Ver projetos
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-10 border-b border-[#cba96a]/18 pb-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d8c39a]/35 bg-[linear-gradient(180deg,#3a2d22_0%,#1f1813_100%)]">
                <span className="font-serif text-lg text-[#e4c98f]">MD</span>
              </div>

              <div>
                <h3 className="font-serif text-2xl tracking-[0.06em] text-[#f6ead1]">
                  Mariana Dinis
                </h3>
                <p className="mt-1 text-[10px] uppercase tracking-[0.34em] text-[#c8a76b]">
                  Remodelações
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-[420px] text-sm leading-7 text-[#cfc5b8]">
              Projetos de remodelação e interiores com uma abordagem elegante,
              cuidada e intemporal, pensados para valorizar cada detalhe do
              espaço.
            </p>

            {/* SOCIAL ICONS */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61578744541063"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#cba96a]/25 bg-white/5 text-[#d8bc82] transition hover:border-[#cba96a] hover:bg-white/10"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.5-3.88 3.78-3.88 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/marianadinis.remodelacoes/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#cba96a]/25 bg-white/5 text-[#d8bc82] transition hover:border-[#cba96a] hover:bg-white/10"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5C18.43 4 20 5.57 20 7.75v8.5c0 2.18-1.57 3.75-3.75 3.75h-8.5C5.57 20 4 18.43 4 16.25v-8.5C4 5.57 5.57 4 7.75 4zm8.75 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d8bc82]">
              Navegação
            </h4>

            <ul className="mt-5 space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#d7cec2] transition-colors hover:text-[#d8bc82]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d8bc82]">
              Contactos
            </h4>

            <ul className="mt-5 space-y-3 text-sm text-[#d7cec2]">
              <li>
                <a
                  href="tel:+351912345678"
                  className="transition-colors hover:text-[#d8bc82]"
                >
                  +351 912 345 678
                </a>
              </li>
              <li>
                <a
                  href="mailto:geral@marianadinis.pt"
                  className="transition-colors hover:text-[#d8bc82]"
                >
                  geral@marianadinis.pt
                </a>
              </li>
              <li>Portugal</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-xs text-[#9e9386] md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Mariana Dinis. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-4">
            <p className="uppercase tracking-[0.22em] text-[#b59359]">
              Elegância • Detalhe • Sofisticação
            </p>

            <a
              href="https://www.creativalcance.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9e9386] transition-colors hover:text-[#d8bc82]"
            >
              Made by <span className="text-[#d8bc82]">CreativAlcance</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}