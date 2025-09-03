/*function funcao({nome,sobrenome,idade}){
    
    console.log(nome,sobrenome,idade);
}
funcao({nome:'ruiz',sobrenome:'Alvarez', idade:89});*/

/*function conta(operador,acumulador,...numeros){
    for(let num of numeros){
        acumulador +=num;
    }
    console.log(acumulador);
}
conta('+',0,20,30,40,50);*/

const conta = (operador,acumulador,...numeros) =>{
    console.log(operador,acumulador,...numeros);
};
conta('+',1,20,30,40,50)