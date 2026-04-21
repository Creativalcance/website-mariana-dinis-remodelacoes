import { NextResponse } from "next/server";

type OrcamentoBody = {
  nome?: string;
  email?: string;
  telefone?: string;
  tipoProjeto?: string;
  localizacao?: string;
  mensagem?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as OrcamentoBody;

    if (!body.nome || !body.email || !body.tipoProjeto || !body.mensagem) {
      return NextResponse.json(
        { error: "Campos obrigatórios em falta." },
        { status: 400 }
      );
    }

    console.log("Novo pedido de orçamento:", body);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erro no pedido de orçamento:", error);

    return NextResponse.json(
      { error: "Não foi possível processar o pedido." },
      { status: 500 }
    );
  }
}