# hammingDistance

Calculates the Hamming distance between two values.

Use XOR operator (`^`) to find the bit difference between the two numbers, convert to a binary string using `toString(2)`.
Count and return the number of `1`s in the string, using `match(/1/g)`.

## 翻译

计算两个值之间的汉明距离。

使用XOR运算符（`^`）查找两个数字之间的位差，然后使用`toString（2）`转换为二进制字符串。
使用match（/ 1 / g）计算并返回字符串中1的数目。

## 代码

```js
const hammingDistance = (num1, num2) => ((num1 ^ num2).toString(2).match(/1/g) || '').length;
```

## 例子

```js
hammingDistance(2, 3); // 1
```
