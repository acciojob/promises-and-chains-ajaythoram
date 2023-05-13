const form = document.querySelector('form');
const ageInput = document.querySelector('#age');
const nameInput = document.querySelector('#name');
const submitBtn = document.querySelector('#btn');

submitBtn.addEventListener('click', event => {
  event.preventDefault(); // Prevent default form submission

  const age = ageInput.value;
  const name = nameInput.value;

  if (!age || !name) {
    alert('Please enter valid details');
    return;
  }

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000); // Delay of 4 seconds
  });

  promise
    .then(message => alert(message))
    .catch(errorMessage => alert(errorMessage));
});


