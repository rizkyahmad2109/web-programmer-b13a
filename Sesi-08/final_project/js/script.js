// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navBar.classList.toggle('active');
};

// Scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      // active navbar links
      navLinks.forEach((links) => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });

      // active section for animation on scroll
      sec.classList.add('show-animate');
    } else {
      sec.classList.remove('show-animate');
    }
  });

  // Stiky header
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);

  // menghapus toggle icon dan navbar ketika klik navbar links (scroll)
  menuIcon.classList.remove('bx-x');
  navBar.classList.remove('active');

  // animasi footer saat on scroll
  let footer = document.querySelector('footer');

  footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
};
