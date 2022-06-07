function addEvents(){
    document.getElementById("submit").addEventListener('click',generate);
}

function generate(){
    let minInput = document.getElementById('min').value;
    let maxInput = document.getElementById('max').value;
    let min = parseInt(minInput);
    let max = parseInt(maxInput);
    let errorMensage = document.getElementById('error');
    let answer = document.getElementById('answer')
    console.log('min : ' + minInput + '\nmax : ' + maxInput);
    console.log('min : ' + min + '\nmax : ' + max);
    console.log('min is equal to minInput ' + (minInput == min));

    if(isNaN(min) || isNaN(max) || min != minInput || max != maxInput){
        console.log('not a integer');
        errorMensage.innerHTML = 'Por favor, digite apenas valores inteiros';
        answer.innerHTML = '';
    }else{
        console.log('generates the randon number');
        if(min < max){
            let rnd = Math.random() * (max-min) + min;
            answer.innerHTML = 'O valor aleatório gerado é: ' + rnd;
            errorMensage.innerHTML = '';
        }

    }
}