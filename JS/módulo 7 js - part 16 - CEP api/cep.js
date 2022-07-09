/**
 * Formating for the CEP. add " - " and prevent invalid characters as well as 
 * bigger numbers for a CEP.
 * 
 * @param {event} a a event 
 * @param {number} cep the cep to be changed and returned
 * @returns a string with a updated cep.
 */
export default function checkValid(a,cep){ // essa função vai checar a validade do input e apagar o ' - ' inserido pelo js
    const num = a.target.value;
    if(num.length > 10 && a.key !== 'Backspace'){
        const snd =  document.getElementById('error-sound'); //som
        a.preventDefault();
        snd.play();
        return cep;

    }
    // tentando apagar o ' - ' quando necessário
    if(a.key == 'Backspace'){
        if(num.length == 8){
            a.target.value = num.slice(0,-3);            
        }
    }else{ //executa o código normal somente se a tecla n for backspace
        if(isNaN(parseInt(a.key))){
            a.preventDefault(); 
            //se a tecla pressionada não for inteiro gera erro e apaga o q foi digitado
            const snd =  document.getElementById('error-sound'); //som
            snd.play();
    
        }else{
            if(num.length == 5){//apos digitar o 5 elemento acrescentar ' - '
                a.target.value += ' - ';
            }
        }

    }
    if (!isNaN(parseInt(a.key))){
        cep+=a.key;
    }else if(a.key == 'Backspace'){
        cep = cep.slice(0,-1);
    }
    return cep;
}