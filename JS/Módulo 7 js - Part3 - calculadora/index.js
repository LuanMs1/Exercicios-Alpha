function addEvents(){
    document.getElementById('submit').addEventListener('click',calculate);
}

function calculate(){
    let operation = document.querySelector('#operations').selectedIndex;
    let numberOne = parseInt(document.querySelector("input:nth-child(1)").value);
    let numbertwo = parseInt(document.querySelector("input:nth-child(2)").value);
    let result;
    switch (operation){

        case 0:
            result = numberOne + numbertwo;
            console.log(numberOne + " + " + numbertwo + " = " + result);
            document.getElementById('answer').innerHTML = numberOne + " + " + numbertwo + " = " + result;
            break;

        case 1:
            result = numberOne * numbertwo;
            console.log(numberOne + " * " + numbertwo + " = " + result);
            document.getElementById('answer').innerHTML = numberOne + " * " + numbertwo + " = " + result;
            break;

        case 2:
            result = numberOne / numbertwo;
            console.log(numberOne + " / " + numbertwo + " = " + result);
            document.getElementById('answer').innerHTML = numberOne + " / " + numbertwo + " = " + result;
            break;

    }
}