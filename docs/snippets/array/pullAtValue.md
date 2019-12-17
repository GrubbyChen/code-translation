# pullAtValue

Mutates the original array to filter out the values specified. Returns the removed elements.

Use `Array.prototype.filter()` and `Array.prototype.includes()` to pull out the values that are not needed.
Use `Array.prototype.length = 0` to mutate the passed in an array by resetting it's length to zero and `Array.prototype.push()` to re-populate it with only the pulled values.
Use `Array.prototype.push()` to keep track of pulled values

## 翻译

突变原始数组以滤除指定的值。返回移除的元素。

使用Array.prototype.filter（）和Array.prototype.includes（）提取不需要的值。
使用“ Array.prototype.length = 0”通过将其传递的长度重置为零来改变传递的数组，并使用“ Array.prototype.push（）”仅使用提取的值重新填充它。
使用Array.prototype.push（）来跟踪提取的值

## 代码

```js
const pullAtValue = (arr, pullArr) => {
  let removed = [],
    pushToRemove = arr.forEach((v, i) => (pullArr.includes(v) ? removed.push(v) : v)),
    mutateTo = arr.filter((v, i) => !pullArr.includes(v));
  arr.length = 0;
  mutateTo.forEach(v => arr.push(v));
  return removed;
};
```

## 例子

```js
let myArray = ['a', 'b', 'c', 'd'];
let pulled = pullAtValue(myArray, ['b', 'd']); // myArray = [ 'a', 'c' ] , pulled = [ 'b', 'd' ]
```
