
function addEvents(){
    document.querySelector('.sum').addEventListener('click',function (){
        let num1 = document.querySelector('.num1');
        let num2 = document.querySelector('.num2');
        let answerField = document.querySelector('.answer');
        answerField.innerHTML = sum(num1.value,num2.value);
        
    });
    document.querySelector('.subtraction').addEventListener('click',function(){
        let num1 = document.querySelector('.num1');
        let num2 = document.querySelector('.num2');
        let answerField = document.querySelector('.answer');
        answerField.innerHTML = subtraction(num1.value ,num2.value ,0);

    })
}

function sum(num1, num2){
    let answerField = document.querySelector('.answer');
    let errorField = document.querySelector('.error');
    errorField.innerHTML = '';

    try{
        if(num1 == '' || num2 == '' ) throw 'digite dois números'
        if(num1 < 0 || num2 < 0 ) throw `[sum] impossible to sum ${num1} 
        + ${num2}`
        return parseInt(num1) + parseInt(num2);
    }catch (error){
        errorField.innerHTML = error;
    }
}

function subtraction(num1,num2,base){
    if(sum(num2,base) == num1){
        return base;
    }
    return subtraction(num1,num2,base+1);

}