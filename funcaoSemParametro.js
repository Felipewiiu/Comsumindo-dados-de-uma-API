// Outras formas de se escrever uma função anonima em relação a parâmetros

// Essa função vai retornar o nome de uma comunidade

const comunity = () => {
    return 'CollabCode'
}

// variação tirando a palava return

const comunity2 = () => "collabcode2"

console.log(comunity2())

//Se a arrow function possuir apenas um parâmetro ela pode ser escrita sem os parênteses 

const regiao = estado =>  "Bem vindo ao " + estado // estado poderia estar entre parênteses mas é opcional

// Sem os bigodes não precisa d apalra returno

console.log(regiao("Rio de janeiro"))