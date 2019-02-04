$(document).ready(function () {

	// ответ на вопрос задачи
	checkConditions();

	// сделать строки одинаковыми
	//makeTheSame();

});

// На четных позициях стоят ЗАГЛАВНЫЕ БУКВЫ на нечетных - строчные
// gets data
function getData() {
	var data = transformString("AbCdAdBa", "AdBbCaAd"),
	arrayOne = data[0],
	arrayTwo = data[1],
	stringOne = data[2],
	stringTwo = data[3];
	return [arrayOne, arrayTwo, stringOne, stringTwo];
}

// makes an array of string
function transformString(stringOne, stringTwo) {
	var arrayOne = stringOne.split(""),
	arrayTwo = stringTwo.split("");
	return [arrayOne, arrayTwo, stringOne, stringTwo];
}

// function checks do the strigns are equal
function compareStrings() {
	var strings = getData(),
	stringOne = strings[2], stringTwo = strings[3];
	return stringOne == stringTwo;
}

// the function checks do the strings length matches
function compareLength() {
	var strings = getData(),
	stringOne = strings[2], stringTwo = strings[3];
	return stringOne.length == stringTwo.length;
}

// проверка условий
function checkConditions() {
	if (compareStrings()) {
		alert("Ваши строки идентичны!");
	} 
	else if (compareLength()) {
		displayTheAnswer();
		return true;
	} else {
		alert("Строки разной длины!");
		return false;
	}
}

// выводим ответ на вопрос задачи на экран
function displayTheAnswer() {
	if (newCompareIndex()) {
		alert("Строки можно сделать одинаковыми!");
	} 
	else {
		alert("Строки нельзя сделать одинаковыми!");
	}
}

// новая функция для сравнения символов по индексам
function newCompareIndex() {
	var data = getData(),

	arrayOne = data[0],
	arrayTwo = data[1],
	stringOne = data[2],
	stringTwo = data[3],
	
	numberOfSymbols = stringTwo.length,
	flag = true,
	answer;

	for (let i = 0; (i < numberOfSymbols && flag == true); i++) {
		var sameSymbolsArrayOne = 1,
		sameSymbolsArrayTwo = 0,

		sameSymbolsArrayOneEven = 0,
		sameSymbolsArrayOneOdd = 0,

		sameSymbolsArrayTwoEven = 0,
		sameSymbolsArrayTwoOdd = 0;

		for (let j = 0; j < numberOfSymbols; j++) {

			if (arrayOne[i] == arrayOne[j] && i != j) {
				sameSymbolsArrayOne++;

				if (j%2 == 0) {
					sameSymbolsArrayOneEven++;
				}

				if (j%2 != 0) {
					sameSymbolsArrayOneOdd++;
				}
			}
			
			if (i == j && j%2 == 0) {
				sameSymbolsArrayOneEven++;
			} 

			if (i == j && j%2 != 0) {
				sameSymbolsArrayOneOdd++;
			}
		}

		for (let k = 0; k < numberOfSymbols; k++) {
			if (arrayOne[i] == arrayTwo[k]) {
				sameSymbolsArrayTwo++;
				if (k%2 == 0) {	sameSymbolsArrayTwoEven++;}
				if (k%2 != 0) {	sameSymbolsArrayTwoOdd++;	}
			}
		}

		if (sameSymbolsArrayOne != sameSymbolsArrayTwo || 
				sameSymbolsArrayOneEven != sameSymbolsArrayTwoEven ||
				sameSymbolsArrayOneOdd  != sameSymbolsArrayTwoOdd) {
		
			flag = false;
			
			answer = false;
			console.log(arrayOne[i], sameSymbolsArrayOne, sameSymbolsArrayTwo);
			break;

		} else {
			console.log(arrayOne[i], sameSymbolsArrayOne, sameSymbolsArrayTwo);
			answer = true;
		}
	}
return answer;
}








//НУЖНО ПЕРЕДЕЛАТЬ ПРОГРАММУ - ВМЕСТО ЦИКЛА ИСПОЛЬЗОВАТЬ МЕТОД ПЕРЕБОРА
// ПРОСТО РАДИ ПРОВЕРКИ ПЕРЕБОРА МАССИВА!!!
function test() {

	var arrays = getData(), symbolMatches = ["0", "1", "2", "3"];

	symbolMatches.forEach(function(item, i, symbolMatches) {
		console.log(`[${i}]: ${item}.`);
	});
}






// сделать строки одинаковыми
function makeTheSame() {
	var data = getData(),
	arrayOne = data[0];

	if (checkConditions()) {
		var newArrayTwo = swapEven();

		console.log(arrayOne);
		console.log(newArrayTwo);

		if (arrayOne == newArrayTwo) {
			console.log("Строки равны!!!");
			console.log(`${arrayOne} и ${swapEven()}`);
		}

		else {
			var lastArrayTwo = swapOdd();

			console.log(arrayOne);
			console.log(lastArrayTwo);			
		}
	}
}

// перестановки четных элементов
function swapEven() {
	var data = getData(),
	arrayOne = data[0],
	arrayTwo = data[1],
	stringOne = data[2],
	stringTwo = data[3],
	symbolStore = [""],
	numberOfSymbols = stringTwo.length;

	for (let i = 0; i < numberOfSymbols; i += 2) {
		if (arrayOne[i] != arrayTwo[i]) {
			for (let j = i; j < numberOfSymbols; j += 2) {
				if (arrayOne[i] == arrayTwo[j]) {
					symbolStore[0] = arrayTwo[j];
					arrayTwo[j] = arrayTwo[i];
					arrayTwo[i] = symbolStore[0];
				}
			}
		}
	}
	return arrayTwo;
}

// перестановки нечетных элементов
function swapOdd() {
	var newArrayTwo = swapEven();

	var data = getData(),
	arrayOne = data[0],
	arrayTwo = newArrayTwo,
	stringOne = data[2],
	stringTwo = data[3],
	symbolStore = [""],
	numberOfSymbols = stringTwo.length;

	for (let i = 1; i < numberOfSymbols; i += 2) {
		if (arrayOne[i] != arrayTwo[i]) {
			for (let j = i; j < numberOfSymbols; j += 2) {
				if (arrayOne[i] == arrayTwo[j]) {
					symbolStore[0] = arrayTwo[j];
					arrayTwo[j] = arrayTwo[i];
					arrayTwo[i] = symbolStore[0];
				}
			}
		}
	}
	return arrayTwo;
}