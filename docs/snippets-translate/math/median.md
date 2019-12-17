# median

返回数字数组的中位数。

找到数组的中间，使用Array.prototype.sort（）对值进行排序。
如果`length`为奇数，则返回中点的数字，否则返回两个中间数字的平均值。

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