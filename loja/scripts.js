document.addEventListener('DOMContentLoaded', function() {

    var produtosFemininos = [
        {
            nome: "212 Vip rosé elixir",
            preco: 449.99,
            imagemOriginal: "../img/Fem/PERFUME CAROLINA HERRERA 212 VIP ROSÉ ELIXIR FEMININO/1.png",
            imagemHover: "../img/Fem/PERFUME CAROLINA HERRERA 212 VIP ROSÉ ELIXIR FEMININO/2.png",
            quantidade: 0
        },
        {
            nome: "GOOD GIRL blush elixir",
            preco: 479.99,
            imagemOriginal: "../img/Fem/PERFUME CAROLINA HERRERA GOOD GIRL BLUSH ELIXIR FEMININO/1.png",
            imagemHover: "../img/Fem/PERFUME CAROLINA HERRERA GOOD GIRL BLUSH ELIXIR FEMININO/2.png",
            quantidade: 0
        },
        {
            nome: "Prada paradoxe intense",
            preco: 619.99,
            imagemOriginal: "../img/Fem/PERFUME PRADA PARADOXE INTENSE FEMININO/1.png",
            imagemHover: "../img/Fem/PERFUME PRADA PARADOXE INTENSE FEMININO/2.png",
            quantidade: 0
        },
        {
            nome: "VERSACE CRYSTAL NOIR",
            preco: 419.99,
            imagemOriginal: "../img/Fem/PERFUME VERSACE CRYSTAL NOIR FEMININO/2.png",
            imagemHover: "../img/Fem/PERFUME VERSACE CRYSTAL NOIR FEMININO/1.png",
            quantidade: 0
        }
    ];
    
    var produtosMasculinos = [
        {
            nome: "DIOR SAUVAGE MASCULINO",
            preco: 1005.99,
            imagemOriginal: "../img/mas/KIT COFFRET DIOR SAUVAGE MASCULINO/1.png",
            imagemHover: "../img/mas/KIT COFFRET DIOR SAUVAGE MASCULINO/2.png",
            quantidade: 0
        },
        {
            nome: "BOSS BOTTLED ELIXIR",
            preco: 687.99,
            imagemOriginal: "../img/mas/PERFUME BOSS BOTTLED ELIXIR MASCULINO/1.png",
            imagemHover: "../img/mas/PERFUME BOSS BOTTLED ELIXIR MASCULINO/2.png",
            quantidade: 0
        },
        {
            nome: "Gentleman society extreme",
            preco: 649.99,
            imagemOriginal: "../img/mas/PERFUME GIVENCHY GENTLEMAN SOCIETY EXTRÊME MASCULINO/1.png",
            imagemHover: "../img/mas/PERFUME GIVENCHY GENTLEMAN SOCIETY EXTRÊME MASCULINO/2.png",
            quantidade: 0
        },
        {
            nome: "Guilty pour homme",
            preco: 909.99,
            imagemOriginal: "../img/mas/PERFUME GUCCI GUCCI GUILTY POUR HOMME MASCULINO/1.png",
            imagemHover: "../img/mas/PERFUME GUCCI GUCCI GUILTY POUR HOMME MASCULINO/2.png",
            quantidade: 0
        }
    ];

var produtosFemininosContainer = document.getElementById('products-femininos-container');
produtosFemininos.forEach(function(produto) {
    var productHTML = `
        <div class="product" data-nome="${produto.nome}" data-preco="${produto.preco}" onmouseover="changeImage(this, '${produto.imagemHover}')" onmouseout="changeImage(this, '${produto.imagemOriginal}')">
            <img src="${produto.imagemOriginal}" alt="${produto.nome}" data-original-src="${produto.imagemOriginal}" data-hover-src="${produto.imagemHover}">
            <h2>${produto.nome}</h2>
            <p>R$ ${produto.preco.toFixed(2)}</p>
            <p>Até 10x sem juros</p>
            <button class="add-to-cart">Adicionar ao carrinho</button>
        </div>
    `;
    produtosFemininosContainer.insertAdjacentHTML('beforeend', productHTML);
});


var produtosMasculinosContainer = document.getElementById('products-masculinos-container');
produtosMasculinos.forEach(function(produto) {
    var productHTML = `
        <div class="product" data-nome="${produto.nome}" data-preco="${produto.preco}" onmouseover="changeImage(this, '${produto.imagemHover}')" onmouseout="changeImage(this, '${produto.imagemOriginal}')">
            <img src="${produto.imagemOriginal}" alt="${produto.nome}" data-original-src="${produto.imagemOriginal}" data-hover-src="${produto.imagemHover}">
            <h2>${produto.nome}</h2>
            <p>R$ ${produto.preco.toFixed(2)}</p>
            <p>Até 10x sem juros</p>
            <button class="add-to-cart">Adicionar ao carrinho</button>
        </div>
    `;
    produtosMasculinosContainer.insertAdjacentHTML('beforeend', productHTML);
});


    $('.slick-carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    // Adicionar item ao carrinho
    var addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var nome = this.parentElement.getAttribute('data-nome');
            var preco = parseFloat(this.parentElement.getAttribute('data-preco'));
            var item = { nome: nome, preco: preco };
            var carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
            carrinho.push(item);
            localStorage.setItem('carrinho', JSON.stringify(carrinho));
            alert('Item adicionado ao carrinho!');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {

    // Função para atualizar a exibição do carrinho
    function updateCart() {
        var carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
        var carrinhoContainer = document.getElementById('cart-container');
        carrinhoContainer.innerHTML = ''; // Limpa o conteúdo do carrinho antes de atualizar

        carrinho.forEach(function(item, index) {
            var itemHTML = `
                <div class="cart-item">
                    <p>${item.nome}</p>
                    <p>R$ ${item.preco.toFixed(2)}</p>
                    <p>Quantidade: ${item.quantidade}</p>
                    <button class="remove-from-cart" data-index="${index}">Remover</button>
                </div>
            `;
            carrinhoContainer.insertAdjacentHTML('beforeend', itemHTML);
        });

        // Adicionar evento de clique aos botões de remoção
        var removeButtons = document.querySelectorAll('.remove-from-cart');
        removeButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                var index = parseInt(this.getAttribute('data-index'));
                carrinho.splice(index, 1); // Remove o item do carrinho
                localStorage.setItem('carrinho', JSON.stringify(carrinho)); // Atualiza o carrinho no localStorage
                updateCart(); // Atualiza a exibição do carrinho
            });
        });
    };
    updateCart();
});

function changeImage(element, newSrc) {
    element.querySelector('img').src = newSrc;
}