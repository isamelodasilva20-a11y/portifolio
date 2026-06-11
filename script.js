function atualizarDataHora() {

    const elemento = document.getElementById("relogio");

    if (!elemento) return;

    const agora = new Date();

    const opcoes = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };

    const data = agora.toLocaleDateString("pt-BR", opcoes);
    const hora = agora.toLocaleTimeString("pt-BR");

    elemento.textContent = `${data} • ${hora}`;
}

atualizarDataHora();
setInterval(atualizarDataHora, 1000);
