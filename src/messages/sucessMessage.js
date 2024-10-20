const helperText = document.querySelector(".helperText");

const sucessMessage = (message) => {
  helperText.classList.remove("error-message");
  helperText.classList.add("sucess-message");
  helperText.textContent = message;
};

export default sucessMessage;
