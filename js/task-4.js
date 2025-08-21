const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const email = form.elements.email;
  const password = form.elements.password;
  const emailTrim = email.value.trim();
  const passwordTrim = password.value.trim();
  if (emailTrim === '' || passwordTrim === '') {
    alert('All form fields must be filled in');
    return;
  }
  const data = {
    email: emailTrim,
    password: passwordTrim,
  };
  console.log(data);
  form.reset();
});
