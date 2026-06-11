import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/app/components/Reveal";
import ImageLightbox from "@/app/components/ImageLightbox";

export const metadata: Metadata = {
  title: "Cozinhas por Medida em Coimbra | Mariana Dinis Remodelações",
  description:
    "Cozinhas por medida em Coimbra com projeto, obra acompanhada, coordenação dos trabalhos, execução cuidada e entrega final.",
  alternates: {
    canonical: "/cozinhas",
  },
  openGraph: {
    title: "Cozinhas por Medida em Coimbra | Mariana Dinis Remodelações",
    description:
      "Cozinhas por medida em Coimbra com projeto, execução da obra, execução da obra e acompanhamento até à entrega final.",
    url: "/cozinhas",
    type: "website",
    images: [
      {
        url: "/images/cozinhas/Cozinha_hero.png",
        width: 1200,
        height: 630,
        alt: "Cozinha por medida premium em Coimbra com obra executada",
      },
    ],
  },
};

type KitchenFeature = {
  title: string;
  description: string;
};

type KitchenProject = {
  title: string;
  subtitle: string;
  image: string;
  alt: string;
};

const kitchenFeatures: KitchenFeature[] = [
  {
    title: "Projeto pensado para obra",
    description:
      "Desenhamos cada cozinha tendo em conta o espaço real, as necessidades da casa e a viabilidade de execução em obra.",
  },
  {
    title: "Coordenação dos trabalhos",
    description:
      "Acompanhamos a intervenção, articulando materiais, produção, execução da obra e trabalhos necessários para garantir coerência entre projeto e execução.",
  },
  {
    title: "Execução até à entrega final",
    description:
      "Não entregamos apenas uma ideia ou desenho. Acompanhamos a execução da cozinha até ao detalhe final, pronta a ser utilizada.",
  },
];

const kitchenProjects: KitchenProject[] = [
  {
    title: "Cozinha Contemporânea",
    subtitle: "Projeto, obra acompanhada e execução cuidada",
    image: "/images/cozinhas/Cozinha_contemporanea.png",
    alt: "Cozinha contemporânea por medida em Coimbra com execução de obra",
  },
  {
    title: "Cozinha Minimalista",
    subtitle: "Intervenção executada com equilíbrio e rigor",
    image: "/images/cozinhas/Cozinha_minimalista.png",
    alt: "Cozinha minimalista premium em Coimbra com obra executada",
  },
  {
    title: "Cozinha Familiar",
    subtitle: "Espaço funcional pensado, executado e pronto a usar",
    image: "/images/cozinhas/Cozinha_familiar.png",
    alt: "Cozinha familiar por medida em Coimbra com execução final",
  },
];

const processSteps = [
  "Levantamento e análise do espaço",
  "Projeto e definição técnica",
  "Planeamento da obra e materiais",
  "Execução, execução da obra e entrega final",
];

export default function CozinhasPage() {
  return (
    <main className="bg-[#f8f6f2] text-neutral-900">
      <section className="mx-auto max-w-[1200px] px-6 pb-12 pt-8 md:px-8 md:pb-16 md:pt-10">
        <div className="overflow-hidden rounded-[28px] border border-[#d9cfbf] bg-[#201a16] shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
          <div className="grid min-h-[540px] md:grid-cols-[1fr_1.05fr]">
            <div className="flex items-center px-8 py-10 md:px-12 lg:px-16">
              <div className="max-w-[520px]">
                <span className="inline-flex rounded-full border border-[#c9a96a]/40 px-4 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-[#d5b57a]">
                  Projeto • Obra • Execução Final em Coimbra
                </span>

                <h1 className="mt-6 font-serif text-4xl leading-[1.05] text-[#f5e8cf] md:text-6xl">
                  Cozinhas por medida
                  <br />
                  com obra executada
                  <br />
                  do início ao fim
                </h1>

                <p className="mt-5 max-w-[470px] text-sm leading-7 text-[#d9d0c5] md:text-base">
                  Projetamos e executamos cozinhas por medida em Coimbra,
                  integradas em remodelações completas ou intervenções
                  específicas. Tratamos do desenho, planeamento, materiais,
                  coordenação dos trabalhos em obra, execução da obra e entrega final,
                  para que tenha um processo acompanhado do início ao fim.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/orcamento"
                    className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#c8a96b] px-6 text-sm font-medium text-[#1f1a17] transition hover:bg-[#d7b779]"
                  >
                    Pedir proposta
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
              <ImageLightbox
                src="/images/cozinhas/Cozinha_hero.png"
                alt="Cozinha premium por medida em Coimbra com projeto e execução de obra"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(32,26,22,0.12)_0%,rgba(32,26,22,0.02)_45%,rgba(32,26,22,0.16)_100%)]" />
            </div>
          </div>
        </div>
      </section>

      <Reveal>
        <section className="mx-auto max-w-[1200px] px-6 py-10 md:px-8 md:py-14">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
            <div className="max-w-[430px]">
              <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#b5965d]">
                Cozinhas completas em Coimbra
              </span>

              <h2 className="mt-4 font-serif text-3xl leading-tight text-[#2c241e] md:text-4xl">
                Não fazemos apenas o projeto. Executamos a obra.
              </h2>

              <p className="mt-4 text-sm leading-7 text-neutral-600 md:text-base">
                Acompanhamos todo o processo da sua cozinha em Coimbra: estudo
                do espaço, desenho técnico, escolha de materiais, produção,
                coordenação dos trabalhos em obra, execução da obra e detalhe final. O
                objetivo é garantir uma solução bonita, funcional e bem
                executada.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {kitchenProjects.map((project, index) => (
                <Reveal key={project.title} delay={index * 120}>
                  <article className="overflow-hidden rounded-[22px] border border-[#e8dece] bg-white shadow-[0_12px_30px_rgba(0,0,0,0.05)]">
                    <div className="relative h-[210px] overflow-hidden">
                      <ImageLightbox
                        src={project.image}
                        alt={project.alt}
                        sizes="(max-width: 640px) 100vw, (max-width: 1200px) 33vw, 260px"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="p-4">
                      <h3 className="font-serif text-xl text-[#2c241e]">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-neutral-600">
                        {project.subtitle}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="border-y border-[#e8dece] bg-[#f2ede4]">
          <div className="mx-auto max-w-[1200px] px-6 py-12 md:px-8 md:py-14">
            <div className="grid gap-6 lg:grid-cols-3">
              {kitchenFeatures.map((feature, index) => (
                <Reveal key={feature.title} delay={index * 120}>
                  <article className="rounded-[24px] border border-[#ded3c2] bg-white p-6 shadow-[0_10px_24px_rgba(0,0,0,0.04)]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d9bf8f] text-[#b5965d]">
                      ✦
                    </div>

                    <h3 className="mt-5 text-lg font-medium text-[#2c241e]">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-neutral-600 md:text-base">
                      {feature.description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="mx-auto max-w-[1200px] px-6 py-12 md:px-8 md:py-16">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal>
              <div className="overflow-hidden rounded-[28px] border border-[#e8dece] bg-white shadow-[0_16px_38px_rgba(0,0,0,0.05)]">
                <div className="relative h-[320px] md:h-full md:min-h-[420px]">
                  <ImageLightbox
                    src="/images/cozinhas/Processo_rigoroso_cozinha.png"
                    alt="Processo rigoroso para cozinha por medida em Coimbra com execução de obra"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="rounded-[28px] border border-[#e8dece] bg-white p-8 shadow-[0_16px_38px_rgba(0,0,0,0.05)]">
                <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#b5965d]">
                  Processo completo
                </span>

                <h2 className="mt-4 font-serif text-3xl leading-tight text-[#2c241e]">
                  Projeto, obra acompanhada e execução final
                </h2>

                <p className="mt-4 text-sm leading-7 text-neutral-600 md:text-base">
                  Acompanhamos cada cozinha em Coimbra com método, proximidade e
                  rigor, garantindo uma ligação coerente entre projeto,
                  materiais, coordenação dos trabalhos, execução da obra e entrega
                  final.
                </p>

                <div className="mt-8 space-y-4">
                  {processSteps.map((step, index) => (
                    <Reveal key={step} delay={index * 100}>
                      <div className="flex items-start gap-4 rounded-[18px] bg-[#f7f3ec] px-5 py-4">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#d9bf8f] text-sm font-medium text-[#b5965d]">
                          {index + 1}
                        </div>
                        <div>
                          <p className="text-base font-medium text-[#2c241e]">
                            {step}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="mx-auto max-w-[1200px] px-6 pb-16 md:px-8 md:pb-24">
          <div className="rounded-[28px] border border-[#d9cfbf] bg-[#231d18] px-8 py-10 text-center shadow-[0_20px_60px_rgba(0,0,0,0.08)] md:px-12 md:py-14">
            <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#d5b57a]">
              Cozinha por medida em Coimbra
            </span>

            <h2 className="mx-auto mt-4 max-w-[760px] font-serif text-3xl leading-tight text-[#f5e8cf] md:text-5xl">
              Vamos projetar e executar a sua cozinha até à entrega final
            </h2>

            <p className="mx-auto mt-4 max-w-[650px] text-sm leading-7 text-[#d8cec2] md:text-base">
              Se procura uma cozinha por medida em Coimbra com projeto, obra
              acompanhada e execução cuidada, fale connosco. Tratamos de todo o
              processo, desde a primeira ideia até ao resultado final.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/orcamento"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#c8a96b] px-6 text-sm font-medium text-[#1f1a17] transition hover:bg-[#d7b779]"
              >
                Pedir orçamento
              </Link>

              <Link
                href="/"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-[#d5b57a]/50 px-6 text-sm font-medium text-[#f5e8cf] transition hover:bg-white/5"
              >
                Voltar à homepage
              </Link>
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}