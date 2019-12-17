# sum

Returns the sum of two or more numbers/arrays.

Use `Array.prototype.reduce()` to add each value to an accumulator, initialized with a value of `0`.

## 翻译

返回两个或多个数字/数组的总和。

使用Array.prototype.reduce（）将每个值添加到累加器中，并以值0初始化。

## 代码

```js
const sum = (...arr) => [...arr].reduce((acc, val) => acc + val, 0);
```

## 例子

```js
sum(1, 2, 3, 4); // 10
sum(...[1, 2, 3, 4]); // 10
```
