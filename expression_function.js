const startButton = document.getElementById('startButton');
startButton.addEventListener("click", calculateCurrentAgeFromBirthYear);
const birthYear = "1994";

function calculateCurrentAgeFromBirthYear() {
  if (typeof birthYear !== 'number') {
    const getBirthYear = prompt('insert a year')
    return getBirthYear
  }
};

function getUserDetails() {
  return currenAge = {
    name: "notAvailableName",
    surname: "NotAvailableSurname",
    age: calculateCurrentAgeFromBirthYear(1994)
  }

};

