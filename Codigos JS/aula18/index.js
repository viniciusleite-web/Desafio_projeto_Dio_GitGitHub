const pessoa1 = {
    nome : 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala(){
        console.log(`A minha idade atual é ${this.idade}.`)
    },
    incrementaIdade(){
        this.idade++;
    }
};
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();

/*
function criarPessoa(nome,sobrenome,idade){
    return{nome,sobrenome,idade};
}
const pessoa1 = criarPessoa('Luiz','Miranda', 25);
const pessoa2 = criarPessoa('Maria','Oliveira', 32);
const pessoa3 = criarPessoa('João','Moreira', 55);

console.log(pessoa1.nome,pessoa1.sobrenome,pessoa1.idade);
console.log(pessoa2.nome,pessoa2.sobrenome,pessoa2.idade);
*/