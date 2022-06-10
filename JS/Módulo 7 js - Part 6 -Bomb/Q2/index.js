

//variables

const img = document.getElementsByTagName('img');
let sound = setInterval(tick, 1000);
let arm = setTimeout(explode,60000);

//Events

function addEvents(){
    document.getElementById('bomb').addEventListener('click',disarm);
}

//functions

function explode(){
    
    const boom = document.querySelector('#boom');
    img[0].src = '../imgs/explosion.png';
    console.log(img);
    clearInterval(sound);
    console.log('BOOOOOOOM!');
    boom.play();

}

function disarm(){
    const tss = document.querySelector('#tss');
    console.log('saved the day');
    img[0].src = '../imgs/bomba-apagada.png';
    clearTimeout(arm);
    clearInterval(sound);
    tss.play();
}

function tick(){
    const bip = document.querySelector('#bip');
    bip.play();
}
