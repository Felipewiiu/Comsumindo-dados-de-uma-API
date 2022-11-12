var consultaCep = fetch('https://viacep.com.br/ws/01001000/json/') // um fetch com o endereço da API
.then(resposta => resposta.json()) // isso é uma conversão
.then(r => {
    if (r.erro){
        throw Error('Esse cep não existe')
    }else{
        console.log(r)}
    })
.catch(erro => console.log(erro))
.finally(mensagem => console.log('Processamento concluido'))

// ---------------------------------------------------------------------------------------------------


let ceps = ["01001000", "01001001"]
let conjuntoDeCeps = ceps.map(valores => buscaEndereco(valores))
console.log(conjuntoDeCeps)
Promise.all(conjuntoDeCeps).then(respostas => console.log(respostas))


console.log(consultaCep)
