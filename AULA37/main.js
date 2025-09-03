function criaCalculadora(){
    return{
        display: document.querySelector('.display'),




        inicia(){
            this.cliqueBotoes();
        },
        cliqueBotoes(){
            //this->calculadora
            document.addEventListener('click', e =>{
                const el = e.target;
                if(el.classlist.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }
            });
        },
        btnParaDisplay(valor){
            this.display.value += valor;
        }
    };
}
const calculadora = criaCalculadora();
calculadora.inicia();