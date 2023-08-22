var btnTranslate=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL ="https://api.funtranslations.com/translate/minion.json";

function getTraslatedURL(text)
{
    return serverURL + "?" + "text= "  + text 
}


function errorHandler(error){
    console.log("error occured", error);
}



function clickEventHandler(){

    var inputText= txtInput.value; 

    //calling server for processing
      fetch(getTraslatedURL(inputText))
      .then(response => response.json())
      .then(json=>{ 
          var translatedText=json.contents.translated;
          outputDiv.innerHTML=translatedText;
        
        })
      .catch(errorHandler)
 }


btnTranslate.addEventListener("click", clickEventHandler );