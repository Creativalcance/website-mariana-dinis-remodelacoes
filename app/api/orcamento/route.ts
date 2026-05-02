import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

type OrcamentoBody = {
  nome?: string;
  email?: string;
  telefone?: string;
  tipoProjeto?: string;
  localizacao?: string;
  mensagem?: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as OrcamentoBody;

    const nome = body.nome?.trim();
    const email = body.email?.trim();
    const telefone = body.telefone?.trim() || "Não indicado";
    const tipoProjeto = body.tipoProjeto?.trim();
    const localizacao = body.localizacao?.trim() || "Não indicada";
    const mensagem = body.mensagem?.trim();

    if (!nome || !email || !tipoProjeto || !mensagem) {
      return NextResponse.json(
        { error: "Campos obrigatórios em falta." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "RESEND_API_KEY não configurada." },
        { status: 500 }
      );
    }

    const fromEmail =
      process.env.RESEND_FROM_EMAIL || "Mariana Dinis <onboarding@resend.dev>";
    const toEmail =
      process.env.RESEND_TO_EMAIL ||
      "mariana.dinis@loja.aquiatuaremodelacao.pt";

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `Novo pedido de orçamento — ${tipoProjeto}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #241c16; line-height: 1.6;">
          <h1 style="color: #241c16;">Novo pedido de orçamento</h1>

          <p><strong>Nome:</strong> ${escapeHtml(nome)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Telefone:</strong> ${escapeHtml(telefone)}</p>
          <p><strong>Tipo de projeto:</strong> ${escapeHtml(tipoProjeto)}</p>
          <p><strong>Localização:</strong> ${escapeHtml(localizacao)}</p>

          <hr style="border: 0; border-top: 1px solid #e8dece; margin: 24px 0;" />

          <p><strong>Mensagem:</strong></p>
          <p>${escapeHtml(mensagem).replaceAll("\n", "<br />")}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Erro Resend:", error);

      return NextResponse.json(
        { error: "Não foi possível enviar o pedido." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erro no pedido de orçamento:", error);

    return NextResponse.json(
      { error: "Não foi possível processar o pedido." },
      { status: 500 }
    );
  }
}