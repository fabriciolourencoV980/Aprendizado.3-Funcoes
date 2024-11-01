const pessoa = {
    saudação: 'Bom dia!',
    falar(){
        console.log(this.saudação)
    }
};

pessoa.falar();
const falar = pessoa.falar;
falar(); //Conflito entre paradigmas: funcional e OO

//O método bind() em JavaScript cria uma nova função com o valor de this fixado para o valor fornecido. Ele é útil para fixar o contexto de this em uma função, especialmente em situações onde o valor de this pode mudar, como ao passar uma função como callback ou ao usar métodos de objetos em outros contextos.

const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa();