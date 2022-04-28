let arr = document.getElementsByTagName("button")
let visor = document.getElementById("resultado");
var firstNumber;
var secondNumber;
var flag = 0 

//sempre vai ser chamado essa função quando clicar no botão

function showScreen(value){

  visor.innerHTML += value
  return visor
}


function captureOperator(value){
  captureValueOperator(value)

  // console.log(value)
}

function captureNumber(value){
  // console.log(value)
  showScreen(value)
}


function sum(firstNumber,secondNumber){
  
  return firstNumber + secondNumber
  
}

function convertStringToNumber(number){
  return parseInt(number)
}


function captureValueOperator(value){
  if (value == "c"){
    visor.innerHTML = ""
  }
  
  if (value == "+"){
    if (flag == 0 ){
      
      firstNumber = visor.innerHTML
      flag = 1
      console.log("capturando o fisrtnumber = " + firstNumber)
      visor.innerHTML = ""
    }
    else if(flag == 1){
      
      secondNumber = visor.innerHTML
      console.log("capturando o secund = " + secondNumber)

      flag = 0
      visor.innerHTML = ""
      
      console.log("fazer a soma do  " + firstNumber + " + " + secondNumber)
      let firstNumberInt = convertStringToNumber(firstNumber)
      let secondNumberInt = convertStringToNumber(secondNumber)
      let result = sum(firstNumberInt,secondNumberInt)
      console.log("result  " + result)

      showScreen(result)
    }

  }

  if (value == "-"){
    console.log("esse é o -")
  }

  if (value == "/"){
    console.log("esse é o /")
  }


  if (value == "*"){console.log("esse é o =")
    console.log("esse é o *")

  }


  if (value == "="){
    
    

  }

}