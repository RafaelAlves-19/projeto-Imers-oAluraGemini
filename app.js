function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")

    let campoPesquisa = document.getElementById("campo-pesquisa").value 

    if (!campoPesquisa) {
        section.innerHTML = "<p> Nada foi encontrado </p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    for (let dado of dados) { 
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descrição.toLowerCase()
        tags = dado.tags.toLowerCase()

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <div class="image">
                    <img src=${dado.imgSrc} alt=${dado.titulo}>
                </div>
                <div class="description">
                    <h2> ${dado.titulo} </h2>
                    <p class="descricao-meta"> ${dado.descrição}</p>
                    <a href=${dado.link} target="_blank"> Mais informações </a>
                </div>
            </div>
            `
        }

    }
    
    if (!resultados) {
        resultados = "<p> Nada foi encontrado </p>"
    }

    section.innerHTML = resultados
}