// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

const contactPage = document.getElementById('contact-page');
const submitButton = document.getElementById('submit-button');

function handleSubmit(event) {
  event.preventDefault();
  contactPage.innerHTML = 'Thank you for your message!';
  contactPage.style.fontSize = '24px';
  contactPage.style.justifyContent = 'start';
}

submitButton.addEventListener('click', handleSubmit);
