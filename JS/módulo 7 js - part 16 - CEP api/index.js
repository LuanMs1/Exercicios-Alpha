import checkValid from "./cep.js";
import getCepInfo from "./getCepInfo.js";
let cep = '';
let cordinates = {lat: 0,lng:0};
const infoPlace = document.querySelector('.infos');
window.addEventListener('load', addEvents);
function addEvents(){
    document.querySelector('.cep').addEventListener('keydown',(event) => {
        cep = checkValid(event,cep);
    });
    document.querySelector('.search').addEventListener('click',(event) => {
        let dataPromise = getCepInfo(cep);
        console.log(cep);
        dataPromise.then(data => {
            document.body.style.cursor = 'default';
            printInfo(data);
        });
    })
    document.querySelector('iframe').addEventListener('load',() => {
        document.body.style.cursor = 'default';
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

    cordinates.lat = data['lat'];
    cordinates.lng = data['lng'];
    const bt = document.createElement('button');
    bt.addEventListener('click',showMap);
    bt.innerHTML = 'Mostrar Mapa'
    infoPlace.appendChild(bt);

}
function showMap(){
    document.body.style.cursor = 'wait';
    document.querySelector('#map').src = `http://maps.google.com/maps?q=${cordinates.lat},${cordinates.lng}&z=15&output=embed`;
}

