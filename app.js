// Array para almacenar los nombres de los amigos
let nombres = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo'); // Capturar el input
    let nombre = inputAmigo.value.trim(); // Obtener el valor y eliminar espacios en blanco

    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }
    // Agregar el nombre al array
    nombres.push(nombre);
    // Mostrar los amigos en la lista
    mostrarAmigos();
    // Limpiar el campo de entrada
    inputAmigo.value = "";
}

// Función para mostrar los amigos en la lista HTML
function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar
    // Recorrer el array y agregar los nombres a la lista
    for (let i = 0; i < nombres.length; i++) {
        let li = document.createElement("li");
        li.textContent = nombres[i];
        lista.appendChild(li);
    }
}
// Función para sortear un amigo al azar
function sortearAmigo() {
    if (nombres.length === 0) {
        alert("No hay nombres registrados para sortear.");
        return;
    }
    let numeroAleatorio = Math.floor(Math.random() * nombres.length); // Genera un índice aleatorio
    let nombreSeleccionado = nombres[numeroAleatorio]; // Obtiene el nombre en esa posición
    //alert(`El amigo seleccionado es: ${nombreSeleccionado}`);

    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = ""; // Limpiar resultados previos

    let li = document.createElement("li");
    li.textContent = `🎉 ¡El amigo secreto seleccionado es: ${nombreSeleccionado}! 🎉`;
    resultadoLista.appendChild(li);
}
