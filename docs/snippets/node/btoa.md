# btoa

Creates a base-64 encoded ASCII string from a String object in which each character in the string is treated as a byte of binary data.

Create a `Buffer` for the given string with binary encoding and use `Buffer.toString('base64')` to return the encoded string.

## Translate

从String对象创建一个base-64编码的ASCII字符串，该字符串对象中的每个字符都被视为二进制数据的字节。

使用二进制编码为给定的字符串创建一个“ Buffer”，并使用“ Buffer.toString（'base64'）”返回编码后的字符串。

## Code

```js
const btoa = str => Buffer.from(str, 'binary').toString('base64');
```

## Example

```js
btoa('foobar'); // 'Zm9vYmFy'
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
