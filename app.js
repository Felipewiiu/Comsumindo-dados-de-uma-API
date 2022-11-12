//fazendo um código assincrono

async function buscaEndereco (cep){
    var mensagemErro = document.querySelector("#erro")
    mensagemErro.innerHTML = ""
   try { // significa tentar
    var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`) // um fetch com o endereço da API
    var consultaCepConvertida = await consultaCep.json()
    if(consultaCepConvertida.erro){
        throw Error("Cep não existente")
    }

    var cidade = document.querySelector("#cidade");
    var logradouro = document.querySelector("#endereco");
    var estado = document.querySelector("#estado");

    cidade.value = consultaCepConvertida.localidade
    logradouro.value = consultaCepConvertida.logradouro
    estado.value = consultaCepConvertida.uf
    
    console.log(consultaCepConvertida)
    return consultaCepConvertida
   } catch (erro){
    mensagemErro.innerHTML = `<p>Cep inválido tente novamente!</p>`
    console.log(erro)
   }
}


var cep = document.querySelector("#cep")

cep.addEventListener('focusout', () => buscaEndereco(cep.value))