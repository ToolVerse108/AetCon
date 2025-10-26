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
// ===== Legends Modal =====
const symbols = document.querySelectorAll('.symbol');
const modal = document.getElementById('legendModal');
const modalText = document.getElementById('modalText');
const modalClose = document.querySelector('.modal .close');

symbols.forEach(sym => {
    sym.addEventListener('click', () => {
        modalText.textContent = sym.dataset.principle;
        modal.style.display = 'block';
        // Optional: play vault chime
    });
});

modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
});

// ===== Ascension Scroll Unlock =====
const rings = document.querySelectorAll('.ring');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const vh = window.innerHeight;

    rings.forEach((ring, index) => {
        const triggerPoint = vh * (index + 2) - 150; // unlock as user scrolls
        if (scrollY > triggerPoint) {
            ring.classList.add('unlocked');
            // Optional: trigger gold dust particles & hum
        }
    });
});
// Initialize Lottie for gold particle effect
const particleContainer = document.getElementById('goldParticles');
let lottieInstance = null;

function playGoldParticles() {
    if (!lottieInstance) {
        lottieInstance = lottie.loadAnimation({
            container: particleContainer,
            renderer: 'svg',
            loop: false,
            autoplay: true,
            path: 'assets/gold-particle.json' // JSON Lottie file
        });
    } else {
        lottieInstance.goToAndPlay(0, true);
    }
}
const vaultChime = document.getElementById('vaultChime');

rings.forEach((ring, index) => {
    const triggerPoint = vh * (index + 2) - 150;
    if (scrollY > triggerPoint && !ring.classList.contains('unlocked')) {
        ring.classList.add('unlocked');
        playGoldParticles(); // Gold dust animation
        vaultChime.currentTime = 0;
        vaultChime.play();   // Play vault chime
    }
});
const vipSection = document.getElementById('vip');
const vipText = vipSection.querySelector('.vip-text');

vipSection.addEventListener('click', () => {
    vipText.style.opacity = 1;
    vipText.style.transform = 'translateY(0)';
    // Optional: secret hum + particle effect
    playGoldParticles();
});
const ambientAudio = document.getElementById('ambientAudio');
ambientAudio.volume = 0.3; // subtle background
ambientAudio.play().catch(() => {
    // Autoplay restrictions: start on first user interaction
    document.body.addEventListener('click', () => ambientAudio.play());
});

