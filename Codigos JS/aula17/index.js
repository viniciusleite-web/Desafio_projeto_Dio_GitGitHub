//const raiz = n => n ** 0.5;// Arrow function conhecido esprexão lambda 

const raiz = function(n){
    return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));
/*
function soma(x, y){
    const resultado = x + y;
    return resultado;
}
console.log(soma(2, 2));
console.log(soma(3 , 1));
console.log(soma(5, 10));
*/
/*
function saudacao(nome){
    return `Bom dia ${nome}!`;
}
const variavel = saudacao('Luiz');
console.log(variavel);
*/
/*
function saudacao(nome){
    console.log(`Bom dia ${nome}!`);
}
saudacao('Luiz');
*/
/*
function saudacao(){
    console.log('Bom dia!');
}
saudacao();
*/