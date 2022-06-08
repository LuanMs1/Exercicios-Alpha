function addEvents(){
    document.getElementById("submit").addEventListener('click',round);
}

function round(){
    // declaring variables
    let nmbTyped = document.getElementById('number').value.replace(',','.');
    let nmb = parseFloat(nmbTyped);
    let divAnswer = document.getElementsByClassName('rouding');
    let errorMesage = document.getElementById('error');


    
    console.log('numero digitado: ' + nmbTyped + '\nnumero corrigido: ' + nmb);

    if(isNaN(nmb) || nmb != nmbTyped){ //checking if it the typed value is valid
        errorMesage.innerHTML = 'Digite um número válido, por favor.';
        divAnswer.getElementById('floor').innerHTML = '';
        divAnswer.getElementById('ceil').innerHTML = '';

    }else{
        
        // showing the display of the answers
        divAnswer[0].style.display = 'flex';
        divAnswer[1].style.display = 'flex';

        document.getElementById('floor').innerHTML = Math.floor(nmb);
        document.getElementById('ceil').innerHTML = Math.ceil(nmb);
        errorMesage.innerHTML = '';
    }
}