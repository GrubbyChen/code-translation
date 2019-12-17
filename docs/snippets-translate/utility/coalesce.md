# coalesce

返回第一个非null / undefined参数。

使用Array.prototype.find（）返回第一个非null / undefined参数。

## 代码

```js
const coalesce = (...args) => args.find(_ => ![undefined, null].includes(_));
```

## 例子

```js
coalesce(null, undefined, '', NaN, 'Waldo'); // ""
```
