/*try{
    console.log(a);
    console.log('Abri um arquivo');
    console.log('manipulei o arquivo e gerou erro');
    console.log('fechei o arquivo');
} catch (e){
    console.log('tratando o erro');
}finally{
    //sempre
    console.log(' FINALLY:eu sempre sou executado')
}*/

function retornaHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError('Espero instancia de date');
    }
    if(!data){
        data = new Date;
    }
    return data.toLocaleTimeString('pt-BR',{});
}
try{
    const data = new Date('01-01-1970 12:58:12');
const hora  = retornaHora(data);
console.log(hora);
} catch(e){
    //tratar erro
}finally{
    console.log('tenha um bom dia ')
}
