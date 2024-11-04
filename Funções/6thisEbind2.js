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

//O método bind() em JavaScript cria uma nova função com o valor de this fixado para um valor específico, o que ajuda a garantir que this mantenha o mesmo valor mesmo quando a função é chamada em um contexto diferente. Isso é útil, especialmente ao passar métodos de objetos como callbacks, onde o valor de this pode mudar.