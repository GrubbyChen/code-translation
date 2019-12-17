# shuffle

Randomizes the order of the values of an array, returning a new array.

Uses the [Fisher-Yates algorithm](https://github.com/30-seconds/30-seconds-of-code#shuffle) to reorder the elements of the array.

## 翻译

随机化数组值的顺序，返回一个新数组。

使用[Fisher-Yates算法]（https://github.com/30-seconds/30-seconds-of-code#shuffle）重新排列数组的元素。

## 代码

```js
const shuffle = ([...arr]) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};
```

## 例子

```js
const foo = [1, 2, 3];
shuffle(foo); // [2, 3, 1], foo = [1, 2, 3]
```
