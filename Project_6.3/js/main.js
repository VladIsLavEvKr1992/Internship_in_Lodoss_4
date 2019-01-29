$(document).ready(function () {

	makeTheSame();

});


var stringOne, stringTwo, reasonOperation, stringIdentical, indexMatch, indicator;

var arrayOne = [], arrayTwo = [], symbolStore = [], symbolMatches = [];


transformString("abcd", "cdab");

// makes an array of string
function transformString(stringOne, stringTwo) {
	for (let i = 0; i < stringOne.length; i++) {
		arrayOne[i] = stringOne[i];
	}
	for (let i = 0; i < stringTwo.length; i++) {
		arrayTwo[i] = stringTwo[i];
	}
}


// check all conditions
function checkCondition() {
	compareStrings();
	compareLength();
	compareIndex();

	if (stringIdentical == true || reasonOperation == false || indexMatch == false) {
		indicator = false;
		alert("Strings cannot be made the same!");
		return indicator;
	} else {
		indicator = true;
		alert("Strings can be made the same!");
		return indicator;
	}
}


// make two string the same
function makeTheSame() {
	checkCondition();
	
	if (indicator == true && stringIdentical == false) {
		swapEven();
		compareStrings();
		alert(`First string: ${arrayOne}. Second string: ${arrayTwo}.`);
	}

	if (indicator == true && stringIdentical == false) {
		swapOdd();
		compareStrings();
		alert(`First string: ${arrayOne}. Second string: ${arrayTwo}.`);
	}

	if (indicator == true && stringIdentical == false) {
		swapEven();
		compareStrings();
		alert(`First string: ${arrayOne}. Second string: ${arrayTwo}.`);
	}
}


// function checks do the strigns are equal
function compareStrings() {
	for (let i = 0; i < arrayOne.length; i++) {
		if (arrayOne[i] == arrayTwo[i]) {
			stringIdentical = true;
			return stringIdentical;
		} else {
			stringIdentical = false;
			return stringIdentical;
		}
	}	
}


// the function checks do the strings length matches
function compareLength() {
	if (arrayOne.length == arrayTwo.length) {
		reasonOperation = true;
		return reasonOperation;
	} else {
		reasonOperation = false;
		return reasonOperation;
	}
}


// cheks if the element indices match
function compareIndex() {
	for (let i = 0; i < arrayOne.length; i++) {
		symbolMatches[i] = 0;
		for (let j = 0; j < arrayOne.length; j++) {
			if (arrayOne[i] == arrayTwo[j]) {
				if (i%2 == 0 && j%2 == 0 || i%2 != 0 && j%2 != 0) {
					symbolMatches[i]++;
					indexMatch = true;
					return indexMatch;
				}
			}
		}
	}
	for (let i = 0; i < arrayOne.length; i++) {
		if (symbolMatches[i] == 0) {
			indexMatch = false;
			return indexMatch;
		}
	}
}


// swaps the even elements of the aray
function swapEven() {
	symbolStore[0] = arrayOne[1];
	arrayOne[1] = arrayOne[3];
	arrayOne[3] = symbolStore[0];
}


// swaps the odd elements of the aray
function swapOdd() {
	symbolStore[0] = arrayOne[0];
	arrayOne[0] = arrayOne[2];
	arrayOne[2] = symbolStore[0];
}