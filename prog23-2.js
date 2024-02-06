const divisor = 11;
//e: vetor de numeros
//s: acumulador de numeros (numero inteiro)
function calculaAcumulador(vetorDeNumeros){
    var vetorDeNumeros;
    var tamanhoDoVetorDeNumeros = vetorDeNumeros.length;
    var acumulador = 0;

    for (let i=0;i<vetorDeNumeros.length;i++){
        console.log(vetorDeNumeros[i]);
    }
    //return (vetorDeNumeros);
    console.log(tamanhoDoVetorDeNumeros)
}

function calculaResto(acumulador){
    var acumulador;
    resto = acumulador % divisor;
    return resto;
}

function digitoVerificador(resto){
    var resto = calculaResto(acumulador);
    if(resto==0 || resto==1){
        return 0
    }else{
        return divisor-resto;
    }
}

function validarcpf(){

}

//saida = calculaResto(500)
//console.log(saida);
a = calculaAcumulador([3,0,0,0,7,6,2,5,0])
console.log(a)


