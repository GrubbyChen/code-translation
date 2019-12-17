# isArrayLike

检查所提供的参数是否类似于数组（即可迭代）。

检查所提供的参数是否不是null，并且其Symbol.iterator属性是否为函数。

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
