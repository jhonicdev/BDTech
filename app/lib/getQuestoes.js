import db from './db';

export async function getQuestoesByPesquisa(pesquisa) {
        try {
                console.log(process.env.POSTGRES_URL);
                const result = await db.query("", [pesquisa]);
                return result.rows;
        } catch (error) {
                console.error('Erro ao consultar questoes:', error);
                throw error;
        }
}