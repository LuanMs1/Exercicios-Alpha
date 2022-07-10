/**
 * Gets a CEP number and search in the api.
 * @param {number} cep CEP to be found 
 * @returns a promise of cep info
 */
export default function getCepInfo(cep){
    document.body.style.cursor = 'wait';    
    let cepRequest = fetch(`https://cep.awesomeapi.com.br/json/${cep}`);

    let data = cepRequest.then(response => {
        return response.json();})

    return data;
}