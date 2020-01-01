# isReadableStream

检查给定参数是否为可读流。

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
