function addEvents(){
    document.getElementById('submit').addEventListener('click',write);
}

function data(){
    const slct = document.getElementById('numbers');
    for(let i = 0; i < 10; i++){
        let opt = document.createElement('option');
        opt.value = i+1;
        opt.innerHTML = i+1;
        slct.appendChild(opt);
    }
}

function write(){
    const number = document.getElementById('numbers').selectedIndex;
    const answ = document.getElementById('answer');
    console.log(number + '\n' + answ);

    switch (number){
        case 0:
            answ.innerHTML = 'um';
            break;
        case 1:
            answ.innerHTML = 'dois';
            break;
        case 2:
            answ.innerHTML = 'três';
            break;
        case 3:
            answ.innerHTML = 'quatro';
            break;
        case 4:
            answ.innerHTML = 'cinco';
            break;
        case 5:
            answ.innerHTML = 'seis';
            break;
        case 6:
            answ.innerHTML = 'sete';
            break;
        case 7:
            answ.innerHTML = 'oito';
            break;
        case 8:
            answ.innerHTML = 'nove';
            break;
        case 9:
            answ.innerHTML = 'dez';
            break;

    }
}