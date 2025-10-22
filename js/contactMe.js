// Update current time in milliseconds
function updateTime() {
  const timeElement = document.getElementById('currentTime');
  if (timeElement) {
    timeElement.textContent = Date.now();
  }
}

updateTime();
setInterval(updateTime, 1000);

// Page Navigation
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');

function showPage(pageName) {
  pages.forEach((page) => page.classList.remove('active'));
  navLinks.forEach((link) => link.classList.remove('active'));

  const targetPage = document.getElementById(`${pageName}-page`);
  const targetLink = document.querySelector(`[data-page="${pageName}"]`);

  if (targetPage) targetPage.classList.add('active');
  if (targetLink) targetLink.classList.add('active');
}

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const pageName = link.getAttribute('data-page');
    showPage(pageName);
    window.location.hash = pageName;
  });
});

// Handle initial page load with hash
window.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash.substring(1);
  if (hash && ['profile', 'about', 'contact'].includes(hash)) {
    showPage(hash);
  }
});

// Contact Form Validation
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('contactName');
const emailInput = document.getElementById('contactEmail');
const subjectInput = document.getElementById('contactSubject');
const messageInput = document.getElementById('contactMessage');
const successMessage = document.getElementById('successMessage');

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function showError(input, errorElement, message) {
  input.classList.add('error');
  errorElement.textContent = message;
  errorElement.classList.add('show');
}

function clearError(input, errorElement) {
  input.classList.remove('error');
  errorElement.textContent = '';
  errorElement.classList.remove('show');
}

function validateForm() {
  let isValid = true;

  // Clear previous success message
  successMessage.classList.remove('show');

  // Validate name
  if (nameInput.value.trim() === '') {
    showError(
      nameInput,
      document.getElementById('nameError'),
      'Full name is required'
    );
    isValid = false;
  } else {
    clearError(nameInput, document.getElementById('nameError'));
  }

  // Validate email
  if (emailInput.value.trim() === '') {
    showError(
      emailInput,
      document.getElementById('emailError'),
      'Email address is required'
    );
    isValid = false;
  } else if (!validateEmail(emailInput.value.trim())) {
    showError(
      emailInput,
      document.getElementById('emailError'),
      'Please enter a valid email address (e.g., name@example.com)'
    );
    isValid = false;
  } else {
    clearError(emailInput, document.getElementById('emailError'));
  }

  // Validate subject
  if (subjectInput.value.trim() === '') {
    showError(
      subjectInput,
      document.getElementById('subjectError'),
      'Subject is required'
    );
    isValid = false;
  } else {
    clearError(subjectInput, document.getElementById('subjectError'));
  }

  // Validate message
  if (messageInput.value.trim() === '') {
    showError(
      messageInput,
      document.getElementById('messageError'),
      'Message is required'
    );
    isValid = false;
  } else if (messageInput.value.trim().length < 10) {
    showError(
      messageInput,
      document.getElementById('messageError'),
      'Message must be at least 10 characters long'
    );
    isValid = false;
  } else {
    clearError(messageInput, document.getElementById('messageError'));
  }

  return isValid;
}

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (validateForm()) {
    // Show success message
    successMessage.classList.add('show');

    // Reset form
    contactForm.reset();

    // Scroll to success message
    successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
});

// Real-time validation on blur
nameInput.addEventListener('blur', () => {
  if (nameInput.value.trim() === '') {
    showError(
      nameInput,
      document.getElementById('nameError'),
      'Full name is required'
    );
  } else {
    clearError(nameInput, document.getElementById('nameError'));
  }
});

emailInput.addEventListener('blur', () => {
  if (emailInput.value.trim() === '') {
    showError(
      emailInput,
      document.getElementById('emailError'),
      'Email address is required'
    );
  } else if (!validateEmail(emailInput.value.trim())) {
    showError(
      emailInput,
      document.getElementById('emailError'),
      'Please enter a valid email address (e.g., name@example.com)'
    );
  } else {
    clearError(emailInput, document.getElementById('emailError'));
  }
});

subjectInput.addEventListener('blur', () => {
  if (subjectInput.value.trim() === '') {
    showError(
      subjectInput,
      document.getElementById('subjectError'),
      'Subject is required'
    );
  } else {
    clearError(subjectInput, document.getElementById('subjectError'));
  }
});

messageInput.addEventListener('blur', () => {
  if (messageInput.value.trim() === '') {
    showError(
      messageInput,
      document.getElementById('messageError'),
      'Message is required'
    );
  } else if (messageInput.value.trim().length < 10) {
    showError(
      messageInput,
      document.getElementById('messageError'),
      'Message must be at least 10 characters long'
    );
  } else {
    clearError(messageInput, document.getElementById('messageError'));
  }
});
