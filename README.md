# The 'usuals' Library

This is a library [under development] for making dev life easier that includes all the common utility functions of frequent use.

[![Pull Requests Welcome](https://img.shields.io/github/issues-pr/reddy-hari/usuals)](https://github.com/reddy-hari/usuals/pulls)
[![GitHub issues](https://img.shields.io/github/issues-raw/reddy-hari/usuals)](https://github.com/reddy-hari/usuals/issues)
[![GitHub Repo Size](https://img.shields.io/github/repo-size/reddy-hari/usuals)](https://github.com/reddy-hari/usuals)
[![NPM Package Version](https://img.shields.io/npm/v/usuals)](https://www.npmjs.com/package/usuals)
[![NPM Package](https://img.shields.io/npm/l/usuals)](https://www.npmjs.com/package/usuals)
[![GitHub Fork](https://img.shields.io/github/forks/reddy-hari/usuals?style=social)](https://github.com/reddy-hari/usuals)

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
usuals.objectFunctions.isObjectEmpty(inputObject1);

// Returns false
usuals.objectFunctions.isObjectEmpty(inputObject2);
```

### String Function Example

`generateLowerCaseString(10)`
Returns a lowercase string of specified length

```javascript
// Returns a value with 14 random characters. [Example - vjjdnmhjlgdgwc]
const str = usuals.stringFunctions.generateLowerCaseString(14);
```

## <a name="side-note"></a> Side Note:

- Currently we only have 2 contributors to this project.
- Do write to harireddy05@gmail.com should you want to be a part of this.

## <a name="bugs"></a> How to report bugs and issues?

- Any bugs/issues reported would help improve the "usuals" library.
- Please do if you stumble upon them. You have our gratitude!

> To report bugs and issues please use the GitHub issue reporting tool: https://github.com/reddy-hari/usuals/issues.

## <a name="contribute"></a> Contribute!

Pull Requests are highly encouraged and appreciated.

> Please :star: the repo if you like the project.
