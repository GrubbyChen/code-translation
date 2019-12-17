# isObjectLike

检查值是否类似于对象。

检查所提供的值是否不是'null'，并且其'typeof'是否等于'object'。

## 代码

```js
const isObjectLike = val => val !== null && typeof val === 'object';
```

## 例子

```js
isObjectLike({}); // true
isObjectLike([1, 2, 3]); // true
isObjectLike(x => x); // false
isObjectLike(null); // false
```
