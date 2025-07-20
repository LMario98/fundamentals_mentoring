const startButton = document.getElementById('startButton');
startButton.addEventListener("click", getUserDetails);


function calculateCurrentAgeFromBirthYear() {
   const getBirthYear = prompt('insert a year')
  if (typeof getBirthYear !== 'number') {
     const calculateAge = new Date().getFullYear() - getBirthYear;
    return calculateAge
}
};



function getUserDetails() {
  const obj = currenAge = {
    name: "notAvailableName",
    surname: "NotAvailableSurname",
    age: calculateCurrentAgeFromBirthYear()
  }
  return obj;
};

