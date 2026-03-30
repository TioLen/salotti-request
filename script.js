const botaoEnviar = document.querySelector("#btnEnviar");
const botaoExcluir = document.querySelector("#btnExcluir");
const caixa = document.querySelector(".caixa");

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
    location.reload();
});