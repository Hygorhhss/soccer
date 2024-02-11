const perguntas = [
    {
        pergunta: "Qual país venceu mais vezes a Copa do Mundo de Futebol?",
        respostas: [
            "Brasil",
            "Alemanha",
            "Argentina",
        ],
        correta: 0
    },
    {
        pergunta: "Qual jogador é conhecido como 'O Rei'?",
        respostas: [
            "Pelé",
            "Maradona",
            "Cristiano Ronaldo",
        ],
        correta: 0
    },
    {
        pergunta: "Qual clube tem o maior número de títulos da UEFA Champions League?",
        respostas: [
            "Real Madrid",
            "Barcelona",
            "Manchester United",
        ],
        correta: 0
    },
    {
        pergunta: "Quem é o maior artilheiro da história da seleção brasileira de futebol?",
        respostas: [
            "Romário",
            "Pelé",
            "Neymar",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o jogador com mais títulos de melhor do mundo pela FIFA?",
        respostas: [
            "Lionel Messi",
            "Cristiano Ronaldo",
            "Pelé",
        ],
        correta: 0
    },
    {
        pergunta: "Qual foi o país-sede da primeira Copa do Mundo de Futebol?",
        respostas: [
            "Brasil",
            "Uruguai",
            "Itália",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o único jogador a ter marcado gols em 3 finais de Copa do Mundo?",
        respostas: [
            "Pelé",
            "Maradona",
            "Zinedine Zidane",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o estádio de futebol mais famoso do mundo?",
        respostas: [
            "Estádio Santiago Bernabéu",
            "Maracanã",
            "Camp Nou",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o país que sediará a Copa do Mundo de Futebol de 2022?",
        respostas: [
            "Brasil",
            "Rússia",
            "Qatar",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o recorde de gols marcados em uma única edição da Copa do Mundo por um jogador?",
        respostas: [
            "8 gols",
            "13 gols",
            "17 gols",
        ],
        correta: 2
    }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas




// loop ou laço de repetição
//para colocar todas perguntas completas e individuais
for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
  //colocando as respostas na tela para selecionar
  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector("input").setAttribute('name', 'pergunta-' +perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector("input").onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
      
      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }

      mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas
    }


    quizItem.querySelector('dl').appendChild(dt)
  }

  //tirando o *Resposta A
  quizItem.querySelector('dl dt').remove()
  
  
  // coloca a pergunta na tela
  quiz.appendChild(quizItem)
}

