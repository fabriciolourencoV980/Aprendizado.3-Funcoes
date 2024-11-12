//Maneira 1 - mais prática, utilizando a função construtora

function operacoes(a, b){
 {
    return{
        soma: a + b,
        subtração: a - b,
        multiplicação: a * b,
        divisão: a / b, 
    } 
 }
};
console.log(operacoes(1, 5));

//Maneira 2 - mais extensa utilizando arrow function 

const soma = (a, b) => a + b; 
const subtração = (a, b) => a - b;
const multiplicação = (a, b) => a * b;
const divisão = (a, b) => a / b;

console.log(soma(2, 5));
console.log(subtração(5, 2)); 
console.log(multiplicação(2, 5));
console.log(divisão(5, 2)); 