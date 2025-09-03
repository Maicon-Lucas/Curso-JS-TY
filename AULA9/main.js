/*function textDay(day){
    let dia;
    switch(day){
        case 0:
            dia = 'Domingo';
            return dia;
        case 1:
            dia = 'Segunda-Feira';
            return dia;
        case 2:
            dia = 'Terca-Feira';
            return dia;
        case 3:
            dia = 'Quarta-Feira';
            return dia;
        case 4:
            dia = 'Quinta-Feira';
            return dia;
        case 5:
            dia = 'Sexta-Feira';
            return dia;
        case 6:
            dia = 'Sabado';
            return dia;
    }
}
function TextMonth(month){
    let mes;
    switch(month){
        case 0:
            mes = 'Janeiro';
            return mes;
        case 1:
            mes = 'Fevereiro';
            return mes;
        case 2:
            mes = 'Marco';
            return mes;
        case 3:
            mes = 'Abril';
            return mes;
        case 4:
            mes = 'Maio';
            return mes;
        case 5:
            mes = 'Junho';
            return mes;
        case 6:
            mes = 'Julho';
            return mes;
        case 7:
            mes = 'Agosto';
            return mes;
        case 8:
            mes = 'Setember';
            return mes;
        case 9:
            mes = 'Octuber';
            return mes;
        case 10:
            mes = 'November';
            return mes;
        case 11:
            mes = 'Dezember';
            return mes;
        
    }
}

const dataAtual= new Date();
const day = dataAtual.getDay();
const month = dataAtual.getMonth();
const diaMes = dataAtual.getDate();
const year = dataAtual.getFullYear();
const hour = dataAtual.getHours();
const minutes = dataAtual.getMinutes();


const dia = textDay(day);
const mes = TextMonth(month);
const addText = document.querySelector('.h1');
addText.innerHTML +=`<h1> ${dia},${diaMes} de ${mes} de ${year} ${hour}:${minutes} <h1>`;*/

const h1 = document.querySelector('.container h1');
const data = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};
console.log(h1);
h1.innerHTML = data.toLocaleDateString('pt-BR',opcoes);
console.log(h1);