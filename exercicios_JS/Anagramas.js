//https://replit.com/join/frjakualgi-leonardowiller2

let str = ["CarS","Racs","scaR","FoR","PoTatos","four","creams", "scream"]
// cars -> Racs 
// cars -> adssd
// racs -: adssd



function ordenarAlfabetica(palavra){
  return palavra.split("").sort().join("");
}

function comparar(str){
  let anagramas =[];  
  // console.log(str)
  
    for(let i=0; i < str.length; i++){
   
      
      let strAnagramas =[str[i]];    
      
      
      for(let k=i+1; k < str.length; k++){
        
        
        
        if(str[i].length == str[k].length ){
          if(ordenarAlfabetica(str[i].toUpperCase()) == ordenarAlfabetica(str[k].toUpperCase())){
     
         
          
            strAnagramas.push(str[k])
            str.splice(k,1);
            k=k-1
          }     
        }
      }
      
        anagramas.push(strAnagramas)
    }
  console.log(anagramas)
}
  

comparar(str);