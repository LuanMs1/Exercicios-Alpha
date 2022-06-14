let obj = {};
const objDois = {
    nome:'luan',
    tempo: 'seila'
}

// let objTres = JSON.stringify(objDois);
// objTres = JSON.parse(objTres);
// console.log(objTres);



function addEvents(){
    document.querySelector('#submit').addEventListener('click',function (){

        const code = document.querySelector('#code');
        const errorField = document.querySelector('.error');
        const validField = document.querySelector('.valid');
        errorField.innerText = ''
        try{
            obj = JSON.parse(code.value);
            if(typeof obj != "Object") throw 'Não é objeto';
            console.log(obj);
            validField.innerText = "Parsable JSON string!"
        }catch (error){
            validField.innerText = ""
            console.log(error);
            errorField.innerText = error;       
        }
        
    })
}