export default function getPrediction(city){
    document.querySelector('#state').disabled = true;
    document.querySelector('#city').disabled = true;
    const table = document.createElement('table');
    createTableHeader(table);
    const predictPlace = document.querySelector('.prediction');
    predictPlace.innerHTML = '';
    predictPlace.appendChild(table);
    let info = getData(city);
    console.log(info);
    info.then(data => {
        console.log(info);
        // console.log(data);
        let chaves = Object.keys(data[city]);
        for(let i = 0; i < 4; i++){
            if (i>1){
                createLine(data[city][chaves[i]],chaves[i],'geral',table);
            }else{
                createLine(data[city][chaves[i]]['manha'],chaves[i],'manhã',table);
                createLine(data[city][chaves[i]]['tarde'],chaves[i],'tarde',table);
                createLine(data[city][chaves[i]]['noite'],chaves[i],'noite',table);
            }
        }
    });
}
function createTableHeader(table){
    const header = table.createTHead();
    const row = header.insertRow(0);
    row.insertCell(0).outerHTML = '<th>período</th>';
    row.insertCell(1).outerHTML = '<th>Data</th>';
    row.insertCell(2).outerHTML = '<th>Dia da semana</th>';
    row.insertCell(3).outerHTML = '<th></th>';
    row.insertCell(4).outerHTML = '<th>resumo</th>';
    row.insertCell(5).outerHTML = '<th>temperatura mínima</th>';
    row.insertCell(6).outerHTML = '<th>Temperatura máxima</th>';
};

function createLine(data, day, period, table){
    const newRow = table.insertRow(-1);
    newRow.insertCell(0).innerHTML = period;
    newRow.insertCell(1).innerHTML = day;
    newRow.insertCell(2).innerHTML = data['dia_semana'];
    newRow.insertCell(3).innerHTML = `<img src = ${data['icone']}>`;
    newRow.insertCell(4).innerHTML = data['resumo'];
    newRow.insertCell(5).innerHTML = data['temp_min'];
    newRow.insertCell(6).innerHTML = data['temp_max'];
};

function getData(parameter){
    return new Promise((resolve,reject) => {
        fetch(`https://apiprevmet3.inmet.gov.br/previsao/${parameter}`)
            .then(response => {
                if(response.status === 200){
                    return response.json();
                };
                return Promise.reject('Erro no fetch');
            })
            .then(data => {
                resolve(data);
            })
            .catch(erro => {
                console.log(erro);
                reject(erro);
            })
            .finally(() => {
                document.querySelector('#state').disabled = false;
                document.querySelector('#city').disabled = false;
            });
    });
};