//Funcao construtora -> objetos
//uncao fabrica -> objetos
//construtora -> Pessoa(new)
function Pessoa(nome,sobrenome){
    //privadas
    const ID = 123456;
    const metodoInterno = function{
        
    };
    this.nome = nome,
    this.sobrenome = sobrenome;
    this.metodo = function(){
        console.log(this.nome+': Sou um metodo');
    }
}
const p1 = new Pessoa('maicon','Lucas');
const p2 = new Pessoa('Jair','Messias');
console.log(p1.nome,p1.sobrenome);
p1.metodo();