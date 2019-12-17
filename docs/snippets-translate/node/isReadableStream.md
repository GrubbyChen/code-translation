# isReadableStream

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
