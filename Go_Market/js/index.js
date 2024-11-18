// Array de vehículos 


const vehiculos = [
    {
        "id": 1,
        "nombre": "Toyota Corolla",
        "año": 2023,
        "precio_usd": 25000,
        "precio_cop": 25000 * 4600, 
        "caballos_de_fuerza": 169,
        "imagen": "images/vehiculos/toyotacorolla.jpg"
    },
    {
        "id": 2,
        "nombre": "Honda Civic",
        "año": 2022,
        "precio_usd": 22000,
        "precio_cop": 22000 * 4600,
        "caballos_de_fuerza": 158,
        "imagen": "images/vehiculos/hondacivic.jpg"
    },
    {
        "id": 3,
        "nombre": "Ford F-150",
        "año": 2024,
        "precio_usd": 35000,
        "precio_cop": 35000 * 4600,
        "caballos_de_fuerza": 400,
        "imagen": "images/vehiculos/fordf150.jpg"
    },

    
];

// Función para crear las tarjetas


function crearTarjetas() {
    const contenedor = document.getElementById('vehiculos-container');
    
    vehiculos.forEach(vehiculo => {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta');

        tarjeta.innerHTML = `
            <img src="${vehiculo.imagen}" alt="${vehiculo.nombre}">
            <h3>${vehiculo.nombre} (${vehiculo.año})</h3>
            <p><strong>Precio:</strong> $${vehiculo.precio_usd} USD / $${vehiculo.precio_cop} COP</p>
            <p><strong>Caballos de fuerza:</strong> ${vehiculo.caballos_de_fuerza}</p>
        `;
        
        contenedor.appendChild(tarjeta);
    });
}

// Llamar a la función para generar las tarjetas

crearTarjetas();
