function addEvents(){

    document.querySelector('#submit').addEventListener('click',function () {
        const precision = document.querySelector('#precision').value;
        const errorPlace = document.querySelector('.error');
        const answerPlace = document.querySelector('.answer');

        if (precision <= 0){
            errorPlace.innerHTML = 'Digite um número inteiro positivo maior que zero';
            return;    
        }

        let bigEuler = String(euler(1000,precision - 1));
        bigEuler = bigEuler.slice(0,1) + '.' + bigEuler.slice(1);   
        answerPlace.innerText = bigEuler;

    })

}

function factorial(n){
    n = BigInt(n);
    if(n == 0n){
        return 1n;
    }
    return n * factorial(n - 1n);
}

// Euler number in a big int
function euler(seriesSize, precision){
    seriesSize = BigInt(seriesSize);
    precision = BigInt(precision);
    if (seriesSize == 0n){
        return BigInt(10n**precision);
    }
    return (10n**precision / factorial(seriesSize)) + euler(seriesSize - 1n,precision);
}