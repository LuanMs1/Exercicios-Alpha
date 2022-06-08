// Definindo produtos
const products =[
    'brinco',
    'anél',
    'colar',
    'pulseira',
    'relógio'
]

function addEvents(){
    document.getElementById('submit').addEventListener('click',showProduct);
}

//creating option menu
function data(){
    const slct = document.getElementById('products');
    for(let i = 0; i < products.length; i++){
        let opt = document.createElement('option');
        opt.value = products[i];
        opt.innerHTML = products[i];
        slct.appendChild(opt);
    }
}

//function to show a image
function showImage(path){
    const place = document.getElementById('product-place');
    const img = document.createElement('img');
    place.style.display = 'flex';
    img.src=path;
    img.id='product';
    
    place.appendChild(img);

}

function showProduct(){
    const selectedProduct = document.getElementById('products').value;
    const productPlace = document.getElementById('product-place');

    //deleting previously loaded images
    if(productPlace.childElementCount > 0){
        console.log(productPlace.childElementCount);
        productPlace.removeChild(document.getElementById('product'));
    }

    switch (selectedProduct){
        case 'brinco':   
            showImage('./imgs/brinco.png');
            break;
        case 'anél':   
            showImage('./imgs/engagement-ring-with-a-diamond.jpg');
            break;
            
        case 'colar':   
            showImage('./imgs/beautiful-and-luxury-necklace-on-jewelry-stand-neck.jpg');
            break;
            
        case 'pulseira':   
            showImage('./imgs/pulseira.png');
            break;
            
        case 'relógio':   
            showImage('./imgs/relógio.png');
            break;
        
        
    }






    // ----------------------------------------------------------------- //
    // ----------------------- array solution -------------------------- //
    // ----------------------------------------------------------------- //


    // for(let i = 0; i < products.length; i++){
    //     document.getElementById(products[i]).style.display = 'none';
    // }
    // console.log(selectedProduct);

    // document.getElementById(selectedProduct).style.display='block';



}