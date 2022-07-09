import checkValid from "./cep.js";
import getCepInfo from "./getCepInfo.js";
let cep = '';
const infoPlace = document.querySelector('.infos');
window.addEventListener('load', addEvents);
function addEvents(){
    document.querySelector('.cep').addEventListener('keydown',(event) => {
        cep = checkValid(event,cep);
    });
    document.querySelector('.search').addEventListener('click',(event) => {
        let dataPromise = getCepInfo(cep);
        dataPromise.then(data => printInfo(data));
    })
}

function printInfo(data){
    console.log(data);
    infoPlace.innerHTML = '';
    const infoAd = document.createElement('p');
    const infoDis = document.createElement('p');
    const infoCt = document.createElement('p');
    const infoSt = document.createElement('p');
    const infoLt = document.createElement('p');
    const infoLg = document.createElement('p');
    infoAd.innerHTML = `Endereço: ${data['address']}`;
    infoPlace.appendChild(infoAd);
    infoDis.innerHTML = `Bairro: ${data['district']}`;
    infoPlace.appendChild(infoDis);
    infoCt.innerHTML = `Cidade: ${data['city']}`;
    infoPlace.appendChild(infoCt);
    infoSt.innerHTML = `Estado: ${data['state']}`;
    infoPlace.appendChild(infoSt);
    infoLt.innerHTML = `Latitude: ${data['lat']}`;
    infoLg.innerHTML = `Longitude: ${data['lng']}`;
    infoPlace.appendChild(infoLt);
    infoPlace.appendChild(infoLg);
}

