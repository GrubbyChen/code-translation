# pullBy

Mutates the original array to filter out the values specified, based on a given iterator function.

Check if the last argument provided in a function.
Use `Array.prototype.map()` to apply the iterator function `fn` to all array elements.
Use `Array.prototype.filter()` and `Array.prototype.includes()` to pull out the values that are not needed.
Use `Array.prototype.length = 0` to mutate the passed in an array by resetting it's length to zero and `Array.prototype.push()` to re-populate it with only the pulled values.

## 翻译

根据给定的迭代器函数，对原始数组进行突变以滤除指定的值。

检查函数中是否提供了最后一个参数。
使用Array.prototype.map()将迭代器函数fn应用于所有数组元素。
使用Array.prototype.filter()和Array.prototype.includes()提取不需要的值。
使用“ Array.prototype.length = 0”通过将其传递的长度重置为零来改变传递的数组，并使用“ Array.prototype.push()”仅使用提取的值重新填充它。

## 代码

```js
const pullBy = (arr, ...args) => {
  const length = args.length;
  let fn = length > 1 ? args[length - 1] : undefined;
  fn = typeof fn == 'function' ? (args.pop(), fn) : undefined;
  let argState = (Array.isArray(args[0]) ? args[0] : args).map(val => fn(val));
  let pulled = arr.filter((v, i) => !argState.includes(fn(v)));
  arr.length = 0;
  pulled.forEach(v => arr.push(v));
};
```

## 例子

```js
var myArray = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }];
pullBy(myArray, [{ x: 1 }, { x: 3 }], o => o.x); // myArray = [{ x: 2 }]
```
