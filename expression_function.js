

const currentAge = function (yearsOfBorn) {
  const todayYear = new Date().getFullYear();
  return  todayYear - yearsOfBorn;
};

currentAge(1998);