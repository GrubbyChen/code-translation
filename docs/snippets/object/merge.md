# merge

Creates a new object from the combination of two or more objects.

Use `Array.prototype.reduce()` combined with `Object.keys(obj)` to iterate over all objects and keys.
Use `hasOwnProperty()` and `Array.prototype.concat()` to append values for keys existing in multiple objects.

## 翻译

通过两个或更多对象的组合创建一个新对象。

将Array.prototype.reduce（）与Object.keys（obj）结合使用以遍历所有对象和键。
使用“ hasOwnProperty（）”和“ Array.prototype.concat（）”为存在于多个对象中的键附加值。

## 代码

```js
const merge = (...objs) =>
  [...objs].reduce(
    (acc, obj) =>
      Object.keys(obj).reduce((a, k) => {
        acc[k] = acc.hasOwnProperty(k) ? [].concat(acc[k]).concat(obj[k]) : obj[k];
        return acc;
      }, {}),
    {}
  );
```

## 例子

```js
const object = {
  a: [{ x: 2 }, { y: 4 }],
  b: 1
};
const other = {
  a: { z: 3 },
  b: [2, 3],
  c: 'foo'
};
merge(object, other); // { a: [ { x: 2 }, { y: 4 }, { z: 3 } ], b: [ 1, 2, 3 ], c: 'foo' }
```
