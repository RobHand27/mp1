const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = [...document.querySelectorAll('main section[id]')];

function updateNavbarState() {
  if (!navbar) return;

  navbar.classList.toggle('scrolled', window.scrollY > 50);

  let activeId = sections[0] ? sections[0].id : 'home';
  const offset = navbar.offsetHeight + 24;

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= offset && rect.bottom > offset) {
      activeId = section.id;
    }
  });

  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
    activeId = sections[sections.length - 1] ? sections[sections.length - 1].id : 'home';
  }

  navLinks.forEach((link) => {
    const isActive = link.getAttribute('href') === '#' + activeId;
    link.classList.toggle('active', isActive);
  });
}

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));

    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

window.addEventListener('scroll', updateNavbarState);
window.addEventListener('load', updateNavbarState);

const track = document.querySelector('.carousel-track');
const slides = [...document.querySelectorAll('.slide')];
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;

function updateCarousel() {
  if (!track || slides.length === 0) return;

  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = 'translateX(-' + currentIndex * slideWidth + 'px)';
}

if (prevButton && nextButton) {
  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  });
}

window.addEventListener('resize', updateCarousel);
window.addEventListener('load', updateCarousel);

const modal = document.querySelector('.modal');
const modalTriggers = document.querySelectorAll('.modal-trigger');
const closeButton = document.querySelector('.close-button');
const modalBackdrop = document.querySelector('.modal-backdrop');

function openModal() {
  if (!modal) return;

  modal.classList.add('visible');
  modal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  if (!modal) return;

  modal.classList.remove('visible');
  modal.setAttribute('aria-hidden', 'true');
}

modalTriggers.forEach((trigger) => {
  trigger.addEventListener('click', openModal);
});

if (closeButton) {
  closeButton.addEventListener('click', closeModal);
}

if (modalBackdrop) {
  modalBackdrop.addEventListener('click', closeModal);
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal && modal.classList.contains('visible')) {
    closeModal();
  }
});
