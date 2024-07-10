

async function getProductos(){

    const url="http://localhost:8000/productos"

    const response = await fetch(url)
    const productos = await response.json()
    
    return productos    
}

function getCard(producto){

    //console.log(producto)

     const card = `<div class='card'>` + 
    `<img class='card-image' src='${producto.imagen}' alt=''>` +
    `<div class='card-footer'>` + 
        `<div>${producto.nombre}</div>` + 
        `<div class='card-info'>` +
            `<div class='card-price'>${producto.precio}</div>` +
            `<img class='card-info-icon' src='assets/trash.jpg' alt=''></div></div></div>`

    return card

    

}

