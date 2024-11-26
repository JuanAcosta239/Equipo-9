const tasaDeCambio = 4400;

const productosBelleza = [
    {
        "id": 1,
        "nombre": "Perfume Chanel No. 5",
        "precio_cop": 400000,
        "precio_usd": 400000 / tasaDeCambio,
        "descripcion": "Una fragancia intemporal y clásica de Chanel.",
        "imagen": "images/Belleza/chanel.jpg"
    },
    {
        "id": 2,
        "nombre": "Crema Hidratante Clinique",
        "precio_cop": 150000,
        "precio_usd": 150000 / tasaDeCambio,
        "descripcion": "Hidrata profundamente tu piel con la crema de Clinique.",
        "imagen": "images/Belleza/clinique.jpeg"
    },
    {
        "id": 3,
        "nombre": "Paleta de Sombras Urban Decay",
        "precio_cop": 200000,
        "precio_usd": 200000 / tasaDeCambio,
        "descripcion": "Crea looks espectaculares con la paleta de sombras Urban Decay.",
        "imagen": "images/Belleza/urbanDecay.webp"
    },
    {
        "id": 4,
        "nombre": "Lápiz Labial MAC",
        "precio_cop": 80000,
        "precio_usd": 80000 / tasaDeCambio,
        "descripcion": "Añade un toque de color a tus labios con el lápiz labial de MAC.",
        "imagen": "images/Belleza/macLipstick.avif"
    },
    {
        "id": 5,
        "nombre": "Máscara de Pestañas Maybelline",
        "precio_cop": 60000,
        "precio_usd": 60000 / tasaDeCambio,
        "descripcion": "Obtén unas pestañas voluminosas con la máscara de Maybelline.",
        "imagen": "images/Belleza/maybellineMascara.webp"
    },
    {
        "id": 6,
        "nombre": "Crema Antiarrugas Olay",
        "precio_cop": 90000,
        "precio_usd": 90000 / tasaDeCambio,
        "descripcion": "Reduce las arrugas con la crema antiarrugas de Olay.",
        "imagen": "images/Belleza/olay.avif"
    },
    {
        "id": 7,
        "nombre": "Serum Facial The Ordinary",
        "precio_cop": 70000,
        "precio_usd": 70000 / tasaDeCambio,
        "descripcion": "Mejora la apariencia de tu piel con el serum de The Ordinary.",
        "imagen": "images/Belleza/ordinarySerum.webp"
    },
    {
        "id": 8,
        "nombre": "Aceite de Argan Moroccanoil",
        "precio_cop": 120000,
        "precio_usd": 120000 / tasaDeCambio,
        "descripcion": "Nutre tu cabello con el aceite de argán de Moroccanoil.",
        "imagen": "images/Belleza/moroccanoil.webp"
    },
    {
        "id": 9,
        "nombre": "Tónico Facial Thayers",
        "precio_cop": 50000,
        "precio_usd": 50000 / tasaDeCambio,
        "descripcion": "Refresca tu piel con el tónico facial de Thayers.",
        "imagen": "images/Belleza/thayersToner.avif"
    },
    {
        "id": 10,
        "nombre": "Corrector NARS",
        "precio_cop": 100000,
        "precio_usd": 100000 / tasaDeCambio,
        "descripcion": "Cubre imperfecciones con el corrector de NARS.",
        "imagen": "images/Belleza/narsConcealer.jpg"
    },
    {
        "id": 11,
        "nombre": "Base de Maquillaje Fenty Beauty",
        "precio_cop": 140000,
        "precio_usd": 140000 / tasaDeCambio,
        "descripcion": "Obtén una piel perfecta con la base de Fenty Beauty.",
        "imagen": "images/Belleza/fentyFoundation.avif"
    },
    {
        "id": 12,
        "nombre": "Crema para Manos L'Occitane",
        "precio_cop": 30000,
        "precio_usd": 30000 / tasaDeCambio,
        "descripcion": "Hidrata tus manos con la crema de L'Occitane.",
        "imagen": "images/Belleza/loccitaneHandCream.webp"
    }
];

// Función para crear las tarjetas

function crearTarjetas() {
    const contenedor = document.getElementById('belleza-container');

    productosBelleza.forEach(producto => {
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
    const producto = productosBelleza.find(v => v.id === id);

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
