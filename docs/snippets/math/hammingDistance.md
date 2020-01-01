# hammingDistance

计算两个值之间的[汉明距离](https://baike.baidu.com/item/%E6%B1%89%E6%98%8E%E8%B7%9D%E7%A6%BB/475174?fr=aladdin)。

- 使用 XOR 运算符（`^`）查找两个数字之间的位差，然后使用 `toString(2)` 转换为二进制字符串。
- 使用 `match(/1/g)` 计算并返回字符串中 `1` 的数目。

## 代码

```js
const hammingDistance = (num1, num2) => ((num1 ^ num2).toString(2).match(/1/g) || '').length;
```

## 例子

```js
hammingDistance(2, 3); // 1
```
