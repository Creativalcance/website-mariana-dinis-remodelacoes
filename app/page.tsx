import Image from "next/image";
import Link from "next/link";

type FeatureItem = {
  title: string;
  description: string;
};

type ProjectCard = {
  title: string;
  category: string;
  image: string;
  alt: string;
};

const features: FeatureItem[] = [
  {
    title: "Soluções Personalizadas",
    description:
      "Projetos pensados ao detalhe para responder às necessidades funcionais e estéticas de cada espaço.",
  },
  {
    title: "Acabamentos Premium",
    description:
      "Materiais, proporções e composições cuidadosamente selecionados para um resultado elegante e duradouro.",
  },
  {
    title: "Acompanhamento Completo",
    description:
      "Do conceito inicial à execução final, com foco em rigor, organização e tranquilidade para o cliente.",
  },
];

const projects: ProjectCard[] = [
  {
    title: "Cozinhas por Medida",
    category: "Design funcional",
    image: "/images/home/Cozinhas_premium_modernas_2.png",
    alt: "Cozinha premium moderna por medida",
  },
  {
    title: "Roupeiros Elegantes",
    category: "Arrumação integrada",
    image: "/images/home/Roupeiros_quentes_premium_2.png",
    alt: "Roupeiro elegante com acabamento premium",
  },
  {
    title: "Interiores Harmoniosos",
    category: "Remodelação premium",
    image: "/images/home/Closet_elegante_paleta_azul_noite.png",
    alt: "Closet elegante com paleta azul noite",
  },
];

const serviceHighlights = [
  "Design personalizado",
  "Ambientes funcionais",
  "Planeamento cuidado",
];

export default function HomePage() {
  return (
    <main className="bg-[#f8f6f2] text-neutral-900">
      <section className="mx-auto max-w-[1200px] px-6 pb-12 pt-8 md:px-8 md:pb-16 md:pt-10">
        <div className="overflow-hidden rounded-[28px] border border-[#d9cfbf] bg-[#1f1a17] shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
          <div className="grid min-h-[560px] md:grid-cols-[1.05fr_1fr]">
            <div className="flex items-center px-8 py-10 md:px-12 lg:px-16">
              <div className="max-w-[520px]">
                <span className="inline-flex rounded-full border border-[#c9a96a]/40 px-4 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-[#d5b57a]">
                  Remodelações • Interiores • Design
                </span>

                <h1 className="mt-6 font-serif text-4xl leading-[1.05] text-[#f5e8cf] md:text-6xl">
                  Transforme
                  <br />
                  a sua casa
                </h1>

                <p className="mt-5 max-w-[470px] text-sm leading-7 text-[#d9d0c5] md:text-base">
                  Criamos ambientes sofisticados, funcionais e intemporais,
                  pensados para valorizar a sua casa e elevar a experiência de
                  viver cada espaço.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/orcamento"
                    className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#c8a96b] px-6 text-sm font-medium text-[#1f1a17] transition hover:bg-[#d7b779]"
                  >
                    Pedir orçamento
                  </Link>

                  <Link
                    href="/projetos"
                    className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-[#d5b57a]/50 px-6 text-sm font-medium text-[#f5e8cf] transition hover:bg-white/5"
                  >
                    Ver projetos
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative min-h-[320px] overflow-hidden">
              <Image
                src="/images/home/Cozinhas_premium_modernas_4.png"
                alt="Cozinha premium moderna com ilha central"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(31,26,23,0.28)_0%,rgba(31,26,23,0.05)_45%,rgba(31,26,23,0.16)_100%)]" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-10 md:px-8 md:py-14">
        <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-start">
          <div className="max-w-[420px]">
            <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#b5965d]">
              Sobre nós
            </span>

            <h2 className="mt-4 font-serif text-3xl leading-tight text-[#2c241e] md:text-4xl">
              Design personalizado para interiores com identidade
            </h2>

            <p className="mt-4 text-sm leading-7 text-neutral-600 md:text-base">
              Trabalhamos cada projeto com sensibilidade estética, atenção ao
              detalhe e uma visão clara de funcionalidade, para criar espaços
              equilibrados, acolhedores e sofisticados.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="overflow-hidden rounded-[22px] border border-[#e8dece] bg-white shadow-[0_12px_30px_rgba(0,0,0,0.05)]"
              >
                <div className="relative h-[190px] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1200px) 33vw, 260px"
                    className="object-cover transition duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#b5965d]">
                    {project.category}
                  </p>
                  <h3 className="mt-2 font-serif text-xl text-[#2c241e]">
                    {project.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#e8dece] bg-[#f2ede4]">
        <div className="mx-auto grid max-w-[1200px] gap-8 px-6 py-10 md:grid-cols-[1fr_auto] md:items-center md:px-8">
          <div>
            <h2 className="font-serif text-2xl text-[#2c241e] md:text-3xl">
              Organização inteligente, estética intemporal
            </h2>
            <p className="mt-3 max-w-[720px] text-sm leading-7 text-neutral-600 md:text-base">
              Soluções desenhadas para elevar a funcionalidade do dia a dia sem
              abdicar da elegância, da leveza visual e da coerência do conjunto.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {serviceHighlights.map((item) => (
              <div
                key={item}
                className="min-w-[180px] rounded-[20px] border border-[#ded3c2] bg-white px-5 py-5 text-center shadow-[0_10px_24px_rgba(0,0,0,0.04)]"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#d9bf8f] text-[#b5965d]">
                  ✦
                </div>
                <p className="mt-4 text-sm font-medium text-[#2c241e]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-12 md:px-8 md:py-16">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[28px] border border-[#e8dece] bg-white p-8 shadow-[0_16px_38px_rgba(0,0,0,0.05)]">
            <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#b5965d]">
              O nosso compromisso
            </span>

            <h2 className="mt-4 font-serif text-3xl leading-tight text-[#2c241e]">
              Projetos premium com equilíbrio entre beleza e função
            </h2>

            <div className="mt-8 space-y-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="border-b border-[#efe7db] pb-6 last:border-b-0 last:pb-0"
                >
                  <h3 className="text-lg font-medium text-[#2c241e]">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-neutral-600 md:text-base">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-[#e8dece] bg-white shadow-[0_16px_38px_rgba(0,0,0,0.05)]">
            <div className="grid h-full md:grid-rows-[1.2fr_0.8fr]">
              <div className="relative min-h-[280px]">
                <Image
                  src="/images/home/Processo_rigoroso_cozinha.png"
                  alt="Processo rigoroso de remodelação de cozinha"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="grid gap-4 p-6 sm:grid-cols-2">
                <div className="rounded-[20px] bg-[#f7f3ec] p-5">
                  <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#b5965d]">
                    Áreas
                  </p>
                  <h3 className="mt-2 font-serif text-2xl text-[#2c241e]">
                    Cozinhas
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-neutral-600">
                    Espaços desenhados para unir requinte, circulação e
                    utilização prática.
                  </p>
                </div>

                <div className="rounded-[20px] bg-[#f7f3ec] p-5">
                  <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#b5965d]">
                    Áreas
                  </p>
                  <h3 className="mt-2 font-serif text-2xl text-[#2c241e]">
                    Roupeiros
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-neutral-600">
                    Soluções de arrumação que elevam a organização e valorizam o
                    espaço.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pb-16 md:px-8 md:pb-24">
        <div className="rounded-[28px] border border-[#d9cfbf] bg-[#231d18] px-8 py-10 text-center shadow-[0_20px_60px_rgba(0,0,0,0.08)] md:px-12 md:py-14">
          <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#d5b57a]">
            Vamos conversar
          </span>

          <h2 className="mx-auto mt-4 max-w-[760px] font-serif text-3xl leading-tight text-[#f5e8cf] md:text-5xl">
            Dê o primeiro passo para transformar o seu espaço
          </h2>

          <p className="mx-auto mt-4 max-w-[640px] text-sm leading-7 text-[#d8cec2] md:text-base">
            Partilhe connosco a sua visão. Criamos soluções de remodelação e
            design de interiores com um olhar premium, funcional e totalmente
            personalizado.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/orcamento"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#c8a96b] px-6 text-sm font-medium text-[#1f1a17] transition hover:bg-[#d7b779]"
            >
              Pedir orçamento
            </Link>

            <Link
              href="/projetos"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-[#d5b57a]/50 px-6 text-sm font-medium text-[#f5e8cf] transition hover:bg-white/5"
            >
              Explorar projetos
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}