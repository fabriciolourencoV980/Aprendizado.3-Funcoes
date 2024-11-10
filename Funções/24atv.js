function calcularJurosSimples(capital, taxa, tempo){
    const juros = capital * (taxa / 100) * tempo
    return juros 

    
};

const capital = 20; 
const taxa = 12;
const tempo = 5;

console.log(calcularJurosSimples(capital, taxa, tempo));