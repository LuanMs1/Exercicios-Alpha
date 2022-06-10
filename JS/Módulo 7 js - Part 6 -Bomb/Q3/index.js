// -------------------------------- //
// ------ Global variabels -------- //
// -------------------------------- //

let started = false; // variable to set the situation true = timer-on  // false = timer-off
let min = 0;
let sec = 0;
let timer; // variable to set interval

// -------------------------------- //
// -------------------------------- //
// -------------------------------- //

// -------------------------------- //
// ------- Adding Events ---------- //
// -------------------------------- //
function addEvents(){
    document.getElementById('control').addEventListener('click',setTimer);
}
// -------------------------------- //
// -------------------------------- //
// -------------------------------- //


//creating option menu
function data(){
    const slctMin = document.getElementById('minutes');
    const slctSec = document.getElementById('seconds');
    for(let i = 0; i < 60; i++){
        let minOpt = document.createElement('option');
        let secOpt = document.createElement('option');
        minOpt.value = i;
        minOpt.innerHTML = i;
        secOpt.value = i;
        secOpt.innerHTML = i;
        slctMin.appendChild(minOpt);
        slctSec.appendChild(secOpt);
    }
}


// functions

// print time in the timer display
function printTime(time,obj){
    if(time < 10){
        obj.innerHTML = '0' + time;
    }else{
        obj.innerHTML = time;
    }
}

//starting time
function setTimer(){
    document.getElementById('alarm').pause(); //pausing audio
    if(started){

        // stoping clock
        started = false;
        clearInterval(timer);
        document.getElementById('control').innerHTML = 'iniciar'; //changing button to set alarm
        
    }else{


        // -------------------------------- //
        // ---------- variables ----------- //
        // -------------------------------- //

        //Seted timer
        const setedMinutes = parseInt(document.getElementById('minutes').value);
        const setedSeconds = parseInt(document.getElementById('seconds').value);

        //Display elements
        const minDisp = document.getElementById('minNumber');
        const secDisp = document.getElementById('secNumber');
        
        // -------------------------------- //
        // -------------------------------- //
        // -------------------------------- //

        // starting clock
        started = true;
        document.getElementById('control').innerHTML = 'Pause'; //changing button to pause
        
        min = setedMinutes;
        sec = setedSeconds;
        printTime(min,minDisp);
        printTime(sec,secDisp);

        //interval to decrease timer
        timer = setInterval(() => {
            sec--;
            document.getElementById('tick').play();
            if(sec < 0){
                sec = 59;
                min--;
                if(min < 0){
                    clearInterval(timer);
                    started = false;
                    document.getElementById('control').innerHTML = 'iniciar';
                    document.getElementById('alarm').play();
                    return 0;
                }
                printTime(sec,secDisp);
            }else{
                printTime(sec,secDisp);
            }
            printTime(min,minDisp);
            console.log('tic');
        }, 1000);

    }
}
