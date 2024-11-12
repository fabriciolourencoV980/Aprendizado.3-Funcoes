/* Meu modelo

function criarProdutos(nome, preco){
    this.nome = nome;
    this.preco = preco;
};

const produtos = new criarProdutos('Caneta','9,88')
console.log(produtos.nome, produtos.preco)*/

function criarProdutos (nome, preco){
    return {
        nome, 
        preco,
        desconto: 0.1
    }
};

console.log(criarProdutos('Notbook', 2199.49));
console.log(criarProdutos('Celular', 1199.49));