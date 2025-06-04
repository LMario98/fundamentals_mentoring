const yearsOfBorn = 1998;

const currentAge = function (yearsOfBorn) {
  return  new Date().getFullYear() - yearsOfBorn;
};

