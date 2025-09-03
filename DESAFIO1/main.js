const btn = document.querySelector('.btn');
btn.addEventListener('click',()=>{
    let inputCelsius = document.querySelector('.inputCelsius').value;
    const cel = document.querySelector('.cel');
    let inputFarh  = document.querySelector('.inputFarh').value;
    const farh = document.querySelector('.farh');
    inputCelsius = converteCF(inputCelsius);
    inputFarh = converteFC(inputFarh);

    cel.innerHTML += `<p>${inputCelsius}</p>`;
    farh.innerHTML+= `<p>${inputFarh}</p>`;
    
})
//coverter Celsius para Fahr
function converteCF(c){
f = (c*9/5)+32;
return f;
}
function converteFC(f){
    c = (f-32)*5/9;
    return c;
}