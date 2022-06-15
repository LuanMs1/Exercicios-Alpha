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
        document.querySelector('.error').innerHTML = '';
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
        console.log(parseInt(userBirth[1]))
        try{
            // verificando por erros
            if (userName.value.length == 0) throw 'Field "name" is invalid';

            // validando datas
            if (userBirth[2].length == 0 || parseInt(userBirth[2]) > 31) throw 'field "birthDate" is invalid';
            if (isNaN(userBirth[2])) throw 'field "birthDate" is invalid';
            if (userBirth[1].length == 0 || parseInt(userBirth[1]) > 12) throw 'field "birthDate" is invalid';
            if (isNaN(userBirth[1])) throw 'field "birthDate" is invalid';
            if (userBirth[0].length == 0) throw 'field "birthDate" is invalid';
            if (isNaN(userBirth[0])) throw 'field "birthDate" is invalid';
            //validando se a data é inferior a data atual
            if (new Date(userBirth[0],userBirth[1] - 1, userBirth[2]) > new Date()) throw 'o usuário não nasceu';

            // peso e altura
            if (userWeight.value.length == 0) throw 'field "weight" is invalid'
            if (userHeight.value.length == 0) throw 'field "Height" is invalid'        
            if (isNaN(userHeight.value)) throw 'field "Height" is invalid';
            if (isNaN(userWeight.value.replace(',','.'))) throw 'field "weight" is invalid';

            // atribuindo propriedades do array  
            user.name = userName.value;
            user.birthDate = new Date(userBirth[0],userBirth[1] - 1, userBirth[2]);
            user.weight = parseFloat(userWeight.value.replace(',','.'));
            user.height = parseInt(userHeight.value);
            user.gender = userGender;
            console.log(user);

        }catch (err){
            document.querySelector('.error').innerHTML = err;
        }
        // // Checking for errors
        // console.log(userGender);
        // if(new Date(userBirth[0],userBirth[1] - 1, userBirth[2]) > new Date()){
        //     alert('O usuário ainda não nasceu');
        //     return 0;
        // }
        // if(isNaN(parseInt(userHeight.value))){
        //     alert('digite a altura em cm');
        //     return 0;
        // }
        // if(isNaN(parseFloat(userHeight.value.replace(',','.')))){
        //     alert('digite o peso em kg');
        //     return 0;
        // }

        //Populating the object
    })
}