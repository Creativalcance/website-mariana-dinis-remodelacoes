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
    value: "+351 963 582 631",
    href: "tel:+351963582631",
  },
  {
    label: "Email",
    value: "mariana.dinis@loja.aquiatuaremodelacao.pt",
    href: "mailto:mariana.dinis@loja.aquiatuaremodelacao.pt",
  },
  {
    label: "Localização",
    value:
      "Rua dos Combatentes da Grande Guerra nº l4 loja 5, Coimbra, Portugal, 3030-181",
  },
];

const workingSteps = [
  "Partilha connosco a sua ideia e as necessidades do espaço.",
  "Analisamos o projeto e definimos a melhor abordagem.",
  "Apresentamos uma proposta personalizada, alinhada com o objetivo pretendido.",
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

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Não foi possível enviar o pedido.");
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
                  Contactos
                </span>

                <h1 className="mt-6 font-serif text-4xl leading-[1.05] text-[#f5e8cf] md:text-6xl">
                  Vamos falar
                  <br />
                  sobre o seu projeto
                </h1>

                <p className="mt-5 max-w-[470px] text-sm leading-7 text-[#d9d0c5] md:text-base">
                  Estamos disponíveis para ouvir a sua ideia, compreender as
                  necessidades do espaço e desenvolver uma solução elegante,
                  funcional e pensada ao detalhe.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="mailto:mariana.dinis@loja.aquiatuaremodelacao.pt"
                    className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#c8a96b] px-6 text-sm font-medium text-[#1f1a17] transition hover:bg-[#d7b779]"
                  >
                    Enviar email
                  </Link>

                  <Link
                    href="tel:+351963582631"
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
                alt="Roupeiro em carvalho com iluminação integrada"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(32,26,22,0.12)_0%,rgba(32,26,22,0.02)_45%,rgba(32,26,22,0.18)_100%)]" />
            </div>
          </div>
        </div>
      </section>

      <Reveal>
        <section className="mx-auto max-w-[1200px] px-6 py-12 md:px-8 md:py-16">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal>
              <div className="rounded-[28px] border border-[#e8dece] bg-white p-8 shadow-[0_16px_38px_rgba(0,0,0,0.05)]">
                <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#b5965d]">
                  Informação de contacto
                </span>

                <h2 className="mt-4 font-serif text-3xl leading-tight text-[#2c241e]">
                  Fale connosco de forma simples e direta
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
                  Preencha os dados abaixo e entraremos em contacto consigo com a
                  maior brevidade possível.
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
                        className="min-h-[52px] w-full rounded-[16px] border border-[#ded3c2] bg-[#fdfcf9] px-4 text-sm text-neutral-900 outline-none transition focus:border-[#c8a96b]"
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
                        className="min-h-[52px] w-full rounded-[16px] border border-[#ded3c2] bg-[#fdfcf9] px-4 text-sm text-neutral-900 outline-none transition focus:border-[#c8a96b]"
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
                      className="min-h-[52px] w-full rounded-[16px] border border-[#ded3c2] bg-[#fdfcf9] px-4 text-sm text-neutral-900 outline-none transition focus:border-[#c8a96b]"
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
                      className="min-h-[52px] w-full rounded-[16px] border border-[#ded3c2] bg-[#fdfcf9] px-4 text-sm text-neutral-900 outline-none transition focus:border-[#c8a96b]"
                      placeholder="Ex.: Remodelação de cozinha"
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
                      className="w-full rounded-[16px] border border-[#ded3c2] bg-[#fdfcf9] px-4 py-4 text-sm text-neutral-900 outline-none transition focus:border-[#c8a96b]"
                      placeholder="Descreva brevemente o seu projeto"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-[#c8a96b] px-6 text-sm font-medium text-[#1f1a17] transition hover:bg-[#d7b779] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? "A enviar..." : "Enviar pedido"}
                  </button>

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
                    Um processo próximo, claro e orientado ao detalhe
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-neutral-600 md:text-base">
                    Acreditamos numa relação de proximidade com cada cliente,
                    desde o primeiro contacto até à definição da melhor solução
                    para o espaço.
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