document.getElementById('contactForm').addEventListener('submit', function(event) {
  let isValid = true;

  // Validate Name
  const name = document.getElementById('name');
  const nameError = document.getElementById('nameError');
  if (name.value.trim() === '') {
      name.classList.add('error');
      nameError.textContent = 'Name is required';
      isValid = false;
  } else {
      name.classList.remove('error');
      nameError.textContent = '';
  }

  // Validate Email
  const email = document.getElementById('email');
  const emailError = document.getElementById('emailError');
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email.value.trim())) {
      email.classList.add('error');
      emailError.textContent = 'Please enter a valid email address';
      isValid = false;
  } else {
      email.classList.remove('error');
      emailError.textContent = '';
  }

  // Validate Message
  const message = document.getElementById('message');
  const messageError = document.getElementById('messageError');
  if (message.value.trim() === '') {
      message.classList.add('error');
      messageError.textContent = 'Message is required';
      isValid = false;
  } else {
      message.classList.remove('error');
      messageError.textContent = '';
  }

  if (!isValid) {
      event.preventDefault();
  }
});