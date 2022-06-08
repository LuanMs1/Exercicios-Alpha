function addEvents(){
    document.getElementById('submit').addEventListener('click',dateInfo);
}

function dateInfo(){
    //getting the inputed date
    let inputDate = document.getElementById('date').value;
    const answers = document.getElementsByTagName('p');

    //transforming in an array [year, month, day]
    const dateArray = inputDate.split('-');

    // changing input date to a date struct of the inputed date
    // keep in mind that the months are 0 - 11
    inputDate = new Date(dateArray[0], dateArray[1] - 1, dateArray[2]);
    console.log(inputDate);
    console.log(answers);

    
    //printing values
    answers[0].innerHTML = 'Dia: ' + inputDate.getDate(); //day
    answers[1].innerHTML = 'Mês: ' + parseInt(inputDate.getMonth() + 1); //month
    answers[2].innerHTML = 'Ano: ' + inputDate.getFullYear(); //year

    //Dia da semana
    switch (inputDate.getDay()){
        case 1:
            answers[3].innerHTML = 'Segunda';
            break;
        case 2:
            answers[3].innerHTML = 'Terça';
            break;
        case 3:
            answers[3].innerHTML = 'Quarta'
            break;
        case 4:
            answers[3].innerHTML = 'quinta';
            break;
        case 5:
            answers[3].innerHTML = 'sexta';
            break;
        case 6:
            answers[3].innerHTML = 'sábado';
            break;
        case 0:
            answers[3].innerHTML = 'domingo';
            break;
    }

    //Mês texto
    switch (inputDate.getMonth()){
        case 0:
            answers[4].innerHTML = 'janeiro';
            break;
        case 1:
            answers[4].innerHTML = 'fevereiro';
            break;
        case 2:
            answers[4].innerHTML = 'Março';
            break;
        case 3:
            answers[4].innerHTML = 'Abril';
            break;
        case 4:
            answers[4].innerHTML = 'Maio';
            break;
        case 5:
            answers[4].innerHTML = 'Junho';
            break;
        case 6:
            answers[4].innerHTML = 'Julho';
            break;
        case 7:
            answers[4].innerHTML = 'Agosto';
            break;
        case 8:
            answers[4].innerHTML = 'setembro';
            break;
        case 9:
            answers[4].innerHTML = 'Outubro';
            break;
        case 10:
            answers[4].innerHTML = 'Novembro';
            break;
        case 11:
            answers[4].innerHTML = 'Dezembro';
            break;

    }

    answers[5].innerHTML = 'milisegundos: ' + inputDate.getTime();



}


