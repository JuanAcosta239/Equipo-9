//Array de entretenimiento

const products = [
    { 
        id: 1, 
        name: "Película Blu-ray: Avengers Endgame", 
        category: "Películas", 
        price: 20, 
        stock: 15, 
        description: "Disfruta de la épica conclusión de los Vengadores en alta definición.", 
        image: "/Equipo-9/Go_Market/Images/Entretenimiento/avengers.jpg" 
    },
    { 
        id: 2, 
        name: "Juego PS5: Spider-Man Miles Morales", 
        category: "Videojuegos", 
        price: 60, 
        stock: 10, 
        description: "Explora Nueva York como el nuevo Spider-Man en este emocionante juego.", 
        image: "/Equipo-9/Go_Market/Images/Entretenimiento/PS5.jpg" 
    },
    { 
        id: 3, 
        name: "Libro: El Señor de los Anillos - Trilogía Completa", 
        category: "Libros", 
        price: 50, 
        stock: 8, 
        description: "Sumérgete en la fantasía épica de J.R.R. Tolkien con esta edición especial.", 
        image: "/Equipo-9/Go_Market/Images/Entretenimiento/anillos.jpg" 
    },
    { 
        id: 4, 
        name: "Concierto Streaming: BTS Live", 
        category: "Streaming", 
        price: 20, 
        stock: 100, 
        description: "Acceso exclusivo al concierto en vivo de BTS desde Seúl.", 
        image: "/Equipo-9/Go_Market/Images/Entretenimiento/BTS.jpg" 
    },
    { 
        id: 5, 
        name: "Membresía Netflix (1 mes)", 
        category: "Streaming", 
        price: 10, 
        stock: 50, 
        description: "Disfruta de series y películas ilimitadas por un mes.", 
        image: "/Equipo-9/Go_Market/Images/Entretenimiento/netflix.jpg" 
    },
    { 
        id: 6, 
        name: "Juego de Mesa: Catan", 
        category: "Juegos de mesa", 
        price: 40, 
        stock: 12, 
        description: "Construye tu imperio y comercia estratégicamente en este clásico juego de mesa.", 
        image: "/Equipo-9/Go_Market/Images/Entretenimiento/Catan.jpg" 
    },
    { 
        id: 7, 
        name: "Álbum de Vinilo: Michael Jackson - Thriller", 
        category: "Música", 
        price: 30, 
        stock: 5, 
        description: "Revive los éxitos de Michael Jackson en este icónico álbum de vinilo.", 
        image: "/Equipo-9/Go_Market/Images/Entretenimiento/Thriller.jpg" 
    },
    { 
        id: 8, 
        name: "Serie Completa: Friends (DVD)", 
        category: "Series", 
        price: 70, 
        stock: 4, 
        description: "Todas las temporadas de la clásica serie de comedia en formato DVD.", 
        image: "/Equipo-9/Go_Market/Images/Entretenimiento/friends.jpg" 
    },
    { 
        id: 9, 
        name: "Juego Nintendo Switch: Mario Kart 8 Deluxe", 
        category: "Videojuegos", 
        price: 55, 
        stock: 20, 
        description: "Compite en emocionantes carreras con tus personajes favoritos de Nintendo.", 
        image: "/Equipo-9/Go_Market/Images/Entretenimiento/Mario.jpg" 
    },
    { 
        id: 10, 
        name: "Libro: Harry Potter y la Piedra Filosofal", 
        category: "Libros", 
        price: 25, 
        stock: 18, 
        description: "La mágica primera aventura de Harry Potter en una edición de lujo.", 
        image: "/Equipo-9/Go_Market/Images/Entretenimiento/harry.jpg" 
    },
    { 
        id: 11, 
        name: "Figura de Colección: Iron Man", 
        category: "Coleccionables", 
        price: 100, 
        stock: 3, 
        description: "Figura de edición limitada del icónico superhéroe de Marvel.", 
        image: "/Equipo-9/Go_Market/Images/Entretenimiento/ironMan.jpg" 
    },
    { 
        id: 12, 
        name: "Película Digital: Interestelar", 
        category: "Películas", 
        price: 15, 
        stock: 30, 
        description: "Un viaje épico a través del tiempo y el espacio en calidad digital.", 
        image: "/Equipo-9/Go_Market/Images/Entretenimiento/interestelar.jpg" 
    }
];

// Función para crear las tarjetas


function crearTarjetas() {
    const contenedor = document.getElementById('entretenimiento-container');
    
    products.forEach(product=> {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta');

        tarjeta.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name} (${product.stock})</h3>
            <p><strong>Precio:</strong> $${product.price} USD / ${product.category}</p>
            <p><strong>Descripcion:</strong> ${product.description}</p><br>
            <button onclick="addToCart(${product.id})">Añadir al carrito</button>
        `;
        
        contenedor.appendChild(tarjeta);
    });
}

// Llamar a la función para generar las tarjetas

crearTarjetas();
