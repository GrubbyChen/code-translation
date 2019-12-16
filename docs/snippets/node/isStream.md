# isStream

Checks if the given argument is a stream.

Check if the value is different from `null`, use `typeof` to check if the value is of type `object` and the `pipe` property is of type `function`.

## Translate

检查给定参数是否为流。

检查该值是否与“ null”不同，请使用“ typeof”检查该值是否为“ object”类型，并且“ pipe”属性为“ function”类型。

## Code

```js
const isStream = val => val !== null && typeof val === 'object' && typeof val.pipe === 'function';
```

## Example

```js
const fs = require('fs');
isStream(fs.createReadStream('test.txt')); // true
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
