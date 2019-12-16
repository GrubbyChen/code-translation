# serializeCookie

Serialize a cookie name-value pair into a Set-Cookie header string.

Use template literals and `encodeURIComponent()` to create the appropriate string.

## Translate

将Cookie名称/值对序列化为Set-Cookie标头字符串。

使用模板文字和`encodeURIComponent（）`创建适当的字符串。

## Code

```js
const serializeCookie = (name, val) => `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;
```

## Example

```js
serializeCookie('foo', 'bar'); // 'foo=bar'
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
