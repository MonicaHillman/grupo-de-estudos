const frases = [
    "Que a Força esteja com você.",
    "Eu sou seu pai.",
    "Eu tenho um mau pressentimento sobre isso.",
    "Não tente. Faça ou não faça. Não há tentativa.",
    "Você é a única esperança para a Aliança Rebelde.",
    "Eu sou um Jedi, como meu pai antes de mim.",
    "Que a Força esteja com todos nós.",
    "Você não pode vencer, Darth. Se você cortar minha cabeça, o meu espírito irá me perseguir por toda a eternidade.",
    "Eu te amo. Eu sei.",
    "Estes não são os droides que você procura.",
    "Faça. Ou não faça. Não há tentativa.",
    "Use a força, Luke.",
    "Esta é a nave que fez a Kessel Run em menos de 12 parsecs.",
    "Vou tentar.",
    "O poderoso lado negro da Força é um caminho para muitas habilidades que alguns consideram serem antinaturais.",
    "Estamos condenados.",
    "Você não pode parar o destino.",
    "Aprenda a usar a força.",
    "Seja paciente, Luke. Use a força. Pense.",
    "Não há emoção, há paz.",
    "Fiquei esperando por você, Obi-Wan. Nós nos encontramos novamente, finalmente. A vingança será minha.",
    "Faça ou não faça. Não há tentativa.",
    "Lembre-se... a Força estará sempre com você.",
    "Essas são as armas de um caçador de recompensas. Nem um jedi.",
    "Eu nunca vou se juntar a você! Eu prefiro morrer!",
    "Vida longa e próspera.",
    "Os caminhos da Força são misteriosos.",
    "Boba Fett? Boba Fett? Onde?",
    "Não me tente.",
    "Me leve ao seu líder."
]

const botao = document.querySelector('button');
const output = document.querySelector('output');

botao.addEventListener('click', () => {
    output.innerText = frases[Math.floor(Math.random() * frases.length)]

    /*
     
    */
})