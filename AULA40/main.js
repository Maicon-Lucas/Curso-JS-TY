function Calculadora(){
    this.display = document.querySelector('.display');
    this.capturaCliques = ()=>{
        document.addEventListener('click', event =>{
            const el = event.target;
            if (el.classList.contains('btn-num')) this.addNumDisplay();
            if (el.classList.contains('btn-clear')) this.clear();
            if (el.classList.contains('btn-del')) this.del();
            if (el.classList.contains('btn-eq')) this.realizaConta();
        });
    };
    this.addNumDisplay = el => this.display.value+= el.innerText;

    this.clear = ()=> this.display.value='';

    this.inicia = ()=>{
        this.capturaCliques();
        this.capturaEnter();
    }

    this.capturaEnter = ()=>{
        document.addEventListener('keyup',e=>{
            if(e.key !==13)return;
        })
    }

    this.del= ()=> this.display.value = this.display.value.slice(0,-1);

    this.realizaConta = ()=>{
        try{
            const conta = eval(this.display.value);
            if (!conta){
                alert('Conta invalida!!');
                return;
            }
            this.display.value = conta;
        }catch(e){
            alert('Conta invalida!!');
            return;
        }
    }
}

const Calculadora = new Calculadora();
Calculadora.inicia();