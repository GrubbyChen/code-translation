# sumPower

返回从开始到结束（包括两端）的所有数字的幂的和。

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
