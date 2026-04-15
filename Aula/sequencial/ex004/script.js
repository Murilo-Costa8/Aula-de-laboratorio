function inicio() {
    let nome = window.prompt('Qual é seu nome?')
    let res = window.document.getElementById('resultado')
    //também funciona com o comando abaixo
    // res = window.document.querySelector('section#resultado')
    res.innerHTML = `<p>Olá <strong>${nome}</strong>! É um grande prazer te conhecer👌</p>`
}