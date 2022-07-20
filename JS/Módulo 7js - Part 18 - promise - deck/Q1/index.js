import {shuffleDeck, drawHand} from './deck.js';

window.addEventListener('load',addDeckEvents);

let deck;

async function addDeckEvents(){
    try{
        deck = await shuffleDeck();
        document.querySelector('.deck').addEventListener('click',() => drawHand(deck,5));
    }catch(error){
        console.log(error);
    }
}