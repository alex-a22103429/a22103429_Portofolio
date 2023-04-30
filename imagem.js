const submitButton = document.getElementById('submit-caption');
const inputField = document.getElementById('caption-input');
const caption = document.getElementById('caption');

submitButton.addEventListener('click', function() {
  const userInput = inputField.value;
  caption.textContent = userInput;
});