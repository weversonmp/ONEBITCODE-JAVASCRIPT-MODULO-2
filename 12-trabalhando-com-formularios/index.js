const form = document.getElementById('orderForm');

form.addEventListener('submit', (ev) => {
  ev.preventDefault();
  
  const name = document.querySelector('input[name="name"]').value
  const address = document.querySelector('input[name="address"]').value
  const bradType = document.querySelector('select[name="breadType"]').value
  const main = document.querySelector('input[name="main"]').value
  const observations = document.querySelector('textarea[name="observations"]').value

  let salad = '';
  document.querySelectorAll('input[name="salad"]:checked').forEach((item) => {
    salad += ' - ' + item.value + '\n';
  })

  console.log({
    name,
    address,
    bradType,
    main,
    salad,
    observations,
  })

});
