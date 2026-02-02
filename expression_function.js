const documentV = document.querySelector("#myP");

const prompt1 = prompt("inserisci un numero");

const convertPrompt1 = Number(prompt1);

const prompt2 = prompt("inserisci un numero");

const convertPrompt2 = Number(prompt2);

if(Number.isNaN(convertPrompt1) === true || Number.isNaN(convertPrompt2) === true){
    console.log("puoi inserire perfavore un numero ");

};
documentV.textContent = convertPrompt1 + convertPrompt2