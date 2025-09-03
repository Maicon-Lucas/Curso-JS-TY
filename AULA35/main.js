//IIFE -> immediately invoked function expression
function qualquercoisa(){
    console.log(1122131);
}
qualquercoisa();

(function(idade, peso,altura){
    const sobrenome = 'jairo';
    function criaNome(nome){
        return nome + ' '+sobrenome;
    }
    function falaNome(){
        console.log(criaNome('Luiz'));
    }
    falaNome();
    console.log(idade,peso,altura); 
})(30,80,1.90);

const nome = 'qualquer coisa';