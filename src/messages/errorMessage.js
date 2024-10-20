const helperText = document.querySelector(".helperText");

const errorMessage = (message) => {
  helperText.textContent = message;
  helperText.style.visibility = "visible";
  helperText.classList.add("error-message");
};

export default errorMessage;
