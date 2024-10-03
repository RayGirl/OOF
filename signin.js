const form = document.querySelector('#sign-in-form');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const emailError = document.querySelector('#email-error');
const passwordError = document.querySelector('#password-error');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (email === '') {
    emailError.textContent = 'Please enter an email';
    emailInput.classList.add('is-invalid');
  } else {
    emailError.textContent = '';
    emailInput.classList.remove('is-invalid');
  }

  if (password === '') {
    passwordError.textContent = 'Please enter a password';
    passwordInput.classList.add('is-invalid');
  } else {
    passwordError.textContent = '';
    passwordInput.classList.remove('is-invalid');
  }

  if (email !== '' && password !== '') {
    // Submit the form
    form.submit();
  }
});