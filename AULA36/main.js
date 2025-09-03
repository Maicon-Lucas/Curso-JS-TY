//Factory Function
function criaPessoa(nome, sobrenome,peso,altura){
    return {
        nome,
        sobrenome,
        fala(assunto){
            return`${nome} tem altura ${this.altura} ${assunto} e pesa ${this.peso}.`;
        },
        peso:peso,
        altura:altura,
        //getter
        get imc(){
            const indice = this.peso/(this.altura**2);
            return indice.toFixed(2);
        },
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
            
        },
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome  = valor.shift();
            this.sobrenome = valor.join();
            console.log(valor);
        }
    };
}

const p1 = criaPessoa('Luiz','Otavio',1.8,80);
p1.nomeCompleto = 'Maria Oliveira Silva';
console.log(p1.nomeCompleto);
/*const p1 = criaPessoa('Luiz','Otavio',98,1.8);
console.log(p1.nomeCompleto);
console.log(p1.imc);
const p2 = criaPessoa('Maria','Joaquina',60,1.70);
console.log(p2.fala('falando sobre JS'));
console.log(p2.imc);*/
//Constructor Factor