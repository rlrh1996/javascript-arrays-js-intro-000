var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(inputArray, element) {
    var outputArray = inputArray;
    outputArray.unshift(element);
    return outputArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
    array.unshift(element);
    return array;
}
