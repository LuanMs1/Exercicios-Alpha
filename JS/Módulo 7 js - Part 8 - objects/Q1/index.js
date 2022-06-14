//Objetos
let user = {
    name : '',
    birthDate: '' ,
    weight: '',
    height: '',
    gender: ''
};

//add events

function addEvents(){
    document.querySelector('.submit').addEventListener('click',function (event){
        // getting the elements
        const userName = document.querySelector('#name-input');
        const userBirth = [
            document.querySelector('#year').value,
            document.querySelector('#month').value,
            document.querySelector('#day').value
        ]
        const userWeight = document.querySelector("#weight");
        const userHeight = document.querySelector('#height');
        const userGenderSelector = document.querySelector('#gender-select'); //seletor 
        const userGender = userGenderSelector.options[userGenderSelector.selectedIndex].innerHTML; //retorna o nome dentro da tag selecionada

        // Checking for errors
        console.log(userGender);
        if(new Date(userBirth[0],userBirth[1] - 1, userBirth[2]) > new Date()){
            alert('O usuário ainda não nasceu');
            return 0;
        }
        if(isNaN(parseInt(userHeight.value))){
            alert('digite a altura em cm');
            return 0;
        }
        if(isNaN(parseFloat(userHeight.value.replace(',','.')))){
            alert('digite o peso em kg');
            return 0;
        }

        //Populating the object
        user.name = userName.value;
        user.birthDate = new Date(userBirth[0],userBirth[1] - 1, userBirth[2]);
        user.weight = parseFloat(userWeight.value.replace(',','.'));
        user.height = parseInt(userHeight.value);
        user.gender = userGender;
        console.log(user);
    })
}