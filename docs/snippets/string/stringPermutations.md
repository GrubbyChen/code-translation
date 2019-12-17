# stringPermutations

Generates all permutations of a string (contains duplicates).

⚠️ **WARNING**: This function's execution time increases exponentially with each character. Anything more than 8 to 10 characters will cause your browser to hang as it tries to solve all the different combinations.

Use recursion.
For each letter in the given string, create all the partial permutations for the rest of its letters.
Use `Array.prototype.map()` to combine the letter with each partial permutation, then `Array.prototype.reduce()` to combine all permutations in one array.
Base cases are for string `length` equal to `2` or `1`.

## 翻译

生成字符串的所有排列（包含重复项）。

⚠️**警告**：该函数的执行时间随着每个字符的增加而呈指数增长。超过8到10个字符的任何字符都会导致您的浏览器在尝试解决所有不同的组合时挂起。

使用递归。
对于给定字符串中的每个字母，为其其余字母创建所有部分排列。
使用Array.prototype.map（）将字母与每个部分排列组合，然后使用Array.prototype.reduce（）将所有排列组合在一个数组中。
基本情况是字符串“ length”等于“ 2”或“ 1”。

## 代码

```js
const stringPermutations = str => {
  if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
  return str
    .split('')
    .reduce(
      (acc, letter, i) =>
        acc.concat(stringPermutations(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)),
      []
    );
};
```

## 例子

```js
stringPermutations('abc'); // ['abc','acb','bac','bca','cab','cba']
```
