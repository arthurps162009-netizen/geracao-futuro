document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       ÁREAS DO TESTE
    ========================================= */

    const areas = {

        tecnologia: {
            nome: "Tecnologia e Inovação",
            icone: "💻",

            descricao:
                "Sua maior afinidade está ligada à criação de soluções, tecnologia, inovação e resolução de problemas.",

            perfil:
                "Você demonstra interesse por ferramentas, sistemas, inovação e desafios que exigem raciocínio e construção de soluções. Experiências práticas podem ajudar a desenvolver ainda mais esse interesse.",

            sugestoes:
                "Programação, desenvolvimento de sistemas, dados, inteligência artificial, segurança da informação, engenharia e inovação."
        },


        pessoas: {
            nome: "Pessoas e Sociedade",
            icone: "🤝",

            descricao:
                "Sua maior afinidade está ligada a relações humanas, educação, colaboração e impacto social.",

            perfil:
                "Você tende a valorizar pessoas, comunicação, cooperação e atividades que possam gerar impacto positivo na vida de outras pessoas.",

            sugestoes:
                "Psicologia, pedagogia, serviço social, educação, recursos humanos, projetos sociais e atendimento."
        },


        criatividade: {
            nome: "Criatividade e Comunicação",
            icone: "🎨",

            descricao:
                "Sua maior afinidade está ligada à criatividade, expressão, comunicação e desenvolvimento de ideias.",

            perfil:
                "Você tende a se envolver com ideias, linguagem, estética, conteúdo e diferentes maneiras de comunicar uma mensagem.",

            sugestoes:
                "Publicidade, design, audiovisual, jornalismo, fotografia, marketing, produção de conteúdo e comunicação."
        },


        negocios: {
            nome: "Negócios e Liderança",
            icone: "📈",

            descricao:
                "Sua maior afinidade está ligada a estratégia, liderança, organização, empreendedorismo e resultados.",

            perfil:
                "Você demonstra interesse por objetivos, planejamento, tomada de decisão, organização, liderança e desenvolvimento de projetos.",

            sugestoes:
                "Empreendedorismo, gestão, vendas, marketing, finanças, liderança, projetos e estratégia."
        },


        ciencias: {
            nome: "Ciências e Descoberta",
            icone: "🔬",

            descricao:
                "Sua maior afinidade está ligada à investigação, pesquisa, análise e descoberta.",

            perfil:
                "Você demonstra curiosidade investigativa e interesse por entender causas, analisar informações, testar possibilidades e descobrir respostas.",

            sugestoes:
                "Biologia, química, física, matemática, engenharia, pesquisa, laboratório, saúde e meio ambiente."
        },


        estetica: {
            nome: "Estética e Bem-Estar",
            icone: "✨",

            descricao:
                "Sua maior afinidade está ligada a cuidado, imagem, estética, qualidade de vida e bem-estar.",

            perfil:
                "Você demonstra interesse por imagem, autocuidado, beleza e atividades relacionadas ao cuidado e ao bem-estar.",

            sugestoes:
                "Estética, cosmetologia, maquiagem, cabelo, moda, bem-estar, cuidados pessoais e áreas de imagem."
        }

    };


    /* =========================================
       PERGUNTAS
       
       Cada pergunta possui:
       6 alternativas
       1 alternativa para cada área
    ========================================= */

    const perguntas = [

        {
            pergunta:
                "Imagine que você recebeu uma tarde livre para aprender algo novo. O que mais despertaria sua curiosidade?",

            opcoes: [

                ["tecnologia",
                    "Criar um aplicativo ou descobrir como uma nova tecnologia funciona."],

                ["pessoas",
                    "Participar de uma atividade para entender melhor pessoas e relações."],

                ["criatividade",
                    "Produzir um vídeo, desenho, texto ou campanha criativa."],

                ["negocios",
                    "Montar uma ideia de negócio e pensar em como fazê-la crescer."],

                ["ciencias",
                    "Realizar um experimento para investigar uma pergunta."],

                ["estetica",
                    "Aprender uma técnica ligada à beleza, imagem ou bem-estar."]
            ]
        },


        {
            pergunta:
                "Em um projeto escolar ou profissional, qual papel naturalmente chamaria mais sua atenção?",

            opcoes: [

                ["tecnologia",
                    "Resolver a parte digital e encontrar ferramentas para o projeto."],

                ["pessoas",
                    "Organizar a colaboração e ajudar os integrantes."],

                ["criatividade",
                    "Criar a identidade visual e a apresentação."],

                ["negocios",
                    "Definir metas, dividir tarefas e acompanhar resultados."],

                ["ciencias",
                    "Pesquisar fontes, analisar dados e verificar informações."],

                ["estetica",
                    "Pensar na apresentação, imagem e experiência visual."]
            ]
        },


        {
            pergunta:
                "Qual tipo de problema você teria mais vontade de resolver?",

            opcoes: [

                ["tecnologia",
                    "Um problema que pudesse ser solucionado com uma ferramenta digital."],

                ["pessoas",
                    "Uma dificuldade que esteja afetando pessoas ou uma comunidade."],

                ["criatividade",
                    "Uma dificuldade de comunicação que precisasse de uma ideia original."],

                ["negocios",
                    "Um problema de organização, estratégia ou desempenho."],

                ["ciencias",
                    "Uma questão que exigisse investigação para descobrir sua causa."],

                ["estetica",
                    "Uma necessidade relacionada a cuidado, imagem ou qualidade de vida."]
            ]
        },


        {
            pergunta:
                "Qual ambiente profissional parece mais estimulante para você?",

            opcoes: [

                ["tecnologia",
                    "Um ambiente de inovação, computadores e desenvolvimento de soluções."],

                ["pessoas",
                    "Um ambiente com contato e troca constante com diferentes pessoas."],

                ["criatividade",
                    "Um estúdio, agência ou espaço dedicado à criação."],

                ["negocios",
                    "Uma empresa orientada por metas, estratégia e decisões."],

                ["ciencias",
                    "Um laboratório, centro de pesquisa ou ambiente de investigação."],

                ["estetica",
                    "Um espaço dedicado a beleza, cuidados e bem-estar."]
            ]
        },


        {
            pergunta:
                "Quando você encontra algo que ainda não sabe fazer, qual atitude mais combina com você?",

            opcoes: [

                ["tecnologia",
                    "Procurar uma ferramenta, tutorial ou solução tecnológica."],

                ["pessoas",
                    "Conversar com alguém que possa ensinar ou trocar experiências."],

                ["criatividade",
                    "Experimentar uma maneira diferente de fazer."],

                ["negocios",
                    "Criar um plano para aprender e chegar ao resultado."],

                ["ciencias",
                    "Pesquisar, testar possibilidades e entender o motivo."],

                ["estetica",
                    "Buscar referências visuais e técnicas para praticar."]
            ]
        },


        {
            pergunta:
                "Qual conquista profissional provavelmente daria mais sensação de realização?",

            opcoes: [

                ["tecnologia",
                    "Criar uma solução que facilite a vida de muitas pessoas."],

                ["pessoas",
                    "Perceber que seu trabalho ajudou alguém de forma concreta."],

                ["criatividade",
                    "Criar algo original que seja reconhecido pela qualidade."],

                ["negocios",
                    "Fazer um projeto crescer e alcançar bons resultados."],

                ["ciencias",
                    "Descobrir uma resposta ou produzir um conhecimento novo."],

                ["estetica",
                    "Contribuir para o cuidado, confiança e bem-estar de alguém."]
            ]
        },


        {
            pergunta:
                "Qual atividade você faria com mais disposição durante um projeto?",

            opcoes: [

                ["tecnologia",
                    "Programar, configurar ferramentas ou desenvolver um sistema."],

                ["pessoas",
                    "Conversar, orientar, ensinar ou apoiar pessoas."],

                ["criatividade",
                    "Escrever, desenhar, editar, fotografar ou produzir conteúdo."],

                ["negocios",
                    "Planejar, negociar, organizar ou liderar."],

                ["ciencias",
                    "Pesquisar, calcular, observar ou realizar testes."],

                ["estetica",
                    "Trabalhar com imagem, beleza, cuidado ou apresentação."]
            ]
        },


        {
            pergunta:
                "Se pudesse participar de um projeto de impacto, qual escolheria?",

            opcoes: [

                ["tecnologia",
                    "Desenvolver uma solução tecnológica para um problema real."],

                ["pessoas",
                    "Criar uma iniciativa para melhorar a vida de uma comunidade."],

                ["criatividade",
                    "Produzir uma campanha para conscientizar e mobilizar pessoas."],

                ["negocios",
                    "Estruturar uma organização ou projeto sustentável."],

                ["ciencias",
                    "Investigar um problema e produzir evidências para solucioná-lo."],

                ["estetica",
                    "Criar uma iniciativa voltada à autoestima e qualidade de vida."]
            ]
        },


        {
            pergunta:
                "Qual habilidade você mais gostaria de desenvolver para sua carreira?",

            opcoes: [

                ["tecnologia",
                    "Inovar e transformar problemas em soluções tecnológicas."],

                ["pessoas",
                    "Compreender pessoas e construir relações positivas."],

                ["criatividade",
                    "Criar ideias originais e comunicá-las bem."],

                ["negocios",
                    "Liderar, planejar e tomar decisões estratégicas."],

                ["ciencias",
                    "Investigar, analisar e descobrir respostas."],

                ["estetica",
                    "Desenvolver conhecimentos de cuidado, imagem e bem-estar."]
            ]
        },


        {
            pergunta:
                "Pensando no futuro, qual pergunta mais despertaria sua curiosidade?",

            opcoes: [

                ["tecnologia",
                    "Quais tecnologias vão mudar a forma como vivemos e trabalhamos?"],

                ["pessoas",
                    "Como podemos melhorar as relações e a vida em sociedade?"],

                ["criatividade",
                    "Quais novas formas de criar e comunicar ainda podemos inventar?"],

                ["negocios",
                    "Como transformar uma boa ideia em um projeto sustentável?"],

                ["ciencias",
                    "O que ainda não sabemos sobre o mundo e podemos descobrir?"],

                ["estetica",
                    "Como novas práticas podem melhorar cuidado e bem-estar?"]
            ]
        }

    ];


    /* =========================================
       VARIÁVEIS
    ========================================= */

    let perguntaAtual = 0;

    let respostas = new Array(perguntas.length).fill(null);


    /* =========================================
       ELEMENTOS
    ========================================= */

    const inicio = document.getElementById("inicio");

    const teste = document.getElementById("teste");

    const resultado = document.getElementById("resultado");

    const btnIniciar = document.getElementById("btnIniciar");

    const btnVoltar = document.getElementById("btnVoltar");

    const btnProximo = document.getElementById("btnProximo");

    const btnRefazer = document.getElementById("btnRefazer");


    /* =========================================
       MOSTRAR TELA
    ========================================= */

    function mostrarTela(tela) {

        inicio.classList.add("escondida");

        teste.classList.add("escondida");

        resultado.classList.add("escondida");

        tela.classList.remove("escondida");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }


    /* =========================================
       MOSTRAR PERGUNTA
    ========================================= */

    function mostrarPergunta() {

        const pergunta = perguntas[perguntaAtual];


        document.getElementById("pergunta").textContent =
            pergunta.pergunta;


        document.getElementById("contador").textContent =
            `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;


        document.getElementById("numeroQuestao").textContent =
            `QUESTÃO ${String(perguntaAtual + 1).padStart(2, "0")}`;


        const porcentagem =
            Math.round(
                ((perguntaAtual + 1) / perguntas.length) * 100
            );


        document.getElementById("porcentagem").textContent =
            porcentagem + "%";


        document.getElementById("progresso").style.width =
            porcentagem + "%";


        const opcoesContainer =
            document.getElementById("opcoes");


        opcoesContainer.innerHTML = "";


        /*
            Copia as alternativas e embaralha.

            Isso evita que a área fique sempre
            na mesma letra.
        */

        const opcoesEmbaralhadas =
            [...pergunta.opcoes]
                .sort(() => Math.random() - 0.5);


        const letras = ["A", "B", "C", "D", "E", "F"];


        opcoesEmbaralhadas.forEach(
            (opcao, index) => {

                const area = opcao[0];

                const texto = opcao[1];


                const botao =
                    document.createElement("button");


                botao.type = "button";

                botao.className = "opcao";


                botao.innerHTML = `
                    <span class="letra">
                        ${letras[index]}
                    </span>

                    <span>
                        ${texto}
                    </span>
                `;


                /*
                    Verifica se essa opção
                    já havia sido selecionada.
                */

                if (respostas[perguntaAtual] === area) {

                    botao.classList.add("selecionada");

                }


                botao.addEventListener(
                    "click",
                    function () {

                        selecionarResposta(
                            area,
                            botao
                        );

                    }
                );


                opcoesContainer.appendChild(botao);

            }
        );


        atualizarBotoes();

    }


    /* =========================================
       SELECIONAR RESPOSTA
    ========================================= */

    function selecionarResposta(area, botao) {

        const botoes =
            document.querySelectorAll(".opcao");


        botoes.forEach(
            function (item) {

                item.classList.remove(
                    "selecionada"
                );

            }
        );


        botao.classList.add("selecionada");


        respostas[perguntaAtual] = area;


        document.getElementById("feedback").textContent =
            "Resposta selecionada ✓";


        btnProximo.disabled = false;

    }


    /* =========================================
       ATUALIZAR BOTÕES
    ========================================= */

    function atualizarBotoes() {

        btnVoltar.disabled =
            perguntaAtual === 0;


        btnProximo.disabled =
            respostas[perguntaAtual] === null;


        if (
            perguntaAtual ===
            perguntas.length - 1
        ) {

            btnProximo.innerHTML =
                "Ver resultado →";

        } else {

            btnProximo.innerHTML =
                "Próxima →";

        }


        if (respostas[perguntaAtual] === null) {

            document.getElementById("feedback").textContent =
                "Selecione uma alternativa para continuar.";

        }

    }


    /* =========================================
       CALCULAR PONTUAÇÃO
    ========================================= */

    function calcularPontuacao() {

        const pontuacao = {

            tecnologia: 0,

            pessoas: 0,

            criatividade: 0,

            negocios: 0,

            ciencias: 0,

            estetica: 0

        };


        respostas.forEach(
            function (resposta) {

                if (resposta) {

                    pontuacao[resposta]++;

                }

            }
        );


        return pontuacao;

    }


    /* =========================================
       MOSTRAR RESULTADO
    ========================================= */

    function mostrarResultado() {

        const pontuacao =
            calcularPontuacao();


        /*
            Organiza as áreas da maior
            pontuação para a menor.
        */

        const ranking =
            Object.keys(pontuacao)
                .sort(
                    (a, b) =>
                        pontuacao[b] -
                        pontuacao[a]
                );


        const primeiraArea =
            ranking[0];


        const dados =
            areas[primeiraArea];


        /* RESULTADO PRINCIPAL */

        document.getElementById(
            "iconeResultado"
        ).textContent = dados.icone;


        document.getElementById(
            "nomeResultado"
        ).textContent = dados.nome;


        document.getElementById(
            "descricaoResultado"
        ).textContent = dados.descricao;


        document.getElementById(
            "perfilResultado"
        ).textContent = dados.perfil;


        document.getElementById(
            "sugestoesResultado"
        ).textContent = dados.sugestoes;


        /* RANKING */

        const rankingContainer =
            document.getElementById("ranking");


        rankingContainer.innerHTML = "";


        ranking.forEach(
            function (area, index) {

                const dadosArea =
                    areas[area];


                const pontos =
                    pontuacao[area];


                const porcentagem =
                    (pontos / perguntas.length) *
                    100;


                let posicao;


                if (index === 0) {

                    posicao = "🥇";

                } else if (index === 1) {

                    posicao = "🥈";

                } else if (index === 2) {

                    posicao = "🥉";

                } else {

                    posicao =
  `${index + 1}º`;

                }


                const item =
                    document.createElement("div");


                item.className =
                    "ranking-item";


                item.innerHTML = `

                    <div class="ranking-topo">

                        <span>
                            ${posicao}
                            ${dadosArea.icone}
                            ${dadosArea.nome}
                        </span>

                        <span class="pontos">
                            ${pontos}/10
                        </span>

                    </div>


                    <div class="barra-ranking">

                        <div
                            class="preenchimento"
                            style="width: ${porcentagem}%"
                        ></div>

                    </div>

                `;


                rankingContainer.appendChild(item);

            }
        );

    }


    /* =========================================
       BOTÃO INICIAR
    ========================================= */

    btnIniciar.addEventListener(
        "click",
        function () {

            perguntaAtual = 0;

            respostas =
                new Array(
                    perguntas.length
                ).fill(null);


            mostrarTela(teste);

            mostrarPergunta();

        }
    );


    /* =========================================
       BOTÃO PRÓXIMA
    ========================================= */

    btnProximo.addEventListener(
        "click",
        function () {

            if (
                respostas[perguntaAtual] === null
            ) {

                return;

            }


            if (
                perguntaAtual <
                perguntas.length - 1
            ) {

                perguntaAtual++;

                mostrarPergunta();

            } else {

                mostrarResultado();

                mostrarTela(resultado);

            }

        }
    );


    /* =========================================
       BOTÃO VOLTAR
    ========================================= */

    btnVoltar.addEventListener(
        "click",
        function () {

            if (perguntaAtual > 0) {

                perguntaAtual--;

                mostrarPergunta();

            }

        }
    );


    /* =========================================
       BOTÃO REFAZER
    ========================================= */

    btnRefazer.addEventListener(
        "click",
        function () {

            perguntaAtual = 0;

            respostas =
                new Array(
                    perguntas.length
                ).fill(null);


            mostrarTela(inicio);

        }
    );

});