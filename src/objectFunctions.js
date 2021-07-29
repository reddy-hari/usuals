
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
