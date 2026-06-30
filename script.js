// Sanftes Scrollen für Menüpunkte
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Navigation beim Scrollen abdunkeln
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');

  if (window.scrollY > 50) {
    nav.style.background = "rgba(0,0,0,0.95)";
  } else {
    nav.style.background = "rgba(0,0,0,0.70)";
  }
});
