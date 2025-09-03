//Declaracaq de funcao(function hoisting)
function falaOi(){
    console.log('oi');
}
falaOi();
// First-class objects (objetos de primeira classe)
const nome = 'luiz';
const souUmdado = function(){
    console.log('sou um dado.');
};
souUmdado();

function executaFuncao(funcao){
    funcao();
}
executaFuncao(souUmdado);

//Arrow function
const arrow =()=>{
    console.log('sou uma arrow function');
}
arrow();

//Dentro de um objeto 
const obj = {
    falar(){
        console.log('estou falando...')
    }
};
obj.falar();