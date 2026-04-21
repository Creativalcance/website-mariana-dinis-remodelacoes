import Link from "next/link";

type WardrobeFeature = {
  title: string;
  description: string;
};

type WardrobeProject = {
  title: string;
  subtitle: string;
};

const wardrobeFeatures: WardrobeFeature[] = [
  {
    title: "Arrumação à medida",
    description:
      "Cada roupeiro é desenhado em função do espaço disponível, da rotina diária e das necessidades reais de organização de cada cliente.",
  },
  {
    title: "Elegância e coerência visual",
    description:
      "Criamos soluções com uma linguagem estética cuidada, integradas na arquitetura do espaço e alinhadas com o ambiente envolvente.",
  },
  {
    title: "Funcionalidade com detalhe",
    description:
      "Divisões interiores, acessos, profundidades e acabamentos são pensados para oferecer conforto, fluidez e máxima valorização do espaço.",
  },
];

const wardrobeProjects: WardrobeProject[] = [
  {
    title: "Roupeiro Integrado",
    subtitle: "Solução discreta e perfeitamente enquadrada",
  },
  {
    title: "Closet Elegante",
    subtitle: "Organização premium com presença sofisticada",
  },
  {
    title: "Arrumação Minimalista",
    subtitle: "Leveza visual com máxima funcionalidade",
  },
];

const processSteps = [
  "Análise do espaço e necessidades",
  "Desenho e organização interior",
  "Escolha de materiais e acabamentos",
  "Produção, montagem e detalhe final",
];

export default function RoupeirosPage() {
  return (
    <main className="bg-[#f8f6f2] text-neutral-900">
      <section className="mx-auto max-w-[1200px] px-6 pb-12 pt-8 md:px-8 md:pb-16 md:pt-10">
        <div className="overflow-hidden rounded-[28px] border border-[#d9cfbf] bg-[#201a16] shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
          <div className="grid min-h-[540px] md:grid-cols-[1fr_1.05fr]">
            <div className="flex items-center px-8 py-10 md:px-12 lg:px-16">
              <div className="max-w-[520px]">
                <span className="inline-flex rounded-full border border-[#c9a96a]/40 px-4 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-[#d5b57a]">
                  Roupeiros por medida
                </span>

                <h1 className="mt-6 font-serif text-4xl leading-[1.05] text-[#f5e8cf] md:text-6xl">
                  Roupeiros com
                  <br />
                  organização e elegância
                </h1>

                <p className="mt-5 max-w-[470px] text-sm leading-7 text-[#d9d0c5] md:text-base">
                  Desenvolvemos roupeiros pensados ao detalhe, com equilíbrio
                  entre estética, funcionalidade e integração no espaço, para
                  uma arrumação sofisticada e intemporal.
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

            <div className="relative min-h-[320px] bg-[linear-gradient(135deg,#6a5a4b_0%,#40342d_42%,#d8cdc1_100%)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_34%),linear-gradient(180deg,rgba(0,0,0,0.06),rgba(0,0,0,0.18))]" />
              <div className="absolute inset-x-8 bottom-8 top-8 rounded-[24px] border border-white/15 bg-white/8 backdrop-blur-[1px]" />
              <div className="absolute left-10 top-16 h-[260px] w-[18%] rounded-[18px] bg-[#2c2521]/85 shadow-2xl" />
              <div className="absolute left-[24%] top-16 h-[260px] w-[18%] rounded-[18px] bg-[#3a2f29]/85 shadow-2xl" />
              <div className="absolute left-[44%] top-16 h-[260px] w-[18%] rounded-[18px] bg-[#5e4739]/85 shadow-2xl" />
              <div className="absolute left-[64%] top-16 h-[260px] w-[18%] rounded-[18px] bg-[#d2c5b7]/85 shadow-2xl" />
              <div className="absolute inset-x-[8%] top-[28%] h-[8px] rounded-full bg-[#d6c4a6]/60" />
              <div className="absolute bottom-10 right-10 h-10 w-10 rounded-full bg-[#d3b47a]/70 blur-[1px]" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-10 md:px-8 md:py-14">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div className="max-w-[430px]">
            <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#b5965d]">
              Organização premium
            </span>

            <h2 className="mt-4 font-serif text-3xl leading-tight text-[#2c241e] md:text-4xl">
              Soluções de arrumação desenhadas para valorizar cada espaço
            </h2>

            <p className="mt-4 text-sm leading-7 text-neutral-600 md:text-base">
              Um roupeiro não deve apenas guardar. Deve organizar, simplificar e
              integrar-se com elegância no ambiente. Por isso, criamos soluções
              à medida com foco em harmonia visual, capacidade e conforto de
              utilização.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {wardrobeProjects.map((project) => (
              <article
                key={project.title}
                className="overflow-hidden rounded-[22px] border border-[#e8dece] bg-white shadow-[0_12px_30px_rgba(0,0,0,0.05)]"
              >
                <div className="h-[210px] bg-[linear-gradient(135deg,#efe7de_0%,#ccbca6_45%,#8c715d_100%)]" />
                <div className="p-4">
                  <h3 className="font-serif text-xl text-[#2c241e]">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">
                    {project.subtitle}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#e8dece] bg-[#f2ede4]">
        <div className="mx-auto max-w-[1200px] px-6 py-12 md:px-8 md:py-14">
          <div className="grid gap-6 lg:grid-cols-3">
            {wardrobeFeatures.map((feature) => (
              <article
                key={feature.title}
                className="rounded-[24px] border border-[#ded3c2] bg-white p-6 shadow-[0_10px_24px_rgba(0,0,0,0.04)]"
              >
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
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-12 md:px-8 md:py-16">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="overflow-hidden rounded-[28px] border border-[#e8dece] bg-white shadow-[0_16px_38px_rgba(0,0,0,0.05)]">
            <div className="min-h-[320px] bg-[linear-gradient(135deg,#e9e1d6_0%,#c8b197_42%,#6e5444_100%)]" />
          </div>

          <div className="rounded-[28px] border border-[#e8dece] bg-white p-8 shadow-[0_16px_38px_rgba(0,0,0,0.05)]">
            <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#b5965d]">
              Processo
            </span>

            <h2 className="mt-4 font-serif text-3xl leading-tight text-[#2c241e]">
              Planeamento rigoroso para uma arrumação verdadeiramente funcional
            </h2>

            <p className="mt-4 text-sm leading-7 text-neutral-600 md:text-base">
              Cada projeto de roupeiro é desenvolvido com atenção ao uso diário,
              à ergonomia e ao detalhe construtivo, garantindo uma solução
              elegante, prática e duradoura.
            </p>

            <div className="mt-8 space-y-4">
              {processSteps.map((step, index) => (
                <div
                  key={step}
                  className="flex items-start gap-4 rounded-[18px] bg-[#f7f3ec] px-5 py-4"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#d9bf8f] text-sm font-medium text-[#b5965d]">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-base font-medium text-[#2c241e]">
                      {step}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pb-16 md:px-8 md:pb-24">
        <div className="rounded-[28px] border border-[#d9cfbf] bg-[#231d18] px-8 py-10 text-center shadow-[0_20px_60px_rgba(0,0,0,0.08)] md:px-12 md:py-14">
          <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#d5b57a]">
            Projeto de roupeiro
          </span>

          <h2 className="mx-auto mt-4 max-w-[760px] font-serif text-3xl leading-tight text-[#f5e8cf] md:text-5xl">
            Vamos desenhar uma solução de arrumação à medida do seu espaço
          </h2>

          <p className="mx-auto mt-4 max-w-[650px] text-sm leading-7 text-[#d8cec2] md:text-base">
            Partilhe connosco o que procura. Criamos roupeiros por medida com um
            olhar premium, funcional e totalmente personalizado.
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
    </main>
  );
}