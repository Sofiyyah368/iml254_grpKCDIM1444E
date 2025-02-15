let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navlist.classList.toggle('open');
};

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true,
});

sr.reveal ('.hero-text', {delay: 200, origin:'top'});
sr.reveal ('.hero2-text', {delay: 200, origin:'top'});
sr.reveal ('.hero-img', {delay: 450, origin:'top'});
sr.reveal ('.hero2-img', {delay: 450, origin:'top'});
sr.reveal ('.scroll-down', {delay: 500, origin:'right'});
sr.reveal ('.container', {delay: 450, origin:'top'});
sr.reveal ('.ctner', {delay: 450, origin:'top'});