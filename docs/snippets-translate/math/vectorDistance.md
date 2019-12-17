# vectorDistance

返回两个向量之间的距离。

使用Array.prototype.reduce（），Math.pow（）和Math.sqrt（）计算两个向量之间的欧几里得距离。

## 代码

```js
const vectorDistance = (...coords) => {
  let pointLength = Math.trunc(coords.length / 2);
  let sum = coords
    .slice(0, pointLength)
    .reduce((acc, val, i) => acc + Math.pow(val - coords[pointLength + i], 2), 0);
  return Math.sqrt(sum);
};
```

## 例子

```js
vectorDistance(10, 0, 5, 20, 0, 10); // 11.180339887498949
```
