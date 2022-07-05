//imports
import { routeChange } from "./event.js";
import route from "./route.js";
import home from "./pages/home/index.js";
import brigadeiros from "./pages/brigadeiros/index.js";
import cupcakes from "./pages/cupcakes/index.js";
import doces from "./pages/doces/index.js";


const links = document.querySelectorAll('.link');

// adicionar a mudança no rout de cada link
links.forEach((link) => {
    // route = this.dataset.value;
    link.addEventListener('click',function (){
        routeChange(`/${this.dataset.value}`);
    });
})

// definindo rotas
route('/', home);
route('/cupcakes', cupcakes);
route('/brigadeiros', brigadeiros);
route('/doces',doces);

window.document.addEventListener('onroutechange', function(event){
    console.log(event.detail);
    switch (event.detail.route){
        case '/cupcakes':
            route('/cupcakes');
        case '/brigadeiros':
            route('/brigadeiros');
        case '/doces':
            route('/doces');
        default:
            route('/');
    }
    route(event.detail.route);
})

route('/');