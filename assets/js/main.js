document.addEventListener('DOMContentLoaded', () => {
  // 1. Contact Form Handling
  const contactForm = document.getElementById('contactForm');
  const responseEl = document.getElementById('formResponse');

  if (contactForm && responseEl) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(contactForm);

      try {
        const res = await fetch('process-contact.php', {
          method: 'POST',
          body: formData
        });
        const data = await res.json();
        
        responseEl.innerText = data.message;
        if (data.status === 'success') {
          contactForm.reset();
          responseEl.className = "mt-4 text-center text-sm text-emerald-400 font-medium";
        } else {
          responseEl.className = "mt-4 text-center text-sm text-rose-400 font-medium";
        }
      } catch (err) {
  responseEl.innerText = "Something went wrong. Please try again later.";
  responseEl.className = "mt-4 text-center text-sm text-rose-400 font-medium";
}
    });
  }

  // 2. High-Density Interactive Space Sparkles Engine
  const canvas = document.getElementById('bgCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particlesArray = [];

    // Track mouse for interactive sparkle reactions
    const mouse = {
      x: null,
      y: null,
      radius: 120
    };

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    window.addEventListener('mouseleave', () => {
      mouse.x = null;
      mouse.y = null;
    });

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Star {
      constructor() {
        this.reset(true);
      }
      reset(isInitial = false) {
        this.x = Math.random() * canvas.width;
        this.y = isInitial ? Math.random() * canvas.height : -10;
        
        // Fine sizes: Mostly delicate dust stars, few crystal flare stars
        const rand = Math.random();
        if (rand > 0.94) {
          this.size = Math.random() * 1.5 + 1.5; // Flare star
          this.isFlare = true;
        } else if (rand > 0.65) {
          this.size = Math.random() * 1.0 + 0.8; // Mid star
          this.isFlare = false;
        } else {
          this.size = Math.random() * 0.6 + 0.3; // Micro dust
          this.isFlare = false;
        }

        this.baseX = this.x;
        this.baseY = this.y;
        this.speedX = (Math.random() - 0.5) * 0.2;
        this.speedY = Math.random() * 0.4 + 0.2; // Smooth top to bottom flow

        // Twinkle effect parameters
        this.opacity = Math.random() * 0.7 + 0.3;
        this.twinkleSpeed = Math.random() * 0.02 + 0.008;
        this.twinkleDirection = Math.random() > 0.5 ? 1 : -1;
      }

      update() {
        // Normal Space Movement
        this.x += this.speedX;
        this.y += this.speedY;

        // Twinkle Opacity Pulse
        this.opacity += this.twinkleSpeed * this.twinkleDirection;
        if (this.opacity >= 0.95) {
          this.twinkleDirection = -1;
        } else if (this.opacity <= 0.2) {
          this.twinkleDirection = 1;
        }

        // Mouse Interaction
        if (mouse.x !== null && mouse.y !== null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            let force = (mouse.radius - distance) / mouse.radius;
            this.x -= (dx / distance) * force * 3;
            this.y -= (dy / distance) * force * 3;
            this.opacity = Math.min(1, this.opacity + 0.3); // Brightens on hover
          }
        }

        // Reset off-screen stars
        if (this.y > canvas.height + 10 || this.x < -10 || this.x > canvas.width + 10) {
          this.reset(false);
        }
      }

      draw() {
        ctx.save();
        ctx.beginPath();
        
        // Pure White Core & Cyan/Neon Glow
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.shadowBlur = this.isFlare ? 12 : 5;
        ctx.shadowColor = 'rgba(0, 240, 255, 0.9)';

        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        // 4-Point Starburst Flare for prominent stars
        if (this.isFlare && this.opacity > 0.5) {
          ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity * 0.7})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          // Horizontal line
          ctx.moveTo(this.x - this.size * 3, this.y);
          ctx.lineTo(this.x + this.size * 3, this.y);
          // Vertical line
          ctx.moveTo(this.x, this.y - this.size * 3);
          ctx.lineTo(this.x, this.y + this.size * 3);
          ctx.stroke();
        }

        ctx.restore();
      }
    }

    function init() {
      particlesArray = [];
      // High-density count for full-screen immersive space look
      const count = Math.floor((canvas.width * canvas.height) / 3200);
      for (let i = 0; i < count; i++) {
        particlesArray.push(new Star());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach(star => {
        star.update();
        star.draw();
      });
      requestAnimationFrame(animate);
    }

    init();
    animate();
  }
});