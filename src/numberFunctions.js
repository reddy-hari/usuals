
/**
* Returns a random integer within the range specified
* @param {Number} minimum 
* @param {Number} maximum 
* @returns a random integer in the user provided range
*/
exports.generateRandomNumberInRange = (min, max) => Math.floor(Math.random() * (max - min) + min);