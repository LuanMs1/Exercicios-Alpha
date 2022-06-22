// creating list of products
let products = [];
let largerId = 0;
// adding events

function addEvents(){
    //Register product
    document.querySelector('#register').addEventListener('click', function(){
        let product = new Object();
        let name = document.querySelector('.name-input').value;
        let value = parseFloat(document.querySelector('.value').value.replace(',','.'));
        let description = document.querySelector('textarea').value;
        let confirmPlace = document.querySelector('.confirm');
        let errorPlace = document.querySelector('.error')

        try{

            if (name.length == 0) throw 'Digite um nome para o produto'
            if (isNaN(value)) throw 'Digite um valor válido para o produto'
            if (description.length == 0) throw 'digite uma descrição para o produto'
            product['id'] = largerId + 1;
            product['name'] = name;
            product['value'] = value;
            product['description'] = description;
            product['includedIn'] = Date.now();
            largerId++;
            products.push(product);
            confirmPlace.innerHTML = `Produto ${product['name']} cadastrado com sucesso!`;
            errorPlace.innerHTML = '';
            createLine(product);

            

        }catch (err) {
            console.log(err)
            errorPlace.innerHTML = 'falha no cadastro do produto!'
            confirmPlace.innerHTML = ''

        }
        // console.log(products)
    });

    //showing the table
    document.querySelector('#list').addEventListener('click',function() {
        document.querySelector('table').style.display = 'table'
    });

}

//create a new line on the table
function createLine(product){
    let table = document.querySelector('table');
    let newRow = table.insertRow(-1);
    newRow.id = largerId;
    let keys = Object.keys(product);
    let i = 0;

    //adding the new cells in the new row
    while (i < 3){

        let newCell = newRow.insertCell(-1);
        let newText = document.createTextNode(product[keys[i]]);
        newCell.className = keys[i];
        newCell.appendChild(newText);

        if (keys[i] === 'name'){
            newCell.addEventListener('click',showProduct);
        }

        i++;

    }

    // adding the delete and edit button
    let newCellEdit = newRow.insertCell(-1);
    let newCellDelete = newRow.insertCell(-1);
    let editText = document.createElement('span');
    let deleteText = document.createElement('span');
    editText.innerHTML = 'edit';
    editText.className = "material-symbols-outlined";
    deleteText.innerHTML = 'delete';
    deleteText.className = "material-symbols-outlined";
    
    newCellEdit.className = 'edit';
    newCellDelete.className = 'delete';
    newCellDelete.addEventListener('click', deleteRow);
    newCellEdit.addEventListener('click', editProductField);

    newCellEdit.appendChild(editText);
    newCellDelete.appendChild(deleteText);

    
}

//search a product from a given line in the table
function searchProduct(selectedId){

    console.log('search product');
    let size = products.length;
    let i = 0;
    while (i < size){
        let productId = products[i]['id'];
        if (productId == selectedId){
            return products[i];
        }
        i++;
    }

}

function deleteRow(){

    console.log('delete Row');
    let row = this.parentNode;
    let productId = row.id;
    let newProducts = [];
    row.remove();
    let i = 0;
    //creatiing new array
    while (i < products.length){
        if (!(parseInt(products[i]['id']) == productId)){

            newProducts.push(products[i]);

        }
        i++;
    }

    products = newProducts;

}

function editProductField(){
    console.log('edit product');
    const showPlace = document.querySelector('.show-product')
    const editPlace = document.querySelector('.edit-product')
    const editInfoPlace = document.querySelector('.edit-info')
    const editDescriptionPlace = document.querySelector('.edit-description')
    showPlace.style.display = 'none'
    editPlace.style.display = 'flex'

    let chosenProduct = searchProduct(this.parentNode.querySelector('.id').innerHTML);
    const keys = Object.keys(chosenProduct);
    let i = 0;
    while (i < keys.length){
        let paragraph = document.createElement('p');
        let wrapper = document.createElement('div');
        wrapper.className = 'edit-wrapper';
        if(keys[i] == 'description'){
            console.log('here')
            let text = document.createElement('textarea')
            text.className = keys[i];
            paragraph.innerHTML = `${keys[i]}: `
            text.value = chosenProduct[keys[i]]
            wrapper.appendChild(paragraph);
            wrapper.appendChild(text);
            editDescriptionPlace.appendChild(wrapper)

        }else{
            let input = document.createElement('input');
            input.className = keys[i];
            if (keys[i] == 'id' || keys[i] == 'includedIn'){
                input.disabled = true;
            }
            input.value = chosenProduct[keys[i]]
            paragraph.innerHTML = `${keys[i]}: `;
            wrapper.appendChild(paragraph);
            wrapper.appendChild(input);
            editInfoPlace.appendChild(wrapper)
        }


        i++
    }

    let editButton = document.createElement('button');
    editButton.type = 'button';
    editButton.addEventListener('click',editProduct);
    editButton.innerHTML = 'EDITAR';
    editPlace.appendChild(editButton);
    document.querySelector('#register').disabled = true;

}

function editProduct(){
    const infoField = this.parentNode;
    const productId = infoField.querySelector('.id').value;
    const tableRow = document.querySelector(`[id="${productId}"]`);
    console.log(tableRow)
    let chosenProduct = searchProduct(productId);
    const keys = Object.keys(chosenProduct);
    let i = 1;
    while (i < keys.length){
        chosenProduct[keys[i]] = infoField.querySelector(`.${keys[i]}`).value;
        i++
    }
    tableRow.querySelector(`.name`).innerHTML = infoField.querySelector(`.name`).value
    tableRow.querySelector(`.value`).innerHTML = infoField.querySelector(`.value`).value
    console.log(chosenProduct);
    document.querySelector('#register').disabled = false;
    infoField.querySelector('.edit-info').innerHTML = '';
    infoField.querySelector('.edit-description').innerHTML = '';
    infoField.querySelector('button').remove();


}

function showProduct(){
    
    console.log('show product')
    // search clicked product
    const showPlace = document.querySelector('.show-product')
    const editPlace = document.querySelector('.edit-product')
    showPlace.style.display = 'block'
    editPlace.style.display = 'none'
    let chosenProduct = searchProduct(this.parentNode.querySelector('.id').innerHTML);
    const keys = Object.keys(chosenProduct);
    let i = 0;
    while (i < keys.length){

        let paragraph = document.createElement('p');
        paragraph.innerHTML = `${keys[i]}: ${chosenProduct[keys[i]]}`;
        showPlace.appendChild(paragraph);

        i++
    }

}