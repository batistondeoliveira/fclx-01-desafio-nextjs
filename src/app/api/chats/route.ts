import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../prisma/prisma";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const chatCreated = await prisma.chat.create({
    data: {
      mensagem: body.mensagem,      
    },
    select: {
      id: true,
      mensagem: true,
    },
  });

  return NextResponse.json(chatCreated);
}

export async function GET(request: NextRequest) {
  const chats = await prisma.chat.findMany({});

  return NextResponse.json(chats);
}
