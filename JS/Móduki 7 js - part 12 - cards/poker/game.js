const handMade = {
    'straight Flush' : false,
    'quadra' : false,
    'full House' : false,
    'sequencia' : false,
    'trinca' : false,
    'dois Pares': false,
    'par' : false,
    'flush': false
}
const deck = [
    '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '0S', 'JS', 'QS', 'KS', 'AS',
    '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '0D', 'JD', 'QD', 'KD', 'AD',
    '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '0H', 'JH', 'QH', 'KH', 'AH',
    '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '0C', 'JC', 'QC', 'KC', 'AC',
];

//test arrays
// let flushHand = ['2P', '3P', '8P', '5P', '9P'];
// let strFlsHand = ['2P', '3P', '4P', '5P', '6P'];
// let pairHand = ['AP', 'AO', '3P', '2P', 'JO'];
// let triHand = ['2P', '2O', '2E', '5P', '6P'];
// let quadHand = ['2P', '2O', '2E', '2C', '6P'];
// let fHand = ['2P', '2O', '2E', '5P', '5E'];
// let nothingHand = ['AP', '2O', '3E', '5P', '6O'];
// let twoPairHand = ['2P', '2O', '5E', '5P', '6P'];
//////////

function rand(a,b){
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

function shuffle(arr){
    let shuffledArr = [];
    // for (let i = 0; i < arr.length; i++){
    //     let k = rand(0, arr.length - 1);
    //     console.log(k);
    //     console.log(arr[k])
    //     while (shuffledArr.includes(arr[k])){
    //         k++;
    //         if (k > arr.length - 1){
    //             k = 0;
    //         }
    //     }

    //     shuffledArr.push(arr[k]);
    // }
    for (let i = 0; i < arr.length; i++){
        let k = rand(0, arr.length - 1 - i);
        shuffledArr.push(arr[k]);
        deck.push(deck.splice(k,1)[0]);
    }
    console.log(deck)
    return shuffledArr;
}

function resetResult(){
    for (res in handMade){
        handMade[res] = false;
    }
    return 0;
}

function getCard(deck){
    return deck.pop();
}

function dealHand(deck){
    let hand = [];
    for (let i = 0; i < 5; i++){        
        hand.push(deck.pop())
    }
    return hand;  
}

function handFix(hand){
    for (card in hand){
        if(hand[card][0] === '0'){
            hand[card] = hand[card].replace('0','10');
        }
        if(hand[card][0] === 'J'){
            hand[card] = hand[card].replace('J','11');
        }
        if(hand[card][0] === 'Q'){
            hand[card] = hand[card].replace('Q','12');
        }
        if(hand[card][0] === 'K'){
            hand[card] = hand[card].replace('K','13');
        }
        if(hand[card][0] === 'A'){
            hand[card] = hand[card].replace('A','14');
        }
    }
    return hand;
}

function handSort(hand){
    hand = handFix(hand);
    hand.sort(function (a,b){
        if (a > b){
            return 1;
        }else if ( a < b){
            return -1;
        }
        return 0;
    })
    return hand;
}

function checkFlush(hand){
    let np = hand[0].slice(-1);
    // console.log(np);
    for (i of hand){
        if (np != i.slice(-1)){
            return false;
        }
    }
    handMade['flush'] = true;
    return true;
}

function extractValues(hand){
    let newHand = [];
    for (card of hand){
        newHand.push(card.slice(0,-1));
    }
    return newHand;
}

function checkSequence(hand){
    for (let i = 0; i < hand.length - 1; i++){
        if (hand[i+1] - hand[i] != 1){
            return false;
        }
    }
    handMade['sequencia'] = true;
    return true;
}

function valueMatch(hand){
    console.log(hand)
    hand = extractValues(hand)
    let pairs = {};
    let pairCount = 0;
    let tokCount = 0;
    let quadCount = 0;
    for (i of hand){
        if (i in pairs){
            pairs[i]++;
        }else{
            pairs[i] = 1;
        }
    }

    for (i in pairs){
        if(pairs[i] == 2){
            pairCount++;
        }else if(pairs[i] == 3){
            tokCount++;
        }else if(pairs[i] == 4){
            quadCount++;
        }
    }
    console.table(pairs);

    if (quadCount == 1){
        handMade['quadra'] = true;
        return 'quad';
    }
    if (tokCount == 1){
        if (pairCount == 1){
            handMade['full House'] = true;
            return 'Full House';
        }
        handMade['trinca'] = true;
        return 'three of a kind';
    }
    if (pairCount > 0){
        if (pairCount == 1){
            handMade['par'] = true;
            return 'pair';
        }
        handMade['dois Pares'] = true;
        return 'two pairs'
    }

    return;

}

function checkHand(hand){
    hand = handSort(hand);
    handValues = extractValues(hand);

    let flush = checkFlush(hand);
    // console.log(flush);
    let seq = checkSequence(handValues);
    if (seq && flush){
        handMade['straight Flush'] = true;
        return;
    }
    valueMatch(hand);
    return 0;
}

function checkResult(hand){
    checkHand(hand);
    // console.log(hand);
    console.table(handMade)
    if(handMade['quadra']){
        resetResult();
        return 'uma Quadra';
    }
    if(handMade['full House']){
        resetResult();
        return 'um Full house';
    }
    if(handMade['flush']){
        resetResult();
        return 'um flush';
    }
    if(handMade['sequencia']){
        resetResult();
        return 'uma sequência';
    }
    if(handMade['trinca']){
        resetResult();
        return ' uma trinca';
    }
    if(handMade['dois Pares']){
        resetResult();
        return 'dois pares';
    }
    if(handMade['par']){
        resetResult();
        console.log('par')
        return 'um par';
    }
    resetResult();
    return 'nada';
    
}

function simulateGame(){
    const gameDeck = shuffle(deck);
    console.log(gameDeck);
    let hand = dealHand(gameDeck);
    console.log(hand);
    checkResult(hand);
    return 0;
    
}