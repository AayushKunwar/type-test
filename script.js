const inputText = document.querySelector("#userInput");
const textSource = document.querySelector(".source");
const timee = document.querySelector(".timer");
const wpss = document.querySelector(".wpm");
const selections = document.querySelector(".selections");
// const text = "Yesterday, you said tommorow. Just do it.";
// let text = "foo bar baz buzz eggs omelet";

let sourceIndex = 0; // this is for the word
let cursorIndex = 0;

let selectedLength = 10;
let text = getWords(selectedLength);
let textWords = text.split(" ");
// console.log(text);

inputText.value = "";

let count = textWords.length;
// states = notStarted , playing, end
let gameState = "notStarted";
let startTime = undefined;
let timerStarted = false;

setLength(selectedLength, selections.children[0]);

renderText();
inputText.addEventListener("input", handleUserInput);

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
		// else if (index < cursorIndex) {
		// 	temp.classList.add("correct");
		// }
		temp.innerHTML = ch;
		textSource.appendChild(temp);
		// console.log(temp);
	});
}
function resetEverything() {
	sourceIndex = 0; // this is for the word
	cursorIndex = 0;
	textWords = text.split(" ");
	count = textWords.length;
	// states = notStarted , playing, end
	gameState = "notStarted";
	startTime = undefined;
	timerStarted = false;
	// text = getWords(selectedLength);
	textWords = text.split(" ");
	renderText();
	inputText.value = "";
	inputText.focus();
}
function handleRedo() {
	text = getWords(selectedLength);
	resetEverything();
}

function setLength(len, ref) {
	selectedLength = len;
	console.log(ref);
	for (let child of selections.children) {
		child.classList.remove("selection_active");
	}
	ref.classList.add("selection_active");
	text = getWords(selectedLength);
	resetEverything();
}

function handleUserInput(e) {
	startHandleTime();
	renderText();
	let currSrc = textWords[sourceIndex] ?? "";
	let currInput = inputText.value.split(" ")[0];
	// design flaw?
	if (e.data === " ") {
		if (currSrc === currInput) {
			// console.log("success");
			sourceIndex++;
			inputText.value = "";
			cursorIndex++;
			renderText();
			return;
		}
	} else if (
		currSrc.slice(0, currInput.length) === currInput &&
		currSrc.length >= currInput.length
	) {
		// console.log("progress");
		return;
	} else {
		textSource.childNodes[sourceIndex].classList.add("error1");
		textSource.childNodes[sourceIndex].classList.remove("current");
		// console.log(textSource.childNodes[cursorIndex]);
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
		// console.log("whooooo, game sakyo");
		// console.log(endTime);
		// console.log(timeTaken);
		const wpm = Math.floor((count / timeTaken) * 60);
		timee.innerHTML = timeTaken;
		wpss.innerHTML = wpm;
		return;
	}
	setTimeout(() => {
		handleTime();
	}, 50);
}

function getQuote(ref) {
	for (let child of selections.children) {
		child.classList.remove("selection_active");
	}
	ref.classList.add("selection_active");
	getNextQuote();
}
