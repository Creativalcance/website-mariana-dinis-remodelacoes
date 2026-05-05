"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Reveal from "@/app/components/Reveal";

type BudgetFormState = {
  nome: string;
  email: string;
  telefone: string;
  tipoProjeto: string;
  localizacao: string;
  mensagem: string;
};

const initialState: BudgetFormState = {
  nome: "",
  email: "",
  telefone: "",
  tipoProjeto: "",
  localizacao: "",
  mensagem: "",
};

const projectTypes = ["Cozinha", "Roupeiro", "Remodelação total", "Outro"];

export default function OrcamentoPage() {
  const [form, setForm] = useState<BudgetFormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    const { name, value } = event.target;
    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);

    try {
      const response = await fetch("/api/orcamento", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Não foi possível enviar o pedido.");
      }

      setForm(initialState);
      setIsSuccess(true);
    } catch (error) {
      console.error("Erro ao enviar pedido de orçamento:", error);
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
                  Pedir orçamento em Coimbra
                </span>

                <h1 className="mt-6 font-serif text-4xl leading-[1.05] text-[#f5e8cf] md:text-6xl">
                  Remodelações,
                  <br />
                  cozinhas e interiores
                  <br />
                  em Coimbra
                </h1>

                <p className="mt-5 max-w-[470px] text-sm leading-7 text-[#d9d0c5] md:text-base">
                  Peça um orçamento personalizado para remodelações em Coimbra,
                  cozinhas por medida, roupeiros por medida e projetos de
                  interiores premium. Partilhe connosco a localização, o tipo de
                  espaço e os principais detalhes do seu projeto.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/projetos"
                    className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-[#d5b57a]/50 px-6 text-sm font-medium text-[#f5e8cf] transition hover:bg-white/5"
                  >
                    Ver projetos
                  </Link>

                  <Link
                    href="/contactos"
                    className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#c8a96b] px-6 text-sm font-medium text-[#1f1a17] transition hover:bg-[#d7b779]"
                  >
                    Ir para contactos
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative min-h-[320px] overflow-hidden">
              <Image
                src="/images/orcamento/Cozinha_coral.png"
                alt="Cozinha por medida premium em Coimbra para projeto de remodelação"
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
        <section className="mx-auto max-w-[1200px] px-6 pb-16 md:px-8 md:pb-24">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal>
              <div className="rounded-[28px] border border-[#e8dece] bg-white p-8 shadow-[0_16px_38px_rgba(0,0,0,0.05)]">
                <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#b5965d]">
                  Como funciona
                </span>

                <h2 className="mt-4 font-serif text-3xl leading-tight text-[#2c241e]">
                  Um pedido simples para remodelações e interiores em Coimbra
                </h2>

                <div className="mt-8 space-y-4">
                  {[
                    "Indique se pretende uma cozinha por medida, roupeiro por medida, remodelação total ou outro projeto.",
                    "Descreva os detalhes essenciais, o estilo pretendido e a localização do imóvel em Coimbra ou região.",
                    "Entraremos em contacto para compreender melhor o espaço e preparar uma proposta ajustada ao seu projeto.",
                  ].map((step, index) => (
                    <Reveal key={step} delay={index * 120}>
                      <div className="flex items-start gap-4 rounded-[18px] bg-[#f7f3ec] px-5 py-4">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#d9bf8f] text-sm font-medium text-[#b5965d]">
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
            </Reveal>

            <Reveal delay={120}>
              <div className="rounded-[28px] border border-[#e8dece] bg-white p-8 shadow-[0_16px_38px_rgba(0,0,0,0.05)]">
                <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#b5965d]">
                  Formulário de orçamento
                </span>

                <h2 className="mt-4 font-serif text-3xl leading-tight text-[#2c241e]">
                  Peça uma proposta personalizada para o seu projeto
                </h2>

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

                  <div className="grid gap-5 md:grid-cols-2">
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
                        htmlFor="tipoProjeto"
                        className="mb-2 block text-sm font-medium text-[#2c241e]"
                      >
                        Tipo de projeto
                      </label>
                      <select
                        id="tipoProjeto"
                        name="tipoProjeto"
                        value={form.tipoProjeto}
                        onChange={handleChange}
                        required
                        className="min-h-[52px] w-full rounded-[16px] border border-[#ded3c2] bg-[#fdfcf9] px-4 text-sm text-neutral-900 outline-none transition focus:border-[#c8a96b]"
                      >
                        <option value="">Selecionar</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="localizacao"
                      className="mb-2 block text-sm font-medium text-[#2c241e]"
                    >
                      Localização
                    </label>
                    <input
                      id="localizacao"
                      name="localizacao"
                      type="text"
                      value={form.localizacao}
                      onChange={handleChange}
                      className="min-h-[52px] w-full rounded-[16px] border border-[#ded3c2] bg-[#fdfcf9] px-4 text-sm text-neutral-900 outline-none transition focus:border-[#c8a96b]"
                      placeholder="Coimbra, Condeixa, Mealhada, Lousã, Cantanhede..."
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="mensagem"
                      className="mb-2 block text-sm font-medium text-[#2c241e]"
                    >
                      Descrição do projeto
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      rows={6}
                      value={form.mensagem}
                      onChange={handleChange}
                      required
                      className="w-full rounded-[16px] border border-[#ded3c2] bg-[#fdfcf9] px-4 py-4 text-sm text-neutral-900 outline-none transition focus:border-[#c8a96b]"
                      placeholder="Descreva se pretende uma remodelação, cozinha por medida, roupeiro por medida ou projeto de interiores, incluindo dimensões aproximadas, estilo desejado e zona do imóvel"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-[#c8a96b] px-6 text-sm font-medium text-[#1f1a17] transition hover:bg-[#d7b779] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting
                      ? "A enviar..."
                      : "Enviar pedido de orçamento"}
                  </button>

                  {isSuccess ? (
                    <p className="text-sm font-medium text-[#8b6b32]">
                      Pedido enviado com sucesso.
                    </p>
                  ) : null}
                </form>
              </div>
            </Reveal>
          </div>
        </section>
      </Reveal>
    </main>
  );
}