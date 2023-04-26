## O que são APIs?

Imagine que você tem dois brinquedos diferentes e gostaria de brincar com eles juntos, mas eles não se encaixam direito. Para resolver esse problema, você precisa de algo que ajude esses brinquedos a "conversar" entre si e se conectar corretamente. É aí que entra a API!

API é como um "conversador" que ajuda diferentes programas (ou brinquedos!) a se comunicarem e trabalharem juntos. Ele fornece um conjunto de regras e instruções que dizem como um programa pode se conectar com outro, compartilhar informações e realizar tarefas.

Por exemplo, se você está usando um aplicativo de mapa em seu telefone, ele precisa se conectar a um servidor de dados para encontrar informações sobre os lugares que você quer encontrar. A API fornece as instruções para o aplicativo se conectar ao servidor e obter as informações de que precisa.

Então, basicamente, a API é uma maneira para diferentes programas "conversarem" e trabalharem juntos, como se fossem amigos brincando com seus brinquedos juntos!

No nosso caso gostariamos que a nossa interface se conectasse com a API Random User: https://randomuser.me/ e recebesse 5 usuários aleatórios para mostrar na tela. Você pode ver como fica a URL para isso lendo a sua documentação.

## Como consumir essas APIs?

A abordagem que utilizamos para consumir a API Random User foi a de utilizar a Fetch API. Ela é uma ferramenta que ajuda os programas a "pedirem coisas" e "receberem respostas" de outros programas e serviços, assim como um garçom que leva um pedido e traz a comida de volta.

Podemos utilizar de duas maneiras:

* **Async/Await**
```
async function getResultadoAPIComAsyncAwait() {
    const api = await fetch('https://randomuser.me/api/?results=5');
    const apiConvertida = api.json();
    const results = apiConvertida.results;

    return results;
}
```

**Funções assíncronas sempre retornam Promises**. Mas o que isso quer dizer?

Quando você faz uma solicitação para um servidor web para buscar informações, pode levar algum tempo para obter a resposta. Durante esse tempo, o programa não pode ficar parado esperando pela resposta, pois precisa continuar executando outras tarefas.

As Promises ajudam a lidar com essa situação, permitindo que o programa continue a executar outras tarefas enquanto espera pela conclusão da tarefa assíncrona. Quando a tarefa é concluída, a Promise é "cumprida" (ou "resolvida") com o resultado da tarefa, ou "rejeitada" com uma mensagem de erro, dependendo do resultado.

* **Then**
```
function getResultadoAPIComThen() {
    const api = fetch('https://randomuser.me/api/?results=5')
        .then((res) => res.json())
        .then((data) => {
            return data.results
        })
    //then == ENTÃO
}
```

## Material de estudos

Além da documentação, podemos estudar através dos seguintes conteúdos:
* [JavaScript: Criando requisições](https://cursos.alura.com.br/course/javascript-criando-requisicoes);
* [JavaScript: Consumindo tratando dados de API](https://cursos.alura.com.br/course/javascript-consumindo-tratando-dados-api);

## Projeto desenvolvido no grupo de estudos
* [Link do Github](https://github.com/MonicaHillman/grupo-de-estudos/blob/main/desafio-card/scripts.js);
* [Layout Base](https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ);

# Para saber mais:

## O que é Swagger?

O Swagger é uma ferramenta de código aberto que permite documentar e testar APIs de forma fácil e eficiente. Ele fornece uma interface gráfica para documentar as APIs, descrevendo os endpoints, os parâmetros de entrada e saída, as respostas possíveis, entre outras informações relevantes.

Exemplo: https://www.tjsp.jus.br/hselodigital/swagger/index.html
