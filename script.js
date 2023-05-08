// forEach Section
// Double Values Function
function doubleValues(arr) {
    const result = [];
    arr.forEach(function(element){
        result.push(element*2);
    })
    return result;
};
// console.log(doubleValues([1,2,3]));

// Only Evens Function
function onlyEvens(arr) {
    const result = [];
    arr.forEach(function(element) {
        if(element % 2 === 0) {
            result.push(element);
        }
        else if(element === 2) {
            result.push(element);
        }
    })
    return result;
};
// console.log(onlyEvens([1,2,3,4,5,6]));

// Show First and Last Function
function showFirstAndLast(arr) {
    const result = [];
    arr.forEach(function(element) {
        if(element.length > 1) {
            result.push(element[0] + element[element.length-1]);
        } else {
            result.push(element[0]);
        }
    })
    return result;
};
// console.log(showFirstAndLast(['colt','matt', 'tim', 'test']));

// Add Key And Value Function
function addKeyAndValue(arr,key,value) {
    const result = [];
    arr.forEach(function(element) {
        element[key] = value;
        result.push(element);
    })
    return result;
};
// console.log(addKeyAndValue([
//     {name: 'Elie'},
//     {name: 'Tim'},
//     {name: 'Matt'},
//     {name: 'Colt'}
//   ],
//     'title',
//     'instructor'));

// Vowel Count Function
function vowelCount(str) {
    const resultObj = {};
    const vowels = 'aeiou';
    const strVowelArr = [];

    // For loop to fill strVowelArr with the vowels of str
    for(let letter of str) {
        // Making the function case insensitive
        const char = letter.toLowerCase();
        // For loop to check char against vowels
        for(let vowel of vowels) {
            if(char === vowel) {
                strVowelArr.push(char);
            }
        }
    }

    strVowelArr.forEach(vowel => {
        if(resultObj[vowel]) {
            resultObj[vowel] += 1;
        } else {
            resultObj[vowel] = 1;
        }
    })
    return resultObj;
};

// Map Section
// Double Values With Map Function
function doubleValuesWithMap(arr) {
    return arr.map(num => {
        return num * 2;
    })
};

// Value Times Index Function
function valTimesIndex(arr) {
    let index = 0;
    return arr.map(value => {
        let result = value * index;
        index++;
        return result;
    })
};

// Extract Key Function
function extractKey(arr, key) {
    return arr.map(obj => {
        return obj[key];
    })
};

// Extract Full Name Function
function extractFullName(arr) {
    return arr.map(obj => {
        return obj['first'] + ' ' + obj['last'];
    })
};

// Filter Section
// Filter by Value Function
function filterByValue(arr, key) {
    return arr.filter(obj => {
        return obj[key];
    })
};

// Find Function
function find(arr, val) {
    const findArr = arr.filter(element => {return element === val});
    if(findArr[0]) {
        return findArr[0];
    } else {
        return undefined;
    }
};

// Find in Object Function
function findInObj(arr, key, val) {
    const findInObjArr = arr.filter(obj => {return obj[key] === val});
    if(findInObjArr[0]) {
        return findInObjArr[0];
    } else {
        return undefined;
    }
};

// Remove Vowels Function
function removeVowels(str) {
    const vowels = 'aeiou';
    const strArr = Array.from(str);
    const noVowelArr = strArr.filter(char => {
        let letter = char.toLowerCase();
        switch(letter) {
            case 'a':
                return false;
                break;
            case 'i':
                return false;
                break;
            case 'e':
                return false;
                break;
            case 'o':
                return false;
                break;
            case 'u':
                return false;
                break;
            default:
                return true;
        }
    });
    return noVowelArr.join("");
};

// Double Odd Numbers Function
function doubleOddNumbers(arr) {
    return arr.filter(num => {return num % 2 !== 0}).map(num => {return num * 2});
};