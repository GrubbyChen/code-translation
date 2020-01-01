# hashNode

使用 [SHA-256](https://en.wikipedia.org/wiki/SHA-2) 算法为给定值创建哈希值，返回 `promise`。

- 使用 `crypto` API 为给定值创建一个哈希值，使用 `setTimeout` 防止长时间操作阻塞。

## 代码

```js
const crypto = require('crypto');
const hashNode = val =>
  new Promise(resolve =>
    setTimeout(
      () =>
        resolve(
          crypto
            .createHash('sha256')
            .update(val)
            .digest('hex')
        ),
      0
    )
  );
```

## 例子

```js
hashNode(JSON.stringify({ a: 'a', b: [1, 2, 3, 4], foo: { c: 'bar' } })).then(console.log); // '04aa106279f5977f59f9067fa9712afc4aedc6f5862a8defc34552d8c7206393'
```
