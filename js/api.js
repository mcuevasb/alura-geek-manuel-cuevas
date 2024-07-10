


async function getProductos(){

    const url="http://localhost:8000/productos"

    const response = await fetch(url)
    const productos = await response.json()
    
    return productos    
}

function getCard(producto){

     const card = `<div class='card'>` + 
    `<img class='card-image' src='${producto.imagen}' alt=''>` +
    `<div class='card-footer'>` + 
        `<div>${producto.nombre}</div>` + 
        `<div class='card-info'>` +
            `<div class='card-price'>${producto.precio}</div>` +
            `<a href="javascript:borrarProducto('${producto.id}')"><img class='card-info-icon' src='assets/trash.jpg' alt=''></a></div></div></div>`

    return card
}

async function agregarProducto(nombre, precio, imagen)
{
    const url="http://localhost:8000/productos"

    const id = document.getElementsByClassName("card").length + 1

    const data = {
        nombre, 
        precio,
        imagen,
        id
        }

    await fetch(url, {
        method: 'POST', 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data), 
    })
    .then(response => response.json())
  //  .then(data => console.log(data))
}

async function borrarProducto(idText){

    const url="http://localhost:8000/productos"

    id = parseInt(idText)
    
    const data = { id }

    alert(JSON.stringify(data))

    await fetch(url, {
        method: 'DELETE', 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data), 
    })
    .then(response => response.json())
    //.then(data => console.log(data))
}