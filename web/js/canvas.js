const canvas = document.getElementById('backgroundCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

let gradientShift = 0;

function drawFlowingBackground() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, `hsl(${(300 + gradientShift) % 360}, 100%, 80%)`); // 粉色
    gradient.addColorStop(1, `hsl(${(45 + gradientShift) % 360}, 100%, 70%)`); // 金色

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    gradientShift += 0.5;
    requestAnimationFrame(drawFlowingBackground);
}

drawFlowingBackground();
