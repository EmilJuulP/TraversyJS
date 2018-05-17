// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(string) {
  // SOLUTION 1 - Return a single longest word
  // SOLUTION 2 - Return an array and include multiple words if they have the same length
  // SOLUTION 3 - Only return an array if multiple words, otherwise return a string
//    const longArr {};
//    str.split(/[\s,]+/);
    
    const str = string.replace(/[^a-zA-ZØÆÅåøæ]/, "");
    let longArr = [];
    let lengthArr = [];
    var longest = 0;
    var word = null;
//    solution 1
//    for (let i = 0; i < str.length; i++) {
//        if (longest < str[i].length) {
//            longest = str[i].length;
//            word = str[i];
//        }
//    return word;
//    }
	
//	solution 2
//    longArr = string.split(" ")
//    var map1 = longArr.map(x => x.length)
//    for (i = 0; i < longArr.length; i++) {
//		var currentVal = map1[i];
//		map1.splice(i, 1);
//        if(map1.includes(currentVal)) {
//    	   lengthArr.push(longArr[i])
//        }
//  		map1.unshift(currentVal);
//	}
//	return lengthArr;
	
//	solution 3
	longArr = string.split(" ")
    var map1 = longArr.map(x => x.length)
    for (i = 0; i < longArr.length; i++) {
		var currentVal = map1[i];
		map1.splice(i, 1);
		
        if(map1.includes(currentVal)) {
    	   lengthArr.push(longArr[i])
        }
		if (longest < longArr[i].length) {
            longest = longArr[i].length;
            word = longArr[i];
        }
  		map1.unshift(currentVal);
	}
	
	if(lengthArr.length < 2) {
		return word;
	}
	else {
		return lengthArr;
	}
}


// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {

	const chunkedArr = [];
	let i = 0;
	while ( i < arr.length) {
		chunkedArr.push(arr.slice(i, i + len));
		i += len;
	}
	return chunkedArr;
	
}
// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {
	return [].concat([], arrays);
}

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {
	var word1 = str1.toLowerCase().split('').sort().join('').trim();
	var word2 = str2.toLowerCase().split('').sort().join('').trim();
	
	if (word1 === word2) {
		var AnaResu = this.isAnagram = true;
		}
	else {
		var AnaResu = this.isAnagram = false;
	}
	return AnaResu;
	
}

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {
	var changedStr = str.toLowerCase().replace(/[a-z]/gi, char => {
		if (char === 'z' || char === 'Z') {
			return 'a';
		}
		else {
			return String.fromCharCode(char.charCodeAt() + 1);
		}
	});
	
	changedStr = changedStr.replace(/a|e|i|o|u/gi, vowel => vowel.toUpperCase());
	
	return changedStr;
}

// Call Function
const output = longestWord('Hello, my name Bradtholomew');

const output2 = chunkArray([1, 2, 3, 4, 5, 6, 7,], 4);

const output3 = flattenArray =([[1, 2], [3,4], [5,6], [7]]);

const output4 = isAnagram('elbow', 'below');

const output5 = letterChanges('youre mum gay');

console.log(output);

console.log(output2);

console.log(output3);

console.log(output4);

console.log(output5);