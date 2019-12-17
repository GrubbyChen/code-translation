# isStream

检查给定参数是否为流。

检查该值是否与“ null”不同，请使用“ typeof”检查该值是否为“ object”类型，并且“ pipe”属性为“ function”类型。

## 代码

```js
const isStream = val => val !== null && typeof val === 'object' && typeof val.pipe === 'function';
```

## 例子

```js
const fs = require('fs');
isStream(fs.createReadStream('test.txt')); // true
```
