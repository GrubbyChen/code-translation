# vectorDistance

返回两个[向量](https://baike.baidu.com/item/%E5%90%91%E9%87%8F/1396519?fr=aladdin)之间的距离。

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
