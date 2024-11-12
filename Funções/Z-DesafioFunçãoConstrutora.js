//Minha resolução do Desafio:

function nome (nome){
    return{
       nome: `Meu nome é ${nome}`
    }
};

console.log(nome('Hello Word'));

//Resposta correta do curso:

function Pessoa (nome){
    this.nome = nome

    this.falar = function (){
        console.log(`Meu nome é ${nome}`)
    }
};

const p1 = new Pessoa('João');
p1.falar();