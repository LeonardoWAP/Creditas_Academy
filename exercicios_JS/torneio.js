class Jogador {
    constructor(nome, estrategia) {
      this.nome = nome;
      this.estrategia = estrategia.toUpperCase();
    }
  }
  
  function jan_ken_po(jogo) {
    let possiveis_jogadas = ["PE", "PA", "TE"]
  
    if (jogo.length !== 2) {
      console.log("WrongNumberOfPlayersError")
  
    } else if (!possiveis_jogadas.includes(jogo[0][0].estrategia) || !possiveis_jogadas.includes(jogo[1][0].estrategia)) {
      console.log("NoSuchStrategyError")
    }
    return decideGanhador(jogo)
  
  }
  
function decideGanhador(jogo) {

if (jogo[0][0].estrategia == jogo[1][0].estrategia) {
    return jogo[0][0]
}
else if (jogo[0][0].estrategia == "PE" && jogo[1][0].estrategia == "PA") {
    return jogo[1][0]
}
else if (jogo[0][0].estrategia == "PE" && jogo[1][0].estrategia == "TE") {
    return jogo[0][0]
}
else if (jogo[0][0].estrategia == "PA" && jogo[1][0].estrategia == "PE") {
    return jogo[0][0]
}
else if (jogo[0][0].estrategia == "PA" && jogo[1][0].estrategia == "TE") {
    return jogo[1][0]
}
else if (jogo[0][0].estrategia == "TE" && jogo[1][0].estrategia == "PE") {
    return jogo[1][0]

}
else if (jogo[0][0].estrategia == "TE" && jogo[1][0].estrategia == "PA") {
    return jogo[0][0]
}
}

function tournamentGamerWinner(tournament) {

    if (tournament.length == 1) {
    return tournament
    }

    let t = []

    let ganhadores = []

    for (let i = 0; i < tournament.length; i++) {
    ganhadores = []
        
        for (let k = 0; k < tournament.length; k++) {


            let ganhador = jan_ken_po(tournament[i][k])

            ganhadores.push(ganhador)
        
            
        }

        t.push(ganhadores)

        console.log(ganhadores)

        console.log(t)

    }

    console.log("TOURNAMENT FIM")

    tournamentGamerWinner(ganhadores)

}

function main() {

    const jogador1 = new Jogador("Armando", "PE")
    const jogador2 = new Jogador("Dave", "TE")
    const jogador3 = new Jogador("Richard", "PA")
    const jogador4 = new Jogador("Michael", "TE")
    const jogador5 = new Jogador("Allen", "TE")
    const jogador6 = new Jogador("Arthur", "TE")
    const jogador7 = new Jogador("David", "PA")
    const jogador8 = new Jogador("Omer", "PE")


    let tournament = [
        [
        [
            [jogador1], [jogador2]
        ],
        [
            [jogador3], [jogador4]
        ]
        ],
        [
        [
            [jogador5], [jogador6]
        ],
        [
            [jogador7], [jogador8]
        ]
        ]
    ]


    let ganhadorFinal = tournamentGamerWinner(tournament)

    console.log(ganhadorFinal)

    console.log("TOURNAMENT FIM")

}

main()