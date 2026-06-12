"use client";

import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import Reveal from "@/app/components/Reveal";

type ContactItem = {
  label: string;
  value: string;
  href?: string;
};

type ContactFormState = {
  nome: string;
  email: string;
  telefone: string;
  assunto: string;
  mensagem: string;
};

type ProcessStep = {
  title: string;
  description: string;
};

const initialFormState: ContactFormState = {
  nome: "",
  email: "",
  telefone: "",
  assunto: "",
  mensagem: "",
};

const contactItems: ContactItem[] = [
  {
    label: "Telefone",
    value: "+351 963 582 819",
    href: "tel:+963582819",
  },
  {
    label: "Email",
    value: "mariana.dinis@loja.aquiatuaremodelacao.pt",
    href: "mailto:mariana.dinis@loja.aquiatuaremodelacao.pt",
  },
  {
    label: "Localização",
    value:
      "Rua dos Combatentes da Grande Guerra nº 14 loja 5, Coimbra, Portugal, 3030-181",
  },
];

const processSteps: ProcessStep[] = [
  {
    title: "Projeto",
    description:
      "Compreendemos o espaço, o objetivo da remodelação e a solução estética e funcional pretendida.",
  },
  {
    title: "Planeamento",
    description:
      "Definimos materiais, prioridades, prazos e a organização necessária para avançar para obra.",
  },
  {
    title: "Execução da obra",
    description:
      "Coordenamos e acompanhamos os trabalhos em obra para garantir rigor, qualidade e coerência.",
  },
  {
    title: "Entrega final",
    description:
      "Finalizamos a intervenção com atenção ao detalhe, deixando o espaço pronto a ser vivido.",
  },
];

const workingSteps = [
  "Partilhe connosco a sua ideia, a localização em Coimbra ou região e o tipo de intervenção que pretende realizar.",
  "Analisamos o espaço, definimos a melhor abordagem e alinhamos projeto, materiais, prazos e execução dos trabalhos.",
  "Apresentamos uma proposta personalizada para acompanhar a remodelação desde o projeto até à obra e entrega final.",
];

export default function ContactosPage() {
  const [form, setForm] = useState<ContactFormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setIsSuccess(false);
    setErrorMessage("");

    try {
      const response = await fetch("/api/contactos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(
          data?.error || "Não foi possível enviar o pedido de contacto."
        );
      }

      setForm(initialFormState);
      setIsSuccess(true);
    } catch (error) {
      console.error("Erro ao enviar contacto:", error);
      setErrorMessage("Não foi possível enviar o pedido. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="bg-[#f8f6f2] text-neutral-900">
      <section className="mx-auto max-w-[1200px] px-6 pb-12 pt-8 md:px-8 md:pb-16 md:pt-10">
        <div className="overflow-hidden rounded-[28px] border border-[#d9cfbf] bg-[#201a16] shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
          <div className="grid min-h-[500px] md:grid-cols-[1fr_1.05fr]">
            <div className="flex items-center px-8 py-10 md:px-12 lg:px-16">
              <div className="max-w-[520px]">
                <span className="inline-flex rounded-full border border-[#c9a96a]/40 px-4 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-[#d5b57a]">
                  Projeto • Obra • Entrega final
                </span>

                <h1 className="mt-6 font-serif text-4xl leading-[1.05] text-[#f5e8cf] md:text-6xl">
                  Fale connosco
                  <br />
                  sobre a sua
                  <br />
                  remodelação
                </h1>

                <p className="mt-5 max-w-[470px] text-sm leading-7 text-[#d9d0c5] md:text-base">
                  Desenvolvemos e acompanhamos remodelações em Coimbra desde o
                  projeto inicial até à execução da obra e entrega final. Se
                  procura uma solução completa para transformar o seu espaço,
                  fale connosco.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="mailto:mariana.dinis@loja.aquiatuaremodelacao.pt"
                    className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#c8a96b] px-6 text-sm font-medium text-[#1f1a17] transition hover:bg-[#d7b779]"
                  >
                    Enviar email
                  </Link>

                  <Link
                    href="tel:+351963582819"
                    className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-[#d5b57a]/50 px-6 text-sm font-medium text-[#f5e8cf] transition hover:bg-white/5"
                  >
                    Ligar agora
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative min-h-[320px] overflow-hidden">
              <Image
                src="/images/contactos/Roupeiro_carvalho.png"
                alt="Roupeiro por medida em carvalho com iluminação integrada em Coimbra"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(32,26,22,0.12)_0%,rgba(32,26,22,0.02)_45%,rgba(32,26,22,0.18)_100%)]" />

              <div className="absolute bottom-6 left-6 right-6 rounded-[22px] border border-white/15 bg-[rgba(24,19,16,0.72)] p-5 backdrop-blur-md md:left-8 md:right-8">
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#d5b57a]">
                  Solução completa
                </p>
                <p className="mt-2 text-sm leading-7 text-[#f5e8cf]">
                  Projeto, coordenação da obra, execução dos trabalhos e entrega
                  final num processo acompanhado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Reveal>
        <section className="mx-auto max-w-[1200px] px-6 pb-12 md:px-8 md:pb-16">
          <div className="rounded-[28px] border border-[#d9cfbf] bg-[#231d18] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.08)] md:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
              <div>
                <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#d5b57a]">
                  Do projeto à obra
                </span>

                <h2 className="mt-4 font-serif text-3xl leading-tight text-[#f5e8cf] md:text-4xl">
                  Uma solução completa para remodelar sem complicações
                </h2>

                <p className="mt-4 text-sm leading-7 text-[#d8cec2] md:text-base">
                  Não tratamos apenas do conceito. Acompanhamos o processo de
                  remodelação, coordenamos os trabalhos e asseguramos que o
                  resultado final corresponde ao projeto definido.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {processSteps.map((step, index) => (
                  <Reveal key={step.title} delay={index * 100}>
                    <article className="rounded-[22px] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d5b57a]/50 text-sm font-medium text-[#d5b57a]">
                        {index + 1}
                      </div>

                      <h3 className="mt-4 text-lg font-medium text-[#f5e8cf]">
                        {step.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-[#d8cec2]">
                        {step.description}
                      </p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="mx-auto max-w-[1200px] px-6 py-12 md:px-8 md:py-16">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal>
              <div className="rounded-[28px] border border-[#e8dece] bg-white p-8 shadow-[0_16px_38px_rgba(0,0,0,0.05)]">
                <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#b5965d]">
                  Informação de contacto
                </span>

                <h2 className="mt-4 font-serif text-3xl leading-tight text-[#2c241e]">
                  Fale connosco sobre o projeto e a execução da obra
                </h2>

                <div className="mt-8 space-y-4">
                  {contactItems.map((item, index) => (
                    <Reveal key={item.label} delay={index * 100}>
                      <div className="rounded-[20px] border border-[#efe7db] bg-[#f7f3ec] px-5 py-5">
                        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#b5965d]">
                          {item.label}
                        </p>

                        {item.href ? (
                          <Link
                            href={item.href}
                            className="mt-2 block text-base font-medium text-[#2c241e] transition hover:text-[#b5965d]"
                          >
                            {item.value}
                          </Link>
                        ) : (
                          <p className="mt-2 text-base font-medium text-[#2c241e]">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="rounded-[28px] border border-[#e8dece] bg-white p-8 shadow-[0_16px_38px_rgba(0,0,0,0.05)]">
                <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#b5965d]">
                  Pedido de contacto
                </span>

                <h2 className="mt-4 font-serif text-3xl leading-tight text-[#2c241e]">
                  Envie-nos uma mensagem
                </h2>

                <p className="mt-4 text-sm leading-7 text-neutral-600 md:text-base">
                  Preencha os dados abaixo e entraremos em contacto consigo para
                  falar sobre o seu projeto de remodelação, cozinha por medida,
                  roupeiro por medida ou interiores em Coimbra, incluindo a
                  execução dos trabalhos e acompanhamento até à entrega final.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="nome"
                        className="mb-2 block text-sm font-medium text-[#2c241e]"
                      >
                        Nome
                      </label>
                      <input
                        id="nome"
                        name="nome"
                        type="text"
                        value={form.nome}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="min-h-[52px] w-full rounded-[16px] border border-[#ded3c2] bg-[#fdfcf9] px-4 text-sm text-neutral-900 outline-none transition focus:border-[#c8a96b] disabled:cursor-not-allowed disabled:opacity-70"
                        placeholder="O seu nome"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="telefone"
                        className="mb-2 block text-sm font-medium text-[#2c241e]"
                      >
                        Telefone
                      </label>
                      <input
                        id="telefone"
                        name="telefone"
                        type="tel"
                        value={form.telefone}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="min-h-[52px] w-full rounded-[16px] border border-[#ded3c2] bg-[#fdfcf9] px-4 text-sm text-neutral-900 outline-none transition focus:border-[#c8a96b] disabled:cursor-not-allowed disabled:opacity-70"
                        placeholder="O seu contacto"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-[#2c241e]"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="min-h-[52px] w-full rounded-[16px] border border-[#ded3c2] bg-[#fdfcf9] px-4 text-sm text-neutral-900 outline-none transition focus:border-[#c8a96b] disabled:cursor-not-allowed disabled:opacity-70"
                      placeholder="O seu email"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="assunto"
                      className="mb-2 block text-sm font-medium text-[#2c241e]"
                    >
                      Assunto
                    </label>
                    <input
                      id="assunto"
                      name="assunto"
                      type="text"
                      value={form.assunto}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="min-h-[52px] w-full rounded-[16px] border border-[#ded3c2] bg-[#fdfcf9] px-4 text-sm text-neutral-900 outline-none transition focus:border-[#c8a96b] disabled:cursor-not-allowed disabled:opacity-70"
                      placeholder="Ex.: Remodelação completa em Coimbra"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="mensagem"
                      className="mb-2 block text-sm font-medium text-[#2c241e]"
                    >
                      Mensagem
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      rows={6}
                      value={form.mensagem}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full rounded-[16px] border border-[#ded3c2] bg-[#fdfcf9] px-4 py-4 text-sm text-neutral-900 outline-none transition focus:border-[#c8a96b] disabled:cursor-not-allowed disabled:opacity-70"
                      placeholder="Descreva brevemente o espaço, a localização, o tipo de remodelação pretendida e se procura acompanhamento desde o projeto até à execução da obra"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-[#c8a96b] px-6 text-sm font-medium text-[#1f1a17] transition hover:bg-[#d7b779] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? "A enviar..." : "Enviar pedido"}
                  </button>

                  <div aria-live="polite">
                    {isSuccess ? (
                      <p className="text-sm font-medium text-[#8b6b32]">
                        Pedido enviado com sucesso.
                      </p>
                    ) : null}

                    {errorMessage ? (
                      <p className="text-sm font-medium text-red-700">
                        {errorMessage}
                      </p>
                    ) : null}
                  </div>
                </form>
              </div>
            </Reveal>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="border-y border-[#e8dece] bg-[#f2ede4]">
          <div className="mx-auto max-w-[1200px] px-6 py-12 md:px-8 md:py-16">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <Reveal>
                <div>
                  <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#b5965d]">
                    Como trabalhamos
                  </span>

                  <h2 className="mt-4 font-serif text-3xl leading-tight text-[#2c241e] md:text-4xl">
                    Um processo próximo, claro e orientado à execução
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-neutral-600 md:text-base">
                    Acreditamos numa relação de proximidade com cada cliente em
                    Coimbra, desde o primeiro contacto e definição do projeto até
                    à coordenação dos trabalhos em obra e entrega final.
                  </p>
                </div>
              </Reveal>

              <div className="space-y-4">
                {workingSteps.map((step, index) => (
                  <Reveal key={step} delay={index * 120}>
                    <div className="flex items-start gap-4 rounded-[20px] border border-[#ded3c2] bg-white px-5 py-5 shadow-[0_10px_24px_rgba(0,0,0,0.04)]">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d9bf8f] text-sm font-medium text-[#b5965d]">
                        {index + 1}
                      </div>

                      <p className="text-sm leading-7 text-neutral-700 md:text-base">
                        {step}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}