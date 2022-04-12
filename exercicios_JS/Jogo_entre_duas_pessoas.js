// https://replit.com/join/zldpcvpasc-leonardowiller2

class Jogador {
    constructor(nome, estrategia){
      this.nome = nome;
      this.estrategia = estrategia.toUpperCase();
    } 
  }
  
  function jan_ken_po(jogo){
  
    let possiveis_jogadas = ["PE", "PA", "TE"]
    
  
    if (jogo.length != 2){
      console.log("WrongNumberOfPlayersError")
      
    }else if (!possiveis_jogadas.includes(jogo[0].estrategia) || !possiveis_jogadas.includes(jogo[0].estrategia) ){
      console.log("NoSuchStrategyError")
    }
    return decideGanhador(jogo)
    
  }
  
  function decideGanhador(jogo){
    if (jogo[0].estrategia == jogo[1].estrategia){
      return jogo[0]
    }
    else if (jogo[0].estrategia == "PE" && jogo[1].estrategia == "PA"){
      return jogo[1]
    }
    else if (jogo[0].estrategia == "PE" && jogo[1].estrategia == "TE"){
      return jogo[0]
    }
    else if (jogo[0].estrategia == "PA" && jogo[1].estrategia == "PE"){
      return jogo[0]
    }
    else if (jogo[0].estrategia == "PA" && jogo[1].estrategia == "TE"){
      return jogo[1]
    }
     else if (jogo[0].estrategia == "TE" && jogo[1].estrategia == "PE"){
       return jogo[1]
    }
     else if (jogo[0].estrategia == "TE" && jogo[1].estrategia == "PA"){
       return jogo[0]
    } 
  }
  
  function main(){
    const Jogador1 = new Jogador("Leonardo","Pe");
    const Jogador2 = new Jogador("daiane","PA");
    
  
    let jogo =[Jogador1 , Jogador2]
    
    let ganhador = jan_ken_po(jogo)
    console.log(ganhador)
  }
  
  
  main()