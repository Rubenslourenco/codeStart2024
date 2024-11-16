const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const submitButton = document.querySelector("#submit-button");

const erroMessage = document.querySelector(".msg");
const items = document.querySelector(".items");

submitButton.addEventListener("click", function (e) {
  e.preventDefault();

  const nameValue = nameInput.value;
  const emailValue = emailInput.value;

  if (nameValue === "" || emailValue === "") {
    erroMessage.textContent = "Preencha todos os campos";
    erroMessage.classList = "error";

    setTimeout(() => {
      erroMessage.textContent = "";
      erroMessage.classList = "";
    }, 3000);

    return;
  }
  const li = document.createElement("li");
  li.classList = "item";
  li.innerHTML = `Nome: ${nameValue} </br> Email: ${emailValue}`;

  items.appendChild(li);
});
