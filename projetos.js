async function listarProjetos() {
    const requisicao = await fetch("./projetos.json");
    const dados = await requisicao.json();
    const projetos = dados.projetos;

    const meusProjetos = document.getElementById("meusProjetos");

    projetos.forEach(function (projeto) {
        meusProjetos.insertAdjacentHTML("beforeend",
            `
            <article class="${projeto.corBorda}">
                <img src="${projeto.dirImg}" alt="${projeto.altImg}" class="imagemProjetos">
                <h3>${projeto.nome}</h3>
                <p>${projeto.descricao}</p>
                <p>${projeto.linguagemUtilizada}</p>
                <div>
                    <a href="${projeto.linkProjeto}" target="_blank">Acessar projeto</a>
                    <a href="${projeto.linkRepositorio}" target="_blank">Acessar rep Git</a>
                </div>
            </article>
            `
        )
    }
    )
}

listarProjetos();