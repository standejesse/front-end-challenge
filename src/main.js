import errorMessage from "./messages/errorMessage.js";
import sucessMessage from "./messages/sucessMessage.js";

const stickerCheckBox = document.getElementsByName("stickers-type");
const form = document.querySelector("form");
const quantityInput = document.querySelector("#stickers-quantity-input");
const decrementButton = document.querySelector("#decrement-button");
const incrementButton = document.querySelector("#increment-button");

const isSomeCheckboxChecked = () =>
  Array.from(stickerCheckBox).some((checkbox) => checkbox.checked);

const removeCheckboxError = () => {
  return Array.from(stickerCheckBox).forEach((checkbox) =>
    checkbox.classList.remove("error-inputs")
  );
};

const checkBoxError = () =>
  stickerCheckBox.forEach((checkbox) => checkbox.classList.add("error-inputs"));

const incrementAndDecrementButton = (e) => {
  const inputValue = Number(quantityInput.value);
  const id = e.target.id;

  const isDecrementButtonTarget = id === "decrement-button" && inputValue > 0;
  const isIncrementButtonTarget = id === "increment-button";

  if (isIncrementButtonTarget) quantityInput.value = inputValue + 1;
  if (isDecrementButtonTarget) quantityInput.value = inputValue - 1;
  inputIsZero();
};

const inputIsZero = () => {
  const isZero = Number(quantityInput.value) === 0;

  if (isZero) {
    decrementButton.parentElement.setAttribute("disabled", "");
  } else {
    quantityInput.classList.remove("error-inputs");
    decrementButton.parentElement.removeAttribute("disabled");
  }
};

const disableForm = () => {
  document
    .querySelectorAll("input")
    .forEach((input) => (input.disabled = true));
  document
    .querySelectorAll("button")
    .forEach((button) => (button.disabled = true));
};

const submitForm = (e) => {
  e.preventDefault();

  if (isSomeCheckboxChecked()) {
    removeCheckboxError();
  } else {
    errorMessage("Porfavor Selecione um Sticker");
    checkBoxError();
    return false;
  }

  if (Number(quantityInput.value) === 0) {
    quantityInput.classList.add("error-inputs");
    errorMessage("Porfavor Coloque uma Quantidade");
    return false;
  }

  sucessMessage("Formulário enviado com sucesso!");
  setTimeout(() => location.reload(), 2000);
  disableForm();
};

stickerCheckBox.forEach((checkbox) =>
  checkbox.addEventListener("click", removeCheckboxError)
);
decrementButton.addEventListener("click", incrementAndDecrementButton);
incrementButton.addEventListener("click", incrementAndDecrementButton);
quantityInput.addEventListener("input", inputIsZero);
form.addEventListener("submit", submitForm);
