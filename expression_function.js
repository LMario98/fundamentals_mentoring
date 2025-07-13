
function calculateCurrentAgeFromBirthYear(birthYear) {
  if (typeof birthYear !== 'number') {
    return '”Thanks for using my application in 2025!!, however can’t give you the age as you need to add a valid number”'

  }
  const calculateAge = new Date().getFullYear() - birthYear;
  const getFullYear = new Date().getFullYear();
  return `Thanks for using my application in ${getFullYear} !! your age today is ${calculateAge}`;
};


function getUserDetails(){
  return  currenAge = {
  name: "notAvailableName",
  surname:"NotAvailableSurname",
  age : calculateCurrentAgeFromBirthYear(1994)
  }

};
