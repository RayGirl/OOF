const form = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = usernameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const confirmPassword = confirmPasswordInput.value.trim();

  if (username === '') {
    alert('Please enter a username');
    return;
  }

  if (email === '') {
    alert('Please enter an email');
    return;
  }

  if (password === '') {
    alert('Please enter a password');
    return;
  }

  if (confirmPassword === '') {
    alert('Please confirm your password');
    return;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }

  // Submit the form
  form.submit();
});