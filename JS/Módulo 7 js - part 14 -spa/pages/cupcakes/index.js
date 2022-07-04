export default () => {
    const container = document.createElement('div');
    // container.className = 'section-cards';
    const template = `
   
    <h1>Cupcakes</h1>

    <div class="products">
        
        <div class="product-card">
            <div class="product-image">
                <img src="./pictures/cupcake-chocolate.jpg" alt="Cupcake tradicional">
            </div>
            <h3>Cupcake Tradicional</h3>
            <p class = 'product-description'>
                Um cupcake tradicional de sabor chocolate.
            </p>
            <button type="button" class="buy-button" id = "Cupcake-tradiconal"> Comprar </button>
        </div>

        <div class="product-card">
            <div class="product-image">
                <img src="./pictures/cupcake-rosa.jpg" alt="Cupcake rosa">
            </div>
            <h3>Cupcake rosa</h3>
            <p class = 'product-description'>
                Um cupcake tradicional de sabor chocolate com cobertura rosa.
            </p>
            <button type="button" class="buy-button" id = "Cupcake-rosa"> Comprar </button>
        </div>

        <div class="product-card">
            <div class="product-image">
                <img src="./pictures/cupcake-azul.jpg" alt="cupcake azul">
            </div>
            <h3>Beijinho</h3>
            <p class = 'product-description'>
                Um cupcake tradicional de sabor chocolate com cobertura azul.
            </p>
            <button type="button" class="buy-button" id = "cupcake-azul"> Comprar </button>
        </div>

    </div>


    `;
    container.innerHTML = template;

    return container;
}