// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
    return str.split('').reverse().join('');
//    str = "Hello!";
//    String.reverse(str);
//    return console.log(String.reverse(str));
}

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
    const palin = str.split("").reverse().join("");
    if (palin === str) {
        return true;
        }
    else {
        return false;
    }
}

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
    int = int + "";
    return int.split("").reverse("").join("");
}



// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
    const capString = str.toLowerCase().split(' ');
//    var forContainer = "";
//    capString.forEach (function(element) {
//        forContainer += element.replace(element[0], element[0].toUpperCase()) + ' '
//    });
//    capArr[] = capString;
//    for (i = 0; i < capArr.length; i++) {
//        capString[i] += capString[i].toString().replace(capString[0], capString[0].toUpperCase()) + ' '
//    };
//     return capString;
    for(i = 0; i < capString.length; i++) {
        capString[i] = capString[i].substring(0,1).toUpperCase() + capString[i].substring(1);
    }
    return capString.join(' ');
}
                         



// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
    const charMap = {};
    let maxNum = 0;
    let maxChar = '';
    
    str.split('').forEach(function(char) {
        if(charMap[char]) {
            charMap[char]++;
        }
        else {
            charMap[char] = 1;
        }
    });
    
    for(let char in charMap) {
        if(charMap[char] > maxNum) {
            maxNum = charMap[char];
            maxChar = char;
        }
    }
    return maxChar;
}



// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz(i, max) {
//    for (let i = 1; i <= 100; i++) {
//        switch(true) {
//            case i % 5 === 0 && i % 3 === 0:
//                console.log('Fizzbuzz');
//                break;
//                
//            case i % 3 === 0:
//                console.log('Fizz');
//                break;
//                
//            case i % 5 === 0:
//                console.log('Buzz');
//                break;
//                
//            default:
//                console.log(i);
//                break;
//        }
//    }
        if(i % 5 === 0 && i % 3 === 0) {
        	console.log('Fizzbuzz');
		}
        if(i % 3 === 0) {
            console.log('Fizz');
        }    
        if(i % 5 === 0) {
            console.log('Buzz');
		}
        console.log(i);
		if (i < max) {
			return fizzBuzz(i + 1, max);	
		}
		
}
 



// Call Function
const output = reverseString('Hello!');
const output2 = isPalindrome('xanax');
const output3 = reverseInt(123);
const output4 = capitalizeLetters('a largE smelly meatbaby');
const output5 = maxCharacter('aaa eeee n');

console.log(output);
console.log(output2);
console.log(output3);
console.log(output4);
console.log(output5);
fizzBuzz(1, 100);
