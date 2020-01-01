# when

当 `pred` 函数返回 `true` 时，返回 `fn(x)`，否则返回 `x`。

## 代码

```js
const when = (pred, whenTrue) => x => (pred(x) ? whenTrue(x) : x);
```

## 例子

```js
const doubleEvenNumbers = when(x => x % 2 === 0, x => x * 2);
doubleEvenNumbers(2); // 4
doubleEvenNumbers(1); // 1
```
