import { startStates, buildCitysSelect } from "./buildSelection.js";
import getPrediction from './getPrediction.js';
let stats = false;
window.addEventListener('load',startStates);
window.addEventListener('load',addEvents);
function addEvents(){
    document.querySelector('#state').addEventListener('change',(event) => buildCitysSelect(event.target.value));
    document.querySelector('#city').addEventListener('change',(event) => getPrediction(event.target.value));
}