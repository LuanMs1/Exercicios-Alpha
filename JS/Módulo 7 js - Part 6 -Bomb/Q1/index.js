

//variables

const img = document.getElementsByTagName('img');
let test = setInterval(() => {
    console.log('tick');        
}, 1000);
let arm = setTimeout(explode,10000);

//Events

function addEvents(){
    document.getElementById('bomb').addEventListener('click',disarm);
}

//functions

function explode(){

    img[0].src = '../imgs/explosion.png';
    console.log(img);
    console.log('BOOOOOOOM!');

}

function disarm(){
    console.log('saved the day');
    img[0].src = '../imgs/bomba-apagada.png';
    clearTimeout(arm);
    clearInterval(test);
}

