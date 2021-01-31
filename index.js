console.log('Connected!');

// Get elements
let firstname = document.getElementById('name');
let form = document.getElementById('myForm');

const validateForm = (e) => {
  e.preventDefault();
  console.log(firstname.checkValidity());
};

// Event Listeners
form.addEventListener('submit', validateForm);
