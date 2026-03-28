// Smooth scroll effect
document.querySelectorAll('a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    if (this.getAttribute('href').startsWith("#")) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href'))
        .scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Project Card Click Handler
const modal = document.getElementById('projectModal');
const modalTitle = document.querySelector('.modal-title');
const modalBrief = document.querySelector('.modal-brief');
const modalDescription = document.querySelector('.modal-description');
const modalClose = document.querySelector('.modal-close');

document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    const title = card.dataset.title;
    const brief = card.dataset.brief;
    const description = card.dataset.description;
    const color = card.dataset.color;
    const textColor = card.dataset.textColor;

    modalTitle.textContent = title;
    modalBrief.textContent = brief;
    modalDescription.textContent = description;

    // set modal background to exactly match the card color
    const modalContent = document.querySelector('.modal-content');
    modalContent.style.background = color;
    modalBrief.style.color = textColor || '';
    modalDescription.style.color = textColor || '';

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});

// Close modal on close button click
modalClose.addEventListener('click', () => {
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
});

// Close modal on background click
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('active')) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
});
