# isWritableStream

检查给定的参数是否为可写流。

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
