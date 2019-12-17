# takeRightWhile

从数组末尾删除元素，直到传递的函数返回“ true”为止。返回移除的元素。

使用一个Array.prototype.reduceRight（）遍历数组，并在函数返回假值时累加元素。

## 代码

```js
const takeRightWhile = (arr, func) =>
  arr.reduceRight((acc, el) => (func(el) ? acc : [el, ...acc]), []);
```

## 例子

```js
takeRightWhile([1, 2, 3, 4], n => n < 3); // [3, 4]
```
