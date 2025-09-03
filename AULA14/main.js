const elementos = [
{tag:'p',texto:'Frase 1'},
{tag:'div',texto:'Frase 2'},
{tag:'footer',texto: 'Frase 3'},
{tag:'section',texto: 'Frase 4'},
];
/*function criaTag(tag,texto){
    const novatag = document.createElement(tag);
    novatag.textContent = texto;
    return novatag;
}
for(i=0;i<elementos.length;i++){
    criaTag(elementos[i]);
    console.log(elementos[i][i])
}*/

const container = document.querySelector('.container');
const div = document.createElement('div');

for(i=0;i<elementos.length;i++){
    let {tag, texto}= elementos[i];

    
    let novatag = document.createElement(tag);
    novatag.textContent=texto;
    div.appendChild(novatag);

}
// da escrever na tela:textContent,innerHtml,innerText;
container.appendChild(div);