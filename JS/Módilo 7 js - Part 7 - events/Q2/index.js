const input = document.getElementById('cep');
// add events

function addEvents(){
    document.getElementById('cep').addEventListener('keyup',checkValid); //Evento de digitar no input
}


//Functions of run

function checkValid(a){ // essa função vai checar a validade do input e apagar o ' - ' inserido pelo js
    const num = a.target.value;
    console.log('a.target.value = ' + a.target.value);

    // tentando apagar o ' - ' quando necessário
    if(a.key == 'Backspace'){
        if(num.length == 7){
            console.log('apaga mais');
            console.log('before slice: ' + a.target.value)
            a.target.value.slice(0,-3);
            console.log('after slice: ' + a.target.value)
            
        }
    }else{ //executa o código normal somente se a tecla n for backspace
        if(isNaN(parseInt(a.key))){ 
            //se a tecla pressionada não for inteiro gera erro e apaga o q foi digitado
            const snd =  document.getElementById('error-sound'); //som
            const errorMsg = document.querySelector('.error');
            a.target.value = num.slice(0, -1); //apagando o caractere digitado erroneamente
            snd.play();
            errorMsg.innerHTML = 'Apenas números são aceitos';
    
        }else{
            if(num.length == 5){//apos digitar o 5 elemento acrescentar ' - '
                a.target.value += ' - '
            }
        }

    }
}