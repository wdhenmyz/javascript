var somaDeNotas = [];
var mediaDosAlunos = [];
var nomeDosAlunos = [];
var notas = [
    [['Alan'],[8],[5.5],[3.2],[3.5]],
    [['Alex'],[7],[6.5],[10],[0]],
    [['Alisson'],[2],[1.5],[8],[0]],
    [['David'],[5],[7],[8],[9]],
    [['Daniel'],[10],[10],[0],[5]]
];

//descobre o número de notas
function quantidadeDeNotas(){
    var tamanho=notas[0].length-1;
    return tamanho;
}

//descobre o número de alunos
function quantidadeDeAlunos(){
    var tamanho=notas.length;
    return tamanho;
}

//calcular o acumulado das notas de cada aluno
function somarNotas(){
    for(var i=0;i<quantidadeDeAlunos();i++){
        var acum=0;
        for (var j=1;j<=quantidadeDeNotas();j++){//varre os índices do vetor que está na posição i (vetor interno) 
            acum=acum+Number(notas[i][j]);
        }
        somaDeNotas[i]=acum;
    }
    return somaDeNotas;
}

//monta um vetor com os nomes dos alunos
function recuperarNomes(){
    for(var i=0;i<quantidadeDeAlunos();i++){
        nomeDosAlunos[i]=notas[i][0];
    }    
    return nomeDosAlunos;
}

//faz o cálculo da média dos alunos
function calculaMediaDosAlunos() {
    //chamo a função somarNotas() para ter o acumulado de notas
    soma=somarNotas(); 
    for (var i = 0; i < quantidadeDeAlunos(); i++) {
        mediaDosAlunos[i]=soma[i]/quantidadeDeNotas();
    }
    return mediaDosAlunos;
}

//escreve o resultado na tela
function escreverResultado() {
    //chama as funções que calcula as médias e que recupupera os nomes
    calculaMediaDosAlunos();
    recuperarNomes(); 
    for (var i = 0; i < quantidadeDeAlunos(); i++) {
        console.log("O aluno " + nomeDosAlunos[i] + " ficou com média final " + mediaDosAlunos[i]);
    }
}

//escreve o resultado, por índice, na tela
function escreverResultadoPorIndice(index) {
    //chama as funções que calcula as médias e que recupupera os nomes
    calculaMediaDosAlunos();
    recuperarNomes(); 
    //testando um "fstring"
    return "O aluno, índice "+ index +", é "+ nomeDosAlunos[index] + " ficou com média final " + mediaDosAlunos[index];
}

//chamada da função
escreverResultado();

//chamada da função por índice
console.log(escreverResultadoPorIndice(2));