# isWritableStream

Checks if the given argument is a writable stream.

Check if the value is different from `null`, use `typeof` to check if the value is of type `object` and the `pipe` property is of type `function`.
Additionally check if the `typeof` the `_write` and `_writableState` properties are `function` and `object` respectively.

## 翻译

检查给定的参数是否为可写流。

检查该值是否与“ null”不同，请使用“ typeof”检查该值是否为“ object”类型，并且“ pipe”属性为“ function”类型。
此外，还要检查typeof，_write和_writableState属性分别是function函数和object对象。

## 代码

```js
const isWritableStream = val =>
  val !== null &&
  typeof val === 'object' &&
  typeof val.pipe === 'function' &&
  typeof val._write === 'function' &&
  typeof val._writableState === 'object';
```

## 例子

```js
const fs = require('fs');
isWritableStream(fs.createWriteStream('test.txt')); // true
```
