# isReadableStream

Checks if the given argument is a readable stream.

Check if the value is different from `null`, use `typeof` to check if the value is of type `object` and the `pipe` property is of type `function`.
Additionally check if the `typeof` the `_read` and `_readableState` properties are `function` and `object` respectively.

## 翻译

检查给定参数是否为可读流。

检查该值是否与“ null”不同，请使用“ typeof”检查该值是否为“ object”类型，并且“ pipe”属性为“ function”类型。
此外，还要检查typeof，_read和_visibleState属性是否分别为function和object。

## 代码

```js
const isReadableStream = val =>
  val !== null &&
  typeof val === 'object' &&
  typeof val.pipe === 'function' &&
  typeof val._read === 'function' &&
  typeof val._readableState === 'object';
```

## 例子

```js
const fs = require('fs');
isReadableStream(fs.createReadStream('test.txt')); // true
```
