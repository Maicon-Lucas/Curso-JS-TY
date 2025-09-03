/*try{
    console.log(naoExisto)
} catch(err){
    console.log('naoExisto nao existe')
}*/

const { error } = require("qrcode-terminal");

function soma(x,y){
    if(typeof x !== 'number' || typeof y !=='number'){
        throw new error('x e y precisam ser numeros');
    }

    return x+y;
}

try{
    console.log(soma(1,3));
    console.log(soma(7,9));
} catch(error){
    console.log(error);
}
    