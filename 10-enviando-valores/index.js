function register(elements) {
  const username = elements.children.username.value;
  const password = elements.children.password.value;
  const passwordConfirmation = elements.children.passwordConfirmation.value;
  console.log(username, password, passwordConfirmation);

  if (password == passwordConfirmation) {
    alert('Usuário: ' + username + ' confirmado');
  } else {
    alert('As senhas não conferem');
  }
}
