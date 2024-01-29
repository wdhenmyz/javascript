INICIAR 
    FAZER palavraMisteriosa = [j,a,v,a,s,c,r,i,p,t], palavraUsuario[]
    FAZER inputUsuario=0 ;
    FAZER contador
    ENQUANTO (palavraUsuario!=palavraMisteriosa) FAÇA{
        LER inputUsuario
        FAZER palavraUsuario.push(inputUsuario);
            SE palavraUsuario[inputUsuario] == palavraMisteriosa[contador];
            ESCREVER palavraMisteriosa [contador];
                SENAO contador++;

}
FINALIZR