//Array de deportes

const sportsProducts = [
    {
        id: 1,
        name: "Balón de Fútbol Adidas",
        price: 35.99,
        description: "Balón oficial de la marca Adidas, ideal para entrenamientos y partidos.",
        category: "Deportes",
        stock: 50,
        image: "/Equipo-9/Go_Market/Images/Deportes/Adidas.webp"
    },
    {
        id: 2,
        name: "Raqueta de Tenis Wilson",
        price: 120.00,
        description: "Raqueta profesional de la marca Wilson, perfecta para todos los niveles.",
        category: "Deportes",
        stock: 30,
        image: "/Equipo-9/Go_Market/Images/Deportes/Raqueta.png"
    },
    {
        id: 3,
        name: "Guantes de Boxeo Everlast",
        price: 65.50,
        description: "Guantes acolchados de Everlast, ideales para entrenamiento y sparring.",
        category: "Deportes",
        stock: 20,
        image: "/Equipo-9/Go_Market/Images/Deportes/guantes.jpg"
    },
    {
        id: 4,
        name: "Bicicleta de Montaña Trek",
        price: 850.00,
        description: "Bicicleta resistente para cualquier terreno, de la marca Trek.",
        category: "Deportes",
        stock: 10,
        image: "/Equipo-9/Go_Market/Images/Deportes/bicicleta.webp"
    },
    {
        id: 5,
        name: "Kit de Yoga (Esterilla y Bloques)",
        price: 40.00,
        description: "Set completo para tus prácticas de yoga.",
        category: "Deportes",
        stock: 25,
        image: "/Equipo-9/Go_Market/Images/Deportes/yoga.jpg"
    },
    {
        id: 6,
        name: "Pelota de Baloncesto Spalding",
        price: 50.00,
        description: "Pelota oficial con alta durabilidad, perfecta para interiores y exteriores.",
        category: "Deportes",
        stock: 40,
        image: "/Equipo-9/Go_Market/Images/Deportes/baloncesto.webp"
    },
    {
        id: 7,
        name: "Zapatos de Correr Nike Air Zoom",
        price: 120.00,
        description: "Zapatos ligeros y cómodos para maximizar tu rendimiento en carreras.",
        category: "Deportes",
        stock: 35,
        image: "/Equipo-9/Go_Market/Images/Deportes/zhoes.webp"
    },
    {
        id: 8,
        name: "Pesas Ajustables Bowflex",
        price: 450.00,
        description: "Pesas ajustables con un rango de 5 a 50 libras.",
        category: "Deportes",
        stock: 15,
        image: "/Equipo-9/Go_Market/Images/Deportes/pesas.webp"
    },
    {
        id: 9,
        name: "Patines Rollerblade",
        price: 99.99,
        description: "Patines de alta calidad para uso recreativo.",
        category: "Deportes",
        stock: 22,
        image: "/Equipo-9/Go_Market/Images/Deportes/patins.webp"
    },
    {
        id: 10,
        name: "Palo de Golf TaylorMade",
        price: 200.00,
        description: "Palo de golf con precisión avanzada para todos los niveles.",
        category: "Deportes",
        stock: 18,
        image: "/Equipo-9/Go_Market/Images/Deportes/golf.jpg"
    },
    {
        id: 11,
        name: "Casco de Ciclismo Giro",
        price: 60.00,
        description: "Casco ligero y seguro con excelente ventilación.",
        category: "Deportes",
        stock: 20,
        image: "/Equipo-9/Go_Market/Images/Deportes/casco.webp"
    },
    {
        id: 12,
        name: "Traje de Natación Speedo",
        price: 45.00,
        description: "Traje de natación profesional para competencias.",
        category: "Deportes",
        stock: 15,
        image: "/Equipo-9/Go_Market/Images/Deportes/traje.webp"
    }
];

// Función para crear las tarjetas


function crearTarjetas() {
    const contenedor = document.getElementById('sports-container');
    
    sportsProducts.forEach(sportsProduct=> {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta');

        tarjeta.innerHTML = `
            <img src="${sportsProduct.image}" alt="${sportsProduct.name}">
            <h3>${sportsProduct.name} (${sportsProduct.stock})</h3>
            <p><strong>Precio:</strong> $${sportsProduct.price} USD / ${sportsProduct.category}</p>
            <p><strong>Descripcion:</strong> ${sportsProduct.description}</p><br>
            <button onclick="addToCart(${sportsProduct.id})">Añadir al carrito</button>
        `;
        
        contenedor.appendChild(tarjeta);
    });
}

// Llamar a la función para generar las tarjetas

crearTarjetas();