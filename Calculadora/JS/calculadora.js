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
      secondNumber = null
      return

    case "-":
      result = subtrai(firstNumber,secondNumber)
      console.log("result  " + result)
      showScreen(result)
      visorIsResult = true;
      firstNumber = result
      secondNumber = null
      return

    case "*":
      result = multiply(firstNumber,secondNumber)
      console.log("result  " + result)
      showScreen(result)
      visorIsResult = true;
      firstNumber = result
      secondNumber = null
      return

      case "/":
        result = division(firstNumber,secondNumber)
        console.log("result  " + result)
        showScreen(result)
        visorIsResult = true;
        firstNumber = result
        secondNumber = null
        return

    default:
      console.log("outra operação")
  }
}

function verifyTypeNumber(tipoDeOperador){

  if (!firstNumber){
    firstNumber = visor.innerHTML
    console.log("capturando o fisrtnumber = " + firstNumber)
    visor.innerHTML = ""
    
  }
  else {
    secondNumber = visor.innerHTML
    console.log("capturando o secund = " + secondNumber)
    visor.innerHTML = ""
    
    console.log("fazer a soma do  " + firstNumber + " + " + secondNumber)
    firstNumber = convertStringToNumber(firstNumber)
    secondNumber = convertStringToNumber(secondNumber)

    realizaOperacao(tipoDeOperador)

 }

}

function captureValueOperator(value){
  
  if (value == "="){
    verifyTypeNumber(operator)
    visorIsResult = true;
  }

  if (value == "+"){
    operator = "+"
    verifyTypeNumber(operator)
  }

  if (value == "-"){
    operator = "-"
    verifyTypeNumber(operator)
    console.log("esse é o -")
  }

  if (value == "/"){
    operator = "/"
    verifyTypeNumber(operator)
    console.log("esse é o /")
  }

  if (value == "*"){
    operator = "*"
    verifyTypeNumber(operator)
    console.log("esse é o *")
  }

  if (value == "."){
    verifyTypeNumber(operator)
    console.log("esse é o .")
  }

  if (value == "c"){
    visor.innerHTML = ""
    firstNumber= null;
    secondNumber= null;
    operator = null;
    visorIsResult = false;
  }
}