# hashBrowser

使用 [SHA-256](https://en.wikipedia.org/wiki/SHA-2) 算法为值创建哈希，返回一个 `promise` 对象。

使用 [SubtleCrypto](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto) API 为给定值创建哈希。

## 代码

```js
const hashBrowser = val =>
  crypto.subtle.digest('SHA-256', new TextEncoder('utf-8').encode(val)).then(h => {
    let hexes = [],
      view = new DataView(h);
    for (let i = 0; i < view.byteLength; i += 4)
      hexes.push(('00000000' + view.getUint32(i).toString(16)).slice(-8));
    return hexes.join('');
  });
```

## 例子

```js
hashBrowser(JSON.stringify({ a: 'a', b: [1, 2, 3, 4], foo: { c: 'bar' } })).then(console.log); // '04aa106279f5977f59f9067fa9712afc4aedc6f5862a8defc34552d8c7206393'
```
