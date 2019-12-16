# UUIDGeneratorBrowser

Generates a UUID in a browser.

Use `crypto` API to generate a UUID, compliant with [RFC4122](https://www.ietf.org/rfc/rfc4122.txt) version 4.

## Translate

在浏览器中生成UUID。

使用`crypto` API生成符合[RFC4122]（https://www.ietf.org/rfc/rfc4122.txt）版本4的UUID。

## Code

```js
const UUIDGeneratorBrowser = () =>
  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
  );
```

## Example

```js
UUIDGeneratorBrowser(); // '7982fcfe-5721-4632-bede-6000885be57d'
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
