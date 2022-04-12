// https://replit.com/join/tcggokpgoz-leonardowiller2

function palindromo(palindromo){
    var resposta = palindromo.toUpperCase().replace(/[^a-zA-Z]/g,"");
  
    var reverso = resposta.toUpperCase().split('').reverse().join(''); 
    //transformar em um array , separa a palavra [a, m , o , r , a , r , o , m ,a ] reverse inverte a ordem do array e join transforma array em string.
    
    
    if (reverso === resposta){
        console.log("é um palindromo");
    }else{
            console.log("Não é um palindromo");
    }
  }
  
  
  console.log("*A-grama-é-amarga.*");
  palindromo("A grama é 'amarga.");
  
  console.log("\nAmor a Roma.");
  palindromo("Amor a Roma.");
  
  console.log("\nSocorram-me, subi no ônibus em Marrocos!");
  palindromo("Socorram-me, subi no ônibus em Marrocos!");
  
  console.log("\n leonardo");
  palindromo("\n leonardo");