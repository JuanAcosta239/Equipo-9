const tasaDeCambio = 4400;

const productosMueblesYHogar = [
    {
        "id": 1,
        "nombre": "Sofá de Cuero",
        "precio_cop": 1500000,
        "precio_usd": 1500000 / tasaDeCambio,
        "descripcion": "Sofá de cuero de alta calidad, perfecto para cualquier sala de estar.",
        "imagen": "images/Muebles Y Hogar/sofa.webp"
    },
    {
        "id": 2,
        "nombre": "Mesa de Comedor de Madera",
        "precio_cop": 800000,
        "precio_usd": 800000 / tasaDeCambio,
        "descripcion": "Mesa de comedor de madera resistente con capacidad para seis personas.",
        "imagen": "images/Muebles Y Hogar/mesa.webp"
    },
    {
        "id": 3,
        "nombre": "Lámpara de Pie Moderna",
        "precio_cop": 200000,
        "precio_usd": 200000 / tasaDeCambio,
        "descripcion": "Lámpara de pie con diseño moderno, ideal para iluminar cualquier espacio.",
        "imagen": "images/Muebles Y Hogar/lampara.jpg"
    },
    {
        "id": 4,
        "nombre": "Estante para Libros",
        "precio_cop": 350000,
        "precio_usd": 350000 / tasaDeCambio,
        "descripcion": "Estante para libros de varios niveles, perfecto para organizar tus libros y decoración.",
        "imagen": "images/Muebles Y Hogar/estante.jpg"
    },
    {
        "id": 5,
        "nombre": "Juego de Sábanas de Algodón",
        "precio_cop": 100000,
        "precio_usd": 100000 / tasaDeCambio,
        "descripcion": "Juego de sábanas de algodón suave para una noche de sueño confortable.",
        "imagen": "images/Muebles Y Hogar/sabanas.jpg"
    },
    {
        "id": 6,
        "nombre": "Cojines Decorativos",
        "precio_cop": 60000,
        "precio_usd": 60000 / tasaDeCambio,
        "descripcion": "Cojines decorativos en varios colores y diseños para alegrar tu hogar.",
        "imagen": "images/Muebles Y Hogar/cojines.jpg"
    },
    {
        "id": 7,
        "nombre": "Alfombra Persa",
        "precio_cop": 1200000,
        "precio_usd": 1200000 / tasaDeCambio,
        "descripcion": "Alfombra persa hecha a mano, ideal para dar un toque elegante a cualquier habitación.",
        "imagen": "images/Muebles Y Hogar/alfombra.jpg"
    },
    {
        "id": 8,
        "nombre": "Espejo de Pared",
        "precio_cop": 250000,
        "precio_usd": 250000 / tasaDeCambio,
        "descripcion": "Espejo de pared con marco decorativo, perfecto para ampliar visualmente cualquier espacio.",
        "imagen": "images/Muebles Y Hogar/espejo.jpg"
    },
    {
        "id": 9,
        "nombre": "Ropero de Madera",
        "precio_cop": 900000,
        "precio_usd": 900000 / tasaDeCambio,
        "descripcion": "Ropero de madera con amplios compartimentos para organizar tu ropa.",
        "imagen": "images/Muebles Y Hogar/ropero.jpg"
    },
    {
        "id": 10,
        "nombre": "Silla de Oficina Ergonómica",
        "precio_cop": 500000,
        "precio_usd": 500000 / tasaDeCambio,
        "descripcion": "Silla de oficina ergonómica, diseñada para ofrecer máximo confort durante largas horas de trabajo.",
        "imagen": "images/Muebles Y Hogar/silla.jpg"
    },
    {
        "id": 11,
        "nombre": "Cortinas Blackout",
        "precio_cop": 150000,
        "precio_usd": 150000 / tasaDeCambio,
        "descripcion": "Cortinas blackout que bloquean la luz, ideales para dormitorios.",
        "imagen": "images/Muebles Y Hogar/cortinas.jpg"
    },
    {
        "id": 12,
        "nombre": "Organizador de Cocina",
        "precio_cop": 70000,
        "precio_usd": 70000 / tasaDeCambio,
        "descripcion": "Organizador de cocina multifuncional para mantener tus utensilios en orden.",
        "imagen": "images/Muebles Y Hogar/organizador.jpg"
    }
];

// Función para crear las tarjetas

function crearTarjetas() {
    const contenedor = document.getElementById('muebles-hogar-container');

    productosMueblesYHogar.forEach(producto => {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta');

        const precioUsdFormateado = producto.precio_usd.toLocaleString('es-CO');
        const precioCopFormateado = producto.precio_cop.toLocaleString('es-CO');

        tarjeta.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre} <br> <br> (${producto.descripcion})</h3>
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
    const producto = productosMueblesYHogar.find(v => v.id === id);

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
            <img src="${item.imagen}" alt="${item.nombre}">
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
    const tarjetas = document.querySelectorAll('.tarjeta');
    tarjetas.forEach((tarjeta, index) => {
        tarjeta.style.animationDelay = `${index * 0.2}s`;
    });
  });