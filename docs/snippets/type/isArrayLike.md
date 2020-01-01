# isArrayLike

检查传入的参数是否为类数组对象。

- 检查传入的参数是否不是 `null`，并且其 `Symbol.iterator` 属性是否为函数。

## 代码

```js
const isArrayLike = obj => obj != null && typeof obj[Symbol.iterator] === 'function';
```

## 例子

```js
isArrayLike(document.querySelectorAll('.className')); // true
isArrayLike('abc'); // true
isArrayLike(null); // false
```
