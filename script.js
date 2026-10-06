const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav nav');
menuBtn?.addEventListener('click', () => {
  const open = nav.style.display === 'flex';
  nav.style.display = open ? 'none' : 'flex';
  nav.style.flexDirection = 'column';
  nav.style.position = 'absolute';
  nav.style.top = '70px';
  nav.style.left = '0';
  nav.style.right = '0';
  nav.style.padding = '20px 8%';
  nav.style.background = '#0c0d1d';
});
document.querySelectorAll('.nav nav a').forEach(link => {
  link.addEventListener('click', () => { if (window.innerWidth <= 900) nav.style.display = 'none'; });
});
