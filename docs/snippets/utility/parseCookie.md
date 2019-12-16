# parseCookie

Parse an HTTP Cookie header string and return an object of all cookie name-value pairs.

Use `String.prototype.split(';')` to separate key-value pairs from each other.
Use `Array.prototype.map()` and `String.prototype.split('=')` to separate keys from values in each pair.
Use `Array.prototype.reduce()` and `decodeURIComponent()` to create an object with all key-value pairs.

## Translate

解析HTTP Cookie标头字符串，并返回所有cookie名称-值对的对象。

使用`String.prototype.split（';'）`来分隔键值对。
使用“ Array.prototype.map（）”和“ String.prototype.split（'='）`将键与每对值分开。
使用Array.prototype.reduce（）和decodeURIComponent（）创建具有所有键值对的对象。

## Code

```js
const parseCookie = str =>
  str
    .split(';')
    .map(v => v.split('='))
    .reduce((acc, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      return acc;
    }, {});
```

## Example

```js
parseCookie('foo=bar; equation=E%3Dmc%5E2'); // { foo: 'bar', equation: 'E=mc^2' }
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
