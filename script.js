const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Um dia seu professor de geografia esta explicado o que é Supercontinente: supercontinente é uma enorme massa de terra composta por vários continentes unidos em uma única estrutura geológica. E te faz as seguintes perguntas: Você conhece o termo Super Continente? E porque ocorre esse evento?",
        alternativas: [
            {
                texto: "Não, nunca ouvi falar sobre o assunto, por que ele ocorre?",
                afirmacao: "Você não sabia sobre o assunto, então despertou sua atenção."
            },
            {
                texto: "Sim ja ouvi falar sobre o assunto, mas não sei por que ocorre",
                afirmacao: "Você ja conhecia o assunto, mas não entendia de forma mais profunda."
            }
        ]
    },
    {
        enunciado: "Ocorre devido ao movimento das placas tectônicas, impulsionado pelo calor interno da Terra. As placas se movem, colidem e se unem, formando grandes massas de terra.",
        alternativas: [
            {
                texto: "Interessante, mas o que esse evento mudaria no nosso planeta?.",
                afirmacao: "Buscar entender assuntos novos é essencial, principalmente porque nao sabemos se pode influenciar na nossa vida"
            },
            {
                texto: "Que legal professor",
                afirmacao:"Não pode ter demonstrado muito interesse porém o Professor continuo a explicação."
            }
        ]
    },
    {
        enunciado: "Com o surgimento de um Supercontinete, muitas coisas iriam mudar no nosso planeta, como o clima devido a junção de várias áreas de fauna diferentes, mudar a correnteza de rios que poderia ser um perigo para diversos países, uma grande mudança geopolítica e economia devido a mudanças e a destruição de alguns recursos naturais, além de prejudicar diversos povos, e vários outros fatores.",
        alternativas: [
            {
                texto: "Caramba, existem pontos positivos nesse Supercontinente?",
                afirmacao: "Após ouvir sobre as mudanças que ocorreria, você percebe que algo assim afetaria não só você e sim irá tranformar tudo em sua volta."
            },
        ]
    },
    {
        enunciado: "Sim existem pontos positivos, porém eles não sobressai os negativos, alguns pontos positivos seria: Novas áreas habitáveis, uma melhor exploração de alguns recursos naturais, a diversificação de culturas, uma melhor facilitação do comércio, e maiores números de cooperação global entre os povos.",
        alternativas: [
            {
                texto: "Entendi que isso é algo que mudará complemente o nossas vidas, há um jeito de evitar isso?.",
                afirmacao: "Mesmo sabendo que existe pontos positivos você nota que é algo bastante prejudicial, então seria bom se preparar para esse evento."
            },
        ]
    },
    {
        enunciado: "A formação de supercontinentes é um processo natural e de longo prazo, determinado pela dinâmica interna da Terra. Portanto, a humanidade atualmente não tem meios práticos de evitar esse fenômeno, mas pode buscar entender e se preparar para seus efeitos.",
        alternativas: [
            {
                texto: "Querendo ou não, é impossível combater a mãe natureza. Muito obrigado professor, nunca pensaria que algo assim fosse tão impactante.",
                afirmacao: "Percebe-se que o Supercontinente é um assunto muito pouco discutido atualmente, porém é algo que as pessoas tem que ficar ciente sobre o assunto, pois, mesmo sendo algo que pode levar diversos anos em um momento vai ocorrer e temos que estar preparados."
            },
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
