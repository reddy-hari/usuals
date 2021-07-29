
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
* Returns a unique mixed lower or upper case character alphanumeric string of a specified length
* @param {string} length length of alphanumeric string
* @returns alphanumeric string
*/
exports.generateAlphaNumericUpperOrLowerCaseString = (length) => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

/**
* Returns a unique upper case character alphanumeric string of a specified length
* @param {string} length length of alphanumeric string
* @returns alphanumeric string
*/
exports.generateAlphaNumericUpperCaseString = (length) => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

/**
* Returns a unique lower case character alphanumeric string of a specified length
* @param {string} length length of alphanumeric string
* @returns alphanumeric string
*/
exports.generateAlphaNumericLowerCaseString = (length) => {
    var result = '';
    var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

/**
* Returns a unique lower case character string of a specified length
* @param {string} length length of alphanumeric string
* @returns alphanumeric string
*/
exports.generateLowerCaseString = (length) => {
    var result = '';
    var characters = 'abcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

/**
* Returns a unique upper case character string of a specified length
* @param {string} length length of alphanumeric string
* @returns alphanumeric string
*/
exports.generateUpperCaseString = (length) => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

