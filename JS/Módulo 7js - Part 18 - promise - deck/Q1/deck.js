export async function shuffleDeck(){
    try{
        let deck = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1').then(response => response.json());
        if (!deck.success) throw 'not possible to fetch the deck';
        return deck;
    }catch(error){
        return Promise.reject(error);
        // return Error(error);
    }    
}
export async function drawHand(__deck,__number){
    console.log(__deck);
    for (let i = 0; i < __number; i++){
        const card = await drawCard(__deck);
        const cardImg = document.createElement('img');
        cardImg.id = card['code'];
        cardImg.src = card['image'];
        // ???????????????????????????????
        //o que ta acontecendo aqui???????
        // ???????????????????????????????
        // setTimeout(() => document.querySelector('body').appendChild(cardImg), 1000);
        document.querySelector('.hand').appendChild(cardImg);
        console.log(__deck);
    }
    console.log(__deck);
}

export async function drawCard(__deck){
    const deckId = __deck['deck_id'];
    const remainingCards = __deck['remaining'];
    let card = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`).then(response => response.json());
    console.log(card);
    return card.cards[0];
}