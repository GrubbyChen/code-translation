# rearg

创建一个函数，该函数调用提供的函数，其参数根据指定的索引排列。

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
