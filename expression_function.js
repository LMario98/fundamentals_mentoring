const startButton = document.getElementById('startButton');
startButton.addEventListener("click", getUserDetails);


function calculateCurrentAgeFromBirthYear() {
   const getBirthYear = prompt('insert a year')
   const birthYearNumber = Number(getBirthYear);
 

  if(isNaN(birthYearNumber)){
    alert('hai inserito un numero non valido')
    return 0
  }
   const calculateAge = new Date().getFullYear() - birthYearNumber;
   return calculateAge
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



