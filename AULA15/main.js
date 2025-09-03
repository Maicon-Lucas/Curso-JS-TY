const frutas = ['melancia','maca','uva'];

for(indece in frutas){
   console.log(frutas[indece])
}
//for in le o indeces do objetos
const pessoa = {
    nome:'maicon',
    idade:89,
    peso:75
};
for(let chave in pessoa){
    console.log(chave,pessoa[chave]);
}