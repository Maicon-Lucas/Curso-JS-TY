const inputTarefa = document.querySelector('.input');
const btnTarefa = document.querySelector('.btn-adc');
const tarefas = document.querySelector('.tarefas');

function CriaLi(){
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress',function(e){
    if(e.keycode === 13){
        if (!inputTarefa) return;
        criaTarefa(inputTarefa.value);
    }
});


function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBtnApagar(li){
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'apagar';
    //botaoApagar.classList.add('apagar');
    botaoApagar.setAttribute('class','apagar');
    botaoApagar.setAttribute('title','Apagar esta tarefa');
    li.appendChild(botaoApagar);
}

function criaTarefa(textoInput){
    const li = CriaLi();
    li.innerText=textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBtnApagar(li);
    salvarTarefas();
}

btnTarefa.addEventListener('click',function(e){
    if(!inputTarefa) return;
    criaTarefa(inputTarefa.value);
    
});

document.addEventListener('click',function(e){
    const el = e.target;
    if(el.classList.contains('apagar')){
        el.parentElement.remove();
        salvarTarefas();
    }
});
function salvarTarefas(){
    const liTarefas = document.querySelectorAll('li');
    const listadeTarefas = [];
    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('apagar','').trim();
        listadeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listadeTarefas);
    localStorage.setItem('tarefas',tarefasJSON)
}
function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const ListadeTarefas = JSON.parse(tarefas);
    for(let tarefa of ListadeTarefas){
        criaTarefa(tarefa);
    }
}
adicionaTarefasSalvas();