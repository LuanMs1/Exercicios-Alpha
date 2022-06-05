function addEvents(){
    document.getElementById('submit-button').addEventListener('click', larger);
}

function larger(){
    var numbers = document.getElementsByTagName('input');
    var firststring = numbers[0].value;
    var secondstring = numbers[1].value;
    if (firststring.length > secondstring.length){
        document.getElementById('answer').innerHTML = "O primeiro string é maior"
    }else{
        document.getElementById('answer').innerHTML = "O segundo string é maior"
    }
}