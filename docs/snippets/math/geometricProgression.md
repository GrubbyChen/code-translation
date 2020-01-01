# geometricProgression

初始化一个数组，该数组包含指定范围内的所有数字。

- 使用 `Array.from()`、`Math.log()` 和 `Math.floor()` 创建所需长度的数组，`Array.prototype.map()` 来填充数组元素。
- 第二个参数 `start` 为数组起始数字，默认值为 `1`。
- 第三个参数 `step` 为每个数字的乘积，默认值为 `2`，若值为 `1` 则会报错，

## 代码

```js
const geometricProgression = (end, start = 1, step = 2) =>
  Array.from({ length: Math.floor(Math.log(end / start) / Math.log(step)) + 1 }).map(
    (v, i) => start * step ** i
  );
```

## 例子

```js
geometricProgression(256); // [1, 2, 4, 8, 16, 32, 64, 128, 256]
geometricProgression(256, 3); // [3, 6, 12, 24, 48, 96, 192]
geometricProgression(256, 1, 4); // [1, 4, 16, 64, 256]
```
