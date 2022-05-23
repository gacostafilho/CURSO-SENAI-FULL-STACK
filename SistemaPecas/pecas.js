let listaDePreco = ["Filtro de Ar","Motor","Disco de Freio"]

if(listaDePreco.length < 10){
    console.log("É possível cadastrar mais peças!!")
}
else{
    console.log("Capacidade insuficiente, não é possível cadastrar mais peças.")
}

let peso = 101

if(peso < 100){
    console.log("Peça deve pesar pelo menos 100g")
}
else {
    console.log("A peça possui o peso adequado")
}

let nomePeca = "Disco de freio"

if (nomePeca.length >= 3) {
    console.log("Nome da peça adequado para cadastro")
}
else if(nomePeca.length == 0){
    console.log("O nome da peça no pode ser vazio.")
}
else {
    console.log("O nome da peça deve ter no mínimo 3 caracteres")
}

switch (nomePeca.length){
    case 0:
        console.log("O nome da peça no pode ser vazio.")
        break
    case 3:
        console.log("Nome da peça adequado para cadastro")
        break
}