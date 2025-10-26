// Custom Cursor
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
});

// Scroll Reveal for Purpose Frames
const frames = document.querySelectorAll('.purpose .frame');
window.addEventListener('scroll', () => {
    frames.forEach(frame => {
        const elementTop = frame.getBoundingClientRect().top;
        if (elementTop < window.innerHeight * 0.8) {
            frame.classList.add('active');
        }
    });
});
