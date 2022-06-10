// Car objects
const modelS = {
    imgSrc: '../imgs/modelS.png',
    name: 'ModelS',
    manufacture: 'Tesla',
    topSpeed: '320 km/h',
    onehundred: '1,99s'
};

const model3 = {
    imgSrc: '../imgs/model3.png',
    name: 'Model3',
    manufacture: 'Tesla',
    topSpeed: '261 km/h',
    onehundred: '3,1s'
};
const modelX = {
    imgSrc: '../imgs/modelX.png',
    name: 'ModelX',
    manufacture: 'Tesla',
    topSpeed: '262 km/h',
    onehundred: '2,5s'
};

const modelY = {
    imgSrc: '../imgs/modelY.png',
    name: 'ModelY',
    manufacture: 'Tesla',
    topSpeed: '250 km/h',
    onehundred: '3,5s'
};

//array with all cars
const cars = [modelS, model3, modelX, modelY];


//global variables
let selectedCar;

// events
function addEvents(){
    document.getElementById('car-selection').addEventListener('change',changeCar);
}

//function to reset all child nodes of a given parent
function removeAllChilds(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

// function to show the car and the infos in the page
function printCar(car){

    const img = document.getElementById('car-img');
    const infoPlace = document.getElementById('descriptions');
    infoPlace.chiel

    img.src = car.imgSrc;
    if(infoPlace.childElementCount > 0){
        removeAllChilds(infoPlace);
    }

    for(info in car){
        let data = document.createElement('p');

        switch (info){

            case 'name':
                data.innerHTML = 'Nome: ' + car[info];
                infoPlace.appendChild(data);
                break;
            case 'manufacture':
                data.innerHTML = 'Fabricante: ' + car[info];
                infoPlace.appendChild(data);
                break;
            case 'topSpeed':
                data.innerHTML = 'Velocidade máxima: ' + car[info];
                infoPlace.appendChild(data);
                break;
            case 'onehundred':
                data.innerHTML = '0-100km/h: ' + car[info];
                infoPlace.appendChild(data);
                break;               
                
        }
    }

}

//getting the car object referent to the selected string on page
function checkSelected(element, index, array){
    if(element.name == selectedCar){
        printCar(element);
    }
}



// trigered by event
function changeCar(){
    selectedCar = document.getElementById('car-selection').value;
    cars.forEach(checkSelected);

}