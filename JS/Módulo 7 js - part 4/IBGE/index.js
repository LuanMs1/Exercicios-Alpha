function addEvents(){
    document.getElementById('submit').addEventListener('click',generate);
}

function generate(){
    const manProp = 0.483;
    const elderly = 0.167;
    const sexText = document.getElementById('sex');
    let men = 0;
    let women = 0;
    let eld = 0;
    let rep = 1000000;


    if(Math.random() < manProp){

        sexText.innerHTML = 'Homem ';

    }else{

        sexText.innerHTML = 'Mulher ';

    }
    
    if(Math.random() < elderly){

        document.getElementById('elderly').innerHTML = 'Idoso(a)';

    }

    for(let i = 0; i < rep; i++){
        if(Math.random() < manProp){
            
            men++;
    
        }else{
            
            women++;
    
        }
        
        if(Math.random() < elderly){
            
            eld++;
    
        }
    }

    console.log((men/rep)*100 + '% homens');
    console.log((women/rep)*100 + '% mulher');
    console.log((eld/rep)*100 + '% idosos');
}