# clampNumber

将 `num` 限制在边界值 `a` 和 `b` 指定的范围内。

- 如果 `num` 在此范围内，则返回 `num`。
- 否则，返回范围内最接近的边界值。

## 代码

```js
const clampNumber = (num, a, b) => Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));
```

## 例子

```js
clampNumber(2, 3, 5); // 3
clampNumber(1, -1, -5); // -1
```
