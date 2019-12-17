# average

Returns the average of two or more numbers.

Use `Array.prototype.reduce()` to add each value to an accumulator, initialized with a value of `0`, divide by the `length` of the array.

## 翻译

返回两个或多个数字的平均值。

使用Array.prototype.reduce（）将每个值添加到累加器中，并以值0初始化，再除以数组的长度。

## 代码

```js
const average = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length;
```

## 例子

```js
average(...[1, 2, 3]); // 2
average(1, 2, 3); // 2
```
