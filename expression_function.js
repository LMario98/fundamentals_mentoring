// const startButton = document.getElementById('startButton');
// startButton.addEventListener("click", getUserDetails);


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




let priceOfProducts = [5, 9, 15];


function findLargeNumber() {
  
  let result = 0 ;
  

  
   
   if(priceOfProducts[0] > priceOfProducts[2]) {
    result = priceOfProducts[0];
   
   }
   
   if(priceOfProducts[0] > priceOfProducts[1]) {
    result = priceOfProducts[0];
    
   }
 
   if(priceOfProducts[1] > priceOfProducts[0] ){
    result = priceOfProducts[1];
   
   
   }
   if(priceOfProducts[1] > priceOfProducts[2]){
    result = priceOfProducts[1];
   
   }

  if(priceOfProducts[2] > priceOfProducts[0]){
    result = priceOfProducts[2];
    
  }
 
  if(priceOfProducts[2] > priceOfProducts[1]){
    result = priceOfProducts[2];
  }
   
   const displayLargestNumber = `the largest number is ${result}`;
    document.getElementById("myP").innerText = displayLargestNumber
  return displayLargestNumber
    
};

// console.log(findLargeNumber(priceOfProducts)); 

const button = document.getElementById("button");
button.addEventListener("click", findLargeNumber)