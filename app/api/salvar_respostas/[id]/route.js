import { NextResponse } from 'next/server';
import pool from "../../../lib/db";


export async function PUT(request, { params }) {
    const { id } = params;
    try {
      const { respostas1dia } = await request.json();
      const client = await pool.connect();
      const result = await client.query(
        `UPDATE usuario SET
        respostas_embt2025dia1 = $1
        WHERE id = $2
        RETURNING *`,
        [respostas1dia, id]
      );
  
      client.release();
      return NextResponse.json(result.rows[0], { status: 201 });
    } catch (error) {
      console.error('Erro ao salvar respostas:', error);
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
  }