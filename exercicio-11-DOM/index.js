const addPlayerButton = document.querySelector('#escalarButton');

addPlayerButton.addEventListener('click', () => {
  const positionValue = document.querySelector('#position').value;
  const nameValue = document.querySelector('#name').value;
  const numberValue = document.querySelector('#number').value;

  const teamListUl = document.querySelector('#teamList');
  const teamListLi = document.createElement('li');
  teamListLi.id = 'player-' + numberValue;
  teamListLi.innerText = `${nameValue}: ${positionValue} '${numberValue}'`;
  teamListUl.append(teamListLi);

  document.querySelector('#position').value = '';
  document.querySelector('#name').value = '';
  document.querySelector('#number').value = '';
});

function removePlayer() {
  const number = document.querySelector('#numberToRemove').value;
  const playerToRemove = document.querySelector('#player-' + number);

  const confirmation = confirm('Remover o jogador: ' + playerToRemove.innerText + '?');

  if (confirmation) {
    playerToRemove.remove();
    document.querySelector('#numberToRemove').value = '';
  }
}
