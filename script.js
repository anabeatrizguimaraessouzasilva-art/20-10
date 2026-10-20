let nome = "Ana"
if(nome== "Ana"){
   exibirsaudação ("Ana") 
}else if (nome=="Maria"){
exibirsaudação("Maria")
} else if (nome=="Laura"){
    exibirsaudação("Laura")
}

function exibirsaudação(nome) {
    console.log( "Seja bem-vindo (a) "+ nome)
    console.log(nome)
    
}

//==================


function somarDoisNumeros (num1,num2){
      num1 + num2 
}

soma = somarDoisNumeros(1, 2 )

console.log("soma: " + soma)


//==================

let peso = 38
let altura= 1.55
let IMC = calcularIMC(peso,altura)
let classificação = classificarIMC(IMC)

function calcularIMC(peso,altura) {
    return peso / (altura * altura)
}

function classificarIMC(IMC) {
    if (IMC<= 18.5){
            return "abaixo do peso normal"

    } else if(IMC >18.5 && IMC <=24.9){
        return "peso normal"

    } else if(IMC> 24.9 && IMC<=29.9){
        return"Excesso de peso"

    } else if(IMC>29.9 && IMC<=34.9){
        return "obesidade grau 1"

    } else if(IMC>34.9 && IMC<=39.9){
        return "obesidade grau 2"

    } else{
        return "obesidade grau 3"
    }
    
} 
console.log( `o seu IMC é ${IMC}, sua classificação é ${classificação}`)