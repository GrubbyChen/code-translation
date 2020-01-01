# digitize

将数字转换为数字数组。

## 代码

```js
const digitize = n => [...`${n}`].map(i => parseInt(i));
```

## 例子

```js
digitize(123); // [1, 2, 3]
```
