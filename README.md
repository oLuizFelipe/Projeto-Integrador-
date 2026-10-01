# Projeto Integrador — JMS Bolsas Grajaú

## 1. Título do Projeto

**JMS Bolsas Grajaú — Loja Virtual**

Projeto desenvolvido para a disciplina de **Projeto Integrador**, com o objetivo de propor e desenvolver uma aplicação web para uma loja de bolsas, malas e acessórios.

---

## 2. Descrição do Projeto

O **JMS Bolsas Grajaú** é uma proposta de loja virtual desenvolvida para apresentar os produtos comercializados pela empresa de forma organizada, simples e acessível.

O projeto surgiu a partir da necessidade de criar uma solução digital que facilite a visualização dos produtos e permita que os clientes encontrem informações como nome, imagem, preço e características dos produtos de maneira mais rápida.

Atualmente, muitas pequenas lojas dependem principalmente de atendimento presencial ou de redes sociais e aplicativos de mensagens para apresentar seus produtos. Isso pode dificultar a organização do catálogo e a consulta de diferentes produtos pelos clientes.

A solução proposta consiste no desenvolvimento de uma aplicação web com uma interface de loja virtual, permitindo a navegação pelo catálogo, pesquisa e filtragem de produtos, visualização de detalhes e organização dos produtos escolhidos em um carrinho.

O projeto também prevê uma evolução futura para uma aplicação web mais completa, com recursos de cadastro de usuários, login e gerenciamento de pedidos.

---

## 3. Objetivo do Projeto

### Objetivo Geral

Desenvolver uma aplicação web para a **JMS Bolsas Grajaú**, proporcionando uma experiência simples e organizada para consulta dos produtos da loja.

### Objetivos Específicos

* Criar uma interface web organizada e responsiva.
* Apresentar os produtos disponíveis em formato de catálogo.
* Permitir a pesquisa e filtragem dos produtos.
* Disponibilizar uma página com detalhes de cada produto.
* Permitir que o usuário adicione produtos ao carrinho.
* Facilitar o contato entre cliente e loja.
* Organizar as informações dos produtos de maneira visual.
* Criar uma estrutura que possa futuramente ser integrada a um banco de dados.
* Preparar a aplicação para futuras funcionalidades, como cadastro, login e gerenciamento de pedidos.

---

## 4. Público-Alvo

O projeto tem como público-alvo:

* Clientes interessados em comprar bolsas, malas e acessórios;
* Pessoas que desejam consultar produtos antes de entrar em contato com a loja;
* Clientes que preferem pesquisar produtos pela internet;
* Pequenos comerciantes que necessitam de uma presença digital para apresentar seus produtos.

A aplicação busca oferecer uma navegação simples, permitindo que usuários com diferentes níveis de familiaridade com tecnologia consigam consultar o catálogo facilmente.

---

## 5. Principais Funcionalidades

### 5.1 Página Inicial

A página inicial será responsável por apresentar a loja e direcionar o usuário para as principais áreas do sistema.

Principais elementos:

* Logo da JMS Bolsas;
* Menu de navegação;
* Apresentação da loja;
* Destaques de produtos;
* Acesso ao catálogo;
* Acesso ao carrinho;
* Informações de contato.

---

### 5.2 Catálogo de Produtos

A página de produtos apresentará os itens disponíveis na loja.

Funcionalidades previstas:

* Exibição dos produtos;
* Imagens dos produtos;
* Nome do produto;
* Preço;
* Categorias;
* Pesquisa de produtos;
* Filtro por categoria;
* Acesso à página de detalhes.

---

### 5.3 Detalhes do Produto

Ao selecionar um produto, o usuário poderá acessar uma página específica com mais informações.

A página poderá apresentar:

* Imagem do produto;
* Nome;
* Preço;
* Descrição;
* Categoria;
* Informações adicionais;
* Botão para adicionar ao carrinho;
* Produtos relacionados.

---

### 5.4 Carrinho

O carrinho permitirá que o usuário visualize os produtos selecionados.

Funcionalidades previstas:

* Adicionar produtos;
* Visualizar produtos selecionados;
* Alterar quantidade;
* Remover produtos;
* Visualizar o valor dos produtos;
* Organizar os itens antes de entrar em contato com a loja.

Nesta etapa do projeto, o carrinho funciona como parte da experiência de compra e não representa um sistema de pagamento real.

---

### 5.5 Cadastro e Login

Como parte da evolução prevista para a aplicação, será criada uma área de cadastro e login de usuários.

O usuário poderá futuramente:

* Criar uma conta;
* Realizar login;
* Acessar seus dados;
* Consultar pedidos realizados.

Essas funcionalidades fazem parte da evolução planejada do projeto.

---

### 5.6 Contato

A aplicação contará com uma área de contato para facilitar a comunicação entre o cliente e a loja.

Entre os recursos previstos estão:

* Informações de contato;
* Redes sociais;
* WhatsApp;
* Informações da loja.

---

### 5.7 Sobre a Loja

A página "Sobre" apresentará informações sobre a JMS Bolsas Grajaú e sua proposta.

O objetivo é aproximar o cliente da loja e apresentar informações institucionais.

---

## 6. Tecnologias Previstas

As tecnologias utilizadas ou previstas para o desenvolvimento do projeto são:

### Front-end

* **HTML5** — estrutura das páginas;
* **CSS3** — estilização, layout e responsividade;
* **JavaScript** — interações e funcionalidades da aplicação;
* **Google Fonts** — utilização de fontes para a identidade visual.

### Armazenamento e funcionalidades atuais

* **LocalStorage** — armazenamento local de informações do carrinho e dados necessários para algumas interações da aplicação.

### Back-end — evolução prevista

* **Python** — linguagem prevista para o desenvolvimento do back-end;
* **Flask** — framework previsto para criação da aplicação web e APIs.

### Banco de Dados — evolução prevista

* **MySQL** — banco de dados previsto para armazenamento de usuários, produtos e pedidos.

---

## 7. Esboço do Projeto (Layout)

O projeto será organizado em diferentes telas, permitindo que o usuário navegue pelo catálogo e pelas principais funcionalidades da loja.

### 7.1 Tela Inicial

**Estrutura prevista:**

```text
+--------------------------------------------------+
| LOGO JMS BOLSAS       INÍCIO | PRODUTOS | 🛒    |
+--------------------------------------------------+
|                                                  |
|              DESTAQUE DA LOJA                   |
|                                                  |
|       Bolsas, malas e acessórios                |
|                                                  |
|              [ VER PRODUTOS ]                    |
|                                                  |
+--------------------------------------------------+
|              PRODUTOS EM DESTAQUE               |
|                                                  |
|   [Imagem]       [Imagem]       [Imagem]        |
|   Produto 1      Produto 2      Produto 3       |
|   R$ XX,XX       R$ XX,XX       R$ XX,XX        |
|                                                  |
+--------------------------------------------------+
| SOBRE A LOJA                                     |
+--------------------------------------------------+
| CONTATO | REDES SOCIAIS | WHATSAPP              |
+--------------------------------------------------+
```

---

### 7.2 Tela de Produtos

A tela de produtos funcionará como uma vitrine virtual.

```text
+--------------------------------------------------+
| LOGO JMS BOLSAS       INÍCIO | PRODUTOS | 🛒    |
+--------------------------------------------------+
|                                                  |
|                 NOSSOS PRODUTOS                 |
|                                                  |
| [ Pesquisar produto... ]                         |
|                                                  |
| Categoria: [ Todas ▼ ]                           |
|                                                  |
| [Imagem]        [Imagem]        [Imagem]         |
| Produto 1       Produto 2       Produto 3        |
| R$ XX,XX        R$ XX,XX        R$ XX,XX         |
| [Ver produto]  [Ver produto]  [Ver produto]   |
|                                                  |
| [Imagem]        [Imagem]        [Imagem]         |
| Produto 4       Produto 5       Produto 6        |
| R$ XX,XX        R$ XX,XX        R$ XX,XX         |
| [Ver produto]  [Ver produto]  [Ver produto]   |
|                                                  |
+--------------------------------------------------+
```

---

### 7.3 Tela de Detalhes do Produto

A tela apresentará informações específicas do produto selecionado.

```text
+--------------------------------------------------+
| LOGO JMS BOLSAS       INÍCIO | PRODUTOS | 🛒    |
+--------------------------------------------------+
|                                                  |
|     [ IMAGEM DO PRODUTO ]     NOME DO PRODUTO   |
|                              R$ XX,XX            |
|                                                  |
|                              DESCRIÇÃO           |
|                              Informações sobre   |
|                              o produto.          |
|                                                  |
|                              [ ADICIONAR ]       |
|                              [ AO CARRINHO ]    |
|                                                  |
+--------------------------------------------------+
|              PRODUTOS RELACIONADOS              |
|                                                  |
| [Imagem]        [Imagem]        [Imagem]         |
+--------------------------------------------------+
```

---

### 7.4 Tela do Carrinho

A tela do carrinho permitirá visualizar os produtos selecionados.

```text
+--------------------------------------------------+
| LOGO JMS BOLSAS       INÍCIO | PRODUTOS | 🛒    |
+--------------------------------------------------+
|                                                  |
|                    CARRINHO                     |
|                                                  |
| Produto       Quantidade       Preço             |
| ------------------------------------------------ |
| Produto 1        1             R$ XX,XX          |
| Produto 2        2             R$ XX,XX          |
|                                                  |
|                              TOTAL: R$ XX,XX     |
|                                                  |
| [ CONTINUAR COMPRANDO ]                          |
|                                                  |
| [ ENTRAR EM CONTATO / WHATSAPP ]                |
|                                                  |
+--------------------------------------------------+
```

---

### 7.5 Tela de Login/Cadastro

Como parte da evolução da aplicação, será criada uma área para usuários.

```text
+--------------------------------------------------+
| LOGO JMS BOLSAS                                  |
+--------------------------------------------------+
|                                                  |
|                    LOGIN                         |
|                                                  |
| E-mail:                                          |
| [____________________________]                   |
|                                                  |
| Senha:                                           |
| [____________________________]                   |
|                                                  |
|             [ ENTRAR ]                           |
|                                                  |
| Ainda não possui uma conta?                      |
|             [ CADASTRE-SE ]                      |
|                                                  |
+--------------------------------------------------+
```

---

## 8. Navegação do Sistema

O fluxo principal de navegação da aplicação será:

```text
                    INÍCIO
                      |
          +-----------+-----------+
          |                       |
      PRODUTOS                 SOBRE
          |
    +-----+------+
    |            |
 PESQUISA    FILTRO
    |
    v
DETALHES DO PRODUTO
    |
    v
 CARRINHO
    |
    v
  CONTATO
 / WHATSAPP
```

A área de login/cadastro será disponibilizada como uma funcionalidade adicional da aplicação, permitindo uma futura integração com usuários e pedidos.

---

## 9. Estrutura Inicial do Projeto

A estrutura planejada para a aplicação é:

```text
Projeto-Integrador/
│
├── inicio.html
├── produtos.html
├── produto.html
├── sobre.html
├── contato.html
├── carrinho.html
│
├── css/
│   ├── estilo.css
│   ├── inicio.css
│   ├── produtos.css
│   ├── produto.css
│   ├── sobre.css
│   ├── contato.css
│   └── carrinho.css
│
├── js/
│   ├── produtos.js
│   ├── produto.js
│   └── carrinho.js
│
└── imagens/
    ├── logo
    ├── produtos
    ├── bolsas
    └── malas
```

---

## 10. Identidade Visual

A identidade visual proposta para o projeto utiliza como principais referências as cores da marca JMS Bolsas.

### Cores principais

* Preto: `#141311`
* Amarelo: `#E7B60B`
* Amarelo claro: `#F4CE3A`
* Creme: `#FBF8EF`
* Tons relacionados a couro

### Tipografia

O projeto utiliza fontes disponíveis pelo **Google Fonts**, com destaque para:

* Baloo 2;
* Inter.

A proposta visual busca transmitir uma identidade moderna, simples e relacionada ao segmento de bolsas e acessórios.

---

## 11. Evolução do Projeto

O projeto será desenvolvido inicialmente como um protótipo de loja virtual, concentrando-se na organização das telas, navegação e experiência do usuário.

Posteriormente, a aplicação poderá evoluir para uma solução com back-end e banco de dados.

Entre as funcionalidades futuras estão:

* Cadastro de usuários;
* Login;
* Banco de dados;
* Cadastro e gerenciamento de produtos;
* Registro de pedidos;
* Consulta de pedidos;
* Integração entre front-end e back-end.

O objetivo desta etapa não é apresentar todas essas funcionalidades funcionando, mas demonstrar a proposta da solução, sua organização e o planejamento da aplicação.

---

## 12. Considerações Finais

O **JMS Bolsas Grajaú** propõe uma solução digital para facilitar a apresentação e consulta dos produtos de uma loja.

O projeto foi planejado considerando uma estrutura simples e intuitiva, permitindo que o usuário navegue pela página inicial, consulte produtos, visualize seus detalhes, utilize o carrinho e entre em contato com a loja.

O esboço apresentado representa a estrutura inicial da aplicação e poderá sofrer alterações durante o desenvolvimento, conforme as necessidades identificadas pelo grupo e os requisitos do projeto.

A proposta também permite que o sistema seja expandido futuramente com recursos de back-end, banco de dados, usuários e pedidos, transformando o protótipo inicial em uma aplicação web mais completa.
