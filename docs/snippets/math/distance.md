# distance

Returns the distance between two points.

Use `Math.hypot()` to calculate the Euclidean distance between two points.

## 翻译

返回两点之间的距离。

使用Math.hypot（）计算两点之间的欧几里得距离。

## 代码

```js
const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);
```

## 例子

```js
distance(1, 1, 2, 3); // 2.23606797749979
```
