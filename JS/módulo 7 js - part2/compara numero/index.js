function addEvents(){
    document.getElementById('submit-button').addEventListener('click', larger);
}

function larger(){
    var numbers = document.getElementsByTagName('input');
    var firstNumber = parseInt(numbers[0].value);
    var secondNumber = parseInt(numbers[1].value);
    if (firstNumber > secondNumber){
        document.getElementById('answer').innerHTML = "O primeiro número é maior"
    }else{
        document.getElementById('answer').innerHTML = "O segundo número é maior"
    }
}