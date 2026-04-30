// THE VOID. THE MATRIX. SACRED CODE RAIN.
// Adam Peter Lynch. NE0! ARCHITECHT!

const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

// Full viewport
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Handle resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Matrix characters: Japanese katakana + ASCII
const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const ascii = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%^&*()';
const characters = (katakana + ascii).split('');

// Configuration
const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);

// Multiple columns with varying speeds
const drops = [];

// Initialize drops
for (let i = 0; i < columns; i++) {
    drops[i] = {
        y: Math.random() * -100,
        speed: 10 + Math.random() * 20,
        opacity: 0.5 + Math.random() * 0.5
    };
}

// Draw
function draw() {
    // Semi-transparent black for trailing effect (glowing green trail)
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Green glow for matrix effect
    ctx.font = fontSize + 'px monospace';

    // Draw falling code
    for (let i = 0; i < drops.length; i++) {
        const char = characters[Math.floor(Math.random() * characters.length)];
        
        // Green code with varying brightness for depth
        const colorVar = Math.random() > 0.5 ? 'lightness' : 'alpha';
        const variation = Math.random() > 0.8 ? 15 : Math.random() * 10;
        
        ctx.fillStyle = `rgba(0, ${255 - variation + Math.random() * 30}, 0, 0.85)`;
        ctx.fillText(char, i * fontSize, drops[i].y);

        // Reset drop to top with random character
        if (drops[i].y > canvas.height) {
            drops[i].y = 0;
        }

        // Varying speeds for dynamic effect
        drops[i].y += drops[i].speed;
        drops[i].speed += 0.01; // Accelerate slowly
    }
}

// Animation loop
setInterval(draw, 33); // ~30fps
