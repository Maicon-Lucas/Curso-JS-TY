/*function soma(a,b){
    return a+b;
}

console.log(soma(5,2));

function soma2(a,b){
    console.log(a+b);
}
 
soma2(5,2);

document.addEventListener('click', function(){
    document.body.style.backgroundColor = 'red';
});*/

/*function criaPessoa(nome,sobrenome){
    return{
        nome,
        sobrenome
    };
}
const p1 = criaPessoa('Luiz','Otavio');
console.log(p1);*/
/*function falaFrase(comeco){
    function falaResto(resto){
        return comeco +' '+resto;
    }
    return falaResto;
}

const olaMundo = falaFrase ('Ola');
const resto = olaMundo('Mundo')
console.log(resto);*/
/*function duplica(n){
    return n*2;
}
function triplica(n){
    return n*3;
}
function quadriplica(n){
    return n*4;
}*/

function criaMultiplicador(Multiplicador){
    function multiplicacao(n){
        return n * Multiplicador;
    }
    return multiplicacao
}
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
console.log(duplica(80),triplica(70));




//console.log(duplica(6),triplica(8),quadriplica(80));