# transform

对一个累加器和对象中的每个键（从左到右）应用一个函数。

使用Object.keys（obj）遍历对象中的每个键，使用Array.prototype.reduce（）调用将指定函数应用于给定的累加器。

## 代码

```js
const transform = (obj, fn, acc) => Object.keys(obj).reduce((a, k) => fn(a, obj[k], k, obj), acc);
```

## 例子

```js
transform(
  { a: 1, b: 2, c: 1 },
  (r, v, k) => {
    (r[v] || (r[v] = [])).push(k);
    return r;
  },
  {}
); // { '1': ['a', 'c'], '2': ['b'] }
```
