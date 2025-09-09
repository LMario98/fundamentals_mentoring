
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


function findLargeNumber(list) {
  
  let result = 0 ;
  

  
   
   if(list[0] > list[2]) {
    result = list[0];
   
   }
   
   if(list[0] > list[1]) {
    result = list[0];
    
   }
 
   if(list[1] > list[0] ){
    result = priceOfProducts[1];
   
   
   }
   if(list[1] > list[2]){
    result = list[1];
   
   }

  if(list[2] > list[0]){
    result = list[2];
    
  }
 
  if(list[2] > list[1]){
    result = list[2];
  }
   
   const displayLargestNumber = `the largest number is ${result}`;
    document.getElementById("myP").innerText = displayLargestNumber
  return displayLargestNumber
    
};


const button = document.getElementById("button");
button.addEventListener("click", function() {
findLargeNumber(priceOfProducts);
});
