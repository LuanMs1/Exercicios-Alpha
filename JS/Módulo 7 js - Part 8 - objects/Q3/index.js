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
        console.log(userBirth[1].length)
        try{
            // verificando por erros
            if (userName.value.length < 5 ) throw 'Field "name" is invalid';

            // validando datas
            if (userBirth[2].length == 0) throw 'field "birthDate" is invalid';
            if (isNaN(userBirth[2])) throw 'field "birthDate" is invalid';
            if (userBirth[1].length == 0) throw 'field "birthDate" is invalid';
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

            const results = document.querySelector('.results');
            const printObject = document.querySelector('.object')
            for (info in user){
                console.log(info + ' : ' + user[info]);
                results.innerText += info + ' : ' + user[info] + '\n';
            }
            printObject.innerText = JSON.stringify(user)
            console.log(user);

            // resetando campos
            userName.value = ''
            document.querySelector('#year').value = '';
            document.querySelector('#month').value = '';
            document.querySelector('#day').value = '';
            userHeight.value = '';
            userWeight.value = '';

        }catch (err){
            document.querySelector('.error').innerHTML = err;   
        }
    })
}