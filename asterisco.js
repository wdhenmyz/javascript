//definir função
function escrevaAsterisco(){
    var tamanho = 7;
    for (var i = 1; i <= tamanho; i++){
        var linha = '';
        for (var j = 1; j <= i; j++){
            linha += '*';
        }
        console.log(linha);
    }
}
//definir quantas vazes a função vai se repitir
var repeticoes = 100;
function reproduzir(){
    //chamada da função
    for(var aux = 1; aux <= repeticoes; aux++){
        escrevaAsterisco();
    }

}

reproduzir();
