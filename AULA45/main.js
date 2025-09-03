//filter
//retorne os maiores que 10
const numeros = [5,50,80,1,2,3,4,5,6,71];
//function callbackFilter(valor){
//    return valor > 10;
//}
const num = numeros.filter(valor => valor>10);
//const num = numeros.filter((valor,indice,array)=>{
//    console.log(valor,indice,array);
//    return valor > 10;
//});
console.log(num);
const pessoas= [
    {nome: 'Luiz',idade:62},
    {nome: 'Amanda',idade:23},
    {nome: 'Pedro',idade:55},
    {nome: 'Yasmin',idade:19},
    {nome: 'Italo',idade:62},
    {nome: 'Maicon',idade:62}
]
const morefifty = pessoas.filter(obj => obj.idade>50)
const bigName = pessoas.filter(obj => obj.nome.length>=5)
const lastnameA = pessoas.filter(obj => obj.nome.slice(obj.nome.length-1,obj.nome.length)=='a')
//tolowercase()
//endsWith()
//console.log(morefifty)
//console.log(bigName)
console.log(lastnameA)