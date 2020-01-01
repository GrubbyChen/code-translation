# toSafeInteger

将值转换为安全整数。

- 使用 `Math.max()` 和 `Math.min()` 查找最接近的安全值。
- 使用 `Math.round()` 转换为整数。

## 代码

```js
const toSafeInteger = num =>
  Math.round(Math.max(Math.min(num, Number.MAX_SAFE_INTEGER), Number.MIN_SAFE_INTEGER));
```

## 例子

```js
toSafeInteger('3.2'); // 3
toSafeInteger(Infinity); // 9007199254740991
```
