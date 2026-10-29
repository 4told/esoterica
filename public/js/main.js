
(() => {
    // Не запускаем эффект повторно
    if (document.getElementById('fire-cursor')) return;

    // На устройствах с сенсорным экраном эффект не нужен
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const canvas = document.createElement('canvas');
    canvas.id = 'fire-cursor';

    Object.assign(canvas.style, {
        position: 'fixed',
        inset: '0',
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: '9999'
    });

    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    if (!ctx) {
        canvas.remove();
        return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    const particles = [];
    const maxParticles = 300;

    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 5 + 2;
            this.speedX = (Math.random() - 0.5) * 1.5;
            this.speedY = -(Math.random() * 2.5 + 1);
            this.maxLife = Math.random() * 35 + 25;
            this.life = this.maxLife;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.speedX *= 0.98;
            this.speedY += 0.015;
            this.size *= 0.97;
            this.life--;
        }

        draw() {
            const alpha = this.life / this.maxLife;

            const gradient = ctx.createRadialGradient(
                this.x, this.y, 0,
                this.x, this.y, this.size * 3
            );

            gradient.addColorStop(0, `rgba(255, 245, 180, ${alpha})`);
            gradient.addColorStop(0.25, `rgba(255, 180, 50, ${alpha})`);
            gradient.addColorStop(0.65, `rgba(255, 70, 10, ${alpha * 0.7})`);
            gradient.addColorStop(1, 'rgba(120, 0, 0, 0)');

            ctx.beginPath();
            ctx.fillStyle = gradient;
            ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function resizeCanvas() {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);

        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;

        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    window.addEventListener('mousemove', (event) => {
        mouseX = event.clientX;
        mouseY = event.clientY;

        for (let i = 0; i < 3; i++) {
            if (particles.length < maxParticles) {
                particles.push(new Particle(mouseX, mouseY));
            }
        }
    });

    function animate() {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

        const glow = ctx.createRadialGradient(
            mouseX, mouseY, 0,
            mouseX, mouseY, 28
        );

        glow.addColorStop(0, 'rgba(255, 220, 100, 0.9)');
        glow.addColorStop(0.25, 'rgba(255, 120, 20, 0.5)');
        glow.addColorStop(0.6, 'rgba(255, 40, 0, 0.18)');
        glow.addColorStop(1, 'rgba(255, 0, 0, 0)');

        ctx.beginPath();
        ctx.fillStyle = glow;
        ctx.arc(mouseX, mouseY, 28, 0, Math.PI * 2);
        ctx.fill();

        for (let i = particles.length - 1; i >= 0; i--) {
            const particle = particles[i];

            particle.update();
            particle.draw();

            if (particle.life <= 0 || particle.size < 0.3) {
                particles.splice(i, 1);
            }
        }

        requestAnimationFrame(animate);
    }

    animate();
})();
