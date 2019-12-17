# bifurcate

Splits values into two groups. If an element in `filter` is truthy, the corresponding element in the collection belongs to the first group; otherwise, it belongs to the second group.

Use `Array.prototype.reduce()` and `Array.prototype.push()` to add elements to groups, based on `filter`.

## 翻译

将值分为两组。如果`filter`中的元素是真实的，则集合中的对应元素属于第一组；否则，它属于第二组。

使用array.prototype.reduce（）和Array.prototype.push（）将元素添加到基于filter的组中。

## 代码

```js
const bifurcate = (arr, filter) =>
  arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]);
```

## 例子

```js
bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]); // [ ['beep', 'boop', 'bar'], ['foo'] ]
```
