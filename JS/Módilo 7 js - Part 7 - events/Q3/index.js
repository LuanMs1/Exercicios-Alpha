//events

function addEvents(){
    document.querySelector('.submit').addEventListener('click',submitMessage);
    document.querySelector('.camp').addEventListener('keyup',entSubmit);
    document.querySelector('.erase').addEventListener('click',erase);
}


function submitMessage(){

    const msg = document.querySelector('.camp').value;
    const chat = document.querySelector('#msgs');
    const msgBaloon = document.createElement('p');
    msgBaloon.innerHTML = msg;
    chat.innerHTML += msg + '\n';
    chat.scrollTop = chat.scrollHeight;

}

function entSubmit(e){
    if(e.key == 'Enter'){
        submitMessage();
    }
}

function erase(){
    const msg = document.querySelector('.camp');
    msg.value = msg.value.slice(0,-msg.value.length);
}