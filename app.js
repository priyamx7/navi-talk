const txtInput = document.querySelector('.txt-input');
const btnTranslate = document.querySelector('.btn-translate');
const txtOutput = document.querySelector('.output-div');

const serverURL = "https://api.funtranslations.com/translate/navi.json";

function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
};

//for errors
function errorHandler(error){
	console.log("error occured", error);
	alert("something went wrong, try again later.")
};

function clickHandler() {
	// taking input
	const inputText = txtInput.value;
	//Processing through server
	fetch(getTranslationURL(inputText))
		.then(response => response.json())
		.then(json => {
			const translatedText = json.contents.translated
			//output
			txtOutput.innerText = translatedText;
		})
		.catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler);