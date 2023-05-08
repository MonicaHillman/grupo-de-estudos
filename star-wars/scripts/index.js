import { frases } from "./frases.js";

const botao = document.querySelector('button');
const output = document.querySelector('output');

botao.addEventListener('click', () => {
    const indexAleatorio = Math.floor(Math.random() * frases.length);
    const mostrarFraseNaTela = output.innerText = frases[indexAleatorio];
})