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

Checks if a JavaScript Object is empty (inclusive of `null` and `undefined`) | `isObjectEmpty(inputObject)`

```javascript
const inputObject1 = {};
const inputObject2 = { foo: "bar" };

// Returns true
usuals.isObjectEmpty(inputObject1);

// Returns false
usuals.isObjectEmpty(inputObject2);
```
