

const currentAge = function (yearsOfBorn) {
  if (typeof yearsOfBorn !== 'number') {
    return "Only numbers are accepted in this function";
  }
   
  const todayYear = new Date().getFullYear();
  return  todayYear - yearsOfBorn;
};