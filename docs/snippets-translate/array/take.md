# take

返回一个数组，其中从开头删除了n个元素。

使用Array.prototype.slice（）从一开始就使用n个元素创建数组的一部分。

## 代码

```js
const take = (arr, n = 1) => arr.slice(0, n);
```

## 例子

```js
take([1, 2, 3], 5); // [1, 2, 3]
take([1, 2, 3], 0); // []
```
