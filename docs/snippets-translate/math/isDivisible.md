# isDivisible

检查第一个数字参数是否可被第二个参数整除。

使用取模运算符（％）检查余数是否等于0。

## 代码

```js
const isDivisible = (dividend, divisor) => dividend % divisor === 0;
```

## 例子

```js
isDivisible(6, 3); // true
```
