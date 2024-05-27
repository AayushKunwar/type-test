const commonEnglishWords = [
	"the",
	"be",
	"to",
	"of",
	"and",
	"a",
	"in",
	"that",
	"have",
	"it",
	"for",
	"not",
	"on",
	"with",
	"he",
	"as",
	"you",
	"do",
	"at",
	"this",
	"but",
	"his",
	"by",
	"from",
	"they",
	"we",
	"say",
	"her",
	"she",
	"or",
	"an",
	"will",
	"my",
	"one",
	"all",
	"would",
	"there",
	"their",
	"what",
	"so",
	"up",
	"out",
	"if",
	"about",
	"who",
	"get",
	"which",
	"go",
	"me",
	"when",
	"make",
	"can",
	"like",
	"time",
	"no",
	"just",
	"him",
	"know",
	"take",
	"people",
	"into",
	"year",
	"your",
	"good",
	"some",
	"could",
	"them",
	"see",
	"other",
	"than",
	"then",
	"now",
	"look",
	"only",
	"come",
	"its",
	"over",
	"think",
	"also",
	"back",
	"after",
	"use",
	"two",
	"how",
	"our",
	"work",
	"first",
	"well",
	"way",
	"even",
	"new",
	"want",
	"because",
	"any",
	"these",
	"give",
	"day",
	"most",
	"us",
	"is",
	"are",
	"was",
	"were",
	"been",
	"being",
	"had",
	"has",
	"do",
	"does",
	"doing",
	"did",
	"done",
	"apple",
	"banana",
	"orange",
	"grape",
	"lemon",
	"kiwi",
	"peach",
	"pear",
	"melon",
	"berry",
	"mango",
	"cherry",
	"plum",
	"coconut",
	"fig",
	"lime",
	"papaya",
	"peanut",
];
function getWords(length) {
	if (commonEnglishWords.length <= length) {
		return commonEnglishWords.slice();
	}
	let result = [];
	let prev = "";
	// if repeated words then dont care
	while (result.length < length) {
		let rndIdx = Math.floor(Math.random() * commonEnglishWords.length);
		if (commonEnglishWords[rndIdx] !== prev) {
			result.push(commonEnglishWords[rndIdx]);
			prev = commonEnglishWords[rndIdx];
		}
	}
	return result.join(" ");
}
