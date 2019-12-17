# rearg

创建一个函数，该函数调用提供的函数，其参数根据指定的索引排列。

使用`Array.prototype.map（）`结合散布运算符（`...`）对基于`indexes`的参数进行重新排序，以将转换后的参数传递给`fn`。

## 代码

```js
const rearg = (fn, indexes) => (...args) => fn(...indexes.map(i => args[i]));
```

## 例子

```js
var rearged = rearg(
  function(a, b, c) {
    return [a, b, c];
  },
  [2, 0, 1]
);
rearged('b', 'c', 'a'); // ['a', 'b', 'c']
```
