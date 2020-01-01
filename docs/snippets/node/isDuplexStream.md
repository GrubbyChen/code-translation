# isDuplexStream

检查给定的参数是否为双工（可读和可写）流。

## 代码

```js
const isDuplexStream = val =>
  val !== null &&
  typeof val === 'object' &&
  typeof val.pipe === 'function' &&
  typeof val._read === 'function' &&
  typeof val._readableState === 'object' &&
  typeof val._write === 'function' &&
  typeof val._writableState === 'object';
```

## 例子

```js
const Stream = require('stream');
isDuplexStream(new Stream.Duplex()); // true
```
