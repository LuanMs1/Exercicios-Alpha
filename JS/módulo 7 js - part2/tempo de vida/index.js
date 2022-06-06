function addEvents(){
    document.getElementById('submit-button').addEventListener('click', predictDeath());
}

function getAge(birthDay,today){
    var years= today[2] - birthDay[2];
    var months =today[1] - birthDay[1];
    var days = today[0] - birthDay[0] ;
    if (days < 0){
        months--;
        days = 31 + days;
    }
    if (months < 0){
        years--;
        months = 12 + months;
    }
    var age = [days, months, years];
    return age;
}

function predictDeath(){
    var today = new Date();
    var insertedDate = document.getElementsByClassName("date-field");
    var curentDate = [today.getDate(), today.getMonth() + 1, today.getFullYear()];
    var birthDay = [
        parseInt(insertedDate[0].value), 
        parseInt(insertedDate[1].value),
        parseInt(insertedDate[2].value)        
    ];
    
    //life spectancy for men and woman considering 365 days a year and 31 days a month
    // [days, months, years]
    var menSpectancy = [5, 1, 73];
    var womenSpectancy = [5, 1, 80];

    var genders = document.getElementsByClassName('genders');

    // getting age in an array [day, months, year]
    age = getAge(birthDay, curentDate);

    //geting the time left to live
    if(genders[0].checked){
        life = getAge(age, menSpectancy);        
    }else{
        life = getAge(age, womenSpectancy);
    }

    // console.log(curentDate);
    // console.log(birthDay);
    // console.log(age);
    // console.log(life);

    document.getElementById('answer').innerHTML = "Você tem " + life[0] + ' dias, ' + life[1] + ' meses, '
    + life[2] + ' anos de vida!'

}