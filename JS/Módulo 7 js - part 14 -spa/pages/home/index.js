export default () => {
    const container = document.createElement('div');
    container.className = 'section-cards';
    const template = `
        
    <div class="product-card">

    <div class="product-section">
        <img src="./pictures/brigadeiro-section.jpg" alt="Brigadeiros">
    </div>
    <p>Brigadeiros</p>

    </div>
    <div class="product-card">

        <div class="product-section">
            <img src="./pictures/cupcakes-section.jpg" alt="Cupcakes">
        </div>
        <p>Cupcakes</p>

    </div>
    <div class="product-card">

        <div class="product-section">
            <img src="./pictures/doces.jpg" alt="doces">
        </div>
        <p>Doces</p>

    </div>

    `;
    container.innerHTML = template;

    return container;
}