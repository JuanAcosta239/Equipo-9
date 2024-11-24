const tasaDeCambio = 4400;

const productos = [
    {
        "id": 1,
        "nombre": "Película Blu-ray: Avengers Endgame",
        "precio_cop": 20,
        "precio_usd": 20 * tasaDeCambio,
        "descripcion": "Disfruta de la épica conclusión de los Vengadores en alta definición.",
        "imagen": "images/Entretenimiento/avengers.jpg"
    },
    {
        "id": 2,
        "nombre": "Juego PS5: Spider-Man Miles Morales",
        "precio_cop": 60,
        "precio_usd": 60 * tasaDeCambio,
        "descripcion": "Explora Nueva York como el nuevo Spider-Man en este emocionante juego.",
        "imagen": "images/Entretenimiento/PS5.jpg"
    },
    {
        "id": 3,
        "nombre": "Libro: El Señor de los Anillos - Trilogía Completa",
        "precio_cop": 50,
        "precio_usd": 50 * tasaDeCambio,
        "descripcion": "Sumérgete en la fantasía épica de J.R.R. Tolkien con esta edición especial.",
        "imagen": "images/Entretenimiento/anillos.jpg"
    },
    {
        "id": 4,
        "nombre": "Concierto Streaming: BTS Live",
        "precio_cop": 20,
        "precio_usd": 20 * tasaDeCambio,
        "descripcion": "Acceso exclusivo al concierto en vivo de BTS desde Seúl.",
        "imagen": "images/Entretenimiento/BTS.jpg"
    },
    {
        "id": 5,
        "nombre": "Membresía Netflix (1 mes)",
        "precio_cop": 10,
        "precio_usd": 10 * tasaDeCambio,
        "descripcion": "Disfruta de series y películas ilimitadas por un mes.",
        "imagen": "images/Entretenimiento/netflix.jpg"
    },
    {
        "id": 6,
        "nombre": "Juego de Mesa: Catan",
        "precio_cop": 40,
        "precio_usd": 40 * tasaDeCambio,
        "descripcion": "Construye tu imperio y comercia estratégicamente en este clásico juego de mesa.",
        "imagen": "images/Entretenimiento/Catan.jpg"
    },
    {
        "id": 7,
        "nombre": "Álbum de Vinilo: Michael Jackson - Thriller",
        "precio_cop": 30,
        "precio_usd": 30 * tasaDeCambio,
        "descripcion": "Revive los éxitos de Michael Jackson en este icónico álbum de vinilo.",
        "imagen": "images/Entretenimiento/Thriller.jpg"
    },
    {
        "id": 8,
        "nombre": "Serie Completa: Friends (DVD)",
        "precio_cop": 70,
        "precio_usd": 70 * tasaDeCambio,
        "descripcion": "Todas las temporadas de la clásica serie de comedia en formato DVD.",
        "imagen": "images/Entretenimiento/friends.jpg"
    },
    {
        "id": 9,
        "nombre": "Juego Nintendo Switch: Mario Kart 8 Deluxe",
        "precio_cop": 55,
        "precio_usd": 55 * tasaDeCambio,
        "descripcion": "Compite en emocionantes carreras con tus personajes favoritos de Nintendo.",
        "imagen": "images/Entretenimiento/Mario.jpg"
    },
    {
        "id": 10,
        "nombre": "Libro: Harry Potter y la Piedra Filosofal",
        "precio_cop": 25,
        "precio_usd": 25 * tasaDeCambio,
        "descripcion": "La mágica primera aventura de Harry Potter en una edición de lujo.",
        "imagen": "images/Entretenimiento/harry.jpg"
    },
    {
        "id": 11,
        "nombre": "Figura de Colección: Iron Man",
        "precio_cop": 100,
        "precio_usd": 100 * tasaDeCambio,
        "descripcion": "Figura de edición limitada del icónico superhéroe de Marvel.",
        "imagen": "images/Entretenimiento/ironMan.jpg"
    },
    {
        "id": 12,
        "nombre": "Película Digital: Interestelar",
        "precio_cop": 15,
        "precio_usd": 15 * tasaDeCambio,
        "descripcion": "Un viaje épico a través del tiempo y el espacio en calidad digital.",
        "imagen": "images/Entretenimiento/interestelar.jpg"
    }
];

// Función para crear las tarjetas

function crearTarjetas() {
    const contenedor = document.getElementById('entretenimiento-container');

    productos.forEach(producto => {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta');

        const precioUsdFormateado = producto.precio_usd.toLocaleString('es-CO');
        const precioCopFormateado = producto.precio_cop.toLocaleString('es-CO');

        tarjeta.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}<br> <br>(${producto.descripcion})</h3>
            <p><strong>Precio:</strong> $${precioUsdFormateado} USD / $${precioCopFormateado} COP</p>
            <button class="btn-agregar" data-id="${producto.id}">Agregar al carrito</button>
        `;

        contenedor.appendChild(tarjeta);
    });

    agregarEventosBotones();
}

function agregarEventosBotones() {
    const botones = document.querySelectorAll('.btn-agregar');

    botones.forEach(boton => {
        boton.addEventListener('click', (evento) => {
            const productoId = parseInt(evento.target.dataset.id);
            agregarAlCarrito(productoId);
        });
    });
}

// Simulación de carrito 
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// AGREGAR AL CARRITO

function agregarAlCarrito(id) {
    const producto = productos.find(v => v.id === id);

    if (producto) {
        carrito.push(producto);
        localStorage.setItem('carrito', JSON.stringify(carrito));

        actualizarCarritoUI();
        console.log(`${producto.nombre} ha sido agregado al carrito.`);
    } else {
        console.error('Producto No Encontrado');
    }
}

// ACTUALIZACION DE LA UI DEL CARRITO

function actualizarCarritoUI() {
    const contadorCarrito = document.getElementById('Cuenta-Carrito');
    contadorCarrito.textContent = carrito.length;

    const carritoContainer = document.getElementById('carrito-items');
    carritoContainer.innerHTML = '';

    carrito.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('producto-carrito');

        const precioUsdFormateado = item.precio_usd.toLocaleString('es-CO');
        const precioCopFormateado = item.precio_cop.toLocaleString('es-CO');

        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.nombre}">
            <h3>${item.nombre}</h3>
            <p><strong>Precio:</strong> $${precioUsdFormateado} USD / $${precioCopFormateado} COP</p>
            <button class="eliminar-producto" data-id="${item.id}">Eliminar</button>
        `;

        carritoContainer.appendChild(itemDiv);
    });

    agregarEventosEliminar();
}

function agregarEventosEliminar() {
    const botonesEliminar = document.querySelectorAll('.eliminar-producto');
    
    botonesEliminar.forEach(boton => {
        boton.addEventListener('click', (evento) => {
            const itemId = parseInt(evento.target.dataset.id);
            eliminarDelCarrito(itemId);
        });
    });
}

function eliminarDelCarrito(id) {
    carrito = carrito.filter(item => item.id !== id);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarCarritoUI();
}

document.addEventListener("DOMContentLoaded", () => {
  crearTarjetas();
  actualizarCarritoUI();
});

document.addEventListener("DOMContentLoaded", () => {
    crearTarjetas();
    const tarjetas = document.querySelectorAll('.tarjeta');
    tarjetas.forEach((tarjeta, index) => {
        tarjeta.style.animationDelay = `${index * 0.2}s`;
    });
  });
