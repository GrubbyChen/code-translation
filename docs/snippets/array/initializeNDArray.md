# initializeNDArray

Create a n-dimensional array with given value.

Use recursion.
Use `Array.prototype.map()` to generate rows where each is a new array initialized using `initializeNDArray`.

## 翻译

创建具有给定值的n维数组。

使用递归。
使用Array.prototype.map（）生成行，其中的每个行都是使用initializeNDArray初始化的新数组。

## 代码

```js
const initializeNDArray = (val, ...args) =>
  args.length === 0
    ? val
    : Array.from({ length: args[0] }).map(() => initializeNDArray(val, ...args.slice(1)));
```

## 例子

```js
initializeNDArray(1, 3); // [1,1,1]
initializeNDArray(5, 2, 2, 2); // [[[5,5],[5,5]],[[5,5],[5,5]]]
```
