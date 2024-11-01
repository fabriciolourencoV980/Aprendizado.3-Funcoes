function pessoa(){
    this.idade = 0 

    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }.bind(this), 1000)
};

new pessoa 

//setInterval() é uma função em JavaScript que executa repetidamente uma função ou bloco de código em um intervalo de tempo especificado (em milissegundos), até que seja cancelada com clearInterval(). É útil para tarefas que precisam ser executadas de forma repetitiva, como atualizações de interface ou contadores.