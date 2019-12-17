# indexOfAll

返回数组中所有“ val”的索引。
如果`val`从未发生，则返回`[]`。

使用Array.prototype.reduce（）遍历元素并存储索引以匹配元素。
返回索引数组。

## 代码

```js
const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);
```

## 例子

```js
indexOfAll([1, 2, 3, 1, 2, 3], 1); // [0,3]
indexOfAll([1, 2, 3], 4); // []
```
