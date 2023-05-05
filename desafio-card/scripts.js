// link da documentação: https://randomuser.me/documentation
// link que será usado na requisição: https://randomuser.me/api/?results=5000

async function getResultadoAPIComAsyncAwait() {
    const api = await fetch('https://randomuser.me/api/?results=5');
    // const results = apiConvertida.results;
    // ao usar destructuring podemos pegar diretamente o valor de results
    const { results } = await api.json();

    return results;
    // Funções assíncronas sempre retornam promises
}

async function getResultadoAPIFrases() {
    const api = await fetch('https://api.adviceslip.com/advice');
    // const results = apiConvertida.results;
    // ao usar destructuring podemos pegar diretamente o valor de results
    const { slip } = await api.json();
    return slip.advice;
    // Funções assíncronas sempre retornam promises
}


function getResultadoAPIComThen() {
    const api = fetch('https://randomuser.me/api/?results=5')
        .then((res) => res.json())
        .then((data) => {
            return data.results
        })
    //then == ENTÃO
}


function mostrarCards(lista) {

    const listaDoHtml = document.querySelector('[data-lista]');

    lista.forEach(async (item) => {
        const frase = await getResultadoAPIFrases();
        const card = document.createElement('li');
        card.innerHTML = `
        <div class="card">
        <div class="capa"></div>
        <div class="corpo">
            <img src=${item.picture.large} alt="Foto de perfil" class="foto-perfil">
            <div class="titulo">
                <h2>${item.name.first + ' ' + item.name.last}</h2>
                <p>${item.dob.age}</p>
            </div>
            <p class="cidade">${item.location.city}</p>
            <hr>
            <div class="conteudo">
            <p class="frase">${frase}</p>
            </div>
        </div>
    </div>
        `

        listaDoHtml.appendChild(card);
    })
}

getResultadoAPIComAsyncAwait().then(
    (res) =>
        mostrarCards(res)
)
