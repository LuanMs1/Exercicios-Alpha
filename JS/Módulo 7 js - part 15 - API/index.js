import createTable from './table.js';
let filterData = [
    {'lc': null , 'curencys' : null, 'header' : ['Data','Mínimo', 'Máximo', 'Fechamento'], 'start' : '', 'end': '' },
];
let text = [1,2,3,4,5];
const coinSelection = document.querySelector('#coins');
const dateSelections = document.querySelectorAll('input');
const btSearch = document.querySelector('#search');
const tablePlace = document.querySelector('.table-place');
let urlBase = 'https://economia.awesomeapi.com.br';
let coin;
let dates;
btSearch.addEventListener('click',printData);

function printData(){
    document.body.style.cursor = 'wait';
    coin = coinSelection.value;
    dates = [dateSelections[0].value, dateSelections[1].value];
    filterData[0]['start'] = dates[0];
    filterData[0]['end'] = dates[1];
    console.log(coin)
    //creating header
    fetch (urlBase + '/last/' + coin)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let coinInfo = data[`${coin.replace('-','')}`]
            filterData[0]['lc'] = coinInfo['bid'];
            filterData[0]['curencys'] = coin;
            createBody(data);
        });
}

function createBody(data){
    // get days between;
    let start = filterData[0]['start'];
    let end = filterData[0]['end'];
    let startMs = Date.parse(start);
    let endMs = Date.parse(end);
    let dayMs = 1000 * 60 * 60 * 24;
    let days = (endMs - startMs) / dayMs;
    //https://economia.awesomeapi.com.br/json/daily/USD-BRL/?start_date=20180901&end_date=20180930
    for (let i = 0; i <= days; i++){
        let day = new Date(startMs + dayMs * (i + 1));
        day = day.toISOString().split('T')[0].replaceAll('-','');
        console.log(day);
        fetch(urlBase + '/json/daily/' + coinSelection.value + '/?start_date=' + start.replaceAll('-','') + '&end_date=' + day)
            .then(response => response.json())
            .then(data => {
                let line = {};
                line['Data'] = data[0]['create_date'];
                line['mínimo'] = data[0]['low'];
                line['máximo'] = data[0]['high'];
                line['fechamento'] = data[0]['bid'];
                filterData.push(line);
                if (i === days - 1){
                    console.log(filterData);
                    createTable(filterData,tablePlace);
                    
                }
            });
    }

}