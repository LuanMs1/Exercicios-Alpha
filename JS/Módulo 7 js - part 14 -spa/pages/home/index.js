export default () => {
    let main = document.querySelector('#root');
    const content = `

    <h1> Doceria </h1>
    <div class = 'sections'>    
    <div class="section-card">

    <div class="product-section">
        <img src="./pictures/brigadeiro-section.jpg" alt="Brigadeiros">
    </div>
    <p>Brigadeiros</p>

    </div>

    <div class="section-card">

        <div class="product-section">
            <img src="./pictures/cupcakes-section.jpg" alt="Cupcakes">
        </div>
        <p>Cupcakes</p>

    </div>

    <div class="section-card">

        <div class="product-section">
            <img src="./pictures/doces.jpg" alt="doces">
        </div>
        <p>Doces</p>

    </div>
    </div>

    `;
    console.log(main);
    return main.innerHTML = content;
}