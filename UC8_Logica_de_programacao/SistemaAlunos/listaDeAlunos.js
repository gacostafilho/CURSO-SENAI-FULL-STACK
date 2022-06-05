//let listaAlunos = ['João','Fernanda','Ana','Aldo']

/*let numeroAlunos = 10

for (let i=0; i < numeroAlunos; i++){
    
    if (i == 0){
        console.log("n° " + i +  " é zero")
    }
    else if (i%2 == 0 && i > 0) {
        console.log("n° " + i + " é par")
    }
    else{
        console.log("n° " + i +  " é ÍMpar")
    }
}*/

let listaAlunos = ['João','Fernanda','Ana','Aldo']

for (let x of listaAlunos){
    i = listaAlunos.indexOf(x)
    if (i == 0){
        console.log("Alun@ "+ x +' está na posição '+ i)
    }
    else if (i%2 == 0 && i > 0) {
        console.log("Alun@ "+ x +' está na posição '+ i +' par')
    }
    else{
        console.log("Alun@ "+ x +' está na posição '+ i +' impar')
    }
}
