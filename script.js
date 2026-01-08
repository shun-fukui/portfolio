// DOM Elements
const cursorDot = document.getElementById('cursor-dot');
const cursorRing = document.getElementById('cursor-ring');
const loader = document.getElementById('loader');

// Loader - 1.5s timeout then fade
window.addEventListener('load', () => {
    setTimeout(() => {
        loader.classList.add('loader-hidden');
    }, 1000);
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
