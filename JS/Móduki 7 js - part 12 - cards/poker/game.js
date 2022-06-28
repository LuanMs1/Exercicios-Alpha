let handMade = {
    'straight Flush' : false,
    'quadra' : false,
    'full House' : false,
    'sequencia' : false,
    'trinca' : false,
    'dois Pares': false,
    'par' : false,
    'flush': false
}
let deck = [
    '2P', '3P', '4P', '5P', '6P', '7P', '8P', '9P', '0P', 'JP', 'QP', 'KP', 'AP',
    '2O', '3O', '4O', '5O', '6O', '7O', '8O', '9O', '0O', 'JO', 'QO', 'KO', 'AO',
    '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '0C', 'JC', 'QC', 'KC', 'AC',
    '2E', '3E', '4E', '5E', '6E', '7E', '8E', '9E', '0E', 'JE', 'QE', 'KE', 'AE',
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
    return Math.floor(Math.random() * (b - a)) + a;
}

function shuffle(arr){
    let shuffledArr = [];
    
    for (let i = 0; i < arr.length - 1; i++){
        let k = Math.floor(rand(0, arr.length - 1));
        while (shuffledArr.includes(arr[k])){
            k++;
            if (k > arr.length - 1){
                k = 0;
            }
        }

        shuffledArr.push(arr[k]);
    }
    // console.log(shuffledArr)
    return shuffledArr;
}

function resetResult(){
    for (res in handMade){
        handMade[res] = false;
    }
    return 0;
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