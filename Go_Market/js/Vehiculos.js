const tasaDeCambio = 4403;

const vehiculos = [
    {
        "id": 1,
        "nombre": "Toyota Corolla",
        "año": 2023,
        "precio_usd": 25000,
        "precio_cop": 25000 * tasaDeCambio,
        "caballos_de_fuerza": 169,
        "imagen": "images/Vehiculos/toyotacorolla.jpg"
    },
    {
        "id": 2,
        "nombre": "Honda Civic",
        "año": 2022,
        "precio_usd": 22000,
        "precio_cop": 22000 * tasaDeCambio,
        "caballos_de_fuerza": 158,
        "imagen": "images/Vehiculos/hondacivic.jpg"
    },
    {
        "id": 3,
        "nombre": "Ford F-150",
        "año": 2024,
        "precio_usd": 35000,
        "precio_cop": 35000 * tasaDeCambio,
        "caballos_de_fuerza": 400,
        "imagen": "images/Vehiculos/fordf150.jpg"
    },
    {
        "id": 4,
        "nombre": "Chevrolet Malibu",
        "año": 2021,
        "precio_usd": 23000,
        "precio_cop": 23000 * tasaDeCambio,
        "caballos_de_fuerza": 160,
        "imagen": "images/Vehiculos/chevroletmalibu.jpg"
    },
    {
        "id": 5,
        "nombre": "Tesla Model 3",
        "año": 2023,
        "precio_usd": 45000,
        "precio_cop": 45000 * tasaDeCambio,
        "caballos_de_fuerza": 283,
        "imagen": "images/Vehiculos/teslamodel3.jpg"
    },
    {
        "id": 6,
        "nombre": "BMW X5",
        "año": 2023,
        "precio_usd": 60000,
        "precio_cop": 60000 * tasaDeCambio,
        "caballos_de_fuerza": 335,
        "imagen": "images/Vehiculos/bmwx5.jpg"
    },
    {
        "id": 7,
        "nombre": "Audi A4",
        "año": 2022,
        "precio_usd": 35000,
        "precio_cop": 35000 * tasaDeCambio,
        "caballos_de_fuerza": 201,
        "imagen": "images/Vehiculos/audia4.jpg"
    },
    {
        "id": 8,
        "nombre": "Nissan Altima",
        "año": 2021,
        "precio_usd": 24000,
        "precio_cop": 24000 * tasaDeCambio,
        "caballos_de_fuerza": 188,
        "imagen": "images/Vehiculos/nissanaltima.jpg"
    },
    {
        "id": 9,
        "nombre": "Kia Sorento",
        "año": 2024,
        "precio_usd": 38000,
        "precio_cop": 38000 * tasaDeCambio,
        "caballos_de_fuerza": 281,
        "imagen": "images/Vehiculos/kiasorento.jpg"
    },
    {
        "id": 10,
        "nombre": "Hyundai Sonata",
        "año": 2022,
        "precio_usd": 27000,
        "precio_cop": 27000 * tasaDeCambio,
        "caballos_de_fuerza": 191,
        "imagen": "images/Vehiculos/hyundaisonata.jpg"
    },
    {
        "id": 11,
        "nombre": "Jeep Wrangler",
        "año": 2023,
        "precio_usd": 35000,
        "precio_cop": 35000 * tasaDeCambio,
        "caballos_de_fuerza": 285,
        "imagen": "images/Vehiculos/jeepwangler.jpg"
    },
    {
        "id": 12,
        "nombre": "Mazda CX-5",
        "año": 2021,
        "precio_usd": 30000,
        "precio_cop": 30000 * tasaDeCambio,
        "caballos_de_fuerza": 187,
        "imagen": "images/Vehiculos/mazdacx5.jpg"
    }
];

// Función para crear las tarjetas
function crearTarjetas() {
    const contenedor = document.getElementById('vehiculos-container');
    
    vehiculos.forEach(vehiculo => {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta');

        const precioUsdFormateado = vehiculo.precio_usd.toLocaleString('es-CO');
        const precioCopFormateado = vehiculo.precio_cop.toLocaleString('es-CO');

        tarjeta.innerHTML = `
            <img src="${vehiculo.imagen}" alt="${vehiculo.nombre}">
            <h3>${vehiculo.nombre} (${vehiculo.año})</h3>
            <p><strong>Precio:</strong> $${precioUsdFormateado} USD / $${precioCopFormateado} COP</p>
            <p><strong>Caballos de fuerza:</strong> ${vehiculo.caballos_de_fuerza}</p>
            <button class="btn-agregar" data-id="${vehiculo.id}">Agregar al carrito</button>
        `;
        
        contenedor.appendChild(tarjeta);
    });

    agregarEventosBotones();
}

function agregarEventosBotones() {
    const botones = document.querySelectorAll('.btn-agregar');
    
    botones.forEach(boton => {
        boton.addEventListener('click', (evento) => {
            const vehiculoId = parseInt(evento.target.dataset.id); 
            agregarAlCarrito(vehiculoId);
        });
    });
}

// Simulación de carrito 
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Función para agregar al carrito
function agregarAlCarrito(id) {
    const vehiculo = vehiculos.find(v => v.id === id);

    if (vehiculo) {
        carrito.push(vehiculo);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        actualizarCarritoUI(); 
        console.log(`${vehiculo.nombre} ha sido agregado al carrito.`);
    } else {
        console.error('Vehículo no encontrado.');
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
