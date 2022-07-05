export default () => {
    let main = document.querySelector('#root');
    const content = `
   
    <h1>Brigadeiros</h1>

    <div class="products">
        
        <div class="product-card">
            <div class="product-image">
                <img src="./pictures/brigadeiro-tradiconal.jpg" alt="brigadeiro tradicional">
            </div>
            <h3>Brigadeiro Tradicional</h3>
            <p class = 'product-description'>
                O mais tradicional (e mais querido) doce brasileiro. O brigadeiro tradicional de chocolate
                e granulado de chocolate. Básico, mas muito gostoso e feito com amor.
            </p>
            <button type="button" class="buy-button" id = "brigadeiro-tradiconal"> Comprar </button>
        </div>

        <div class="product-card">
            <div class="product-image">
                <img src="./pictures/brigadeiro-limão.jpg" alt="brigadeiro de limão">
            </div>
            <h3>Brigadeiro de limão</h3>
            <p class = 'product-description'>
                Que tal dar uma variada? Vamo subistituir o gosto do tradicional chocolate por um
                de limão, tão gostoso quando o outro, mas assim a gente não enjoa só do mesmo sabor.
            </p>
            <button type="button" class="buy-button" id = "brigadeiro-limão"> Comprar </button>
        </div>

        <div class="product-card">
            <div class="product-image">
                <img src="./pictures/beijinho.jpg" alt="brigadeiro beijinho">
            </div>
            <h3>Beijinho</h3>
            <p class = 'product-description'>
                E aqui de novo outro clássico! O beijinho é mais semelhante ao briadeiro tradicional,
                mas agora de leite e com coco ralado em cima. Chega da água na boca!!
            </p>
            <button type="button" class="buy-button" id = "beijinho"> Comprar </button>
        </div>

    </div>


    `;
    console.log('page2 render')
    return main.innerHTML = content;
}