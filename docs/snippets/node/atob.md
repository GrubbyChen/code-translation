# atob

Decodes a string of data which has been encoded using base-64 encoding.

Create a `Buffer` for the given string with base-64 encoding and use `Buffer.toString('binary')` to return the decoded string.

## 翻译

解码已使用base-64编码编码的数据字符串。

使用base-64编码为给定的字符串创建一个“ Buffer”，并使用“ Buffer.toString（'binary'）”返回解码后的字符串。

## 代码

```js
const atob = str => Buffer.from(str, 'base64').toString('binary');
```

## 例子

```js
atob('Zm9vYmFy'); // 'foobar'
```
