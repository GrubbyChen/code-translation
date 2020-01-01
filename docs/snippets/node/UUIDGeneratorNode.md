# UUIDGeneratorNode

在 Node.JS 中生成一个 `UUID`。

- 使用 `crypto` API 生成符合 [RFC4122](https://www.ietf.org/rfc/rfc4122.txt) v4 版本的 `UUID`。

## 代码

```js
const crypto = require('crypto');
const UUIDGeneratorNode = () =>
  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (c ^ (crypto.randomBytes(1)[0] & (15 >> (c / 4)))).toString(16)
  );
```

## 例子

```js
UUIDGeneratorNode(); // '79c7c136-60ee-40a2-beb2-856f1feabefc'
```
