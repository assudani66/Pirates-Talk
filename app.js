// minion server URL

var ServerURL = "https://api.funtranslations.com/translate/pirate.json"

//queryselecting terms

var btntranslate = document.querySelector("#btn-translate");
var txtinput = document.querySelector("#txt-translate");
var txtoutput = document.querySelector("#txt-translated")

//creating translation link
function getTranslationURL(usertext){
    return ServerURL + "?" + "text=" + usertext;
}

function errorhandler(){
    alert("App has been used for more than 5 times Please come after a hour")
    console.error(error)
}

btntranslate.addEventListener("click" , function clickresposer(){
    var text = txtinput.value ;
    
    fetch(getTranslationURL(text))   
    .then(response => response.json())
    .then(json => { txtoutput.value = json.contents.translated;
        console.log(json.contents.translated)
    })
    .then(console.log(txtoutput.value))
    .catch(errorhandler)
})