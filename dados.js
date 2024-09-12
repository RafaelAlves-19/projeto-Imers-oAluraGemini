let dados = [
    // os primeiros vingadores
    {
        titulo : "Homem de Ferro",
        descrição : "O Homem de Ferro, alter ego do bilionário e inventor Tony Stark, é um dos pilares do universo Marvel. O personagem é conhecido por sua inteligência afiada, sarcasmo e sua poderosa armadura de alta tecnologia. Com sua fortuna e engenhosidade, ele combate o crime e ameaças globais, sempre com um toque de ironia e um ego inegável.",
        link : "https://pt.wikipedia.org/wiki/Homem_de_Ferro",
        tags : "Vingadores",
        imgSrc: "img/homem-de-ferro.webp"
    },
    {
        titulo: "Capitão América",
        descrição : "Steve Rogers é um super-soldado criado durante a Segunda Guerra Mundial. Conhecido por seu patriotismo, força e integridade, o Capitão América é um dos fundadores dos Vingadores.",
        link : "https://pt.wikipedia.org/wiki/Capitão_América",
        tags : "Vingadores"
    },
    {
        titulo: "Thor",
        descrição : "Príncipe de Asgard e Deus do Trovão, Thor é um poderoso guerreiro com um martelo mágico, o Mjolnir. Ele é um dos Vingadores mais fortes e é conhecido por sua força e bravura.",
        link : "https://pt.wikipedia.org/wiki/Thor_(Marvel_Comics)",
        tags : "Vingadores"
    },
    {
        titulo: "Hulk",
        descrição: "Bruce Banner, um cientista que após um acidente com radiação gama, se transforma em um monstro verde de força inigualável. O Hulk é um dos personagens mais poderosos da Marvel, com suas emoções intensas influenciando sua força.",
        link: "https://pt.wikipedia.org/wiki/Hulk",
        tags : "Vingadores"
    },
    {
        titulo: "Viúva Negra",
        descrição: "Natasha Romanoff, uma agente altamente treinada e habilidosa em espionagem e combate corpo a corpo. A Viúva Negra é uma das fundadoras dos Vingadores e é conhecida por sua inteligência e agilidade.",
        link: "https://pt.wikipedia.org/wiki/Viúva_Negra_(Marvel_Comics)",
        tags : "Vingadores"
    },
    {
        titulo: "Gavião Arqueiro",
        descrição: "Um mestre arqueiro com grande habilidade em combate corpo a corpo.Clinton Barton, o Gavião Arqueiro, é conhecido por sua precisão e é um dos membros fundadores dos Vingadores.",
        link: "https://pt.wikipedia.org/wiki/Gavião_Arqueiro",
        tags : "Vingadores"
    },
    // novos vingadores
    {
        titulo : "Homem Aranha",
        descrição : "Alter ego de Peter Parker, é um dos super-heróis mais icônicos e queridos da cultura pop. O personagem se destaca por sua humanidade, com as responsabilidades e dilemas de um adolescente comum, além de seus extraordinários poderes arácnidos.",
        link : "https://pt.wikipedia.org/wiki/Homem-Aranha",
        tags : ""
    },
    {
        titulo: "Pantera Negra",
        descrição: "T'Challa, o rei de Wakanda, uma nação tecnologicamente avançada e isolada. O Pantera Negra possui habilidades sobre-humanas graças a uma erva sagrada e é um líder forte e justo.",
        link: "https://pt.wikipedia.org/wiki/Pantera_Negra_(Marvel_Comics)",
        tags : ""
    },
    {
        titulo: "Doutor Estranho",
        descrição: "Stephen Strange, um neurocirurgião que após um acidente se torna o Mestre das Artes Místicas. O Doutor Estranho é o protetor do nosso mundo contra ameaças místicas e dimensionais.",
        link: "https://pt.wikipedia.org/wiki/Doutor_Estranho",
        tags : ""
    },
    {
        titulo: "Feiticeira Escarlate",
        descrição: "Wanda Maximoff, uma mutante com a capacidade de manipular a realidade e a energia. A Feiticeira Escarlate é uma das personagens mais poderosas da Marvel e já foi membro dos Vingadores e dos X-Men.",
        link: "https://pt.wikipedia.org/wiki/Feiticeira_Escarlate",
        tags : ""
    },
    {
        titulo: "Visão",
        descrição: "Um androide criado por Ultron, o Visão possui densidade variável, capacidade de voar e a habilidade de manipular a mente. Ele é um dos Vingadores mais inteligentes e é casado com a Feiticeira Escarlate.",
        link: "https://pt.wikipedia.org/wiki/Visão_(Marvel_Comics)",
        tags : ""
    },
    {
        titulo: "Falcão",
        descrição: "Sam Wilson, um ex-militar que recebeu um traje especial com asas que lhe permitem voar. O Falcão é um dos melhores amigos do Capitão América e, posteriormente, assumiu o manto do Capitão América.",
        link: "https://pt.wikipedia.org/wiki/Falc%C3%A3o_(Marvel_Comics)",
        tags : ""},
    {
        titulo: "Máquina de Combate",
        descrição: "James Rhodes, um piloto da Força Aérea que utiliza uma armadura similar à do Homem de Ferro. O Máquina de Combate é um dos melhores amigos de Tony Stark e um aliado leal dos Vingadores.",
        link: "https://pt.wikipedia.org/wiki/M%C3%A1quina_de_Combate",
        tags : ""
    },
    {
        titulo : "Homem-Formiga",
        descrição : "Cientista que, após um acidente envolvendo partículas subatômicas, ganha a habilidade de alterar seu tamanho e a de outros objetos. Com seu traje tecnológico, ele se torna um herói que luta contra o crime em diversas escalas.",
        link : "https://pt.wikipedia.org/wiki/Homem-Formiga",
        tags : ""
    },
    {
        titulo : "Capitã Marvel",
        descrição : "Piloto da Força Aérea que obtém poderes cósmicos após um acidente. Com força sobre-humana, capacidade de voar e manipular energia, ela se torna uma das heroínas mais poderosas do universo Marvel.",
        link : "https://pt.wikipedia.org/wiki/Capitã_Marvel",
        tags : ""
    },
    // guardiões da galaxia
    {
        titulo: "Star-Lord",
        descrição: "Peter Quill, um humano abduzido por alienígenas e criado como um ladrão espacial. O Star-Lord é o líder dos Guardiões da Galáxia e possui um senso de humor sarcástico.",
        link: "https://pt.wikipedia.org/wiki/Star-Lord",
        tags : ""
    },
    {
        titulo: "Gamora",
        descrição: "Uma assassina adotada por Thanos e treinada para ser a mulher mais mortal do universo. Gamora é uma guerreira habilidosa e uma dos membros mais fortes dos Guardiões da Galáxia.",
        link: "https://pt.wikipedia.org/wiki/Gamora",
        tags : ""
    },
    {
        titulo: "Drax, o Destruidor",
        descrição: "Um guerreiro alienígena com força sobre-humana e uma obsessão por vingança. Drax foi criado para matar Thanos, mas se juntou aos Guardiões da Galáxia.",
        link: "https://en.wikipedia.org/wiki/Drax_the_Destroyer",
        tags : ""
    },
    {
        titulo: "Rocket Raccoon",
        descrição: "Um guaxinim geneticamente modificado e altamente inteligente, com habilidades em engenharia e combate. Rocket é o piloto da nave dos Guardiões da Galáxia.",
        link: "https://pt.wikipedia.org/wiki/Rocket_Raccoon",
        tags : ""
    },
    {
        titulo: "Groot",
        descrição: "Um alienígena arboriforme com a capacidade de se regenerar e se comunicar através de frases simples. Groot é um dos membros mais queridos dos Guardiões da Galáxia.",
        link: "https://pt.wikipedia.org/wiki/Groot",
        tags : ""
    },
    // o maioral
    {
        titulo: "Deadpool",
        descrição: "Wade Wilson, um mercenário com um fator de cura acelerado e um senso de humor bastante peculiar. Deadpool é conhecido por quebrar a quarta parede e por sua personalidade anti-herói.",
        link: "https://pt.wikipedia.org/wiki/Deadpool",
        tags: "dedpool dadpool",
        imgSrc: "img/deadpool.webp"
    },
]
