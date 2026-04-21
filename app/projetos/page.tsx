import Image from "next/image";
import Link from "next/link";

type ProjectHighlight = {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
  detail: string;
  year: string;
};

const featuredProject: ProjectHighlight = {
  id: "cozinha-alto-padrao",
  title: "Cozinha contemporânea com acabamentos premium",
  category: "Cozinhas",
  image: "/images/projetos/projeto-destaque.jpg",
  alt: "Projeto de cozinha contemporânea com ilha central e acabamentos premium",
  detail: "Pormenor de destaque: ilha central, iluminação embutida e textura natural.",
  year: "2026",
};

const projects: ProjectHighlight[] = [
  {
    id: "roupeiro-elegante",
    title: "Roupeiro integrado com linhas minimalistas",
    category: "Roupeiros",
    image: "/images/projetos/projeto-01.jpg",
    alt: "Roupeiro integrado com acabamento elegante e portas minimalistas",
    detail: "Pormenor de destaque: integração total na parede e ferragens discretas.",
    year: "2026",
  },
  {
    id: "cozinha-madeira-clara",
    title: "Cozinha luminosa com tons quentes",
    category: "Cozinhas",
    image: "/images/projetos/projeto-02.jpg",
    alt: "Cozinha luminosa com madeira clara e bancada elegante",
    detail: "Pormenor de destaque: conjugação de madeira, pedra e luz natural.",
    year: "2025",
  },
  {
    id: "roupeiro-premium",
    title: "Closet com organização premium",
    category: "Roupeiros",
    image: "/images/projetos/projeto-03.jpg",
    alt: "Closet com organização premium e detalhe interior refinado",
    detail: "Pormenor de destaque: compartimentação interior e acabamento sofisticado.",
    year: "2025",
  },
  {
    id: "interior-elegante",
    title: "Ambiente interior com detalhe e textura",
    category: "Interiores",
    image: "/images/projetos/projeto-04.jpg",
    alt: "Espaço interior elegante com detalhe de materiais e texturas",
    detail: "Pormenor de destaque: equilíbrio entre materiais nobres e leveza visual.",
    year: "2024",
  },
];

function ProjectImage({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[linear-gradient(135deg,#ece5db_0%,#c9b49d_45%,#8c705e_100%)]">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.18)_100%)]" />
    </div>
  );
}

export default function ProjetosPage() {
  return (
    <main className="bg-[#f8f6f2] text-neutral-900">
      <section className="mx-auto max-w-[1280px] px-6 pb-12 pt-8 md:px-8 md:pb-16 md:pt-10">
        <div className="overflow-hidden rounded-[28px] border border-[#d9cfbf] bg-[#201a16] shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
          <div className="grid min-h-[620px] lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex items-center px-8 py-10 md:px-12 lg:px-16">
              <div className="max-w-[520px]">
                <span className="inline-flex rounded-full border border-[#c9a96a]/40 px-4 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-[#d5b57a]">
                  Ver projetos
                </span>

                <h1 className="mt-6 font-serif text-4xl leading-[1.05] text-[#f5e8cf] md:text-6xl">
                  Projetos com
                  <br />
                  imagem, detalhe
                  <br />
                  e presença
                </h1>

                <p className="mt-5 max-w-[480px] text-sm leading-7 text-[#d9d0c5] md:text-base">
                  Uma seleção visual de projetos pensados ao detalhe, onde a
                  fotografia assume um papel central para evidenciar materiais,
                  proporções, texturas e pormenores de destaque.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
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
            </div>

            <div className="relative min-h-[360px]">
              <ProjectImage
                src={featuredProject.image}
                alt={featuredProject.alt}
                priority
              />

              <div className="absolute inset-x-6 bottom-6 rounded-[24px] border border-white/15 bg-[rgba(24,19,16,0.72)] p-5 backdrop-blur-md md:inset-x-8 md:bottom-8 md:p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-[#d5b57a]/40 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#d5b57a]">
                    {featuredProject.category}
                  </span>
                  <span className="text-xs uppercase tracking-[0.18em] text-[#d8cec2]">
                    {featuredProject.year}
                  </span>
                </div>

                <h2 className="mt-4 max-w-[720px] font-serif text-2xl leading-tight text-[#f5e8cf] md:text-4xl">
                  {featuredProject.title}
                </h2>

                <p className="mt-3 max-w-[680px] text-sm leading-7 text-[#d8cec2] md:text-base">
                  {featuredProject.detail}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 py-10 md:px-8 md:py-14">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-[24px] border border-[#e8dece] bg-white p-6 shadow-[0_10px_24px_rgba(0,0,0,0.04)]">
            <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#b5965d]">
              Fotografia premium
            </span>
            <h2 className="mt-4 font-serif text-2xl text-[#2c241e]">
              Imagens com protagonismo
            </h2>
            <p className="mt-3 text-sm leading-7 text-neutral-600">
              Esta página foi pensada para valorizar fotografias em grande
              formato, com enquadramentos limpos e foco total na qualidade
              visual.
            </p>
          </div>

          <div className="rounded-[24px] border border-[#e8dece] bg-white p-6 shadow-[0_10px_24px_rgba(0,0,0,0.04)]">
            <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#b5965d]">
              Pormenores
            </span>
            <h2 className="mt-4 font-serif text-2xl text-[#2c241e]">
              Destaques que contam a história
            </h2>
            <p className="mt-3 text-sm leading-7 text-neutral-600">
              Cada projeto mostra também o detalhe que o distingue: materiais,
              união entre peças, iluminação, textura e execução.
            </p>
          </div>

          <div className="rounded-[24px] border border-[#e8dece] bg-white p-6 shadow-[0_10px_24px_rgba(0,0,0,0.04)]">
            <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#b5965d]">
              Estrutura visual
            </span>
            <h2 className="mt-4 font-serif text-2xl text-[#2c241e]">
              Galeria preparada para crescer
            </h2>
            <p className="mt-3 text-sm leading-7 text-neutral-600">
              O layout está pronto para receber mais projetos e fotografias HD,
              mantendo consistência visual e leitura premium.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 py-4 md:px-8 md:py-6">
        <div className="flex items-end justify-between gap-6 border-b border-[#e8dece] pb-6">
          <div>
            <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#b5965d]">
              Galeria de projetos
            </span>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-[#2c241e] md:text-4xl">
              Fotografias amplas com detalhe em destaque
            </h2>
          </div>

          <p className="hidden max-w-[420px] text-sm leading-7 text-neutral-600 lg:block">
            Substitui as imagens de placeholder por fotografias reais em alta
            definição dentro de <span className="font-medium">/public/images/projetos</span>.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 pb-16 pt-8 md:px-8 md:pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-[28px] border border-[#e8dece] bg-white shadow-[0_16px_38px_rgba(0,0,0,0.05)]"
            >
              <div className="relative h-[520px] overflow-hidden">
                <ProjectImage src={project.image} alt={project.alt} />

                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.42)_100%)] opacity-90 transition duration-300 group-hover:opacity-100" />

                <div className="absolute inset-x-5 top-5 flex items-center justify-between gap-3 md:inset-x-6 md:top-6">
                  <span className="rounded-full border border-white/20 bg-[rgba(24,19,16,0.45)] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md">
                    {project.category}
                  </span>
                  <span className="rounded-full border border-white/20 bg-[rgba(24,19,16,0.45)] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md">
                    {project.year}
                  </span>
                </div>

                <div className="absolute inset-x-5 bottom-5 rounded-[22px] border border-white/15 bg-[rgba(24,19,16,0.68)] p-5 backdrop-blur-md md:inset-x-6 md:bottom-6 md:p-6">
                  <div className="flex items-center gap-3">
                    <div className="h-2.5 w-2.5 rounded-full bg-[#d5b57a]" />
                    <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#d5b57a]">
                      Pormenor de destaque
                    </span>
                  </div>

                  <h3 className="mt-4 font-serif text-2xl leading-tight text-[#f5e8cf]">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#d8cec2]">
                    {project.detail}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 px-6 py-5">
                <p className="text-sm leading-7 text-neutral-600">
                  Projeto {index + 1}
                </p>

                <Link
                  href="/orcamento"
                  className="inline-flex min-h-[42px] items-center justify-center rounded-full border border-[#d9cfbf] px-5 text-sm font-medium text-[#2c241e] transition hover:border-[#c8a96b] hover:text-[#b5965d]"
                >
                  Pedir projeto semelhante
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 pb-16 md:px-8 md:pb-24">
        <div className="rounded-[28px] border border-[#d9cfbf] bg-[#231d18] px-8 py-10 text-center shadow-[0_20px_60px_rgba(0,0,0,0.08)] md:px-12 md:py-14">
          <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#d5b57a]">
            O seu projeto
          </span>

          <h2 className="mx-auto mt-4 max-w-[820px] font-serif text-3xl leading-tight text-[#f5e8cf] md:text-5xl">
            Vamos transformar o seu espaço num projeto com identidade própria
          </h2>

          <p className="mx-auto mt-4 max-w-[680px] text-sm leading-7 text-[#d8cec2] md:text-base">
            Se procura uma solução personalizada, elegante e pensada ao detalhe,
            estamos disponíveis para desenvolver um projeto à medida.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/orcamento"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#c8a96b] px-6 text-sm font-medium text-[#1f1a17] transition hover:bg-[#d7b779]"
            >
              Pedir orçamento
            </Link>

            <Link
              href="/cozinhas"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-[#d5b57a]/50 px-6 text-sm font-medium text-[#f5e8cf] transition hover:bg-white/5"
            >
              Ver cozinhas
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}