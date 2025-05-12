const noticias = [
    {
        id: 1,
        titulo: "Sarney vai à posse de Gleisi e é tietado por ministros e petistas",
        imagem: "img1.webp",
        link: "https://www.poder360.com.br/poder-gente/sarney-vai-a-posse-de-gleisi-e-e-tietado-por-ministros-e-petistas/"
    },
    {
        id: 2,
        titulo: "Estudante da Universidade de Columbia é preso nos EUA e Trump reage",
        imagem: "img2.avif",
        link: "https://g1.globo.com/mundo/noticia/2025/03/10/estudante-da-universidade-de-columbia-e-preso-nos-eua-e-trump-diz-primeira-de-muitas-que-virao.ghtml"
    },
    {
        id: 3,
        titulo: "Haddad fala sobre acordo Mercosul-União Europeia",
        imagem: "haddad.avif",
        link: "https://g1.globo.com/economia/noticia/2025/03/31/ninguem-vai-ganhar-100percent-senao-nao-seria-acordo-diz-haddad-ao-defender-mercosul-e-uniao-europeia.ghtml"
    },
    {
        id: 4,
        titulo: "Neymar desabafa durante preleção do Santos",
        imagem: "img5.jpg",
        link: "https://www.espn.com.br/futebol/santos/artigo/_/id/14898551/neymar-desabafa-chora-durante-prelecao-santos-antes-eliminacao-paulista-voces-nao-sabem-desespero-esta-coracao"
    },
    {
        id: 5,
        titulo: "Santos tem cautela para usar reforço mais caro",
        imagem: "img6.webp",
        link: "https://www.itatiaia.com.br/esportes/futebol/santos/2025/03/10/entenda-por-que-santos-tem-cautela-para-utilizar-reforco-mais-caro-do-elenco"
    }
];

function carregarNoticia() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));
    const noticia = noticias.find(n => n.id === id);

    if (noticia) {
        document.getElementById("titulo").innerText = noticia.titulo;
        document.getElementById("imagem").src = noticia.imagem;
        document.getElementById("link").href = noticia.link;
    } else {
        document.getElementById("titulo").innerText = "Notícia não encontrada";
    }
}

window.onload = carregarNoticia;