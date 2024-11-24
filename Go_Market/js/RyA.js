const tasaDeCambio = 4400;

const productosRYA = [
    {
        "id": 1,
        "nombre": "Camiseta Nike",
        "precio_cop": 80000,
        "precio_usd": 80000 / tasaDeCambio,
        "descripcion": "Camiseta deportiva de alta calidad de la marca Nike.",
        "imagen": "images/RyA/camiseta_nike.jpg"
    },
    {
        "id": 2,
        "nombre": "Jeans Levi's",
        "precio_cop": 150000,
        "precio_usd": 150000 / tasaDeCambio,
        "descripcion": "Jeans clásicos de Levi's, perfectos para cualquier ocasión.",
        "imagen": "images/RyA/jeans_levis.jpg"
    },
    {
        "id": 3,
        "nombre": "Chaqueta de Cuero",
        "precio_cop": 300000,
        "precio_usd": 300000 / tasaDeCambio,
        "descripcion": "Chaqueta de cuero genuino para un look elegante.",
        "imagen": "images/RyA/chaqueta_cuero.jpg"
    },
    {
        "id": 4,
        "nombre": "Zapatillas Adidas",
        "precio_cop": 250000,
        "precio_usd": 250000 / tasaDeCambio,
        "descripcion": "Zapatillas deportivas cómodas y duraderas de Adidas.",
        "imagen": "images/RyA/zapatillas_adidas.jpg"
    },
    {
        "id": 5,
        "nombre": "Bolso de Mano Gucci",
        "precio_cop": 1200000,
        "precio_usd": 1200000 / tasaDeCambio,
        "descripcion": "Bolso de mano de lujo de la marca Gucci.",
        "imagen": "images/RyA/bolso_gucci.jpg"
    },
    {
        "id": 6,
        "nombre": "Reloj Casio",
        "precio_cop": 200000,
        "precio_usd": 200000 / tasaDeCambio,
        "descripcion": "Reloj clásico y funcional de Casio.",
        "imagen": "images/RyA/reloj_casio.jpg"
    },
    {
        "id": 7,
        "nombre": "Sombrero Fedora",
        "precio_cop": 50000,
        "precio_usd": 50000 / tasaDeCambio,
        "descripcion": "Sombrero estilo fedora para un look sofisticado.",
        "imagen": "images/RyA/sombrero_fedora.jpg"
    },
    {
        "id": 8,
        "nombre": "Bufanda de Lana",
        "precio_cop": 40000,
        "precio_usd": 40000 / tasaDeCambio,
        "descripcion": "Bufanda de lana cálida y suave para el invierno.",
        "imagen": "images/RyA/bufanda_lana.jpg"
    },
    {
        "id": 9,
        "nombre": "Vestido Elegante",
        "precio_cop": 250000,
        "precio_usd": 250000 / tasaDeCambio,
        "descripcion": "Vestido elegante perfecto para eventos formales.",
        "imagen": "images/RyA/vestido_elegante.jpg"
    },
    {
        "id": 10,
        "nombre": "Cinturón de Cuero",
        "precio_cop": 60000,
        "precio_usd": 60000 / tasaDeCambio,
        "descripcion": "Cinturón de cuero resistente y elegante.",
        "imagen": "images/RyA/cinturon_cuero.jpg"
    },
    {
        "id": 11,
        "nombre": "Gafas de Sol Ray-Ban",
        "precio_cop": 350000,
        "precio_usd": 350000 / tasaDeCambio,
        "descripcion": "Gafas de sol clásicas y estilosas de Ray-Ban.",
        "imagen": "images/RyA/gafas_rayban.jpg"
    },
    {
        "id": 12,
        "nombre": "Pantalones Cargo",
        "precio_cop": 100000,
        "precio_usd": 100000 / tasaDeCambio,
        "descripcion": "Pantalones cargo cómodos y versátiles.",
        "imagen": "images/RyA/pantalones_cargo.jpg"
    }
];


// Función para crear las tarjetas

function crearTarjetas() {
    const contenedor = document.getElementById('ropa-accesorios-container');

    productosRYA.forEach(producto => {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta');

        const precioUsdFormateado = producto.precio_usd.toLocaleString('es-CO');
        const precioCopFormateado = producto.precio_cop.toLocaleString('es-CO');

        tarjeta.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}<br> <br> (${producto.descripcion})</h3>
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
    const producto = productosRYA.find(v => v.id === id);

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
  actualizarCarritoUI();
});

document.addEventListener("DOMContentLoaded", () => {
    crearTarjetas();
    const tarjetas = document.querySelectorAll('.tarjeta');
    tarjetas.forEach((tarjeta, index) => {
        tarjeta.style.animationDelay = `${index * 0.2}s`;
    });
  });