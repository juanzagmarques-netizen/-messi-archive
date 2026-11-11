
const fontes = {
    messi: "https://messi.com/en/honours-and-achievements/",
    barcelona: "https://www.fcbarcelona.com/en/news/2214377/leo-messi/amp",
    estatisticas: "https://www.messistat.com/en",
    miami: "https://www.intermiamicf.com/"
};

const informacoes = {
    jogos: {
        titulo: "Jogos oficiais na carreira",
        texto: `Total de 1.185 partidas na carreira profissional por clubes e seleção principal, segundo a base MessiStat em 7 de novembro de 2026.

Distribuição por equipe:
• Barcelona: 778 partidas
• Paris Saint-Germain: 75 partidas
• Inter Miami: 124 partidas
• Argentina: 208 partidas

Não estão incluídos os jogos das seleções de base.`,
        numeros: [
            ["1.185", "Partidas"],
            ["778", "Barcelona"],
            ["75", "PSG"],
            ["124", "Inter Miami"],
            ["208", "Argentina"]
        ],
        fonte: fontes.estatisticas
    },

    gols: {
        titulo: "Gols oficiais na carreira",
        texto: `Messi soma 937 gols oficiais segundo a base MessiStat, com referência em 7 de novembro de 2026.

Distribuição:
• Barcelona: 672 gols
• PSG: 32 gols
• Inter Miami: 107 gols
• Argentina: 126 gols

A média calculada com esses totais é de aproximadamente 0,79 gol por partida.

Os números dos clubes e da seleção ainda em atividade podem mudar.`,
        numeros: [
            ["937", "Gols"],
            ["672", "Barcelona"],
            ["32", "PSG"],
            ["107", "Inter Miami"],
            ["126", "Argentina"]
        ],
        fonte: fontes.estatisticas
    },

    assistencias: {
        titulo: "Assistências na carreira",
        texto: `A contagem de assistências varia conforme a fonte.

A base MessiStat apresenta 409 assistências pelo seu critério estatístico e 451 segundo o critério Transfermarkt.

Distribuição das 409 assistências:
• Barcelona: 269
• PSG: 34
• Inter Miami: 48
• Argentina: 58

É importante não misturar diferentes critérios de assistências na mesma soma.`,
        numeros: [
            ["409", "Critério da base"],
            ["451", "Critério Transfermarkt"],
            ["269", "Barcelona"],
            ["34", "PSG"]
        ],
        fonte: fontes.estatisticas
    },

    barcelona: {
        titulo: "FC Barcelona — 2004 a 2021",
        texto: `Messi chegou às categorias de base do Barcelona em 2000 e estreou oficialmente pela equipe principal em 2004.

Ao longo de sua trajetória no clube, tornou-se o maior artilheiro da história do Barcelona.

Conquistas principais:
• 10 títulos da La Liga
• 7 Copas do Rei
• 8 Supercopas da Espanha
• 4 Champions League
• 3 Supercopas da UEFA
• 3 Mundiais de Clubes

No total, são 35 títulos nessas seis competições.

Sua passagem também foi marcada pelo sextete de 2009 e pela tríplice coroa de 2015.`,
        numeros: [
            ["778", "Jogos oficiais"],
            ["672", "Gols oficiais"],
            ["35", "Títulos principais"],
            ["4", "Champions"]
        ],
        fonte: fontes.barcelona
    },

    psg: {
        titulo: "Paris Saint-Germain — 2021 a 2023",
        texto: `Messi chegou ao PSG em agosto de 2021, após encerrar sua trajetória pelo Barcelona.

Na Ligue 1, disputou 75 partidas e marcou 22 gols.

Considerando todas as competições, marcou 32 gols pelo clube.

Conquistas:
• Ligue 1 de 2021/22
• Ligue 1 de 2022/23
• Trophée des Champions de 2022

Durante sua passagem por Paris, atuou ao lado de Neymar e Kylian Mbappé.`,
        numeros: [
            ["2", "Ligue 1"],
            ["1", "Supercopa francesa"],
            ["75", "Jogos na Ligue 1"],
            ["32", "Gols em todas as competições"]
        ],
        fonte: fontes.messi
    },

    miami: {
        titulo: "Inter Miami — desde 2023",
        texto: `Messi chegou ao Inter Miami em julho de 2023.

Sua chegada representou um marco na história do clube e aumentou sua projeção internacional.

Conquistas registradas no histórico oficial:
• Leagues Cup — 2023
• Supporters' Shield — 2024
• MLS Cup — 2025
• Campeones Cup — 2026

A base MessiStat registra, em 7 de novembro de 2026, 124 partidas e 107 gols pelo Inter Miami.

Esses totais são um retrato daquela data, não uma atualização automática.`,
        numeros: [
            ["124", "Jogos na base consultada"],
            ["107", "Gols na base consultada"],
            ["4", "Conquistas listadas"],
            ["2023", "Chegada ao clube"]
        ],
        fonte: fontes.messi
    },

    mundial: {
        titulo: "Copa do Mundo de 2022",
        texto: `Messi conquistou a Copa do Mundo FIFA de 2022 pela Argentina, no Catar.

A final aconteceu em 18 de dezembro de 2022, contra a França.

Após empate por 3 a 3, a Argentina venceu por 4 a 2 na disputa de pênaltis.

Messi marcou sete gols durante o torneio, incluindo dois na final.

Também recebeu a Bola de Ouro como melhor jogador da competição.`,
        numeros: [
            ["2022", "Ano"],
            ["7", "Gols no torneio"],
            ["2", "Gols na final"],
            ["1", "Título mundial"]
        ],
        fonte: fontes.messi
    },

    champions: {
        titulo: "Quatro Champions League",
        texto: `Messi conquistou quatro títulos da UEFA Champions League pelo Barcelona.

Temporadas:
• 2005/06
• 2008/09
• 2010/11
• 2014/15

Na campanha de 2005/06, integrou o elenco campeão, mas não disputou a final por lesão.

Nas conquistas seguintes, foi protagonista da equipe.`,
        numeros: [
            ["4", "Títulos"],
            ["2006", "Primeira conquista"],
            ["2015", "Última conquista"]
        ],
        fonte: fontes.messi
    },

    copaamerica: {
        titulo: "Copa América — 2021 e 2024",
        texto: `Messi conquistou duas Copas América pela seleção principal argentina.

2021:
A Argentina venceu o Brasil por 1 a 0 na final, no Maracanã.

2024:
A Argentina venceu a Colômbia por 1 a 0 na prorrogação da final, nos Estados Unidos.

As duas conquistas marcaram uma fase vitoriosa da seleção argentina.`,
        numeros: [
            ["2", "Títulos"],
            ["2021", "Primeiro título"],
            ["2024", "Segundo título"]
        ],
        fonte: fontes.messi
    },

    laliga: {
        titulo: "Dez títulos da La Liga",
        texto: `Messi conquistou dez Campeonatos Espanhóis pelo Barcelona.

Temporadas:
• 2004/05
• 2005/06
• 2008/09
• 2009/10
• 2010/11
• 2012/13
• 2014/15
• 2015/16
• 2017/18
• 2018/19`,
        numeros: [
            ["10", "Campeonatos"],
            ["2005", "Primeiro título"],
            ["2019", "Último título"]
        ],
        fonte: fontes.barcelona
    },

    coparei: {
        titulo: "Sete Copas do Rei",
        texto: `Messi conquistou sete edições da Copa do Rei pelo Barcelona.

Temporadas:
• 2008/09
• 2011/12
• 2014/15
• 2015/16
• 2016/17
• 2017/18
• 2020/21

A conquista de 2020/21 foi seu último grande título pelo Barcelona.`,
        numeros: [
            ["7", "Copas do Rei"],
            ["2009", "Primeira conquista"],
            ["2021", "Última conquista"]
        ],
        fonte: fontes.barcelona
    },

    miamititulos: {
        titulo: "Conquistas pelo Inter Miami",
        texto: `Conquistas registradas no histórico oficial de Messi:

• Leagues Cup — 2023
• Supporters' Shield — 2024
• MLS Cup — 2025
• Campeones Cup — 2026

O Supporters' Shield premia a melhor campanha da temporada regular da MLS, enquanto a MLS Cup é o título dos playoffs.

As competições têm formatos e critérios diferentes.`,
        numeros: [
            ["2023", "Leagues Cup"],
            ["2024", "Supporters' Shield"],
            ["2025", "MLS Cup"],
            ["2026", "Campeones Cup"]
        ],
        fonte: fontes.messi
    },

    bolasouro: {
        titulo: "Oito Bolas de Ouro",
        texto: `Messi conquistou oito prêmios Ballon d'Or.

Anos:
• 2009
• 2010
• 2011
• 2012
• 2015
• 2019
• 2021
• 2023

É o maior vencedor da história da premiação.`,
        numeros: [
            ["8", "Bolas de Ouro"],
            ["2009", "Primeira"],
            ["2023", "Oitava"]
        ],
        fonte: fontes.messi
    },

    ano2012: {
        titulo: "91 gols em um ano civil",
        texto: `Em 2012, Messi marcou 91 gols oficiais em partidas por clube e seleção.

Distribuição:
• Barcelona: 79 gols
• Argentina: 12 gols

A marca superou o recorde de 85 gols de Gerd Müller, estabelecido em 1972.

Os 91 gols foram marcados ao longo do ano civil, não de uma única temporada europeia.`,
        numeros: [
            ["91", "Gols em 2012"],
            ["79", "Barcelona"],
            ["12", "Argentina"]
        ],
        fonte: fontes.barcelona
    },

    recordebarca: {
        titulo: "672 gols pelo Barcelona",
        texto: `Messi marcou 672 gols em 778 partidas oficiais pelo Barcelona.

Tornou-se o maior artilheiro da história do clube.

Sua média foi de aproximadamente 0,86 gol por jogo.

Os números abrangem competições oficiais disputadas pela equipe principal.`,
        numeros: [
            ["672", "Gols"],
            ["778", "Jogos"],
            ["0,86", "Gol por jogo"]
        ],
        fonte: fontes.barcelona
    },

    laligarecorde: {
        titulo: "474 gols na La Liga",
        texto: `Messi é o maior artilheiro da história da La Liga.

Pelo Barcelona, marcou 474 gols em 520 partidas no Campeonato Espanhol.

A marca foi construída ao longo de sua passagem pelo futebol espanhol.`,
        numeros: [
            ["474", "Gols"],
            ["520", "Jogos"],
            ["0,91", "Gol por jogo"]
        ],
        fonte: fontes.barcelona
    },

    temporada: {
        titulo: "50 gols na La Liga 2011/12",
        texto: `Na temporada 2011/12, Messi marcou 50 gols no Campeonato Espanhol.

É a maior quantidade de gols de um jogador em uma única edição da La Liga.

Considerando todas as competições de clubes naquela temporada, marcou 73 gols oficiais.`,
        numeros: [
            ["50", "Gols na La Liga"],
            ["73", "Gols na temporada"],
            ["2011/12", "Temporada"]
        ],
        fonte: fontes.barcelona
    },

    chuteiras: {
        titulo: "Seis Chuteiras de Ouro",
        texto: `Messi conquistou seis Chuteiras de Ouro europeias.

Temporadas:
• 2009/10
• 2011/12
• 2012/13
• 2016/17
• 2017/18
• 2018/19

O prêmio considera a artilharia das ligas nacionais europeias segundo um sistema de pontuação.`,
        numeros: [
            ["6", "Prêmios"],
            ["2010", "Primeira"],
            ["2019", "Sexta"]
        ],
        fonte: fontes.messi
    }
};

// Cria um painel independente para cada seção.
document.querySelectorAll(".grade").forEach((grade, indice) => {
    const painel = document.createElement("div");
    painel.className = "painel-detalhes";
    painel.id = `painel-${indice + 1}`;
    painel.hidden = true;

    grade.insertAdjacentElement("afterend", painel);

    const cartoes = grade.querySelectorAll(".cartao");

    cartoes.forEach(cartao => {
        const id = cartao.dataset.id;
        const dados = informacoes[id];

        if (!dados) return;

        cartao.setAttribute("aria-expanded", "false");
        cartao.setAttribute("aria-controls", painel.id);

        cartao.addEventListener("click", () => {
            const estavaAberto =
                cartao.getAttribute("aria-expanded") === "true";

            // Fecha todos os painéis antes de abrir outro.
            document.querySelectorAll(".painel-detalhes").forEach(item => {
                item.hidden = true;
                item.replaceChildren();
            });

            document.querySelectorAll(".cartao").forEach(item => {
                item.setAttribute("aria-expanded", "false");
            });

            if (estavaAberto) return;

            const etiqueta = document.createElement("span");
            etiqueta.className = "painel-etiqueta";
            etiqueta.textContent = "MESSI ARCHIVE / DETALHES";

            const titulo = document.createElement("h3");
            titulo.textContent = dados.titulo;

            const texto = document.createElement("p");
            texto.textContent = dados.texto;

            const numeros = document.createElement("div");
            numeros.className = "painel-numeros";

            dados.numeros.forEach(([valor, legenda]) => {
                const bloco = document.createElement("div");
                bloco.className = "painel-numero";

                const numero = document.createElement("strong");
                numero.textContent = valor;

                const rotulo = document.createElement("span");
                rotulo.textContent = legenda;

                bloco.append(numero, rotulo);
                numeros.appendChild(bloco);
            });

            const fonte = document.createElement("a");
            fonte.className = "painel-fonte";
            fonte.href = dados.fonte;
            fonte.target = "_blank";
            fonte.rel = "noopener noreferrer";
            fonte.textContent = "Consultar fonte dos dados ↗";

            painel.append(etiqueta, titulo, numeros, texto, fonte);
            painel.hidden = false;

            cartao.setAttribute("aria-expanded", "true");
        });
    });
});
