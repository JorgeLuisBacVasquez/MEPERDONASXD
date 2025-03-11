const phrases = [
    "Hasta mi código sabe que me equivoqué...",
    "Errar es humano, pero corregir es de programadores 💻",
    "¿Aceptarías un merge de nuestros corazones? 💞",
    "Mi amor por ti es como un loop infinito... 🔁",
    "Sin ti mi vida es como un programa sin funciones 😢"
];

const button = document.getElementById('forgiveButton');
const messageBox = document.getElementById('mainMessage');
const apiContent = document.getElementById('apiContent');
const heartsContainer = document.querySelector('.hearts');

// API de NASA APOD (Astronomy Picture of the Day)
fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response => response.json())
    .then(data => {
        apiContent.innerHTML = `
            <img src="${data.url}" alt="Imagen del espacio" style="max-width: 100%; border-radius: 10px; margin: 1rem 0;">
            <p>Hasta el universo es testigo de mi arrepentimiento 🌌</p>
        `;
    })
    .catch(() => {
        apiContent.innerHTML = `<p>Hasta las APIs están offline como mi corazón sin ti 💔</p>`;
    });

// Animación de corazones
function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '💖';
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
    heartsContainer.appendChild(heart);
    
    setTimeout(() => heart.remove(), 3000);
}

button.addEventListener('click', () => {
    messageBox.innerHTML = `
        ¡Eres mi compiladora favorita! 💖<br>
        <div style="margin-top: 1rem;">
            🎉 ¡Gracias por darme otra oportunidad! 🎉<br>
            ${phrases[Math.floor(Math.random() * phrases.length)]}
        </div>
    `;
    button.style.display = 'none';
    
    // Lluvia de corazones
    const heartInterval = setInterval(createHeart, 100);
    setTimeout(() => clearInterval(heartInterval), 3000);
});

// Mensaje inicial aleatorio
messageBox.textContent = phrases[Math.floor(Math.random() * phrases.length)];

// Efecto de tecleo
let index = 0;
const originalMessage = messageBox.textContent;
messageBox.textContent = '';
function typeWriter() {
    if (index < originalMessage.length) {
        messageBox.textContent += originalMessage.charAt(index);
        index++;
        setTimeout(typeWriter, 50);
    }
}
typeWriter();