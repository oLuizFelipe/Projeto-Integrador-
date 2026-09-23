// ESPERAR A PÁGINA CARREGAR

document.addEventListener("DOMContentLoaded", function () {

    // PEGAR OS ELEMENTOS DA PÁGINA

    const campoBusca = document.getElementById("campoBusca");
    const botoesCategoria = document.querySelectorAll(".categoria");
    const produtos = document.querySelectorAll(".produto");
    const mensagemSemProdutos = document.getElementById("semProdutos");


    // FUNÇÃO PARA DESCOBRIR A CATEGORIA DO PRODUTO

    function descobrirCategoria(nomeProduto) {

        nomeProduto = nomeProduto.toLowerCase();


        // BOLSAS

        if (nomeProduto.includes("bolsa")) {
            return "bolsas";
        }


        // MALAS

        if (nomeProduto.includes("mala")) {
            return "malas";
        }


        // INFANTIL

        if (
            nomeProduto.includes("infantil") ||
            nomeProduto.includes("bob esponja") ||
            nomeProduto.includes("stitch") ||
            nomeProduto.includes("angel") ||
            nomeProduto.includes("discovery") ||
            nomeProduto.includes("foguete")
        ) {
            return "infantil";
        }


        // EXECUTIVAS

        if (nomeProduto.includes("executiva")) {
            return "executivas";
        }


        // MOCHILAS

        if (nomeProduto.includes("mochila")) {
            return "mochilas";
        }


        return "";
    }


    // FUNÇÃO PARA FILTRAR OS PRODUTOS

    function filtrarProdutos() {

        // PEGAR O QUE FOI DIGITADO NA BARRA

        const textoBusca = campoBusca.value
            .toLowerCase()
            .trim();


        // CATEGORIA PADRÃO

        let categoriaSelecionada = "todos";


        // DESCOBRIR QUAL CATEGORIA ESTÁ ATIVA

        botoesCategoria.forEach(function (botao) {

            if (botao.classList.contains("ativa")) {

                categoriaSelecionada =
                    botao.dataset.categoria.toLowerCase();

            }

        });


        let encontrouProduto = false;


        // VERIFICAR TODOS OS PRODUTOS

        produtos.forEach(function (produto) {

            const nomeProduto =
                produto.querySelector("h3").textContent.toLowerCase();


            const categoriaProduto =
                descobrirCategoria(nomeProduto);


            // VERIFICAR O TEXTO DA PESQUISA

            const correspondeBusca =
                nomeProduto.includes(textoBusca);


            // VERIFICAR A CATEGORIA

            const correspondeCategoria =
                categoriaSelecionada === "todos" ||
                categoriaProduto === categoriaSelecionada;


            // MOSTRAR OU ESCONDER O PRODUTO

            if (correspondeBusca && correspondeCategoria) {

                produto.style.display = "block";

                encontrouProduto = true;

            } else {

                produto.style.display = "none";

            }

        });


        // MENSAGEM CASO NÃO ENCONTRE NENHUM PRODUTO

        if (encontrouProduto) {

            mensagemSemProdutos.style.display = "none";

        } else {

            mensagemSemProdutos.style.display = "block";

        }

    }


    // CLIQUE NOS BOTÕES DE CATEGORIA

    botoesCategoria.forEach(function (botao) {

        botao.addEventListener("click", function () {

            // REMOVER "ATIVA" DOS OUTROS BOTÕES

            botoesCategoria.forEach(function (outroBotao) {

                outroBotao.classList.remove("ativa");

            });


            // ATIVAR O BOTÃO CLICADO

            botao.classList.add("ativa");


            // FILTRAR OS PRODUTOS

            filtrarProdutos();

        });

    });


    // PESQUISA ENQUANTO DIGITA

    campoBusca.addEventListener("input", function () {

        filtrarProdutos();

    });


    // DEIXAR "TODOS" ATIVO AO ABRIR A PÁGINA

    const botaoTodos =
        document.querySelector('[data-categoria="Todos"]');


    if (botaoTodos) {

        botaoTodos.classList.add("ativa");

    }


    // MOSTRAR TODOS OS PRODUTOS AO ABRIR

    filtrarProdutos();


    // BOTÕES "VER PRODUTO"

    const botoesProduto =
        document.querySelectorAll(".botao-produto");


    botoesProduto.forEach(function (botao) {

        botao.addEventListener("click", function () {

            // PEGAR O CARD DO PRODUTO

            const produto =
                botao.closest(".produto");


            // PEGAR O NOME DO PRODUTO

            const nomeProduto =
                produto.querySelector("h3").textContent.trim();


            // ABRIR A PÁGINA DO PRODUTO

            window.location.href =
                "produto.html?produto=" +
                encodeURIComponent(nomeProduto);

        });

    });

});