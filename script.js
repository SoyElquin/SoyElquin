// Definimos un array con mensajes temáticos de Rick y Morty que se mostrarán aleatoriamente
const messages = [
    "Calibrando flujo del espacio-tiempo...",
    "Buscando a Elquin en la dimensión C-137...",
    "Reparando paradojas en la hoja de vida",
    "Experimentos interdimensionales en curso...",
    "Solucionando de manera improvisada errores en JavaScript...",
    "Escaneando repositorios dimensionales...",
    "Ajustando la hoja de vida de Elquin...",
    "Preguntando a ChatGPT por el sentido de la vida...",
];

// Función que actualiza el mensaje mostrado en pantalla con un efecto de desvanecimiento
function updateMessage() {
    // Obtenemos el elemento del DOM que contiene el mensaje
    const messageElement = document.getElementById('message');
    
    // Establecemos la opacidad a 0 para crear efecto de desvanecimiento
    messageElement.style.opacity = 0;
    
    // Utilizamos setTimeout para crear una transición suave
    setTimeout(() => {
        // Seleccionamos un mensaje aleatorio del array
        // Math.floor redondea hacia abajo el resultado de Math.random() * longitud del array
        messageElement.textContent = messages[Math.floor(Math.random() * messages.length)];
        
        // Volvemos a hacer visible el mensaje
        messageElement.style.opacity = 1;
    }, 500); // Esperamos 500ms para cambiar el mensaje
}

// Función que actualiza la barra de progreso con un valor aleatorio
function updateProgressBar() {
    // Obtenemos el elemento de la barra de progreso
    const progressBar = document.getElementById('progress-bar');
    
    // Obtenemos el ancho actual de la barra o 0 si no tiene un valor establecido
    let width = parseFloat(progressBar.style.width) || 0;
    
    // Incrementamos el ancho de forma aleatoria
    width += Math.random() * 10;
    
    // Si el ancho supera el 90%, lo reseteamos a un valor aleatorio entre 0 y 60
    if (width >= 90) width = Math.random() * 60;
    
    // Actualizamos el ancho de la barra de progreso
    progressBar.style.width = width + '%';
}

// Función que crea una burbuja animada dentro de un tubo
function createBubble(tube) {
    // Creamos un nuevo elemento div para la burbuja
    const bubble = document.createElement('div');
    
    // Añadimos la clase 'bubble' para los estilos CSS
    bubble.classList.add('bubble');
    
    // Establecemos un tamaño aleatorio entre 5 y 15 píxeles
    bubble.style.width = Math.random() * 10 + 5 + 'px';
    
    // Hacemos que la altura sea igual al ancho para que sea circular
    bubble.style.height = bubble.style.width;
    
    // Posicionamos la burbuja horizontalmente de forma aleatoria dentro del tubo
    bubble.style.left = Math.random() * 30 + 5 + 'px';
    
    // Establecemos una duración aleatoria para la animación entre 2 y 4 segundos
    bubble.style.animationDuration = Math.random() * 2 + 2 + 's';
    
    // Añadimos la burbuja al tubo
    tube.appendChild(bubble);
    
    // Eliminamos la burbuja después de 3 segundos
    setTimeout(() => bubble.remove(), 3000);
}

// Función que maneja el evento de clic en un tubo
function tubeClick(tube) {
    // Creamos 5 burbujas con un retraso entre cada una
    for (let i = 0; i < 5; i++) {
        // Creamos cada burbuja con un retraso de 200ms entre cada una
        setTimeout(() => createBubble(tube), i * 200);
    }
    
    // Mostramos el easter egg asociado al tubo
    showEasterEgg(tube);
}

// Función que muestra un easter egg cuando se hace clic en un tubo
function showEasterEgg(tube) {
    // Creamos un nuevo elemento div para el easter egg
    const easterEgg = document.createElement('div');
    
    // Añadimos la clase 'easter-egg' para los estilos CSS
    easterEgg.classList.add('easter-egg');
    
    // Establecemos el contenido del easter egg desde el atributo data-easter-egg del tubo
    easterEgg.textContent = tube.dataset.easterEgg;
    
    // Posicionamos el easter egg en la misma posición que el tubo
    easterEgg.style.left = tube.offsetLeft + 'px';
    easterEgg.style.top = tube.offsetTop + 'px';
    
    // Añadimos el easter egg al body del documento
    document.body.appendChild(easterEgg);
    
    // Después de 100ms, hacemos visible el easter egg y aplicamos la animación
    setTimeout(() => {
        easterEgg.style.opacity = 1;
        easterEgg.style.transform = 'translateY(-50px) rotate(360deg)';
    }, 100);
    
    // Eliminamos el easter egg después de 2 segundos
    setTimeout(() => easterEgg.remove(), 2000);
}

// Función que crea una anomalía temporal (efecto visual)
function createTimeAnomaly() {
    // Creamos un nuevo elemento div para la anomalía
    const anomaly = document.createElement('div');
    
    // Añadimos la clase 'time-anomaly' para los estilos CSS
    anomaly.classList.add('time-anomaly');
    
    // Establecemos un tamaño aleatorio entre 10 y 60 píxeles
    const size = Math.random() * 50 + 10;
    anomaly.style.width = size + 'px';
    anomaly.style.height = size + 'px';
    
    // Posicionamos la anomalía en un lugar aleatorio de la pantalla
    anomaly.style.left = Math.random() * window.innerWidth + 'px';
    anomaly.style.top = Math.random() * window.innerHeight + 'px';
    
    // Añadimos la anomalía al body del documento
    document.body.appendChild(anomaly);
    
    // Eliminamos la anomalía después de 4 segundos
    setTimeout(() => anomaly.remove(), 4000);
}

// Función que actualiza el contador con números aleatorios
function updateCountdown() {
    // Obtenemos el elemento del contador
    const countdownElement = document.getElementById('countdown');
    
    // Generamos un tiempo aleatorio entre 0 y 59 segundos
    let time = Math.floor(Math.random() * 60);
    
    // Función interna que actualiza el contador cada segundo
    const updateTimer = () => {
        // Actualizamos el texto del contador, añadiendo ceros a la izquierda si es necesario
        countdownElement.textContent = `00:00:${time.toString().padStart(2, '0')}`;
        
        // Si aún hay tiempo, decrementamos y programamos la siguiente actualización
        if (time > 0) {
            time--;
            setTimeout(updateTimer, 1000);
        } else {
            // Si llegamos a cero, esperamos un tiempo aleatorio y reiniciamos
            setTimeout(updateCountdown, Math.random() * 3000 + 1000);
        }
    };
    
    // Iniciamos la actualización del temporizador
    updateTimer();
}

// Función que activa el efecto del portal gun
function activatePortalGun() {
    // Obtenemos el elemento del portal
    const portal = document.getElementById('portal');
    
    // Hacemos visible el portal
    portal.style.display = 'block';
    
    // Posicionamos el portal en un lugar aleatorio de la pantalla
    portal.style.left = Math.random() * (window.innerWidth - 100) + 'px';
    portal.style.top = Math.random() * (window.innerHeight - 100) + 'px';
    
    // Ocultamos el portal después de 5 segundos
    setTimeout(() => portal.style.display = 'none', 5000);
    
    // Creamos dos anomalías temporales
    createTimeAnomaly();
    createTimeAnomaly();
    
    // Actualizamos el mensaje
    updateMessage();
}

// Función que estabiliza la realidad (efecto visual)
function stabilizeReality() {
    // Obtenemos todas las anomalías temporales
    const anomalies = document.querySelectorAll('.time-anomaly');
    
    // Aplicamos animación de encogimiento a cada anomalía
    anomalies.forEach(anomaly => {
        anomaly.style.animation = 'shrink 1s forwards';
    });
    
    // Aplicamos efecto de estabilización al body
    document.body.style.animation = 'stabilize 2s';
    
    // Actualizamos el mensaje
    updateMessage();
}

// Función que invoca un personaje aleatorio (Rick o Morty)
function summonCharacter() {
    // Seleccionamos aleatoriamente entre Rick y Morty
    const character = Math.random() < 0.5 ? document.getElementById('rick') : document.getElementById('morty');
    
    // Hacemos visible el personaje
    character.style.display = 'block';
    
    // Posicionamos el personaje en un lugar aleatorio de la pantalla
    character.style.left = Math.random() * (window.innerWidth - 50) + 'px';
    character.style.top = Math.random() * (window.innerHeight - 50) + 'px';
    
    // Ocultamos el personaje después de 3 segundos
    setTimeout(() => {
        character.style.display = 'none';
    }, 3000);
    
    // Actualizamos el mensaje
    updateMessage();
}

// Event Listener para el movimiento del cursor personalizado
document.addEventListener('mousemove', (e) => {
    const cursor = document.getElementById('cursor');
    // Posicionamos el cursor personalizado en la posición del mouse
    cursor.style.left = e.clientX - 10 + 'px';
    cursor.style.top = e.clientY - 10 + 'px';
    cursor.style.transform = 'scale(1)';
});

// Event Listener para el efecto de clic del cursor
document.addEventListener('mousedown', () => {
    // Reducimos el tamaño del cursor al hacer clic
    document.getElementById('cursor').style.transform = 'scale(0.8)';
});

// Event Listener para restaurar el cursor después del clic
document.addEventListener('mouseup', () => {
    // Restauramos el tamaño original del cursor
    document.getElementById('cursor').style.transform = 'scale(1)';
});

// Configuración de intervalos para las actualizaciones periódicas
setInterval(updateMessage, 5000);         // Actualiza el mensaje cada 5 segundos
setInterval(updateProgressBar, 200);      // Actualiza la barra de progreso cada 200ms
setInterval(createTimeAnomaly, 10000);    // Crea una anomalía temporal cada 10 segundos

// Iniciamos el contador
updateCountdown();

// Inicializamos los tubos con burbujas
document.querySelectorAll('.tube').forEach(tube => {
    // Creamos 3 burbujas iniciales en cada tubo
    for (let i = 0; i < 3; i++) {
        createBubble(tube);
    }
});

// Aplicamos la animación de distorsión al body
document.body.style.animation = 'distort 10s infinite alternate';