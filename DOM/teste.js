//const addUserText = document.getElementById("add-user");
//addUserText.innerText = "Adicionar Usuário";
const items = document.querySelector(".items");
//const button = document.querySelector(".btn");

//Remover item da lista
//items.remove();

//Remover o primeiro e o último item da lista
//items.firstElementChild.remove();
//items.lastElementChild.remove();

//Alterar o texto do segundo item da lista
//items.children[1].innerText = "novo texto";

//Alterar a cor de fundo do botão
//button.style.background = "red";

const submitButton = document.querySelector("#submit-button");
const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");

submitButton.addEventListener("click", function (e) {
  e.preventDefault();

  const name = nameInput.value;
  const email = emailInput.value;

  if (name === "" || email === "") {
    return alert("Preencha todos os campos");
  }

  myForm.style.background = "red";
  items.firstElementChild.textContent = name;
  items.children[1].textContent = email;
});
