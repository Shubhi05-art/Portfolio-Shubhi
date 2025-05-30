// Drawer Navigation
const navToggle = document.querySelector('.nav-toggle');
const drawerNav = document.querySelector('.drawer-nav');
const drawerBackdrop = document.querySelector('.drawer-backdrop');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-item');

// Drawer open/close logic
navToggle.addEventListener('click', () => {
    drawerNav.classList.toggle('open');
});
drawerBackdrop.addEventListener('click', () => {
    drawerNav.classList.remove('open');
});
navItems.forEach(link => {
    link.addEventListener('click', e => {
        navItems.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        if (window.innerWidth <= 900) drawerNav.classList.remove('open');
    });
});

// Animated fade scroll to Projects
const viewProjectsBtn = document.getElementById('view-projects');
if (viewProjectsBtn) {
    viewProjectsBtn.addEventListener('click', function (e) {
        e.preventDefault();
        const aboutSection = document.querySelector('.about-section');
        aboutSection.style.transition = 'opacity 0.5s';
        aboutSection.style.opacity = 0;
        setTimeout(() => {
            document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => {
                aboutSection.style.opacity = 1;
            }, 500);
        }, 500);
    });
}
const contactMeBtn = document.getElementById('view-contacts');
if (contactMeBtn) {
    contactMeBtn.addEventListener('click', function (e) {
        e.preventDefault();
        const introSection = document.querySelector('.intro-section');
        introSection.style.transition = 'opacity 0.5s';
        introSection.style.opacity = 0;
        setTimeout(() => {
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => {
                introSection.style.opacity = 1;
            }, 500);
        }, 500);
    });
}

// const track = document.getElementById('projects-track');
// let currentIndex = 0;
// const totalProjects = track.children.length;

// document.getElementById('scroll-left').addEventListener('click', () => {
//     if (currentIndex > 0) {
//         currentIndex--;
//         updateScroll();
//     }
// });

// document.getElementById('scroll-right').addEventListener('click', () => {
//     if (currentIndex < totalProjects - 1) {
//         currentIndex++;
//         updateScroll();
//     }
// });

// function updateScroll() {
//     track.style.transform = `translateX(-${currentIndex * 100}vw)`;
// }

