# union

Returns every element that exists in any of the two arrays once.

Create a `Set` with all values of `a` and `b` and convert to an array.

## 翻译

一次返回两个数组中任何一个存在的每个元素。

创建一个具有所有值a和b的Set并将其转换为数组。

## 代码

```js
const union = (a, b) => Array.from(new Set([...a, ...b]));
```

## 例子

```js
union([1, 2, 3], [4, 3, 2]); // [1,2,3,4]
```
