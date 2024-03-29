# UUIDGeneratorBrowser

在浏览器中生成 `UUID`。

- 使用 `crypto` API 生成符合 [RFC4122](https://www.ietf.org/rfc/rfc4122.txt) v4 版本的 `UUID`。

## 代码

```js
const UUIDGeneratorBrowser = () =>
  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
  );
```

## 例子

```js
UUIDGeneratorBrowser(); // '7982fcfe-5721-4632-bede-6000885be57d'
```
