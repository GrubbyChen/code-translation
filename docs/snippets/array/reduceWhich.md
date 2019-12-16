# reduceWhich

Returns the minimum/maximum value of an array, after applying the provided function to set comparing rule.

Use `Array.prototype.reduce()` in combination with the `comparator` function to get the appropriate element in the array.
You can omit the second parameter, `comparator`, to use the default one that returns the minimum element in the array.

## Translate

应用提供的函数设置比较规则后，返回数组的最小值/最大值。

将Array.prototype.reduce（）与comparator函数结合使用，以获取数组中适当的元素。
您可以省略第二个参数“比较器”，以使用默认参数来返回数组中的最小元素。

## Code

```js
const reduceWhich = (arr, comparator = (a, b) => a - b) =>
  arr.reduce((a, b) => (comparator(a, b) >= 0 ? b : a));
```

## Example

```js
reduceWhich([1, 3, 2]); // 1
reduceWhich([1, 3, 2], (a, b) => b - a); // 3
reduceWhich(
  [{ name: 'Tom', age: 12 }, { name: 'Jack', age: 18 }, { name: 'Lucy', age: 9 }],
  (a, b) => a.age - b.age
); // {name: "Lucy", age: 9}
```

## CodePlay

<template>
  <code-play codeplay-id="" />
</template>
