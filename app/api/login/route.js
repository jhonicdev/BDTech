import { NextResponse } from 'next/server';
import pool from "../../lib/db";

export async function POST(request) {
  try {
    const { id, senha } = await request.json();

    const client = await pool.connect();
    const result = await client.query(
      `SELECT id, nome, respostas_embt2025dia1, respostas_embt2025dia2 FROM usuario WHERE id = $1 AND senha = $2`,
      [id, senha]
    );
    client.release();

    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Erro ao realizar login:', error);
    return NextResponse.json({ error: 'Erro interno no servidor' }, { status: 500 });
  }
}
