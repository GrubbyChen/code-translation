# mapObject

Maps the values of an array to an object using a function, where the key-value pairs consist of the stringified value as the key and the mapped value.

Use an anonymous inner function scope to declare an undefined memory space, using closures to store a return value. Use a new `Array` to store the array with a map of the function over its data set and a comma operator to return a second step, without needing to move from one context to another (due to closures and order of operations).

## Translate

使用函数将数组的值映射到对象，其中键-值对由字符串化的值（作为键）和映射的值组成。

使用匿名内部函数作用域声明未定义的内存空间，并使用闭包存储返回值。使用新的“数组”将数组及其功能映射到其数据集，并使用逗号运算符返回第二步，而无需从一个上下文移至另一个上下文（由于闭包和操作顺序）。

## Code

```js
const mapObject = (arr, fn) =>
  (a => (
    (a = [arr, arr.map(fn)]), a[0].reduce((acc, val, ind) => ((acc[val] = a[1][ind]), acc), {})
  ))();
```

## Example

```js
const squareIt = arr => mapObject(arr, a => a * a);
squareIt([1, 2, 3]); // { 1: 1, 2: 4, 3: 9 }
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
