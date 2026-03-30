const botao = document.querySelector("#btnEnviar");

botao.addEventListener("click", function () {

    const caixa = document.querySelector(".caixa");

    botao.style.position = "absolute";

    const largura = caixa.clientWidth - botao.clientWidth;
    const altura = caixa.clientHeight - botao.clientHeight;

    const x = Math.random() * largura;
    const y = Math.random() * altura;

    botao.style.left = x + "px";
    botao.style.top = y + "px";

});


function irExcluir(){
    window.location.href = "trool.html";
}