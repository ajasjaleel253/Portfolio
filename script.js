/* =========================================
   SCROLL PROGRESS BAR
========================================= */
window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
});

/* =========================================
   NAVBAR: SCROLL STYLE + HAMBURGER MENU
========================================= */
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when a nav link is clicked
navItems.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

/* =========================================
   CURSOR GLOW (DESKTOP ONLY)
========================================= */
if (window.innerWidth > 768) {
    const glow = document.createElement('div');

    Object.assign(glow.style, {
        position: 'fixed',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        pointerEvents: 'none',
        background: 'radial-gradient(circle, rgba(56,189,248,0.05), transparent 60%)',
        transform: 'translate(-50%, -50%)',
        zIndex: '0',
        transition: 'left 0.1s ease, top 0.1s ease'
    });

    document.body.appendChild(glow);

    document.addEventListener('mousemove', (e) => {
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
    });
}
