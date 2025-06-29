

const currentAge = function (yearsOfBorn) {
  if (typeof yearsOfBorn !== 'number') {
    return "Only numbers are accepted in this function";
  }

  const todayYear = new Date().getFullYear();
  return todayYear - yearsOfBorn;
};


function currentAge1(yearsOfBorn1) {
  if (typeof yearsOfBorn1 !== 'number') {
    return '”Thanks for using my application in 2025!!, however can’t give you the age as you need to add a valid number”'

  }
  const calculateAge = new Date().getFullYear() - yearsOfBorn1;
  const getFullYear = new Date().getFullYear();
  return `Thanks for using my application in ${getFullYear} !! your age today is ${calculateAge}`;
  
  const todayYear = new Date().getFullYear();
  return todayYear - yearsOfBorn1;
};

