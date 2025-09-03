const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosbody = getComputedStyle(document.body);
const backgroundColorBody = estilosbody.backgroundColor;

for (let p of ps){
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#fff'
    p.style.borderRadius = '20px';
}
