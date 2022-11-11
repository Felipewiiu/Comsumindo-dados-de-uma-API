var consultaCep = fetch('https://viacep.com.br/ws/01001000/json/')
.then(resposta => resposta.json()) // isso é uma conversão
.then(r => console.log(r)) //then significa então faça ..........

console.log(consultaCep)
