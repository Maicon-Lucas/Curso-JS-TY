//const num = [5,50,80,43,23,4,6,56,87];
//const dobro = num.map(valor => valor*2);
//console.log(dobro)
//for(valor of dobro) console.log(valor);
const pessoas = [
{nome: 'Luiz', idade:61},
{nome: 'Cleber', idade:12},
{nome: 'Fernando', idade:15},
{nome: 'Otavio', idade:89},
{nome: 'Jasmini', idade:67},
{nome: 'Fernanda', idade:45}
]
const pessoasAlteradas = pessoas.map(obj =>obj.nome)
const removeNome = pessoas.map(obj=> ({idade: obj.idade}));

const id = pessoas.map((obj,indice)=>{
    const newObj = {...obj};
    newObj.id = (indice+1);
    return newObj;
})
console.log(id);
console.log(pessoas)