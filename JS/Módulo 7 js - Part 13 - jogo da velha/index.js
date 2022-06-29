let player = 'X';
let places;
let gameMatrix=[
    ['','',''],
    ['','',''],
    ['','','']
]
let winnerPlayer;
let winner = false;

function addEvents(){
    places = document.querySelectorAll('.elemento');    
    const placesArr = Array.from(places);
    placesArr.forEach(function (element){
        element.addEventListener('click',function (){
            if (winner){
                console.log('game has ended');
                return;
            }
            if (element.dataset.mark == 'X' || element.dataset.mark == 'O'){
                return;
            }
            markPlay(element);
            changePlayer();
            updateMatrix();
            winnerPlayer  = checkWinner();
            console.log(winnerPlayer)
        });
    })
}

function markPlay(element){
    element.dataset.mark = player;
    element.innerHTML = player;

}

function changePlayer(){
    if (player == 'X'){
        player = 'O';
    }else{
        player = 'X'
    }
    return 1;
}

function updateMatrix(){
    for (let i = 0; i < 9; i++){
        line= parseInt(i / 3);
        column = i % 3;
        gameMatrix[line][column] = places[i].dataset.mark;
    }
}

function checkWinner(){
    for (let i = 0; i < 3; i++){
        if (
            (gameMatrix[i][0] == gameMatrix[i][1] && gameMatrix[i][0] == gameMatrix[i][2]) &&
            (gameMatrix[i][0] != undefined && gameMatrix[i][1] != undefined && gameMatrix[i][2] != undefined)
            ){
            winner = true;
            return gameMatrix[i][0];
        }         
        if ((gameMatrix[0][i] == gameMatrix[1][i] && gameMatrix[1][i] == gameMatrix[2][i]) &&
            (gameMatrix[0][i] != undefined && gameMatrix[1][i] != undefined && gameMatrix[2][i] != undefined)
            ){
            winner = true;
            return gameMatrix[0][i];
        }
    }
    for (let i = 0; i < 2; i++){
        if (
            (gameMatrix[0][i*2] == gameMatrix[1][1] && gameMatrix[1][1] == gameMatrix[2][2 + (-1 * i)*2]) &&
            (gameMatrix[0][i*2] != undefined && gameMatrix[1][1] != undefined && gameMatrix[2][(-1 * i)*2] != undefined)
            
            ){
            winner = true;
            return gameMatrix[1][1];
        }
    }
    return;
}