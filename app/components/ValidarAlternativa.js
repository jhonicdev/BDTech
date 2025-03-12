// Função para validar a alternativa
export default function validarAlternativa (answers, qId, correctAnswer) {
    if (answers[qId] == null) return alert("Nenhuma alternativa selecionada!");
    if (answers[qId] === correctAnswer) {
        alert("Resposta correta. Parabéns! ;)");
    } else {
        alert("Resposta errada! :(");
    }
};