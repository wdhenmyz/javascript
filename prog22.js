var notas = [
    [['Alan'],[8],[5.5],[3.2],[3.5]],
    [['Alex'],[7],[6.5],[10],[0]],
    [['Alisson'],[2],[1.5],[8],[0]],
    [['David'],[5],[7],[8],[9]],
    [['Daniel'],[10],[10],[0],[5]]
];

//pegue o numero de notas 1
console.log(notas)

//calcular a soma das notas 2
function soma(){
for (var i=0;i<notas.length;i++){
    acum=0;
    for (var j=1;j<notas[0].length;j++){
        acum=acum+Number(notas[i][j]);
    }
    console.log(acum)
  } 
}
soma()

//calcule a média 3 = 2/1
function media()
media()