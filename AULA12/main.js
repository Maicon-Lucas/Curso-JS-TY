const pessoa={
    nome:'Luiz',
    sobrenome:'Figueredo',
    idade: 30, 
    endereco:{
        rua:'Av Brasil',
        numero: 320
    }
};
/*const { nome,sobrenome,idade } = pessoa;
console.log(nome);
const {nome: teste = ''} = pessoa;
console.log(pessoa);
console.log(teste);

const{
    endereco:{rua:r=12345,numero}
    ,endereco}
    = pessoa;
console.log(r, numero,endereco);*/

const{nome,...resto} = pessoa;
console.log(nome,resto);