const btnTranslate = document.querySelector("#translation-button");
const translationText = document.querySelector("#translation-input");
const outputText = document.querySelector("#translation-output");
const btnPlay = document.querySelector("#translation-button-speak");

const res = "https://api.funtranslations.com/translate/dothraki.json";
const URL = encodeURI(res);


function getTranslationalURL(text) {
  return URL + "?" + "text=" + text;
}

function errorHandler(err) {
  console.log("error occurred" + err);
  alert("something wrong with the server! try again after some time");
}

function textSpeak(text) {
  responsiveVoice.speak(text, "English Female");
}

function clickHandler() {
  const inputText = translationText.value;
  fetch(getTranslationalURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      const translatedText = json.contents.translated;
      outputText.innerText = translatedText;
    })
    .catch(errorHandler);
  translationText.value = "";
}

btnPlay.addEventListener("click", () => {
  textSpeak(outputText.innerText);
});

btnTranslate.addEventListener("click", clickHandler);






