document.addEventListener("DOMContentLoaded", function () {

    const produtos = {

        "Bolsa Feminina - Caramelo": {
            imagem: "imagens/bolsa_femininas/bolsaFeminina.jpg",
            categoria: "Bolsas",
            preco: "R$ 99,90",
            descricao: "Bolsa feminina na cor caramelo, ideal para o dia a dia."
        },

        "Bolsa Feminina - Marrom": {
            imagem: "imagens/bolsa_femininas/bolsaFemininaCasual.jpg",
            categoria: "Bolsas",
            preco: "R$ 79,90",
            descricao: "Bolsa feminina casual na cor marrom."
        },

        "Bolsa Feminina Casual - Vermelha": {
            imagem: "imagens/bolsa_femininas/bolsaFemininaVermelha.jpg",
            categoria: "Bolsas",
            preco: "R$ 79,90",
            descricao: "Bolsa feminina casual na cor vermelha."
        },

        "Mochila Infantil Tigre": {
            imagem: "imagens/mochilas_infantil/mochilaInfantilTigre.jpg",
            categoria: "Infantil",
            preco: "R$ 109,90",
            descricao: "Mochila infantil com estampa de tigre."
        },

        "Mochila Infantil Dino": {
            imagem: "imagens/mochilas_infantil/mochilaInfantilRoxaDino.jpg",
            categoria: "Infantil",
            preco: "R$ 109,90",
            descricao: "Mochila infantil com estampa de dinossauro."
        },

        "Mochila Bob Esponja": {
            imagem: "imagens/mochilas_infantil/mochila_crianca_bob.png",
            categoria: "Infantil",
            preco: "R$ 159,90",
            descricao: "Mochila infantil do Bob Esponja."
        },

        "Mochila Stitch": {
            imagem: "imagens/mochilas_infantil/mochila_crianca_colecao_stitch_azul.png",
            categoria: "Infantil",
            preco: "R$ 209,90",
            descricao: "Mochila infantil inspirada no personagem Stitch."
        },

        "Mochila Stitch Havaiano": {
            imagem: "imagens/mochilas_infantil/mochila_crianca_stitch.png",
            categoria: "Infantil",
            preco: "R$ 249,90",
            descricao: "Mochila Stitch com estilo havaiano."
        },

        "Mochila Angel": {
            imagem: "imagens/mochilas_infantil/mochila_crianca_colecao_angel.png",
            categoria: "Infantil",
            preco: "R$ 209,90",
            descricao: "Mochila infantil inspirada na personagem Angel."
        },

        "Mochila Discovery Truck": {
            imagem: "imagens/mochilas_infantil/mochila_crianca_discovery_truck.png",
            categoria: "Infantil",
            preco: "R$ 109,90",
            descricao: "Mochila infantil com tema Discovery Truck."
        },

        "Mochila Foguete": {
            imagem: "imagens/mochilas_infantil/mochila_crianca_space_action.png",
            categoria: "Infantil",
            preco: "R$ 109,90",
            descricao: "Mochila infantil com tema espacial."
        },

        "Mochila Masculina - Azul": {
            imagem: "imagens/mochilas_masculinas/MochilaMasculinaAzul.jpg",
            categoria: "Mochilas",
            preco: "R$ 109,90",
            descricao: "Mochila masculina na cor azul."
        },

        "Mochila Masculina - Cinza": {
            imagem: "imagens/mochilas_masculinas/MochilaMasculinaCinza.jpg",
            categoria: "Mochilas",
            preco: "R$ 129,90",
            descricao: "Mochila masculina na cor cinza."
        },

        "Mochila Masculina - Preta": {
            imagem: "imagens/mochilas_masculinas/MochilaMasculinaPreta.jpg",
            categoria: "Mochilas",
            preco: "R$ 149,90",
            descricao: "Mochila masculina na cor preta."
        },

        "Mochila Executiva - Preta": {
            imagem: "imagens/mochilas_executivas/mochila_executiva_preta.png",
            categoria: "Executivas",
            preco: "R$ 249,90",
            descricao: "Mochila executiva na cor preta."
        },

        "Mochila Executiva - Cinza": {
            imagem: "imagens/mochilas_executivas/mochila_executiva_cinza.png",
            categoria: "Executivas",
            preco: "R$ 249,90",
            descricao: "Mochila executiva na cor cinza."
        },

        "Mochila Executiva - Verde": {
            imagem: "imagens/mochilas_executivas/mochila_executiva_verde.png",
            categoria: "Executivas",
            preco: "R$ 249,90",
            descricao: "Mochila executiva na cor verde."
        },

        "Mochila Juvenil - Azul": {
            imagem: "imagens/mochilas_juvenis/mochila_juvenil_azul.png",
            categoria: "Mochilas",
            preco: "R$ 99,90",
            descricao: "Mochila juvenil na cor azul."
        },

        "Mochila Juvenil - Preta": {
            imagem: "imagens/mochilas_juvenis/mochila_juvenil_preta.png",
            categoria: "Mochilas",
            preco: "R$ 99,90",
            descricao: "Mochila juvenil na cor preta."
        },

        "Mochila Juvenil - Vermelha": {
            imagem: "imagens/mochilas_juvenis/mochila_juvenil_vermelha.png",
            categoria: "Mochilas",
            preco: "R$ 99,90",
            descricao: "Mochila juvenil na cor vermelha."
        },

        "Mochila Palmeiras": {
            imagem: "imagens/mochila_times/Mochila_palmeiras_S.png",
            categoria: "Mochilas",
            preco: "R$ 99,90",
            descricao: "Mochila com tema do Palmeiras."
        },

        "Mochila Corinthians": {
            imagem: "imagens/mochila_times/mochila_corinthians.png",
            categoria: "Mochilas",
            preco: "R$ 249,90",
            descricao: "Mochila com tema do Corinthians."
        },

        "Mochila Flamengo": {
            imagem: "imagens/mochila_times/mochila_flamengo.png",
            categoria: "Mochilas",
            preco: "R$ 149,90",
            descricao: "Mochila com tema do Flamengo."
        },

        "Mochila Rabisk": {
            imagem: "imagens/mochila_rabisk_s.png",
            categoria: "Mochilas",
            preco: "R$ 189,90",
            descricao: "Mochila Rabisk."
        },

        "Mochila Bola de Basquete": {
            imagem: "imagens/Mochila_shock_S.png",
            categoria: "Mochilas",
            preco: "R$ 149,90",
            descricao: "Mochila com design inspirado em basquete."
        },

        "Mala Tecido - Cinza": {
            imagem: "imagens/malas/malaTecidoCinza.jpg",
            categoria: "Malas",
            preco: "R$ 300,00",
            descricao: "Mala de tecido na cor cinza."
        },

        "Mala Tecido - Preta": {
            imagem: "imagens/malas/malaTecidoPreta.jpg",
            categoria: "Malas",
            preco: "R$ 300,00",
            descricao: "Mala de tecido na cor preta."
        },

        "Mala Fibra - Preta": {
            imagem: "imagens/malas/mala_preta_S.png",
            categoria: "Malas",
            preco: "R$ 349,90",
            descricao: "Mala de fibra na cor preta."
        },

        "Mala Fibra - Azul": {
            imagem: "imagens/malas/mala_azul_S.png",
            categoria: "Malas",
            preco: "R$ 349,90",
            descricao: "Mala de fibra na cor azul."
        },

        "Mala Fibra - Rose Gold": {
            imagem: "imagens/malas/mala_rosa_S.png",
            categoria: "Malas",
            preco: "R$ 349,90",
            descricao: "Mala de fibra na cor rose gold."
        }

    };


    /* PEGAR PRODUTO DA URL */

    const parametros =
        new URLSearchParams(window.location.search);

    const nomeProduto =
        parametros.get("produto");


    /* PEGAR ELEMENTOS DA PÁGINA */

    const imagem =
        document.getElementById("imagemProduto");

    const nome =
        document.getElementById("nomeProduto");

    const categoria =
        document.getElementById("categoriaProduto");

    const preco =
        document.getElementById("precoProduto");

    const descricao =
        document.getElementById("descricaoProduto");

    const botaoWhatsApp =
        document.getElementById("botaoWhatsApp");

    const botaoCarrinho =
        document.getElementById("botaoCarrinho");

    const produtosRelacionados =
        document.getElementById("produtosRelacionados");


    /* VERIFICAR SE O PRODUTO EXISTE */

    if (nomeProduto && produtos[nomeProduto]) {

        const produto =
            produtos[nomeProduto];


        /* PREENCHER INFORMAÇÕES */

        imagem.src =
            produto.imagem;

        imagem.alt =
            nomeProduto;

        nome.textContent =
            nomeProduto;

        categoria.textContent =
            produto.categoria;

        preco.textContent =
            produto.preco;

        descricao.textContent =
            produto.descricao;


        /* BOTÃO WHATSAPP */

        const mensagem =
            "Olá! Tenho interesse no produto: " +
            nomeProduto +
            " - " +
            produto.preco;

        botaoWhatsApp.href =
            "https://wa.me/?text=" +
            encodeURIComponent(mensagem);


        /* ADICIONAR AO CARRINHO */

        botaoCarrinho.addEventListener(
            "click",
            function () {

                let carrinho =
                    JSON.parse(
                        localStorage.getItem("carrinhoJMS")
                    ) || [];


                /* VERIFICAR SE JÁ EXISTE */

                const produtoExistente =
                    carrinho.find(function (item) {

                        return item.nome === nomeProduto;

                    });


                if (produtoExistente) {

                    produtoExistente.quantidade++;

                } else {

                    carrinho.push({

                        nome: nomeProduto,

                        imagem: produto.imagem,

                        preco: produto.preco,

                        quantidade: 1

                    });

                }


                /* SALVAR */

                localStorage.setItem(
                    "carrinhoJMS",
                    JSON.stringify(carrinho)
                );


                /* ALTERAR BOTÃO */

                botaoCarrinho.textContent =
                    "✓ Adicionado ao carrinho";

                botaoCarrinho.style.backgroundColor =
                    "#000000";

                botaoCarrinho.style.color =
                    "#FFD700";


                /* VOLTAR AO NORMAL */

                setTimeout(function () {

                    botaoCarrinho.textContent =
                        "🛒 Adicionar ao carrinho";

                    botaoCarrinho.style.backgroundColor =
                        "#FFD700";

                    botaoCarrinho.style.color =
                        "#000000";

                }, 1500);

            }
        );


        /* PRODUTOS RELACIONADOS */

        const listaProdutos =
            Object.entries(produtos);

        let quantidade =
            0;


        listaProdutos.forEach(function (item) {

            const nomeRelacionado =
                item[0];

            const produtoRelacionado =
                item[1];


            if (nomeRelacionado === nomeProduto) {
                return;
            }


            if (
                produtoRelacionado.categoria !==
                produto.categoria
            ) {
                return;
            }


            if (quantidade >= 4) {
                return;
            }


            const card =
                document.createElement("div");

            card.classList.add(
                "produto-relacionado"
            );


            const img =
                document.createElement("img");

            img.src =
                produtoRelacionado.imagem;

            img.alt =
                nomeRelacionado;


            const titulo =
                document.createElement("h3");

            titulo.textContent =
                nomeRelacionado;


            const precoRelacionado =
                document.createElement("p");

            precoRelacionado.classList.add(
                "preco-relacionado"
            );

            precoRelacionado.textContent =
                produtoRelacionado.preco;


            const botao =
                document.createElement("a");

            botao.classList.add(
                "botao-relacionado"
            );

            botao.textContent =
                "Ver produto";

            botao.href =
                "produto.html?produto=" +
                encodeURIComponent(
                    nomeRelacionado
                );


            card.appendChild(img);
            card.appendChild(titulo);
            card.appendChild(precoRelacionado);
            card.appendChild(botao);


            produtosRelacionados.appendChild(
                card
            );


            quantidade++;

        });


    } else {

        /* PRODUTO NÃO ENCONTRADO */

        nome.textContent =
            "Produto não encontrado";

        descricao.textContent =
            "Não foi possível encontrar esse produto.";

        imagem.style.display =
            "none";

        botaoWhatsApp.style.display =
            "none";

        botaoCarrinho.style.display =
            "none";

        produtosRelacionados.style.display =
            "none";

    }

});