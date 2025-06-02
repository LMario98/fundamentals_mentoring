// This function calculates the current age based on the year of birth..
const currentAge = function (yearsOfBorn) {
  return  new Date().getFullYear() - yearsOfBorn;
};

  console.log(currentAge(1998));