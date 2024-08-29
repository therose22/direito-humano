const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O professor do ensino médio está falando sobre direitos humanos como funcionam, onde e como funciona, esse assunto despertou o interesse nos alunos. O professor fez as seguintes perguntas. O que são direitos humanos?", 
        alternativas: [
            {
                texto: "Direitos humanos são direitos inalienáveis que pertencem a todos os seres humanos apenas pelo fato de serem humanos. Eles são universalmente reconhecidos e protegidos por leis e tratados internacionais, como a Declaração Universal dos Direitos Humanos da ONU.",
                afirmacao: " Direitos humanos são um conjunto de princípios e normas que visam garantir a dignidade e a igualdade para todas as pessoas, independentemente de suas características pessoais, como raça, gênero, religião ou nacionalidade. Eles incluem direitos básicos como a liberdade de expressão, o direito à vida e a proteção contra discriminação."
            }
        ]
    },
    {
        enunciado: "Qual é a importância da Declaração Universal dos Direitos Humanos?",
        alternativas: [
            {
                texto: "A Declaração Universal dos Direitos Humanos é importante porque fornece uma base para legislações e políticas nacionais e internacionais que buscam garantir que todos os indivíduos possam viver com dignidade e sem medo de violação dos seus direitos básicos.",
                afirmacao: "A Declaração Universal dos Direitos Humanos, adotada pela Assembleia Geral das Nações Unidas em 1948, estabelece um padrão global para a proteção dos direitos humanos. Ela serve como uma referência fundamental para a promoção e proteção desses direitos em todo o mundo."
            },
        ]
    },
    {
        enunciado: "Quais são alguns exemplos de direitos civis e políticos?",
        alternativas: [
            {
                texto: "Outros exemplos de direitos civis e políticos são a proteção contra a detenção arbitrária, o direito à privacidade e a liberdade de reunião. Esses direitos são essenciais para a proteção das liberdades individuais e para o funcionamento de uma sociedade democrática.",
                afirmacao: "Direitos civis e políticos incluem a liberdade de expressão, o direito ao voto, a liberdade de religião e o direito ao devido processo legal. Esses direitos asseguram que os indivíduos possam participar plenamente na vida política e social de seu país."
            },
        ]
    },
    {
        enunciado: "Como os direitos humanos são protegidos em casos de conflitos armados?",
        alternativas: [
            {
                texto: "Durante conflitos armados, os direitos humanos são protegidos por convenções internacionais como as Convenções de Genebra, que estabelecem normas para a proteção de civis e combatentes, incluindo o tratamento humanitário dos prisioneiros de guerra e a proteção de pessoas não envolvidas diretamente no conflito.",
                afirmacao: " Além das Convenções de Genebra, a proteção dos direitos humanos em conflitos armados é reforçada por tratados e acordos internacionais que visam prevenir crimes de guerra e assegurar que as partes em conflito respeitem normas mínimas de humanidade, mesmo em tempos de guerra."
            },
        ]
    },
    {
        enunciado: " O que é discriminação e como ela afeta os direitos humanos?",
        alternativas: [
            {
                texto: "Discriminação é o tratamento injusto ou desigual de indivíduos com base em características como raça, gênero, orientação sexual ou deficiência. Ela viola os princípios dos direitos humanos, que garantem igualdade e não discriminação, prejudicando a dignidade e as oportunidades dessas pessoas.",
                afirmacao: "A discriminação afeta os direitos humanos ao impedir que certos grupos tenham acesso igual a oportunidades e recursos, o que pode levar a desigualdades significativas em áreas como educação, emprego e saúde. Combater a discriminação é essencial para garantir que todos os indivíduos possam gozar de seus direitos de maneira plena e igualitária."
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Notamos que...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
