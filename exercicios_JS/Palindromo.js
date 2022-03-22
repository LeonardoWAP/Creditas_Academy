function palindromo(palindromo){
    var resposta = palindromo.toUpperCase().replace(/[^a-zA-Z]/g,"");
  
    var reverseStr = resposta.toUpperCase().split('').reverse().join(''); 
    
    
    if (reverseStr === resposta){
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