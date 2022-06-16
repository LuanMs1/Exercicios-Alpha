
function addEvents(){
    //sum event
    document.querySelector('.sum').addEventListener('click',function (){
        let num1 = document.querySelector('.num1');
        let num2 = document.querySelector('.num2');
        let answerField = document.querySelector('.answer');
        let sumAnswer = sum(num1.value,num2.value)
        if(!isNaN(sumAnswer)){
            answerField.innerHTML = sumAnswer;            
        }
    })
    
    //Subtraction Event
    document.querySelector('.subtraction').addEventListener('click',function(){
        let num1 = document.querySelector('.num1').value;
        let num2 = document.querySelector('.num2').value;
        let answerField = document.querySelector('.answer');
        let errorField = document.querySelector('.error');
        try{
            if(num1 == '' || num2 == '' ) throw 'digite dois números';
            if(num1 < 0 || num2 < 0 ) throw `[subtract] impossible to subtract ${num1}
            - ${num2}`;
            if(num1 < num2) throw `[subtract] impossible to subtract ${num1}
            - ${num2}`;
            answerField.innerHTML = subtraction(num1 ,num2 ,0);
        }catch (error){
            errorField.innerHTML = error;
        }
    })

    //multiplication event
    document.querySelector('.multiplication').addEventListener('click',function (){
        let num1 = document.querySelector('.num1').value;
        let num2 = document.querySelector('.num2').value;
        let answerField = document.querySelector('.answer');
        let errorField = document.querySelector('.error');
        try{
            if(num1 == '' || num2 == '' ) throw 'digite dois números';
            if(num1 < 0 || num2 < 0 ) throw `[multiply] impossible to multiply ${num1}
            * ${num2}`;
            answerField.innerHTML = multiplication(parseInt(num1),parseInt(num2));
        }catch (error){
            errorField.innerHTML = error;
        }
    })
}

function sum(num1, num2){
    let errorField = document.querySelector('.error');
    errorField.innerHTML = '';

    try{
        if(num1 == '' || num2 == '' ) throw 'digite dois números'
        if(num1 < 0 || num2 < 0 ) throw `[sum] impossible to sum ${num1} 
        + ${num2}`;
        return parseInt(num1) + parseInt(num2);
    }catch (error){
        errorField.innerHTML = error;
    }
}

function subtraction(num1,num2,base){
    //Esse primeiro if é um acochambrado, por algum motivo sum(num2,base) retorna undefined no caso
    //em que num1 e num2 são iguais pois sum(num2,0) ta dando undefined, por alguma razão.
    if(num1 === num2){
        return 0;
    }
    
    if(sum(num2,base) == num1){
        return base;
    }
    // condition to stop in case of error
    if(base > 20){
        return;
    }
    return subtraction(num1,num2,base+1);

}

function multiplication(num1,num2){
    if(num1 == 0 || num2 == 0){
        return '0';
    }
    return sum(num1,multiplication(num1,num2-1));
}
