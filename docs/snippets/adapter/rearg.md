# rearg

Creates a function that invokes the provided function with its arguments arranged according to the specified indexes.

Use `Array.prototype.map()` to reorder arguments based on `indexes` in combination with the spread operator (`...`) to pass the transformed arguments to `fn`.

## Translate

创建一个函数，该函数调用提供的函数，其参数根据指定的索引排列。

使用`Array.prototype.map（）`结合散布运算符（`...`）对基于`indexes`的参数进行重新排序，以将转换后的参数传递给`fn`。

## Code

```js
const rearg = (fn, indexes) => (...args) => fn(...indexes.map(i => args[i]));
```

## Example

```js
var rearged = rearg(
  function(a, b, c) {
    return [a, b, c];
  },
  [2, 0, 1]
);
rearged('b', 'c', 'a'); // ['a', 'b', 'c']
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
