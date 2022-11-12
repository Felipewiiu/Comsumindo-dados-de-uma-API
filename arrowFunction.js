// ENTENDENDENDO ARROW FUNCTION

// Sobre arrow function: https://youtu.be/3EkS9-P3cIM

// Uma arrow function precisa ser criada dentro de uma cosntante se precisar chamar ela, pois ela por padrão é anônima
// e não pode ser chamada

// const numero = () => {
//     return console.log("Exemplo aqui!!")
// }

// USANDO UMA ARROW FUNCTION COM RETORNO ELA PRECISA DAS CHAVES


const funcaoAnonima = (numero1, numero2) => {
    return numero1 + numero2
}

console.log(funcaoAnonima(5,3))


// PARA USAR A ARROW FUNCTION SEM RETORNO BASTA NÃO USAR AS CHAVES PARA O SECOPO SER GLOBAL

const funcao2 = (numero2, numero3) => numero2 + numero3

console.log(`essa é o resultado da função sem bigodes ${funcao2(1,2)}`)

// Essa mesma função poderia ser escrita da seguinte forma mais verbosa

// const funcao2 = (numero2, numero3) =>{
//     return numero2 + numero3
// }
    

//Nota: o que eu escrevia dentro das chaves eu posso escrever depois da flechinha