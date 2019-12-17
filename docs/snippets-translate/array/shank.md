# shank

具有与[`Array.prototype.splice（）`] [https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice）相同的功能，但返回一个新的而不是更改原始数组。

在删除现有元素和/或添加新元素之后，使用Array.prototype.slice（）和Array.prototype.concat（）获得具有新内容的新数组。
省略第二个参数“ index”，从“ 0”开始。
省略第三个参数“ delCount”，以删除“ 0”个元素。
省略第四个参数`elements`，以便不添加任何新元素。

## 代码

```js
const shank = (arr, index = 0, delCount = 0, ...elements) =>
  arr
    .slice(0, index)
    .concat(elements)
    .concat(arr.slice(index + delCount));
```

## 例子

```js
const names = ['alpha', 'bravo', 'charlie'];
const namesAndDelta = shank(names, 1, 0, 'delta'); // [ 'alpha', 'delta', 'bravo', 'charlie' ]
const namesNoBravo = shank(names, 1, 1); // [ 'alpha', 'charlie' ]
console.log(names); // ['alpha', 'bravo', 'charlie']
```
