function getDayWeekText(diaSemana){
    let dia;
    switch(diaSemana){
    case 0:
        dia = 'Domingo';
        return dia;
    case 1 :
        dia = 'Segunda';
        return dia;
    case 2 :
        dia = 'Terca';
        return dia;
    case 3 :
        dia = 'Quarta';
        return dia;
    case 4 :
        dia = 'Quinta';
        return dia;
    case 5 :
        dia = 'Sexta';
        return dia;
    case 6 :
        dia = 'Sabado';
        return dia;
    default:
        dia = '';
    }
} 


const data = new Date();
const diaSemana = data.getDay();
const diaSemanaTexto = getDayWeekText(diaSemana);
console.log('Hoje e ',diaSemanaTexto);