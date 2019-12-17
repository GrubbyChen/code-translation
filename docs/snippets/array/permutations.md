# permutations

Generates all permutations of an array's elements (contains duplicates).

⚠️ **WARNING**: This function's execution time increases exponentially with each array element. Anything more than 8 to 10 entries will cause your browser to hang as it tries to solve all the different combinations.

Use recursion.
For each element in the given array, create all the partial permutations for the rest of its elements.
Use `Array.prototype.map()` to combine the element with each partial permutation, then `Array.prototype.reduce()` to combine all permutations in one array.
Base cases are for array `length` equal to `2` or `1`.

## 翻译

生成数组元素的所有排列（包含重复项）。

⚠警告**：此函数的执行时间随每个数组元素呈指数增加。超过8到10个条目的任何内容都会导致您的浏览器在尝试解决所有不同的组合时挂起。

使用递归。
对于给定数组中的每个元素，为其其余元素创建所有部分置换。
使用“ Array.prototype.map（）”将元素与每个部分排列组合，然后使用“ Array.prototype.reduce（）”将所有排列组合在一个数组中。
基本情况是数组“ length”等于“ 2”或“ 1”。

## 代码

```js
const permutations = arr => {
  if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;
  return arr.reduce(
    (acc, item, i) =>
      acc.concat(
        permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [item, ...val])
      ),
    []
  );
};
```

## 例子

```js
permutations([1, 33, 5]); // [ [ 1, 33, 5 ], [ 1, 5, 33 ], [ 33, 1, 5 ], [ 33, 5, 1 ], [ 5, 1, 33 ], [ 5, 33, 1 ] ]
```
