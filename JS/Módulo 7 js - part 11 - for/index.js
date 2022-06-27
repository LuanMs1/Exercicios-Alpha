// creating list of products
let products = [];
let largerId = 0;
// adding events

function addEvents() {
    //Register product
    document.querySelector('#register').addEventListener('click', function () {
        let product = new Object();
        let name = document.querySelector('.name-input').value;
        let value = parseFloat(document.querySelector('.value').value.replace(',', '.'));
        let description = document.querySelector('textarea').value;
        let confirmPlace = document.querySelector('.confirm');
        let errorPlace = document.querySelector('.error')

        //Verify errors and add the product to the database
        try {

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

        } catch (err) {
            console.log(err)
            errorPlace.innerHTML = 'falha no cadastro do produto!'
            confirmPlace.innerHTML = ''

        }
    });

    //showing the table
    document.querySelector('#list').addEventListener('click', function (){
        createTable(products);
    });

    document.querySelector('.search-button').addEventListener('click',filterName);

}

// --------------------------------------------------- //
// --------------- Edit product ---------------------- //
// --------------------------------------------------- //

function editProductField() {

    console.log('edit product');
    const showPlace = document.querySelector('.show-product')
    const editPlace = document.querySelector('.edit-product')
    const editInfoPlace = document.querySelector('.edit-info')
    const editDescriptionPlace = document.querySelector('.edit-description')
    showPlace.style.display = 'none'
    editPlace.style.display = 'flex'

    let chosenProduct = products.find(product => product['id'] == this.parentNode.id);

    //creating edit field
    for (let info in chosenProduct) {

        let paragraph = document.createElement('span');
        let wrapper = document.createElement('div');
        wrapper.className = 'edit-wrapper';

        //creating the description edit field
        if (info == 'description') {
            let text = document.createElement('textarea')
            text.className = info;
            paragraph.innerHTML = `${info}: `
            text.value = chosenProduct[info]
            wrapper.appendChild(paragraph);
            wrapper.appendChild(text);
            editDescriptionPlace.appendChild(wrapper)
        } else {
            let input = document.createElement('input');
            input.className = info;
            if (info == 'id' || info == 'includedIn') {
                input.disabled = true;
            }
            input.value = chosenProduct[info]
            paragraph.innerHTML = `${info}: `;
            wrapper.appendChild(paragraph);
            wrapper.appendChild(input);
            editInfoPlace.appendChild(wrapper)
        }

    }

    //creating the button and deactivating the register button
    let editButton = document.createElement('button');
    editButton.type = 'button';
    editButton.addEventListener('click', editProduct);
    editButton.innerHTML = 'EDITAR';
    editPlace.appendChild(editButton);
    document.querySelector('#register').disabled = true;

}

function editProduct(event) {
    const infoField = event.target.parentNode;
    let chosenProduct = products.find(product => product['id'] == infoField.querySelector('.id').value);

    // let chosenProduct = searchProduct(productId);
    for (let info in chosenProduct) {
        chosenProduct[info] = infoField.querySelector(`.${info}`).value;
    }
    createTable(products);

    //enabling register button
    document.querySelector('#register').disabled = false;

    //removing the edit interface
    infoField.querySelector('.edit-info').innerHTML = '';
    infoField.querySelector('.edit-description').innerHTML = '';
    infoField.querySelector('button').remove();

}

// --------------------------------------------------- //
// --------------------------------------------------- //
// --------------------------------------------------- //

//delete product
function deleteProduct(event) {

    //get product id
    let productId = event.target.parentNode.id;
    // get product index in the array and remove it
    products.splice(products.findIndex(product => product['id'] == productId), 1)
    // recreate table
    createTable(products);
}

//show product
function showProduct() {
    // search clicked product
    const showPlace = document.querySelector('.show-product');
    const editPlace = document.querySelector('.edit-product');
    showPlace.style.display = 'block';
    editPlace.style.display = 'none';
    showPlace.innerHTML = '';

    //finding chosen product
    let chosenProduct = products.find(product => product['id'] == this.parentNode.id);

    //iterating each proprety of the product object and printing
    for (let info in chosenProduct) {
        let paragraph = document.createElement('p');
        paragraph.innerHTML = `${info}: ${chosenProduct[info]}`;
        showPlace.appendChild(paragraph);
    }

}


// --------------------------------------------------- //
// --------------- Sorting Items --------------------- //
// --------------------------------------------------- //

function nameSort(){

    products.sort(function (a,b){
        if (a['name'] < b['name']){
            return -1;
        }else if (a['name'] > b['name']){
            return 1;
        }
        return 0;
    });
    createTable(products);

}

function valueSort(){
    console.log('value sort')
    products.sort(function (a,b){
        if (a['value'] < b['value']){
            return -1;
        }else if (a['value'] > b['value']){
            return 1;
        }
        return 0;
    });
    createTable(products);
}

function filterName(){
    const filter = document.querySelector('.search-field').value;
    if (filter == ''){
        createTable(products);
        return;
    }
    let filterProducts = products.filter(function (element){
        if (element['name'].includes(filter) || element['description'].includes(filter)){
            return true;
        }
        return false;
    });
    createTable(filterProducts);

    

}

// --------------------------------------------------- //
// --------------------------------------------------- //
// --------------------------------------------------- //

// --------------------------------------------------- //
// --------------- Create table ---------------------- //
// --------------------------------------------------- //

function createTable(productsList) {

    const table = document.createElement('table');
    const tablePlace = document.querySelector('.product');

    //cleaning old table
    tablePlace.innerHTML = '';

    //creating Header
    createTableHeader(table);

    //creating lines with the curent products
    productsList.forEach(createLines, table);

    tablePlace.appendChild(table);
    tablePlace.style.display = 'table';
}

function createTableHeader(table) {

    const header = table.createTHead();
    const row = header.insertRow(0);
    //creating cells
    row.insertCell(0).outerHTML = '<th>id</th>';
    row.insertCell(1).outerHTML = '<th>nome</th>';
    row.insertCell(2).outerHTML = '<th>valor</th>';
    //creating events and attributing class names
    row.cells[1].addEventListener('click',nameSort);
    row.cells[2].addEventListener('click',valueSort);
    row.cells[1].className = 'name';
    row.cells[2].className = 'value ';

}

function createLines(element, index, ar) {
    const row = this.insertRow(-1);
    row.id = element['id'];
    let newCellEdit = row.insertCell(-1);
    let newCellDelete = row.insertCell(-1);

    row.insertCell(0).innerHTML = element['id'];
    let newCellName = row.insertCell(1);
    newCellName.innerHTML = element['name'];
    row.insertCell(2).innerHTML = element['value'];
    newCellName.className = 'name'
    newCellEdit.innerHTML = 'edit';
    newCellEdit.className = "material-symbols-outlined edit";
    newCellDelete.innerHTML = 'delete';
    newCellDelete.className = "material-symbols-outlined delete";
    newCellName.addEventListener('click', showProduct);
    newCellEdit.addEventListener('click', editProductField);
    newCellDelete.addEventListener('click', deleteProduct);

}

// --------------------------------------------------- //
// --------------------------------------------------- //
// --------------------------------------------------- //