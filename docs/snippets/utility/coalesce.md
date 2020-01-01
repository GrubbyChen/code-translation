# coalesce

返回第一个非 `null` 或 `undefined` 的参数。

## 代码

```js
const coalesce = (...args) => args.find(_ => ![undefined, null].includes(_));
```

## 例子

```js
coalesce(null, undefined, '', NaN, 'Waldo'); // ""
```
