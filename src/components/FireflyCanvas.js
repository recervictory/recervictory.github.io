import React, { useEffect, useRef } from 'react';

/**
 * FireflyCanvas
 * Renders animated bioluminescent particles on a <canvas> element.
 * Props:
 *   count   — number of particles (default 55)
 *   color   — base hex color (default '#00E5FF')
 *   accentColor — secondary particle color (default '#D4A843')
 */
export default function FireflyCanvas({
    count = 55,
    color = '#00E5FF',
    accentColor = '#D4A843',
}) {
    const canvasRef = useRef(null);
    const animRef   = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        let W = canvas.offsetWidth;
        let H = canvas.offsetHeight;
        canvas.width  = W;
        canvas.height = H;

        /* ── Particle factory ── */
        function makeParticle(i) {
            const isAccent = i % 5 === 0;
            return {
                x:    Math.random() * W,
                y:    Math.random() * H,
                r:    Math.random() * 2.2 + 0.8,
                vx:   (Math.random() - 0.5) * 0.35,
                vy:   (Math.random() - 0.5) * 0.35,
                alpha:Math.random() * 0.6 + 0.3,
                dAlpha:(Math.random() * 0.006 + 0.002) * (Math.random() < 0.5 ? 1 : -1),
                color: isAccent ? accentColor : color,
                glowRadius: Math.random() * 14 + 8,
            };
        }

        const particles = Array.from({ length: count }, (_, i) => makeParticle(i));

        /* ── Draw frame ── */
        function draw() {
            ctx.clearRect(0, 0, W, H);

            particles.forEach(p => {
                /* Pulsate alpha */
                p.alpha += p.dAlpha;
                if (p.alpha > 0.9 || p.alpha < 0.1) p.dAlpha *= -1;

                /* Drift */
                p.x += p.vx;
                p.y += p.vy;

                /* Wrap */
                if (p.x < -10) p.x = W + 10;
                if (p.x > W + 10) p.x = -10;
                if (p.y < -10) p.y = H + 10;
                if (p.y > H + 10) p.y = -10;

                /* Glow */
                const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.glowRadius);
                grd.addColorStop(0, p.color + Math.round(p.alpha * 255).toString(16).padStart(2, '0'));
                grd.addColorStop(1, p.color + '00');

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.glowRadius, 0, Math.PI * 2);
                ctx.fillStyle = grd;
                ctx.fill();

                /* Core dot */
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.globalAlpha = p.alpha;
                ctx.fill();
                ctx.globalAlpha = 1;
            });

            animRef.current = requestAnimationFrame(draw);
        }

        draw();

        /* ── Resize handler ── */
        function handleResize() {
            W = canvas.offsetWidth;
            H = canvas.offsetHeight;
            canvas.width  = W;
            canvas.height = H;
        }
        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animRef.current);
            window.removeEventListener('resize', handleResize);
        };
    }, [count, color, accentColor]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 1,
            }}
            aria-hidden="true"
        />
    );
}
