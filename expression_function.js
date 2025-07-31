const startButton = document.getElementById('startButton');
startButton.addEventListener("click", getUserDetails);


function calculateCurrentAgeFromBirthYear() {
   const getBirthYear = prompt('insert a year')
  if (typeof getBirthYear !== 'number') {
     const calculateAge = new Date().getFullYear() - getBirthYear;
    return calculateAge
}
};


function getUserName() {
const getUserName = prompt('insert your name');
  return getUserName;
};

function getUserSurname() {
const getUserSurname = prompt('insert your surname'); 
  return getUserSurname;  
};

function getUserDetails() {
  const obj =  {
    name: getUserName(),
    surname: getUserSurname(),
    age: calculateCurrentAgeFromBirthYear()
  }
  return obj;
};



