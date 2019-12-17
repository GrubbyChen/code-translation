# isString

检查给定参数是否为字符串。仅适用于字符串基元。

使用`typeof`来检查一个值是否被归类为字符串基元。

## 代码

```js
const isString = val => typeof val === 'string';
```

## 例子

```js
isString('10'); // true
```