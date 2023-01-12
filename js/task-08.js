const form = document.querySelector('form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const {
    elements: { email, password },
  } = e.currentTarget;

  if (
    e.currentTarget.elements.email.value.length < 1 ||
    e.currentTarget.elements.password.value.length < 1
  ) {
    alert('Please, fill the all fields out');
  }
  const formData = {
    email: email.value,
    password: password.value,
  };
  console.log(formData);
  event.currentTarget.reset();
}
