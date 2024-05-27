const inputText = document.querySelector("#userInput");
const textSource = document.querySelector(".source");
const timee = document.querySelector(".timer");
const wpss = document.querySelector(".wps");
// const text = "Yesterday, you said tommorow. Just do it.";
// let text = "foo bar baz buzz eggs omelet";
let selectedLength = 15;
let text = getWords(selectedLength);
// console.log(text);

inputText.value = "";

let sourceIndex = 0; // this is for the word
let cursorIndex = 0;
let textWords = text.split(" ");
let count = textWords.length;
// states = notStarted , playing, end
let gameState = "notStarted";
let startTime = undefined;
let timerStarted = false;

// textSource.innerHTML = "Yesterday, you said tommorow. Just do it.";
function renderText() {
	textSource.innerHTML = "";
	// ch now means word
	text.split(" ").forEach((ch, index) => {
		const temp = document.createElement("div");
		temp.classList.add("inline");
		temp.classList.remove("current");
		temp.classList.remove("error");
		if (index === cursorIndex) {
			temp.classList.add("current");
		}
		temp.innerHTML = ch + " ";
		textSource.appendChild(temp);
		// console.log(temp);
	});
}

renderText();
inputText.addEventListener("input", handleUserInput);

function resetEverything() {
	sourceIndex = 0; // this is for the word
	cursorIndex = 0;
	textWords = text.split(" ");
	count = textWords.length;
	// states = notStarted , playing, end
	gameState = "notStarted";
	startTime = undefined;
	timerStarted = false;
	text = getWords(selectedLength);
	textWords = text.split(" ");
	renderText();
	inputText.value = "";
	inputText.focus();
}

function setLength(len) {
	selectedLength = len;
	resetEverything();
}

function handleUserInput(e) {
	startHandleTime();
	renderText();
	let currSrc = textWords[sourceIndex] ?? "";
	let currInput = inputText.value.split(" ")[0];
	// console.log(currSrc.slice(0, currInput.length));
	// console.log(currInput);
	// console.log(e);
	if (e.inputType === "insertText") {
		// console.log(textWords[sourceIndex]);
		// console.log(inputText.value);
		if (e.data === " ") {
			if (currSrc === currInput) {
				// console.log("success");
				sourceIndex++;
				inputText.value = "";
				cursorIndex++;
				renderText();
				return;
			}
		} else if (currSrc.slice(0, currInput.length) === currInput) {
			// console.log("progress");
		} else {
			textSource.childNodes[sourceIndex].classList.add("error1");
			textSource.childNodes[sourceIndex].classList.remove("current");
			// console.log(textSource.childNodes[cursorIndex]);
		}
	} else if (e.inputType === "deleteContentBackward") {
	}
}
function startHandleTime() {
	if (!timerStarted) {
		timerStarted = true;
		startTime = new Date();
		// console.log("started at " + startTime);
		handleTime();
	}
}

function handleTime() {
	if (cursorIndex >= count) {
		const endTime = new Date();
		const timeTaken = (endTime - startTime) / 1000;
		console.log("whooooo, game sakyo");
		// console.log(endTime);
		// console.log(timeTaken);
		const wpm = Math.floor((count / timeTaken) * 60);
		timee.innerHTML = timeTaken;
		wpss.innerHTML = wpm;
		return;
	}
	setTimeout(() => {
		handleTime();
	}, 100);
}
