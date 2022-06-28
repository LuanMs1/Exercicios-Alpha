function addEvents(){
    document.querySelector('.deck').addEventListener('click',function (){
        const handPlace = document.querySelector('.hand');
        let newCard = document.createElement('div');
        newCard.className = 'card';
        console.log(deck);
        handPlace.appendChild(newCard);
        
    });
};