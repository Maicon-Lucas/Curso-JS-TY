function monstraHora(){
    let data = new Date();
    return data.toLocaleTimeString('pt-BR',{
        hour12:false
    });
}
/*function intervalo(){
    console.log(monstraHora());
}*/
const timer = setInterval(function(){
    console.log(monstraHora())
},1000);

setTimeout(function(){
    clearInterval(timer);
},5000)
