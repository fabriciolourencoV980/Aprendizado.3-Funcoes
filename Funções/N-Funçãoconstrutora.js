function carro(velocidadeMaxima = 200, delta = 5){
    //Atributo privado 
    let velocidadeAtual = 0;

    //Metodo Publico
    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    //Metodo publico 
    this.getVelocidadeAtual = function (){
        return velocidadeAtual
    }
};

const uno = new carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new carro(350, 20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof carro);
console.log(typeof ferrari); 