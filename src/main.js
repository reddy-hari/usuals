/**
 * Checks if a passed in object is empty
 * @param {object} inputObject input object
 * @returns true or false
 */
exports.isObjectEmpty = (inputObject) =>
    inputObject === null
        || inputObject === undefined
        || Object.keys(inputObject).length === 0
        ? true
        : false;


/**
 * Checks if a passed in string is empty
 * @param {string} inputString 
 * @returns true or false
 */
exports.isStringEmpty = (inputString) =>
    inputString === undefined
        || inputString === null
        || inputString.trim() === ''
        ? true
        : false;


/**
 * Returns a unique id string of length
 * @param {string} length length of id
 * @returns id of length
 */
exports.makeid = (length) => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

/**
 * Returns a random integer between min and max
 * @param {Number} min 
 * @param {Number} max 
 * @returns a random integer between min and max
 */
exports.getRanNum = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};

/**
 * Removes specified item and returns updated array.
 * @param {*} item 
 * @param {array} array 
 * @returns array with removed item
 */
exports.removeArrayItem = (item, array) => {
    let newArray = [...array];
    const index = newArray.indexOf(item);
    if (index > -1) {
        newArray.splice(index, 1);
    }
    return newArray;
};

/**
 * Pretty prints time from seconds
 * Format is HH:MM:SS
 * @param {Number} timeInSeconds the time to print in seconds
 * @returns time in HH:MM:SS format
 */
exports.printTime = (timeInSeconds) => {
    //(n < 10) ? ("0" + n) : n
    const hours = (Math.floor(timeInSeconds / 3600) < 10) ? '0' + Math.floor(timeInSeconds / 3600) : Math.floor(timeInSeconds / 3600);
    timeInSeconds -= (3600 * hours);
    const minutes = (Math.floor(timeInSeconds / 60) < 10) ? '0' + (Math.floor(timeInSeconds / 60)) : (Math.floor(timeInSeconds / 60));
    const seconds = (Math.round(timeInSeconds - minutes * 60) < 10) ? '0' + Math.round(timeInSeconds - minutes * 60) : Math.round(timeInSeconds - minutes * 60);
    let time = '';
    let flag = false;

    if (hours !== '00') {
        time += hours;
        flag = true;
    }
    if (flag) {
        time += ':';
    }
    time += minutes + ':' + seconds;
    return time;
};

/**
 * Un-nulls string by returning a blank string if passed in string is null or undefined
 * Returns passed in string if it has a value
 * @param {*} str 
 * @returns blank or original string
 */
exports.stringUnNull = (str) => {
    if (str === '' || str === undefined || str === null) {
        return '';
    } else {
        return str;
    }
}