

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

  return 'Thanks for using my application in 2025!! your age today is 31'
  
  const todayYear = new Date().getFullYear();
  return todayYear - yearsOfBorn1;
};
