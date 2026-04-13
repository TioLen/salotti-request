const btnEnviar = document.querySelector("#btnEnviar");

const btnCancelar = document.querySelector("#btnCancelar");

    

if (btnEnviar) {
    btnEnviar.addEventListener("click", function() {
        console.log("%c Transmissão Iniciada...", "color: #00f2ff; font-weight: bold;");
        alert("Acesso autorizado. Sistema carregando...");
    });
    // btnEnviar.addEventListener("click", function() {
    //     alert(" Sucesso! Sua solicitação foi enviada.");
    // });
}

if (btnCancelar) {
    btnCancelar.addEventListener("click", function() {
        const confirmacao = confirm("Tem certeza que deseja cancelar?");
        if (confirmacao) {
            alert(" Operação cancelada.");
        }
    });
}

