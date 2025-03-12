import { NextResponse } from 'next/server';
import pool from "../../lib/db";



export async function GET() {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM questao WHERE ativa = true');
        client.release();
        return NextResponse.json(result.rows);
    } catch (error) {
        console.error('Erro buscando questoes:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const {
            titulo,
            enunciado,
            imagem,
            alternativaA,
            alternativaB,
            alternativaC,
            alternativaD,
            alternativaE,
            disciplina,
            conteudos,
            dificuldade,
            habilidade,
            dissertativa,
            correta,
            dataRegistro,
            elaborador,
            ativa
        } = await request.json();
        const client = await pool.connect();
        const result = await client.query(
            `INSERT INTO questao (
                titulo,
                enunciado,
                imagem,
                alternativa_a,
                alternativa_b,
                alternativa_c,
                alternativa_d,
                alternativa_e,
                disciplina,
                conteudos,
                dificuldade,
                habilidade,
                dissertativa,
                correta,
                data_registro,
                elaborador,
                ativa
            ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17) RETURNING *`,
            [
                titulo,
                enunciado,
                imagem,
                alternativaA,
                alternativaB,
                alternativaC,
                alternativaD,
                alternativaE,
                disciplina,
                conteudos,
                dificuldade,
                habilidade,
                dissertativa,
                correta,
                dataRegistro,
                elaborador,
                ativa
            ]
        )

        client.release();
        return NextResponse.json(result.rows[0], { status: 201 });
    } catch (error) {
        console.error('Erro ao adicionar questão:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}