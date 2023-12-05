/** ******* create variables ******** */
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?

let costPerDay = 35;
let numberOfDaysSelected = 0;
const dayButtons = Array.from(document.querySelectorAll('.day-selector li'));
const clearButton = document.getElementById('clear-button');
const halfButton = document.getElementById('half');
const fullButton = document.getElementById('full');
const calculatedCost = document.getElementById('calculated-cost');

/** ******* calculate ******** */
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate() {
  calculatedCost.innerHTML = numberOfDaysSelected * costPerDay;
}

/** ******* colour change days of week ******** */
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function isDayButtonClicked(dayButton) {
  return dayButton.classList.contains('clicked');
}

function updateNumberOfDaysSelected() {
  numberOfDaysSelected = dayButtons.filter(isDayButtonClicked).length;
}

function toggleClickedClassOnElement(element) {
  if (element.classList.contains('clicked')) {
    element.classList.remove('clicked');
  } else {
    element.classList.add('clicked');
  }
}

function toggleClicked({ target }) {
  toggleClickedClassOnElement(target);
  updateNumberOfDaysSelected();
  calculate();
}

dayButtons.map((dayButton) => (
  dayButton.addEventListener('click', toggleClicked)
));

/** ******* clear days ******** */
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function removeClickedClassFromDayButton(dayButton) {
  dayButton.classList.remove('clicked');
}

function clearDays() {
  dayButtons.forEach(removeClickedClassFromDayButton);
  numberOfDaysSelected = 0;
  calculate();
}

clearButton.addEventListener('click', clearDays);

/** ******* change rate ******** */
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function handleHalfButtonClick() {
  halfButton.classList.add('clicked');
  fullButton.classList.remove('clicked');
  costPerDay = 20;
  calculate();
}

function handleFullButtonClick() {
  fullButton.classList.add('clicked');
  halfButton.classList.remove('clicked');
  costPerDay = 35;
  calculate();
}

halfButton.addEventListener('click', handleHalfButtonClick);
fullButton.addEventListener('click', handleFullButtonClick);
