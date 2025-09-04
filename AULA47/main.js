//const numeros = [2,34,65,7,8,87,12,34]

//const total = numeros.reduce((acumulador, valor, indice,array)=>{
//    acumulador += valor;
//    console.log(acumulador,valor);
//    return acumulador;
//},0);//Muito importnante esse 0, ele faz o acumulador nao receber o primeiro numero como valor;
//const pares = numeros.filter(valor => valor%2==0);
//console.log(pares)
//const dobro = numeros.map(valor => valor*2)
//console.log(dobro)

const pessoas=[
    {nome: 'Luiz',idade:45},
    {nome: 'Fabiano',idade:56},
    {nome: 'Malcon',idade:23},
    {nome: 'Cleide',idade:34},
    {nome: 'Carter',idade:32},
    {nome: 'Julio',idade:90},
]
const muchOld = pessoas.reduce((acumulador,valor)=>{
   if(acumulador.idade>valor.idade){
    console.log(acumulador)
    return acumulador;
   } 
   console.log(valor)
   return valor;
   
});
