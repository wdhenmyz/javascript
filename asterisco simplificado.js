//função com um parãmetro
function escrevaAsterisco(tamanho){
    for (var i = 1; i <= tamanho; i++){
        var linha = '';
        for (var j = 1; j <= i; j++){
            linha += '*';
        }
        console.log(linha);
    }
}
//chamada da função com um argumento
escrevaAsterisco(7)