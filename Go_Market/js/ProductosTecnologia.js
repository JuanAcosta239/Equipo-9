const tasaDeCambio = 4400;

const productosTecnologia = [
    {
        "id": 1,
        "nombre": "Laptop HP Spectre x360",
        "año": 2023,
        "precio_usd": 1500,
        "precio_cop": 1500 * tasaDeCambio,
        "imagen": "images/Tecnologia/hpspectrex360.jpg"
    },
    {
        "id": 2,
        "nombre": "Smartphone Samsung Galaxy S21",
        "año": 2021,
        "precio_usd": 799,
        "precio_cop": 799 * tasaDeCambio,
        "imagen": "images/Tecnologia/SamsungGalaxys21.jpg"
    },
    {
        "id": 3,
        "nombre": "Tablet Apple iPad Pro",
        "año": 2022,
        "precio_usd": 999,
        "precio_cop": 999 * tasaDeCambio,
        "imagen": "images/Tecnologia/ipadpro.jpg"
    },
    {
        "id": 4,
        "nombre": "Monitor Dell UltraSharp",
        "año": 2021,
        "precio_usd": 499,
        "precio_cop": 499 * tasaDeCambio,
        "imagen": "images/Tecnologia/monitordellultrasharp.jpg"
    },
    {
        "id": 5,
        "nombre": "Audífonos Sony WH-1000XM4",
        "año": 2020,
        "precio_usd": 350,
        "precio_cop": 350 * tasaDeCambio,
        "imagen": "images/Tecnologia/audifonossony.jpg"
    },
    {
        "id": 6,
        "nombre": "Smartwatch Apple Watch Series 7",
        "año": 2021,
        "precio_usd": 399,
        "precio_cop": 399 * tasaDeCambio,
        "imagen": "images/Tecnologia/applewatch.jpg"
    },
    {
        "id": 7,
        "nombre": "Cámara Sony Alpha a7 III",
        "año": 2019,
        "precio_usd": 2000,
        "precio_cop": 2000 * tasaDeCambio,
        "imagen": "images/Tecnologia/camarasony.jpg"
    },
    {
        "id": 8,
        "nombre": "Auriculares Bose QuietComfort 35 II",
        "año": 2018,
        "precio_usd": 299,
        "precio_cop": 299 * tasaDeCambio,
        "imagen": "images/Tecnologia/audifonosbose.jpg"
    },
    {
        "id": 9,
        "nombre": "Consola PlayStation 5",
        "año": 2020,
        "precio_usd": 499,
        "precio_cop": 499 * tasaDeCambio,
        "imagen": "images/Tecnologia/ps5.jpg"
    },
    {
        "id": 10,
        "nombre": "Router Netgear Nighthawk",
        "año": 2021,
        "precio_usd": 200,
        "precio_cop": 200 * tasaDeCambio,
        "imagen": "images/Tecnologia/routernetgear.jpg"
    },
    {
        "id": 11,
        "nombre": "Teclado mecánico Razer BlackWidow",
        "año": 2019,
        "precio_usd": 130,
        "precio_cop": 130 * tasaDeCambio,
        "imagen": "images/Tecnologia/tecladorazer.jpg"
    },
    {
        "id": 12,
        "nombre": "SSD Samsung 970 Evo 1TB",
        "año": 2020,
        "precio_usd": 150,
        "precio_cop": 150 * tasaDeCambio,
        "imagen": "images/Tecnologia/ssdsamsung.jpg"
    }
];

// Función para crear las tarjetas
function crearTarjetas() {
    const contenedor = document.getElementById('productos-container');
    
    productosTecnologia.forEach(producto => {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta');

        const precioUsdFormateado = producto.precio_usd.toLocaleString('es-CO');
        const precioCopFormateado = producto.precio_cop.toLocaleString('es-CO');

        tarjeta.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre} (${producto.año})</h3>
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

// Función para agregar al carrito
function agregarAlCarrito(id) {
    const producto = productosTecnologia.find(p => p.id === id);

    if (producto) {
        carrito.push(producto);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        actualizarCarritoUI(); 
        console.log(`${producto.nombre} ha sido agregado al carrito.`);
    } else {
        console.error('Producto no encontrado.');
    }
}

// Actualización de la UI del carrito
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
  