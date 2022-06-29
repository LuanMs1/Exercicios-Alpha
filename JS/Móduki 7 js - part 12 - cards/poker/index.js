let gameDeck = shuffle(deck);
let hand = []
function addEvents(){
    document.querySelector('.deck').addEventListener('click',function (){
        const handPlace = document.querySelector('.hand');
        let newCard = document.createElement('div');
        const answer = document.querySelector('.result');
        newCard.className = 'card';
        let cardImage = document.createElement('img');
        let card;
        if (hand.length < 5){
            card = getCard(gameDeck);
            hand.push(card);
            cardImage.src = `../2color-bf/${card}.svg`;
            // newCard.innerHTML = card;
            newCard.appendChild(cardImage);
            handPlace.appendChild(newCard);
        }else{
            console.log('all hand dealt')
            result = checkResult(hand);
            answer.innerHTML = `você tem ${result}`;
        }
        console.log(hand);
        
    });
};