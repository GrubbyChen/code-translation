# sumPower

返回从“开始”到“结束”（包括两端）的所有数字的幂的和。

使用Array.prototype.fill（）创建目标范围内所有数字的数组，使用Array.prototype.map（）和指数运算符（**）将其提高为幂，然后使用Array.prototype.reduce（）将它们添加在一起。
忽略第二个参数power，以使用默认的power 2。
忽略第三个参数“ start”以使用默认的起始值“ 1”。

## 代码

```js
const sumPower = (end, power = 2, start = 1) =>
  Array(end + 1 - start)
    .fill(0)
    .map((x, i) => (i + start) ** power)
    .reduce((a, b) => a + b, 0);
```

## 例子

```js
sumPower(10); // 385
sumPower(10, 3); // 3025
sumPower(10, 3, 5); // 2925
```
