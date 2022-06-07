function addEvents(){
    document.getElementById("submit").addEventListener('click',calculate);
}

function calculate(){
    let weight = parseFloat(document.getElementById('weight').value.replace(',','.'));
    let height = parseFloat(document.getElementById('height').value.replace(',','.'));
    let classification = document.getElementById('classification');
    let IMC;
    console.log('weight: ' + weight + '\nheight: ' + height);
    console.log(isNaN(weight));
    if(isNaN(weight) || isNaN(height) || weight == 0 || height == 0){
        alert('insira valores válidos para altura e peso')
    }else{

        IMC = weight / (height * height);
        document.getElementById('IMC').innerHTML = "IMC = " + Number(IMC.toPrecision(4));
        if(IMC < 18.5){
            classification.innerHTML = 'Abaixo do peso.';
        }else if(IMC < 24.9){
            classification.innerHTML = 'Peso normal.';
        }else if(IMC < 29.9){
            classification.innerHTML = 'Sobrepeso.';
        }else{
            classification.innerHTML = 'Obesidade.'
        }
    }

    return 0;
}