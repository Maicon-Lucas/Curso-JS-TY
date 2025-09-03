const pessoal = {
    nome:'Luiz',
    Sobrenome:'Miranda',
    idade:25
,    fala(){
    console.log(`Minha idade atual é ${this.idade}`)
    },
    incrementaIdade(){
        this.idade++;
    }
};
pessoal.fala();
pessoal.incrementaIdade();
pessoal.fala()