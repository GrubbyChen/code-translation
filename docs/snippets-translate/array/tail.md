# tail

返回数组中除第一个元素外的所有元素。

如果数组的长度大于1，则返回Array.prototype.slice（1），否则返回整个数组。

## 代码

```js
const tail = arr => (arr.length > 1 ? arr.slice(1) : arr);
```

## 例子

```js
tail([1, 2, 3]); // [2,3]
tail([1]); // [1]
```
