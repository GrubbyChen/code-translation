# deepFlatten

Deep展平数组。

使用递归。
将`Array.prototype.concat（）`与一个空数组（`[]`）和散布运算符（`...`）一起使用，以使数组变平。
以递归方式展平数组中的每个元素。

## 代码

```js
const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));
```

## 例子

```js
deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]
```
