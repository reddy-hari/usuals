
/**
* Returns the array edited with the first occurrence of the specified element deleted
* Returns original array if no occurrence found
* @param {array} arr array in which the element needs to be removed
* @param {any} val value to be removed
* @returns alphanumeric string
* Note: Uses splice() internally
*/
exports.deleteElement = (arr, value) => {
    var index = arr.indexOf(value);
    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr;
}

/**
* Returns the array edited with the all occurrences of the specified element deleted
* Returns original array if no occurrence found
* @param {array} arr array in which the element occurrences need to be removed
* @param {any} val all value occurrences to be removed
* @returns alphanumeric string
* Note: Uses splice() internally
*/
exports.deleteAllElementOccurrences = (arr, value) => {
    var i = 0;
    while (i < arr.length) {
        if (arr[i] === value) {
            arr.splice(i, 1);
        } else {
            ++i;
        }
    }
    return arr;
}