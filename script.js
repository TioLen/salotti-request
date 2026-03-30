const botaoEnviar = document.querySelector("#btnEnviar");
const botaoExcluir = document.querySelector("#btnExcluir");
const botaoReload = document.querySelector("#btnReload");
const caixa = document.querySelector(".caixa");
const imagem = document.querySelector("img");

botaoEnviar.addEventListener("click", function () {

    botaoEnviar.style.position = "absolute";

    const largura = caixa.clientWidth - botaoEnviar.clientWidth;
    const altura = caixa.clientHeight - botaoEnviar.clientHeight;

    const x = Math.random() * largura;
    const y = Math.random() * altura;

    botaoEnviar.style.left = x + "px";
    botaoEnviar.style.top = y + "px";
});

botaoExcluir.addEventListener("click", function () {

    imagem.src = "./img/ogog.png";
    botaoEnviar.style.display = "none";
    botaoReload.style.display = "inline-block";

});

botaoReload.addEventListener("click", function () {
    location.reload();
});