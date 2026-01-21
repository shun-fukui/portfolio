// DOM Elements
const cursorDot = document.getElementById('cursor-dot');
const cursorRing = document.getElementById('cursor-ring');
const loader = document.getElementById('loader');

// Loader - Sequential Animation
window.addEventListener('load', () => {
    const images = [
        document.getElementById('loader-img-1'),
        document.getElementById('loader-img-2'),
        document.getElementById('loader-img-3'),
        document.getElementById('loader-img-4')
    ];

    // Sequence: 0.5s interval
    images.forEach((img, index) => {
        setTimeout(() => {
            img.classList.remove('scale-0', 'opacity-0');
            img.classList.add('scale-100', 'opacity-100');
        }, (index + 1) * 500); // 500ms, 1000ms, 1500ms, 2000ms
    });

    // Fade out after all images appear (2.5s)
    setTimeout(() => {
        loader.classList.add('loader-hidden');
    }, 2500);
});

// Cursor Movement
document.addEventListener('mousemove', (e) => {
    // Direct follow for dot
    cursorDot.style.left = `${e.clientX}px`;
    cursorDot.style.top = `${e.clientY}px`;

    // Follow for ring
    cursorRing.style.left = `${e.clientX}px`;
    cursorRing.style.top = `${e.clientY}px`;
});

// Cursor Hover Effects
const hoverTriggers = document.querySelectorAll('.hover-trigger, a, button, .group');

hoverTriggers.forEach(trigger => {
    trigger.addEventListener('mouseenter', () => {
        cursorDot.classList.add('hovered');
        cursorRing.classList.add('hovered');
    });
    trigger.addEventListener('mouseleave', () => {
        cursorDot.classList.remove('hovered');
        cursorRing.classList.remove('hovered');
    });
});
