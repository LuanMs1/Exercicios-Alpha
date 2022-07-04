import home from "./pages/home/index.js";
import brigadeiros from "./pages/brigadeiros/index.js";
import cupcakes from "./pages/cupcakes/index.js";
import doces from "./pages/doces/index.js";
const main = document.querySelector('#root');
function init(){
    window.addEventListener('hashchange', () => {
        main.innerHTML = ' ';
        console.log(main);
        switch (window.location.hash){
            case "":
                main.appendChild(home());
                break;
            case "#/brigadeiros":
                main.appendChild(brigadeiros());
                break
            case "#/cupcakes":
                main.appendChild(cupcakes());
                break;
            case '#/doces':
                main.appendChild(doces());
                break;
            default:
                main.appendChild(home());
                break
        }
    })
}
window.addEventListener('load', () => {
    main.appendChild(home());
    init();
})