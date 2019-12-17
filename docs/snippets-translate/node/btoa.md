# btoa

从String对象创建一个base-64编码的ASCII字符串，该字符串对象中的每个字符都被视为二进制数据的字节。

使用二进制编码为给定的字符串创建一个“ Buffer”，并使用“ Buffer.toString（'base64'）”返回编码后的字符串。

## 代码

```js
const btoa = str => Buffer.from(str, 'binary').toString('base64');
```

## 例子

```js
btoa('foobar'); // 'Zm9vYmFy'
```
