var btnTranslate=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

console.log(outputDiv.innerHTML);

function clickEventHandler(){

    outputDiv.innerHTML="jhjvhhgv " + txtInput.value; 
 }


btnTranslate.addEventListener("click", clickEventHandler );