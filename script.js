// ================= DOM READY =================
document.addEventListener("DOMContentLoaded", () => {

  /* ================= CONTACT FORM ================= */
  const contactForm = document.querySelector(".contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      alert("Thank you for your message! We will get back to you soon.");
      contactForm.reset();
    });
  }

  /* ================= PARTICLE ANIMATION ================= */
  const canvas = document.getElementById("particle-canvas");
  const heroSection = document.querySelector(".hero");

  if (!canvas || !heroSection) return;

  const ctx = canvas.getContext("2d");

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = heroSection.offsetHeight;
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  const particles = [];
  const PARTICLE_COUNT = 60;

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 2.5 + 1,
      color: Math.random() > 0.5 ? "#0a3cff" : "#6cc24a"
    });
  }

  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;

      // Bounce from edges
      if (p.x <= 0 || p.x >= canvas.width) p.vx *= -1;
      if (p.y <= 0 || p.y >= canvas.height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
    });

    requestAnimationFrame(drawParticles);
  }

  drawParticles();
});
