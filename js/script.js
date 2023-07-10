// construyo los objetos

const productosMenu = [{
        id: 1,
        nombre: "Brunch Time",
        precio: 3500,
        imagen: "./img/menu 1.jpg",
        descripcion: "2 INFUSIONES + JARRA DE LIMONADA O POMELADA + PLATO DE FRUTAS Y FRUTOS SECOS + PLATO DE QUESOS Y FIAMBRES + HUEVOS REVUELTOS Y PAPAS RÚSTICAS + CANASTA DE PANES CASEROS + DIP DE QUESO CREMA"
    },

    {
        id: 2,
        nombre: "Pink Tower",
        precio: 3600,
        imagen: "./img/menu 2.jpg",
        descripcion: "2 INFUSIONES + TOSTADO DE JAMÓN Y QUESO EN PAN DE CAMPO + TOSTADAS DE PAN DE CAMPO CON   MANTECA Y MERMELADA + BUDÍN DE BANANA, CHOCOLATE,   MANZANA O LIMÓN + BROWNIE + MINI ALFAJOR DE CHOCOLATE"
    },
    {
        id: 3,
        nombre: "Tentaciones",
        precio: 3300,
        imagen: "./img/menu 4.jpg",
        descripcion: "SCON DE QUESO + FRENCH TOAST + PLATO DE FRUTAS + MEDIALUNA RELLENA DE QUESO BRIE Y JAMON CRUDO + CHÍA PUDDING CON CHÍA ACTIVADA, YOGURT VEGETAL, ARÁNDANOS, FRUTOS ROJOS Y BANANA CON MIEL"
    },
    {
        id: 4,
        nombre: "Wafles",
        precio: 4000,
        imagen: "./img/waffles.jpg",
        descripcion: "WAFFLE CON NUTELLA + WAFFLE CON DULCE DE LECHE, BANANA Y FRUTILLA + LA PANERA CHOCOROSA + SWEET + NUTELLA, CREMA Y ALMENDRAS + APPLE CRUMBLE + WAFFLE TROPICAL + WAFFLE AMERICANO CON BAÑO DE CHOCOLATE"
    },
    {
        id: 5,
        nombre: "Cafeteria",
        precio: 3200,
        imagen: "./img/menu 3.jpg",
        descripcion: "TOSTAS ITALIANAS + TOSTA PANERA + AVOCADO TOAST+ AVOCADO TOAST Y HUEVO POCHE + AVOCADO TOAST CON SALMON AHUMADO + TOSTA BRIE CARAMELIZADA + TOSTA VEGANA CARAMELIZADA CON PAN DE CAMPO + TOSTA IBÉRICA"
    },
    {
        id: 6,
        nombre: "Muffins",
        precio: 3700,
        imagen: "./img/muffins.jpg",
        descripcion: "MUFFIN DE MARACUYÁ Y CHOCOLATE NEGRO + MUFFIN DE RICOTA + MUFFIN BROWNIE Y NUEZ + MUFFIN DE CANELA + MUFFIN DE LIMÓN Y AMAPOLA + MUFFIN DE NUEZ Y DULCE DE LECHE + MUFFIN DE BANANA Y DULCE DE LECHE + MUFFIN DE CHOCOLATE NEGRO"
    },
    {
        id: 7,
        nombre: "Tortas",
        precio: 4500,
        imagen: "./img/tortas.jpg",
        descripcion: "1 PORCION DE CADA UNA: HELENA - SIENNA - OREO - FRUTILLA CON CREMA CHANTILLY - KINDER - VELVET - ROGEL - CRUMBLE DE MANZANA - LEMON PIE - BROWNIE CON NUEZ - CHESSE CAKE CON FRUTOS ROJOS - CARROT CAKE - CHOCOTORTA"
    },
    {
        id: 8,
        nombre: "Jugos",
        precio: 4300,
        imagen: "./img/jugos.jpg",
        descripcion: "1 MINI JARRA DE 500ml CADA UNO: POMELADA CON LIMA Y MENTA - LIMONADA CON MENTA Y GENGIBRE - LIMONADA CON MIEL Y MARACUYA - NARANJA EXPRIMIDA - MANGO - FRUTILLA - MIX DE FRUTAS - POMELO FROZEN - GREEN LIFE - CITRUS - MELON FREE "
    },
    {
        id: 9,
        nombre: "Batidos",
        precio: 4500,
        imagen: "./img/batidos.jpg",
        descripcion: "1 MINI JARRA DE 500ml CADA UNO (OPCIONAL LECHE DE ALMENDRA O YOGURT NATURAL SIN AZUCAR): MELOCOTON - FRESA - FRUTILLA - MELON - UVA - MANZANA - DURAZNO - SANDIA - PIÑA - ARANDANOS Y FRUTOS ROJOS - PLATANO - KIWI Y MENTA"
    },
    {
        id: 10,
        nombre: "Aguas y Gaseosas",
        precio: 750,
        imagen: "./img/aguas.jpg",
        descripcion: "BOTELLAS INDIVUALES DE 500ml CADA UNA: AGUAS SABORIZADAS (NARANJA, MANZANA, PERA, DURAZNO) - AGUA MINERAL NATURAL - AGUA MINERAL GASIFICADA - GASEOSAS: COCA-COLA, PEPSI, SPRITE, 7UP, MIRINDA Y FANTA (OPCIONAL SIN AZUCAR)"
    }
]

// creo el array del carrito
let carritoCompras = []




// probando
console.log(productosMenu)

// empiezo a crear elememtos
let contenedorCarta = document.getElementById("contenedorCarta")

console.log("contenedorCarta")

productosMenu.forEach((productos) => {

    console.log(productos)

// contenedor de los elementos
    let contenedor = document.createElement("div")
    contenedor.innerHTML = `
    <div class="col">
        <div class="card">
            <img src="${productos.imagen}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${productos.nombre}</h5>
                <p class="card-text">"${productos.descripcion}</p>
                <h4><p>$</p>${productos.precio}</h4>
            </div>
            <button id=${productos.id} type="button" class="btn btn-danger">Comprar</button>
        </div>
    </div>
    `;

    contenedorCarta.append(contenedor)

// funcionalidad al boton comprar y asincronia
let botonComprar = document.getElementById(`${productos.id}`)
botonComprar.addEventListener("click", agregarCarrito)

})

function agregarCarrito(){
    console.log("agregar carrito");
    llamarSweet();
    setTimeout(()=>{
        console.log("producto agregado")}, 3000)

}

function llamarSweet(){
    Swal.fire({
        icon: 'success',
        title: 'Genial!!',
        text: 'Tu pedido fue agregado!'
    })
}

// promesas
const listado = [
    {id: 1, nombre: "Brunch Time", precio:3500},
    {id: 2, nombre: "Pink Tower", precio:3600},
    {id: 3, nombre: "Tentaciones", precio:3300},
    {id: 4, nombre: "Wafles", precio:4000},
    {id: 5, nombre: "Cafeteria", precio:3200},
    {id: 6, nombre: "Muffins", precio:3700},
    {id: 7, nombre: "Tortas", precio:4500},
    {id: 8, nombre: "Jugos", precio:4300},
    {id: 9, nombre: "Batidos", precio:4500},    
    {id: 10, nombre: "Aguas y Gaseosas", precio:750},
]

const pedirProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve (listado)
        }, 6000)
    })
}

let productos = []

const renderProductos = (arr) => {
    console.log(arr)
}

pedirProductos()
.then((res) => {
    productos = res
    renderProductos(productos)
})

.catch(() =>{
    console.log("No hay pedidos")
})

.finally(()=>{
    console.log("cumplio promesa")
})

// datos local storage
let nombreLocalStorage = prompt("Por favor, ingresa tu nombre")
localStorage.setItem("nombreUsuario", nombreLocalStorage)

let emailLocalStorage = prompt("Ingresa tu email para recibir novedades")
localStorage.setItem("emailUsuario", emailLocalStorage )

let nombreUsuarioRecuperado = localStorage.getItem("nombreUsuario")
let emailRecuperado = localStorage.getItem("emailUsuario")

console.log(nombreUsuarioRecuperado)
console.log(emailRecuperado)

// json y local storage
// construyo el objeto
const menuTortas = {
    nombre: "Tortas",
    precio: 4500,
    descripcion: "1 PORCION DE CADA UNA: HELENA - SIENNA - OREO - FRUTILLA CON CREMA CHANTILLY - KINDER - VELVET - ROGEL - CRUMBLE DE MANZANA - LEMON PIE - BROWNIE CON NUEZ - CHESSE CAKE CON FRUTOS ROJOS - CARROT CAKE - CHOCOTORTA",
}
// probando objeto
console.log(menuTortas)

// pasando objeto a JSON y probando
const tortasJSON = JSON.stringify(menuTortas);
console.log(tortasJSON);

//guardando en local storage
localStorage.setItem("tortas", tortasJSON);

// parseando objeto JSON
const tortasJSONParse = JSON.parse(tortasJSON);
console.log(tortasJSONParse);

// guardando en local storage

localStorage.setItem("nombre", tortasJSONParse.nombre);
localStorage.setItem("precio", tortasJSONParse.precio);
localStorage.setItem("descripcion", tortasJSONParse.descripcion);

let nombreLS = localStorage.getItem("nombre");
let precioLS = localStorage.getItem("precio");
let descripcionLS = localStorage.getItem("descripcion");
