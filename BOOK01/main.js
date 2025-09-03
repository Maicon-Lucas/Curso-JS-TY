/*let book = {
    nome: 'Jaison',
    idade: 90
};
console.log(book);
book.author = 'palio';
book.peso = 89;
book.contents ={};
book.contents.rules = 90;
console.log(book);*/

function fatorial(num){
    let cont = 1;
    while(num>1){
        cont*=num;
        num--;
    }
    console.log(cont);
}
fatorial(4);