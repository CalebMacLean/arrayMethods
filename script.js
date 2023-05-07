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

console.log(addKeyAndValue([
    {name: 'Elie'},
    {name: 'Tim'},
    {name: 'Matt'},
    {name: 'Colt'}
  ],
    'title',
    'instructor'));