function atualizarDataHora() {

    const agora = new Date();

    const opcoes = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    };

    const data =
        agora.toLocaleDateString(
            'pt-BR',
            opcoes
        );

    const hora =
        agora.toLocaleTimeString(
            'pt-BR'
        );

    document.getElementById("relogio")
        .textContent =
        `${data} • ${hora}`;
}

setInterval(atualizarDataHora, 1000);

atualizarDataHora();
