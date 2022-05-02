let visor = document.getElementById("resultado");
var firstNumber;
var secondNumber;
var operator;
var visorIsResult = false;

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
  if (visorIsResult){
    visorIsResult = false;
    visor.innerHTML = ""
  }
  showScreen(value)
}
function capturePoint(value){
  if (!visor.innerHTML.includes(".")){
    if (visorIsResult){
      visorIsResult = false;
      visor.innerHTML = ""
    }
    showScreen(value)
  }
}


function sum(firstNumber,secondNumber){
  return firstNumber + secondNumber
}

function subtrai(firstNumber,secondNumber){
  return firstNumber - secondNumber
}

function multiply(firstNumber,secondNumber){
  return firstNumber * secondNumber
}

function division(firstNumber,secondNumber){
  return firstNumber / secondNumber
}


function convertStringToNumber(number){
  if (!number){
    number = 0;
  }
  return parseFloat(number)
}


function realizaOperacao(tipoDeOperador){
  let result
  switch(tipoDeOperador){

    case "+":
      result = sum(firstNumber,secondNumber)
      console.log("result  " + result)
      showScreen(result)
      visorIsResult = true;
      firstNumber = result
     
      
      break

    case "-":
      result = subtrai(firstNumber,secondNumber)
      console.log("result  " + result)
      showScreen(result)
      console.log(firstNumber + " - " + secondNumber)
      visorIsResult = true;
      firstNumber = result
     
      break

    case "*":
      result = multiply(firstNumber,secondNumber)
      console.log("result  " + result)
      showScreen(result)
      visorIsResult = true;
      firstNumber = result
     
      break

    case "/":
      result = division(firstNumber,secondNumber)
      console.log("result  " + result)
      showScreen(result)
      visorIsResult = true;
      firstNumber = result
     
      break

     

    default:
      console.log("outra operação")
  }
}

function verifyTypeNumber(tipoDeOperador){

  if (firstNumber == null){
    firstNumber = visor.innerHTML
    console.log("First = " + firstNumber)
    visor.innerHTML = ""
  }
  else {

    if (visorIsResult == false){
      console.log("----")
      secondNumber = visor.innerHTML
      console.log("SECOND= " + secondNumber)
      visor.innerHTML = ""
      
      
      firstNumber = convertStringToNumber(firstNumber)
      secondNumber = convertStringToNumber(secondNumber)
      console.log("OPERADOR é " + firstNumber +  tipoDeOperador  + secondNumber)
      realizaOperacao(tipoDeOperador)
    }

  }

}

function captureValueOperator(value){
  
  if (value == "="){
    verifyTypeNumber(operator)
    visorIsResult = true;
  }

  if (value == "+"){
    verifyTypeNumber(operator)
    operator = "+"
  }

  if (value == "-"){
    verifyTypeNumber(operator)
    operator = "-"
    
  }

  if (value == "/"){
    verifyTypeNumber(operator)
    operator = "/"
   
  }

  if (value == "*"){
    verifyTypeNumber(operator)
    operator = "*"

  }

  if (value == "c"){
    visor.innerHTML = ""
    firstNumber= null;
    secondNumber= null;
    operator = null;
    visorIsResult = false;
  }
}