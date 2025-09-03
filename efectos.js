
document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');

    // Custom Cursor
    const customCursor = document.getElementById('custom-cursor');
    
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    const speed = 0.1;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        const distX = mouseX - cursorX;
        const distY = mouseY - cursorY;

        cursorX += distX * speed;
        cursorY += distY * speed;

        customCursor.style.left = cursorX + 'px';
        customCursor.style.top = cursorY + 'px';

        requestAnimationFrame(animateCursor);
    }

    animateCursor();

    // Rainbow Bubble Effect
    let hue = 0;
    document.addEventListener('mousemove', (e) => {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        body.appendChild(bubble);

        bubble.style.left = e.clientX + 'px';
        bubble.style.top = e.clientY + 'px';
        
        hue = (hue + 5) % 360;
        bubble.style.backgroundColor = `hsl(${hue}, 90%, 50%)`;

        setTimeout(() => {
            bubble.remove();
        }, 1000);
    });
});
