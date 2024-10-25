function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'

    cartao.innerHTML = `
    <div class="cartao__conteudo">
    <h3>${categoria}</h3>
    <div class="cartao__conteudo__pergunta">
        <p>${pergunta}</p>
    </div>
    <div class="cartao__conteudo__resposta">
        <p>${resposta}</p>
    </div>
    </div>
    `

    let respostaEstaVisivel = false

    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel
        cartao.classList.toggle('active', respostaEstaVisivel)
    }
    cartao.addEventListener('click', viraCartao)


    container.appendChild(cartao)

}
criaCartao(
    'Astronomia',
    'Qual é o maior planeta do sistema solar?',
    'Júpiter'
)

criaCartao(
    'Quimica',
    'Qual é o elemento químico com o símbolo "O"?',
    'Oxigênio.'
)

criaCartao(
    'Geografia',
    'Qual é o continente onde fica o Egito?',
    'África.'
)

criaCartao(
    'Geografia',
    'Qual é a moeda usada nos Estados Unidos?',
    'Dólar.'
)