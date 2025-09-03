const nome=['Luiz ','otavio','henrique'];

//for(i=0;i<nome.length;i++){
//    console.log(nome[i])
//}
//for(let i in nome){
//    console.log(nome[i]);
//}
for (let valor of nome){
    console.log(valor);
}
nome.forEach(function(el,indice,array){
    console.log(el,indice,array)
})
