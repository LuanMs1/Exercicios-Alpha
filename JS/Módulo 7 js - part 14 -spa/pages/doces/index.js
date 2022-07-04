export default () => {
    const container = document.createElement('div');
    // container.className = 'section-cards';
    const template = `
   
    <h1>Doces</h1>

    <div class="products">
        
        <div class="product-card">
            <div class="product-image">
                <img src="./pictures/churros.png" alt="churros">
            </div>
            <h3>Churros</h3>
            <p class = 'product-description'>
                Um gostoso churros recheado com doce de leite.
            </p>
            <button type="button" class="buy-button" id = "churros"> Comprar </button>
        </div>

        <div class="product-card">
            <div class="product-image">
                <img src="./pictures/rapadura.jpg" alt="rapadura">
            </div>
            <h3>Rapadura</h3>
            <p class = 'product-description'>
                Um clássico doce do nordeste braileiro. mas vale o alerta: "rapadura é doce mas n é mole não".
            </p>
            <button type="button" class="buy-button" id = "Rapadura"> Comprar </button>
        </div>

        <div class="product-card">
            <div class="product-image">
                <img src="./pictures/paçoca.jpg" alt="paçoca">
            </div>
            <h3>paçoca</h3>
            <p class = 'product-description'>
                Dispensa introdução. 
            </p>
            <button type="button" class="buy-button" id = "paçoca"> Comprar </button>
        </div>

    </div>


    `;
    container.innerHTML = template;

    return container;
}