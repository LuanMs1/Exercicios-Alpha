export default function createTable(tableData,tablePlace){
    const table = document.createElement('table');
    tablePlace.innerHTML = '';
    console.log('tableData: ');
    console.log(tableData[0]);

    createTableHeader(table,tableData[0]);
    createTableLines(table,tableData.slice(1));
    tablePlace.appendChild(table);
}

function createTableHeader(table, tableHeader){
    const header = table.createTHead();
    const caption = tableHeader['header'];
    const row = header.insertRow(0);

    // const tableKeys = Object.keys(tableData[0]);
    caption.forEach(function (key){
        row.insertCell(-1).outerHTML = `<th>${key}</th>`;
    })
    const title = header.insertRow(0);
    let curencys = title.insertCell(0);
    let lastCotation = title.insertCell(1);
    console.log(tableHeader);
    curencys.outerHTML = `<th>${tableHeader['curencys']}</th>`;
    lastCotation.outerHTML = `<th>ultima cotação = R$${tableHeader['lc']}</th>`
    title.cells[0].colSpan = '1';
    title.cells[1].colSpan = `${caption.length - 1}`;
}

function createTableLines(table,tableData){
    tableData.forEach(function (element){
        const row = table.insertRow(-1);
        for (let info in element){
            row.insertCell(-1).innerHTML = element[info];
        }
    })
}