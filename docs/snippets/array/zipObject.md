# zipObject

Given an array of valid property identifiers and an array of values, return an object associating the properties to the values.

Since an object can have undefined values but not undefined property pointers, the array of properties is used to decide the structure of the resulting object using `Array.prototype.reduce()`.

## 翻译

给定一个有效的属性标识符数组和一个值数组，返回一个将属性与值相关联的对象。

由于对象可以具有未定义的值，但不能具有未定义的属性指针，因此属性数组用于通过Array.prototype.reduce（）来确定结果对象的结构。

## 代码

```js
const zipObject = (props, values) =>
  props.reduce((obj, prop, index) => ((obj[prop] = values[index]), obj), {});
```

## 例子

```js
zipObject(['a', 'b', 'c'], [1, 2]); // {a: 1, b: 2, c: undefined}
zipObject(['a', 'b'], [1, 2, 3]); // {a: 1, b: 2}
```
