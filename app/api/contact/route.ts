import { NextResponse } from "next/server";

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

    // 👉 Aqui depois podes ligar a email real (Resend, SMTP, etc)
    console.log("Novo pedido de orçamento:", body);

    return NextResponse.json(
      { success: true, message: "Pedido enviado com sucesso" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao enviar pedido" },
      { status: 500 }
    );
  }
}