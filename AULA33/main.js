function retornaFuncao(nome){
    return function(){
        return nome;
    };
}

const funcao = retornaFuncao(jair);
console.dir(funcao());