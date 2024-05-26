const inputText = document.querySelector("#userInput");
const textSource = document.querySelector(".source");
const text = "Yesterday, you said tommorow. Just do it.";

inputText.value = "";

let sourceIndex = 0; // this is for the word
let cursorIndex = 0;
const textWords = text.split(" ");
const count = textWords.length;

// textSource.innerHTML = "Yesterday, you said tommorow. Just do it.";
function renderText() {
	textSource.innerHTML = "";
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

function handleUserInput(e) {
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

// function handleCursor() {
// 	const currSrc = textWords[sourceIndex];
// 	const currInput = inputText.value.split(" ")[0];

// 	let temp = currSrc.slice(0, currInput.length);
// 	console.log(temp);
// 	console.log(currInput);
// 	console.log(temp === currInput);
// 	if (temp === currInput && temp !== "") {
// 		cursorIndex++;
// 	}
// }
