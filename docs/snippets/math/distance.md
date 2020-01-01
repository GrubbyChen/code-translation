# distance

返回两点之间的距离。

- 使用 `Math.hypot()` 计算两点之间的[欧几里得距离](https://baike.baidu.com/item/%E6%AC%A7%E5%87%A0%E9%87%8C%E5%BE%97%E5%BA%A6%E9%87%8F/1274107?fromtitle=%E6%AC%A7%E5%87%A0%E9%87%8C%E5%BE%97%E8%B7%9D%E7%A6%BB&fromid=2701459&fr=aladdin)。

## 代码

```js
const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);
```

## 例子

```js
distance(1, 1, 2, 3); // 2.23606797749979
```
