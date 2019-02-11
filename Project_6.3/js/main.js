$(document).ready(function () {

	newGetData("AbCdAdBa", "AdBbCaAd");
	//newGetData("AbCdAdBa", "AdBbCaA"); // a different lenght
	//newGetData("AbCdAdBa", "AdBbCaAe"); // a different number of identical symbols

	// answer to the question of Task
	checkConditions();

	// make strings the same
	//makeTheSame();
});


function newGetData(initialArgument, varyArgument) {
	var initialString, varyString,
	initialArray, varyArray,
	self = this;

	this.initialString = initialArgument;
	this.varyString = varyArgument;

	this.initialArray = initialArgument.split("");
	this.varyArray = varyArgument.split("");

	//console.log(self.initialArray);
	//console.log(self.varyArray);
}


// check conditions
function checkConditions() {
	if (compareStrings()) {
		alert("Ваши строки идентичны!");
	} else if (compareLength()) {
		displayTheAnswer();
		return true;
	} else {
		alert("Строки разной длины!");
		return false;
	}
}


// function checks do the strigns are equal
function compareStrings() {
	return initialString == varyString;
}

// the function checks do the strings length matches
function compareLength() {
	return initialString.length == varyString.length;
}

// display the answer
function displayTheAnswer() {
	if (newCompareIndex()) {
		alert("Строки можно сделать одинаковыми!");
	} else {
		alert("Строки нельзя сделать одинаковыми!");
	}
}


// compare arrays
function newCompareIndex() {
	var flag = true,
	answer;
	
	let i = 0, j, k;

	while(i < varyString.length && flag == true) {
		let sameInitial = 1, sameVary = 0,
		sameInitialEven = 0, sameInitialOdd = 0,
		sameVaryEven = 0, sameVaryOdd = 0;

		for (j = 0; j < varyString.length; j++) {
			if (initialArray[i] == initialArray[j] && i != j) {
				sameInitial++;
				if (j%2 == 0) { sameInitialEven++; }
				if (j%2 != 0) { sameInitialOdd++; }
			}
			if (i == j && j%2 == 0) { sameInitialEven++; } 
			if (i == j && j%2 != 0) { sameInitialOdd++; }
		}

		for (k = 0; k < varyString.length; k++) {
			if (initialArray[i] == varyArray[k]) {
				sameVary++;
				if (k%2 == 0) { sameVaryEven++; }
				if (k%2 != 0) { sameVaryOdd++; }
			}
		}
		
		if (sameInitial != sameVary || sameInitialEven != sameVaryEven ||
			sameInitialOdd != sameVaryOdd) {
			flag = false;
			answer = false;
			console.log(initialArray[i], sameInitial, sameVary);

		} else {
			console.log(initialArray[i], sameInitial, sameVary);
			answer = true;
		}
	i++;
	}
return answer;
}


// make strings the same
function makeTheSame() {
	if (checkConditions()) {
		var newVaryArray = swapEven();
		console.log(initialArray);
		console.log(newVaryArray);

		if (initialArray == newVaryArray) {
			console.log("Строки равны!!!");
			console.log(`${initialArray} и ${swapEven()}`);
		} else {
			var lastVaryArray = swapOdd();
			console.log(initialArray);
			console.log(lastVaryArray);
		}
	}
	return [initialArray, lastVaryArray];
}


// swap odd elements
function swapEven() {
	var symbolStore = [""];

	for (let i = 0; i < varyString.length; i += 2) {
		if (initialArray[i] != varyArray[i]) {
			for (let j = i; j < varyString.length; j += 2) {
				if (initialArray[i] == varyArray[j]) {
					symbolStore[0] = varyArray[j];
					varyArray[j] = varyArray[i];
					varyArray[i] = symbolStore[0];
				}
			}
		}
	}
	return varyArray;
}


// swap odd elements
function swapOdd() {
	var newVaryArray = swapEven(),
	varyArray = newVaryArray,
	symbolStore = [""]

	for (let i = 1; i < varyString.length; i += 2) {
		if (initialArray[i] != varyArray[i]) {
			for (let j = i; j < varyString.length; j += 2) {
				if (initialArray[i] == varyArray[j]) {
					symbolStore[0] = varyArray[j];
					varyArray[j] = varyArray[i];
					varyArray[i] = symbolStore[0];
				}
			}
		}
	}
	return varyArray;
}