import { useEffect, useRef } from 'react';

export default function ParticlesBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Auto resize
    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();
    window.addEventListener('resize', setSize);

    // Track dark mode for particle colors
    let isDark = document.documentElement.classList.contains('dark');
    const onThemeChange = () => {
      isDark = document.documentElement.classList.contains('dark');
    };
    window.addEventListener('themeChanged', onThemeChange);

    // Track mouse
    const mouse = { x: null, y: null };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.7; 
        this.vy = (Math.random() - 0.5) * 0.7;
        this.size = Math.random() * 2 + 1;
      }
      
      update() {
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        this.x += this.vx;
        this.y += this.vy;
      }
      
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? 'rgba(56, 189, 248, 0.4)' : 'rgba(3, 105, 161, 0.4)'; 
        ctx.fill();
      }
    }

    const particleCount = Math.min(window.innerWidth / 12, 100); 
    const particles = Array.from({ length: particleCount }, () => new Particle());

    let animationFrameId;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 130) {
            ctx.beginPath();
            ctx.strokeStyle = isDark ? `rgba(45, 212, 191, ${0.15 - dist/800})` : `rgba(13, 148, 136, ${0.15 - dist/800})`; 
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
        
        if (mouse.x != null && mouse.y != null) {
          const dx = particles[i].x - mouse.x;
          const dy = particles[i].y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            ctx.beginPath();
            ctx.strokeStyle = isDark ? `rgba(56, 189, 248, ${0.4 - dist/600})` : `rgba(3, 105, 161, ${0.4 - dist/600})`; 
            ctx.lineWidth = 1.2;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();

    return () => {
      window.removeEventListener('resize', setSize);
      window.removeEventListener('themeChanged', onThemeChange);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div className="fixed inset-0 w-full h-full z-0 overflow-hidden pointer-events-none opacity-60">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full blur-[120px] bg-accentTeal/10 dark:bg-accentTeal/5 animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full blur-[140px] bg-accentNavy/10 dark:bg-accentNavy/5 animate-pulse" style={{ animationDuration: '10s' }} />
      </div>
      <canvas 
        ref={canvasRef} 
        className="fixed inset-0 w-full h-full z-1 overflow-hidden pointer-events-none opacity-80"
      />
    </>
  );
}
