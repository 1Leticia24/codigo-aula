
let nome = prompt('Informe seu nome: ')
let idade = parseFloaat(prompt('Informe sua idade: '))

function nomeIdade (nome, idade){

    if(idade > 20){
        return(`${nome} tem ${idade} anos e é maior de idade!`)
    }else{
        return(`${nome} tem ${idade} anos e é menor de idade!`)
    }
}
console.log(nomeIdade(nome,idade));