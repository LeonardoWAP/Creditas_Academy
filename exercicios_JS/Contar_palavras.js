// https://replit.com/join/ojxugkloku-leonardowiller2

function strFrequency2(stringArr) {   
    return stringArr.reduce(function(count, word) {
      count[word] = (count[word] || 0) + 1  ;
      return count;
    }, {});
}

function contar_palavra(str){
    let words = str.toLowerCase().split(" ");  
    console.log(strFrequency2(words));
}

contar_palavra("Doo bee doo bee doo");




let palavra = "Doo bee doo bee doo"

let vetor_palavra = palavra.toLowerCase().split(" ");  


let map = new Map()

vetor_palavra.forEach(function(word){

   if (map.has(word)){
     // console.log(word + " existe no map")
     let qtd_repeticoes = map.get(word)
     map.set(word, qtd_repeticoes+1)
   }else{
     // console.log(word + " NÃO existe no map")
      map.set(word, 1)
   }
  
})

console.log(map)




let objeto = {}


vetor_palavra.forEach(function(word){

  if(objeto[word] == undefined){

    objeto[word] = 1
    
    console.log(word + " NÃO existe no map")
    
  }else{
    let qtd_repeticoes = objeto[word] 

    objeto[word] = qtd_repeticoes +1
    // objeto[word] +=1 
    // objeto[word] = objeto[word] +1
    console.log(word + " existe no map")
  }

})
  


