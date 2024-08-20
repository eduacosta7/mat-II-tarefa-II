const caixaPrincipal = document.querySelector('caixa-principal')
const caixaPerguntas = document.querySelector('caixa-perguntas')
const caixaAlternativas = document.querySelector('caixa-altrnativa')
const caixaResultado = document.querySelector('caixa-resultado')
const textoResultado = document.querySelector('texto-resultado')

const perguntas = [
    {
        enunciado: "No âmbito social, você prefere",
        alternativas: [
            {
                texto: "Alternativa1",
                afirmação: "afirmação",
            },

            {
                texto: "Alternativa2",
                afirmação: "afirmação",
            }]
    },

    {
        enunciado: "No âmbito ambiental, você prefere", alternativas: [
            { texto: "Alternativa3", afirmação: "afirmação", },
            { texto: "Alternativa4", afirmação: "afirmação", }]
    },

    {
        enunciado: "No âmbito tecnológico, você prefere", alternativas: [
            { texto: "Alternativa5", afirmação: "afirmação", },
            { texto: "Alternativa6", afirmação: "afirmação", }]
    }

]



let atual = 0;
let perguntaAtual;
function mostraPerguntas() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "."
    mostraAlternativas();
}
mostraAlternativas();
for (const alternativas of perguntaAtual.alternativas) {
    const botaoAlternativa = documnt.createElement("button")
    botaoAlternativa.textContent = alternativa.texto;
    botaoAlternativa.addeventlitenr("click", () => respostaSelecionada(pergunta));
    caixaAlternativas.appendChild(botãoAlternativa)
}

function respostaSelecionada(pergunta) {
    const afirmações = pergunta.afirmação
    atual++;
    mostraPerguntas();

}

function mostraRsultado()
    
}