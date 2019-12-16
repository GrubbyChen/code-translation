# hashNode

Creates a hash for a value using the [SHA-256](https://en.wikipedia.org/wiki/SHA-2) algorithm. Returns a promise.

Use `crypto` API to create a hash for the given value, `setTimeout` to prevent blocking on a long operation, and a `Promise` to give it a familiar interface.

## Translate

使用[SHA-256]（https://en.wikipedia.org/wiki/SHA-2）算法为值创建哈希。返回承诺。

使用“ crypto” API为给定值创建一个哈希值，使用“ setTimeout”防止长时间操作阻塞，并使用“ Promise”为其提供熟悉的界面。

## Code

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

## Example

```js
hashNode(JSON.stringify({ a: 'a', b: [1, 2, 3, 4], foo: { c: 'bar' } })).then(console.log); // '04aa106279f5977f59f9067fa9712afc4aedc6f5862a8defc34552d8c7206393'
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
