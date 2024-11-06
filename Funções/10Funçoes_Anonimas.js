//Exemplos de Funções Anonimas 

const soma = function (x , y){
    return x + y
};

const imprimirReusltado = function (a, b, operacao = soma){
    console.log(operacao(a, b));
};

imprimirReusltado(3, 4);
imprimirReusltado(3, 4, soma);
imprimirReusltado(3, 4, function (x, y){
    return x - y
});
imprimirReusltado(3, 4, (x, y)=> x * y);

const pessoa = {
    falar: function (){
        console.log('Opa')
    }
};