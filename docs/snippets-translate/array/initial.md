# initial

返回数组中除最后一个元素之外的所有元素。

使用`arr.slice（0，-1）`返回除数组的最后一个元素以外的所有元素。

## 代码

```js
const initial = arr => arr.slice(0, -1);
```

## 例子

```js
initial([1, 2, 3]); // [1,2]
```
