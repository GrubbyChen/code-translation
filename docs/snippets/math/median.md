# median

返回数字数组的中位数，如果数组长度为奇数，则返回中间数字，否则返回两个中间数字的平均值。

## 代码

```js
const median = arr => {
  const mid = Math.floor(arr.length / 2),
    nums = [...arr].sort((a, b) => a - b);
  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};
```

## 例子

```js
median([5, 6, 50, 1, -5]); // 5
```
