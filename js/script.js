// // Bienvenida
// console.log("Hola!! Bienvenido a Popi Cafe")

// // Identificarse
// var usuario = prompt("Hola! Bienvenido a Popi Cafe, a continuacion ingresá tu nombre:  ")


// // Eleccion
// var consulta = prompt(usuario + " Selecciona: 1-Para consumir en Popi Cafe o 2-Para hacer un pedido")


// if (consulta == 1) {
//     consulta = alert("Seleccionaste para consumir en Popi Cafe")
// } else {
//     pedido = alert("Seleccionaste hacer un pedido")
// }

// // Variables menu
// var precio;

// let menu1 = 3500;
// let menu2 = 3300;
// let menu3 = 3600;
// let menu4 = 4000;
// let menu5 = 3200;


// // Eleccion de Menu

// function elijetumenu() {
//     let menu

//     do {
//         menu = parseInt(prompt(`Elije tu menu:
//                 1 -Brunch Time ($ 3500) 
//                 2 -Pink Tower ($3300)
//                 3 -Tentaciones ($3600)
//                 4 -Wafles ($4000)
//                 5 -Cafeteria  ($3200)`))
//     } while ((menu > 0 && menu > 5));
//     return menu
// }

// menu = elijetumenu()

// switch (menu) {
//     case 1:
//         precio = menu1
//         eleccion = "Brunch Time"
//         break;
//     case 2:
//         precio = menu2
//         eleccion = "Pink Tower"
//         break;
//     case 3:
//         precio = menu3
//         eleccion = "Tentaciones"
//         break;
//     case 4:
//         precio = menu4
//         eleccion = "Wafles"
//         break;
//     case 5:
//         precio = menu5
//         eleccion = "Cafeteria"
//         break;
// }

// // Resumen de compra
// alert("Tu pedido  " + eleccion + "," + " estará listo en 20 minutos " + "." + "Total a pagar: $" + precio)
// console.log(eleccion)
// console.log(precio)


// // Participa del sorteo
// alert("Con tu compra participas de un sorteo por un menu a elección, tienes 2 intentos")

// const NUMEROSORTEO = 69

// var pedirNumero = 0
// var suerte = 2

// for(let i=0; i<2; i++){
//     pedirNumero = parseInt(prompt("Ingresa un número de 0 a 100"))
//     if(pedirNumero==NUMEROSORTEO){
//         alert("GANASTE!!!!!!!!!!")
//         break
//     }else 
//         alert("La próxima vez será")
//         suerte--
//     }
//     console.log("Fin del pedido")


// const menues = ["Brunch Time", "Pink Tower", "Tentaciones", "Wafles", "Cafeteria"]
// const precios = [3500,3600,3300,4000,3200]
// console.log(menues)

// for (let i=0; i<5; i++){
//     console.log ("Menu: " +i)
//     console.log (menues[i] + " " + precios [i])
// }

// // Funcion constructora
// function tiposDeInfusion(nombre, sabor, color, estado){
//     this.nombre= nombre;
//     this.sabor= sabor;
//     this.color= color;
//     this.estado= estado
//     }

// const te= new tiposDeInfusion("te", "hierbas","verde", "caliente")
// const limonada= new tiposDeInfusion("limonada", "limon", "amarillo", "frio")

// console.log("El te se encuentra " + te.estado)
// console.log("El color de la limonada es " + limonada.color)

// // alert("El te recomendado por Popi Cafe es de "+ te.sabor)

// // Metodo forEach
// const cafe= ["submarino", "chocolatada", "lagrima", "macchiato", "cafe con leche", "vainilla latte", "caramel cafe"]
// cafe.forEach( (el) => {
//     console.log (el)
// })

// console.log(cafe.length)

// alert(" Nuestros gustos de cafe son " + cafe)

// // Metodo find
// const carta= [
//     {
//         nombre: "Brunch Time",
//         precio: 3500
//     },
//     {
//         nombre: "Pink Tower",
//         precio: 3600
//     },
//     {
//         nombre: "Tentaciones",
//         precio: 3300
//     },
//     {
//         nombre: "Wafles",
//         precio: 4000
//     },
//     {
//         nombre: "Cafeteria",
//         precio: 3200
//     },
// ]

// const precioMenu = carta.find ((el) => el.nombre === "Tentaciones")
// const pesos = carta.find ((el) => el.precio === 3600)
// console.log(precioMenu)
// console.log(precio)



// 3era pre entrega
console.log("probando nueva entrega")




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

productosMenu.forEach((productosMenu) => {

    console.log(productosMenu)

// contenedor de los elementos
    let contenedor = document.createElement("div")
    contenedor.innerHTML = `
    <div class="col">
        <div class="card">
            <img src="${productosMenu.imagen}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${productosMenu.nombre}</h5>
                <p class="card-text">"${productosMenu.descripcion}</p>
                <h4><p>$</p>${productosMenu.precio}</h4>
            </div>
            <button id="botonComprar" type="button" class="btn btn-danger">Comprar</button>
        </div>
    </div>
    `

    contenedorCarta.append(contenedor)

// funcionalidad al boton comprar
let botonComprar = document.getElementById("botonComprar")
botonComprar.addEventListener("click", agregarCarrito)
botonComprar.addEventListener("click", llamarSweet);


})

function agregarCarrito(){
    console.log("agregar carrito")
}

function llamarSweet(){
    Swal.fire({
        icon: 'success',
        title: 'Genial!!',
        text: 'Tu pedido fue agregado!'
    })
}
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
