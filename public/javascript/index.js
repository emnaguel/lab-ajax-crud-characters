const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    
    const characterId = document.querySelector('[name="character-id"]').value;
    console.log(characterId)
    charactersAPI.getOneRegister(characterId)
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const characterIdDelete = document.querySelector('[name="character-id-delete"]').value;
    charactersAPI.deleteOneRegister(characterIdDelete)
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    const inputId = event.target.children[0].children[1].value
    const inputName = event.target.children[1].children[1].value
    const inputOccupation = event.target.children[2].children[1].value
    const inputWeapon = event.target.children[3].children[1].value
    const inputCartoon = document.querySelector('[name="cartoon"]').checked;
    const characterInfo = {
      name: inputName,
      occupation: inputOccupation,
      weapon: inputWeapon,
      cartoon: inputCartoon
    }

    charactersAPI.updateOneRegister(inputId, characterInfo)
    event.target.children[5].style.backgroundColor = 'green'
    event.preventDefault()
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    const inputName = event.target.children[0].children[1].value
    const inputOccupation = event.target.children[1].children[1].value
    const inputWeapon = event.target.children[2].children[1].value
    const inputCartoon = document.querySelector('[name="cartoon"]').checked;

    
    const characterInfo = {
    name: inputName,
    occupation: inputOccupation,
    weapon: inputWeapon,
    cartoon: inputCartoon }

    charactersAPI.createOneRegister(characterInfo)
    document.querySelector("#send-data").style.backgroundColor = 'green'
    event.preventDefault()
  });
});
