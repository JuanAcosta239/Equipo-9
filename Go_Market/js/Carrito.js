// Obtener contenedor del carrito
const carritoContainer = document.getElementById('carrito-container');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
const totalCarritoElem = document.getElementById('total-carrito');



// Cargar carrito desde localStorage

function cargarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carritoContainer.innerHTML = ''; 
    let total = 0;

    carrito.forEach(item => {
        
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('producto-carrito');

        productoDiv.innerHTML = `
            <img src="${item.imagen}" alt="${item.nombre}">
            <h3>${item.nombre}</h3>
            <p>Precio: $${item.precio_cop} COP</p>
            <button class="eliminar-producto" data-id="${item.id}">Eliminar</button>
        `;

        carritoContainer.appendChild(productoDiv);
        total += item.precio_cop; 
    });



    // Actualizar total
    totalCarritoElem.textContent = `Total: $${total.toLocaleString()} COP`;



    // Escuchar eventos de eliminación
    document.querySelectorAll('.eliminar-producto').forEach(boton => {
        boton.addEventListener('click', eliminarProducto);
    });
}




function eliminarProducto(e) {
    const idProducto = parseInt(e.target.dataset.id, 10);
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito = carrito.filter(producto => producto.id !== idProducto);

    localStorage.setItem('carrito', JSON.stringify(carrito));
    cargarCarrito();
}




vaciarCarritoBtn.addEventListener('click', () => {
    localStorage.removeItem('carrito');
    cargarCarrito();
});



// Cargar el carrito al inicio
cargarCarrito();
