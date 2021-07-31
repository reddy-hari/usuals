# usuals

This is a library [under development] for making dev life easier that includes all the common utility functions of frequent use.

## Installation

```
npm i usuals
```

## Usage

```javascript
const usuals = require("usuals");
```

### Object Function Example

`isObjectEmpty(inputObject)`
Checks if a JavaScript Object is empty (inclusive of `null` and `undefined`)

```javascript
const inputObject1 = {};
const inputObject2 = { foo: "bar" };

// Returns true
usuals.isObjectEmpty(inputObject1);

// Returns false
usuals.isObjectEmpty(inputObject2);
```

### String Function Example

`generateLowerCaseString(10)`
Returns a lowercase string of specified length

```javascript
// Returns a value with 14 random characters. [Example - vjjdnmhjlgdgwc]
const str = usuals.generateLowerCaseString(14);
```

# <a name="bugs"></a> How to report bugs and issues?

To report bugs and issues please use the GitHub issue reporting tool: https://github.com/reddy-hari/usuals/issues. 
Any bugs and issues reports are very much appreciated since it would help improve the "usuals" library. Thank you!

> Click :star:if you like the project. Pull Request are highly appreciated.
