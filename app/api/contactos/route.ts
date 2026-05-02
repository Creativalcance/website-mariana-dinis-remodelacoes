import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type ContactosBody = {
  nome?: string;
  email?: string;
  telefone?: string;
  assunto?: string;
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

export async function POST(req: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "RESEND_API_KEY não configurada." },
        { status: 500 }
      );
    }

    const body = (await req.json()) as ContactosBody;

    const nome = body.nome?.trim();
    const email = body.email?.trim();
    const telefone = body.telefone?.trim() || "Não indicado";
    const assunto = body.assunto?.trim() || "Pedido de contacto";
    const mensagem = body.mensagem?.trim();

    if (!nome || !email || !mensagem) {
      return NextResponse.json(
        { error: "Campos obrigatórios em falta" },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const fromEmail =
      process.env.RESEND_FROM_EMAIL || "Mariana Dinis <onboarding@resend.dev>";
    const toEmail = process.env.RESEND_TO_EMAIL || "info@creativalcance.com";

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `Novo contacto — ${assunto}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #241c16; line-height: 1.6;">
          <h1>Novo pedido de contacto</h1>

          <p><strong>Nome:</strong> ${escapeHtml(nome)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Telefone:</strong> ${escapeHtml(telefone)}</p>
          <p><strong>Assunto:</strong> ${escapeHtml(assunto)}</p>

          <hr />

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

    return NextResponse.json(
      { success: true, message: "Pedido enviado com sucesso" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao enviar contacto:", error);

    return NextResponse.json(
      { error: "Erro ao enviar pedido" },
      { status: 500 }
    );
  }
}