const counters = document.querySelectorAll('.counter');
const speed = 50;

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    let count = +counter.innerText;
    const increment = Math.ceil(target / speed);

    if (count < target) {
      counter.innerText = count + increment;
      setTimeout(updateCount, 30);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});

document.querySelectorAll('.read-more-btn').forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.service-card');
    const fullText = card.querySelector('.full-text');
    const isVisible = fullText.style.display === 'block';
    fullText.style.display = isVisible ? 'none' : 'block';
    button.textContent = isVisible ? 'Read More' : 'Read Less';
  });
});
