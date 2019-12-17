# remove

Removes elements from an array for which the given function returns `false`.

Use `Array.prototype.filter()` to find array elements that return truthy values and `Array.prototype.reduce()` to remove elements using `Array.prototype.splice()`.
The `func` is invoked with three arguments (`value, index, array`).

## 翻译

从给定函数为其返回false的数组中删除元素。

使用Array.prototype.filter（）查找返回真实值的数组元素，并使用Array.prototype.reduce（）使用Array.prototype.splice（）删除元素。
“ func”由三个参数（“ value”，“ index”，“ array”）调用。

## 代码

```js

const remove = (arr, func) =>
  Array.isArray(arr)
    ? arr.filter(func).reduce((acc, val) => {
      arr.splice(arr.indexOf(val), 1);
      return acc.concat(val);
    }, [])
    : [];
```

## 例子

```js
remove([1, 2, 3, 4], n => n % 2 === 0); // [2, 4]
```
