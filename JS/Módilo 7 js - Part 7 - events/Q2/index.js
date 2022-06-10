const input = document.getElementById('cep');
// add events

function addEvents(){
    document.getElementById('cep').addEventListener('keyup',checkValid);
}


//Functions of run

function checkValid(a){
    const num = a.target.value;
    console.log('a.target.value = ' + a.target.value);
    if(a.key == 'Backspace'){
        if(num.length == 7){
            console.log('apaga mais');
            console.log('before slice: ' + a.target.value)
            a.target.value.slice(0,-3);
            console.log('after slice: ' + a.target.value)
            
        }
    }else{
        if(isNaN(parseInt(a.key))){
            const snd =  document.getElementById('error-sound');
            const errorMsg = document.querySelector('.error');
            a.target.value = num.slice(0, -1);
            snd.play();
            errorMsg.innerHTML = 'Apenas números são aceitos';
    
        }else{
            if(num.length == 5){
                a.target.value += ' - '
            }
        }

    }
}