# isDuplexStream

检查给定的参数是否为双工（可读和可写）流。

检查该值是否与“ null”不同，使用“ typeof”检查一个值是否为“ object”类型，并且“ pipe”属性为“ function”类型。
另外，还要检查typeof，_read，_write，_readState，_writableState的属性分别是function和object。

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
