# usuals

This is a library for making dev life easier that includes all the common utility functions of frequent use.

## Installation

```
npm i usuals
```

## Usage

```javascript
const utils = require("usuals");
```

### objectEmpty(inputObject)

Checks if a JavaScript Object is empty (inclusive of `null` and `undefined`)

```javascript
const inputObject1 = {};
const inputObject2 = { foo: "bar" };

// Returns true
usuals.objectEmpty(inputObject1);

// Returns false
usuals.objectEmpty(inputObject2);
```
