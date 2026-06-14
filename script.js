// Mobile menu toggle
function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('open');
}

// Scroll reveal
document.addEventListener('DOMContentLoaded', () => {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => observer.observe(el));

  // Contact form (only exists on contact page)
  const submit = document.querySelector('.form-submit');
  if (submit) {
    submit.addEventListener('click', function () {
      const inputs = document.querySelectorAll('.form-input, .form-textarea');
      let allFilled = true;
      inputs.forEach(i => { if (!i.value.trim()) allFilled = false; });
      if (!allFilled) {
        this.textContent = 'Please fill all fields';
        this.style.background = '#888';
        setTimeout(() => { this.textContent = 'Send Message'; this.style.background = ''; }, 2000);
        return;
      }
      this.textContent = 'Message Sent ✓';
      this.style.background = '#2a7a2a';
      inputs.forEach(i => i.value = '');
      setTimeout(() => { this.textContent = 'Send Message'; this.style.background = ''; }, 3000);
    });
  }
});
