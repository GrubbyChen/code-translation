# isStream

检查给定参数是否为流。

## 代码

```js
const isStream = val => val !== null && typeof val === 'object' && typeof val.pipe === 'function';
```

## 例子

```js
const fs = require('fs');
isStream(fs.createReadStream('test.txt')); // true
```
