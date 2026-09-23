document.addEventListener("DOMContentLoaded", function () {

    const listaCarrinho =
        document.getElementById("listaCarrinho");

    const carrinhoVazio =
        document.getElementById("carrinhoVazio");

    const resumoCarrinho =
        document.getElementById("resumoCarrinho");

    const quantidadeProdutos =
        document.getElementById("quantidadeProdutos");

    const totalCarrinho =
        document.getElementById("totalCarrinho");

    const botaoWhatsApp =
        document.getElementById("botaoWhatsApp");


    // PEGAR O CARRINHO SALVO

    let carrinho =
        JSON.parse(
            localStorage.getItem("carrinhoJMS")
        ) || [];


    // CONVERTER PREÇO

    function converterPreco(preco) {

        return Number(
            preco
                .replace("R$", "")
                .replace(/\./g, "")
                .replace(",", ".")
                .trim()
        );

    }


    // FORMATAR PREÇO

    function formatarPreco(valor) {

        return valor.toLocaleString(
            "pt-BR",
            {
                style: "currency",
                currency: "BRL"
            }
        );

    }


    // MOSTRAR CARRINHO

    function mostrarCarrinho() {

        listaCarrinho.innerHTML = "";

        if (carrinho.length === 0) {

            carrinhoVazio.style.display = "block";
            resumoCarrinho.style.display = "none";

            return;

        }


        carrinhoVazio.style.display = "none";
        resumoCarrinho.style.display = "block";


        let total = 0;
        let quantidadeTotal = 0;


        carrinho.forEach(function (produto, indice) {

            const preco =
                converterPreco(produto.preco);

            const subtotal =
                preco * produto.quantidade;


            total += subtotal;

            quantidadeTotal +=
                produto.quantidade;


            // ITEM

            const item =
                document.createElement("div");

            item.classList.add("item-carrinho");


            // IMAGEM

            const imagem =
                document.createElement("img");

            imagem.src =
                produto.imagem;

            imagem.alt =
                produto.nome;


            // INFORMAÇÕES

            const informacoes =
                document.createElement("div");

            informacoes.classList.add(
                "informacoes-carrinho"
            );


            const nome =
                document.createElement("h3");

            nome.textContent =
                produto.nome;


            const precoProduto =
                document.createElement("p");

            precoProduto.classList.add(
                "preco-carrinho"
            );

            precoProduto.textContent =
                formatarPreco(preco);


            // QUANTIDADE

            const quantidade =
                document.createElement("div");

            quantidade.classList.add(
                "quantidade"
            );


            const botaoMenos =
                document.createElement("button");

            botaoMenos.classList.add(
                "botao-quantidade"
            );

            botaoMenos.textContent = "-";


            const numero =
                document.createElement("span");

            numero.textContent =
                produto.quantidade;


            const botaoMais =
                document.createElement("button");

            botaoMais.classList.add(
                "botao-quantidade"
            );

            botaoMais.textContent = "+";


            quantidade.appendChild(
                botaoMenos
            );

            quantidade.appendChild(
                numero
            );

            quantidade.appendChild(
                botaoMais
            );


            // BOTÃO REMOVER

            const botaoRemover =
                document.createElement("button");

            botaoRemover.classList.add(
                "botao-remover"
            );

            botaoRemover.textContent =
                "Remover produto";


            informacoes.appendChild(nome);
            informacoes.appendChild(precoProduto);
            informacoes.appendChild(quantidade);
            informacoes.appendChild(botaoRemover);


            // SUBTOTAL

            const subtotalElemento =
                document.createElement("div");

            subtotalElemento.classList.add(
                "subtotal"
            );

            subtotalElemento.textContent =
                formatarPreco(subtotal);


            // ADICIONAR AO ITEM

            item.appendChild(imagem);
            item.appendChild(informacoes);
            item.appendChild(subtotalElemento);

            listaCarrinho.appendChild(item);


            // AUMENTAR QUANTIDADE

            botaoMais.addEventListener(
                "click",
                function () {

                    carrinho[indice].quantidade++;

                    salvarCarrinho();

                }
            );


            // DIMINUIR QUANTIDADE

            botaoMenos.addEventListener(
                "click",
                function () {

                    if (
                        carrinho[indice].quantidade > 1
                    ) {

                        carrinho[indice].quantidade--;

                    } else {

                        carrinho.splice(indice, 1);

                    }

                    salvarCarrinho();

                }
            );


            // REMOVER

            botaoRemover.addEventListener(
                "click",
                function () {

                    carrinho.splice(indice, 1);

                    salvarCarrinho();

                }
            );

        });


        quantidadeProdutos.textContent =
            quantidadeTotal;


        totalCarrinho.textContent =
            formatarPreco(total);

    }


    // SALVAR CARRINHO

    function salvarCarrinho() {

        localStorage.setItem(
            "carrinhoJMS",
            JSON.stringify(carrinho)
        );

        mostrarCarrinho();

    }


    // FINALIZAR PELO WHATSAPP

    botaoWhatsApp.addEventListener(
        "click",
        function () {

            if (carrinho.length === 0) {
                return;
            }


            let mensagem =
                "Olá! Tenho interesse em fazer um pedido na JMS Bolsas Grajaú.%0A%0A";


            carrinho.forEach(function (produto) {

                mensagem +=
                    "• " +
                    produto.nome +
                    " - Quantidade: " +
                    produto.quantidade +
                    " - " +
                    produto.preco +
                    "%0A";

            });


            mensagem +=
                "%0ATotal: " +
                totalCarrinho.textContent;


            window.open(
                "https://wa.me/?text=" +
                mensagem,
                "_blank"
            );

        }
    );


    // INICIAR

    mostrarCarrinho();

});