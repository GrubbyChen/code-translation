# mapNumRange

将数字从一个范围映射到另一范围。

从`inMin`-`inMax`返回映射在`outMin`-`outMax`之间的`num`。

## 代码

```js
const mapNumRange = (num, inMin, inMax, outMin, outMax) =>
  ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
```

## 例子

```js
mapNumRange(5, 0, 10, 0, 100); // 50
```
