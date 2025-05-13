document.querySelector('.hero button').addEventListener('click', () => {
  document.querySelector('.about').scrollIntoView({ behavior: 'smooth' });
});

document.querySelectorAll('header nav ul li a').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const section = link.getAttribute('href');
    document.querySelector(section).scrollIntoView({ behavior: 'smooth' });
  });
});

const heroSection = document.querySelector('.hero');
heroSection.style.opacity = 0;
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  if (scrollPosition < 500) {
    heroSection.style.opacity = 1 - (scrollPosition / 500);
  }
});

document.querySelector('.hero').addEventListener('click', () => {
  alert('Welcome to ABES EC!');
});
