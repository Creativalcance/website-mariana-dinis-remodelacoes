import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { nome, email, telefone, assunto, mensagem } = body;

    if (!nome || !email || !mensagem) {
      return NextResponse.json(
        { error: "Campos obrigatórios em falta" },
        { status: 400 }
      );
    }

    // 👉 ENVIO DE EMAIL
    await resend.emails.send({
      from: "Website <onboarding@resend.dev>", // depois trocar por domínio real
      to: ["mariana.dinis@loja.aquiatuaremodelacao.pt"],
      subject: `Novo contacto: ${assunto || "Sem assunto"}`,
      html: `
        <h2>Novo pedido de contacto</h2>

        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone || "-"}</p>
        <p><strong>Assunto:</strong> ${assunto || "-"}</p>

        <hr />

        <p><strong>Mensagem:</strong></p>
        <p>${mensagem}</p>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Pedido enviado com sucesso" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao enviar email:", error);

    return NextResponse.json(
      { error: "Erro ao enviar pedido" },
      { status: 500 }
    );
  }
}