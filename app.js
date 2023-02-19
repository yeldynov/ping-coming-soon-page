const form = document.getElementById('form');
const emailInput = document.getElementById('emailInput');
const errorText = document.getElementById('errorText');
const submitBtn = document.getElementById('submitBtn');

const emailRegex =
  /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,})+$/;

form.addEventListener('submit', (e) => {
  if (!emailRegex.test(emailInput.value)) {
    e.preventDefault();
    errorText.style.display = 'block';
    emailInput.style.borderColor = 'hsl(354, 100%, 66%)';
  } else {
    e.preventDefault();
    errorText.style.display = 'none';
    emailInput.style.borderColor = 'forestgreen';
  }
});
