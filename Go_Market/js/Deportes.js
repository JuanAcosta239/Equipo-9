const tasaDeCambio = 4400;

const deportes = [
    {
        "id": 1,
        "nombre": "Balón de Fútbol Adidas",
        "precio_usd": 35,
        "precio_cop": 35 * tasaDeCambio,
        "descripcion": "Balón oficial de la marca Adidas, ideal para entrenamientos y partidos.",
        "imagen": "images/Deportes/Adidas.webp"
    },
    {
        "id": 2,
        "nombre": "Raqueta de Tenis Wilson",
        "precio_usd": 120,
        "precio_cop": 120 * tasaDeCambio,
        "descripcion": "Raqueta profesional de la marca Wilson, perfecta para todos los niveles.",
        "imagen": "images/Deportes/Raqueta.png"
    },
    {
        "id": 3,
        "nombre": "Guantes de Boxeo Everlast",
        "precio_usd": 65,
        "precio_cop": 65 * tasaDeCambio,
        "descripcion": "Guantes acolchados de Everlast, ideales para entrenamiento y sparring.",
        "imagen": "images/Deportes/guantes.jpg"
    },
    {
        "id": 4,
        "nombre": "Bicicleta de Montaña Trek",
        "precio_usd": 850,
        "precio_cop": 850 * tasaDeCambio,
        "descripcion": "Bicicleta resistente para cualquier terreno, de la marca Trek.",
        "imagen": "images/Deportes/bicicleta.webp"
    },
    {
        "id": 5,
        "nombre": "Kit de Yoga (Esterilla y Bloques)",
        "precio_usd": 40,
        "precio_cop": 40 * tasaDeCambio,
        "descripcion": "Set completo para tus prácticas de yoga.",
        "imagen": "images/Deportes/yoga.jpg"
    },
    {
        "id": 6,
        "nombre": "Pelota de Baloncesto Spalding",
        "precio_usd": 50,
        "precio_cop": 50 * tasaDeCambio,
        "descripcion": "Pelota oficial con alta durabilidad, perfecta para interiores y exteriores.",
        "imagen": "images/Deportes/baloncesto.webp"
    },
    {
        "id": 7,
        "nombre": "Zapatos de Correr Nike Air Zoom",
        "precio_usd": 120,
        "precio_cop": 120 * tasaDeCambio,
        "descripcion": "Zapatos ligeros y cómodos para maximizar tu rendimiento en carreras.",
        "imagen": "images/Deportes/zhoes.webp"
    },
    {
        "id": 8,
        "nombre": "Pesas Ajustables Bowflex",
        "precio_usd": 450,
        "precio_cop": 450 * tasaDeCambio,
        "descripcion": "Pesas ajustables con un rango de 5 a 50 libras.",
        "imagen": "images/Deportes/pesas.webp"
    },
    {
        "id": 9,
        "nombre": "Patines Rollerblade",
        "precio_usd": 99,
        "precio_cop": 99 * tasaDeCambio,
        "descripcion": "Patines de alta calidad para uso recreativo.",
        "imagen": "images/Deportes/patins.webp"
    },
    {
        "id": 10,
        "nombre": "Palo de Golf TaylorMade",
        "precio_usd": 200,
        "precio_cop": 200 * tasaDeCambio,
        "descripcion": "Palo de golf con precisión avanzada para todos los niveles.",
        "imagen": "images/Deportes/golf.jpg"
    },
    {
        "id": 11,
        "nombre": "Casco de Ciclismo Giro",
        "precio_usd": 60,
        "precio_cop": 60 * tasaDeCambio,
        "descripcion": "Casco ligero y seguro con excelente ventilación.",
        "imagen": "images/Deportes/casco.webp"
    },
    {
        "id": 12,
        "nombre": "Traje de Natación Speedo",
        "precio_usd": 45,
        "precio_cop": 45 * tasaDeCambio,
        "descripcion": "Traje de natación profesional para competencias.",
        "imagen": "images/Deportes/traje.webp"
    }
];



// Función para crear las tarjetas

function crearTarjetas() {
    const contenedor = document.getElementById('deportes-container');

    deportes.forEach(deporte => {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta');

        const precioUsdFormateado = deporte.precio_usd.toLocaleString('es-CO');
        const precioCopFormateado = deporte.precio_cop.toLocaleString('es-CO');

        tarjeta.innerHTML = `
            <img src="${deporte.imagen}" alt="${deporte.nombre}">
            <h3>${deporte.nombre} <br> <br> (${deporte.descripcion})</h3>
            <p><strong>Precio:</strong> $${precioUsdFormateado} USD / $${precioCopFormateado} COP</p>
            <button class="btn-agregar" data-id="${deporte.id}">Agregar al carrito</button>
        `;

        contenedor.appendChild(tarjeta);
    });

    agregarEventosBotones();
}

function agregarEventosBotones() {
    const botones = document.querySelectorAll('.btn-agregar');

    botones.forEach(boton => {
        boton.addEventListener('click', (evento) => {
            const deporteId = parseInt(evento.target.dataset.id);
            agregarAlCarrito(deporteId);
        });
    });
}

// Simulación de carrito 
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];


// AGREGAR AL CARRITO //

function agregarAlCarrito(id) {
    const deporte = deportes.find(v => v.id === id);

    if (deporte) {
        carrito.push(deporte);
        localStorage.setItem('carrito', JSON.stringify(carrito));

        actualizarCarritoUI();
        console.log(`${deporte.nombre} ha sido agregado al carrito.`);
    } else {
        console.error('Deporte No Encontrado');
    }
}

// ACTUALIZACION DE LA UI DEL CARRITO //

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


