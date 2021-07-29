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
