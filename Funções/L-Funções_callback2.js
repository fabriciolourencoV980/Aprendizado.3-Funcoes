const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.1];

// Sem callback 

const notasBaixas1 = []
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas1.push(notas[i])
    };
};

console.log(notasBaixas1); 

// Com Callback

const notasAltas2 = notas.filter(function(nota){
    return nota < 7
}); 

console.log(notasAltas2); 

const notasAltas3 = notas.filter(nota => nota > 7);
console.log(notasAltas3)