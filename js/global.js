document.addEventListener('DOMContentLoaded', function () {
    AOS.init();
});

const elem = document.querySelector('body');
const scrolled = () => {
    const threshold = document.documentElement.scrollTop > 10;
    elem.classList.toggle('scrolled', threshold);
};
window.addEventListener('scroll', scrolled);
