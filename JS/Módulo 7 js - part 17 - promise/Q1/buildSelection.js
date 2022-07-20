const states = [
    'ACRE (AC)', 'ALAGOAS (AL)',
    'AMAPÁ (AP)', 'AMAZONAS (AM)',
    'BAHIA (BA)', 'CEARÁ (CE)',
    'DISTRITO FEDERAL (DF)', 'ESPIRITO SANTO (ES)',
    'GOIÁS (GO)', 'MARANHÃO (MA)',
    'MATO GROSSO (MT)', 'MATO GROSSO DO SUL (MS)',
    'MINAS GERAIS (MG)', 'PARÁ (PA)',
    'PARAIBA (PB)', 'PARANÁ (PR)',
    'PERNAMBUCO (PE)', 'PIAUÍ (PI)',
    'RIO DE JANEIRO (RJ)', 'SÃO PAULO (SP)',
    'RIO GRANDE DO NORTE (RN)', 'RIO GRANDE DO SUL (RS)',
    'RONDÔNIA (RO)', 'RORAIMA (RR)',
    'SANTA CATARINA (SC)', 'SERGIPE (SE)',
    'TOCANTINS (TO)'
];
export function startStates(){
    const statesInput = document.querySelector('#state');
    for (let state of states){
        let item = document.createElement('option');
        item.value = state.substring(state.indexOf('(') + 1, state.indexOf('(') + 3);
        item.innerHTML = state;
        statesInput.appendChild(item);
    }
}

export function buildCitysSelect(state){
    const cityInput = document.querySelector('#city');
    cityInput.innerHTML = ''
    const predictPlace = document.querySelector('.prediction');
    predictPlace.innerHTML = '';
    if (state === 'init'){
        let item = document.createElement('option');
        item.value = 'init';
        item.innerHTML = 'Selecione uma cidade';
        cityInput.appendChild(item);
        cityInput.disabled = true;
        return;
    }
    let item = document.createElement('option');
    item.value = 'init';
    item.innerHTML = 'Selecione uma cidade';
    cityInput.appendChild(item);
    cityInput.disabled = false;
    let info = getData(state);
    info.then(data => {
        console.log(data);
        data.forEach((element)=>{
            let city = element.nome;
            let geocode = element.id;
            let item = document.createElement('option');
            item.value = geocode;
            item.innerHTML = city;
            cityInput.appendChild(item);
        });
    });
};
function getData(parameter){
    return new Promise((resolve,reject) => {
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${parameter}/municipios`)
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