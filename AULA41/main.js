function* generator1(){
    //cod qualquer
    yield 'Valor 1';
    //cod qualquer
    yield 'Valor 2';
    //cod qualquer
    yield 'Valor 3';
}
function* generator2(){
    //gerador infinito
    let i = 0;
    while(true){
        yield i;
        i++
    }
}
function* generator3(){
    
    yield 0;
    yield 1;
    yield 2;
}
function* generator4(){
    yield* generator3();
    yield 3;
    yield 4;
    yield 5;
}
const g4 = generator4();
//for(let i of g4){
//    console.log(i);
//}
function* generator5(){
    yield ()=>{
        console.log('Vim do y1');
    }

    yield ()=>{
        console.log(9+6);
    }
}
const g5 = generator5();
let f1 = g5.next().value;
let f2  = g5.next().value;
f1();
f2();
console.log(`${f1} and ${f2}`)
//const g2 = generator2();
//quanto mais consoles logs mais valores
///console.log(g2.next().value)
//const g1 = generator1();
//for (let valor of g1){
//    console.log(valor);
//}
// o for sabe quando termina
//console.log(g1.next().value);
//console.log(g1.next().value);
//console.log(g1.next().value);