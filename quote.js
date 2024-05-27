const API_URL = "http://api.quotable.io/random";

function getRandomQuote() {
	return fetch(API_URL)
		.then((res) => res.json())
		.then((data) => data.content);
}

async function getNextQuote() {
	const quote = await getRandomQuote();
	text = quote;
	console.log(quote);
	resetEverything();
}
