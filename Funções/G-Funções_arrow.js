let dobro = function(a){
    return 2 * a
};

dobro = (a) => {
    return 2 * a 
};

dobro = a => 2 * a; // return implicito
console.log(dobro(Math.PI));

let ola = function (){
    console.log('Olá')
};

ola = () => 'Olá'
ola = _ => 'Olá' //Possui parametro
console.log(ola());