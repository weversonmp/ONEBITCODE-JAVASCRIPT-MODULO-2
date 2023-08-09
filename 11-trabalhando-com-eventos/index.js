function register(e) {
  console.log(e);
  const sectionElement = e.currentTarget.parentNode;
  const username = sectionElement.children.username.value;
  const password = sectionElement.children.password.value;
  const passwordConfirmation = sectionElement.children.passwordConfirmation.value;
  console.log(username, password, passwordConfirmation);

  if (password == passwordConfirmation) {
    alert('Usuário: ' + username + ' cadastrado!');
  } else {
    alert('As senhas não conferem!');
  }
}

const button = document.getElementById('register-button');

button.addEventListener('click', register);

function removeListener() {
  button.removeEventListener('click', register);
  console.log(alert('evento removido'));
}

button.addEventListener("mouseover", (e) => {
  console.log(e.currentTarget)
});