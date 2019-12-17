# dig

Returns the target value in a nested JSON object, based on the given key.

Use the `in` operator to check if `target` exists in `obj`.
If found, return the value of `obj[target]`, otherwise use `Object.values(obj)` and `Array.prototype.reduce()` to recursively call `dig` on each nested object until the first matching key/value pair is found.

## 翻译

根据给定的键，返回嵌套JSON对象中的目标值。

使用in操作符检查obj中是否存在目标。
如果找到，则返回obj [target]的值，否则使用Object.values（obj）和Array.prototype.reduce（）在每个嵌套对象上递归调用dig，直到第一个匹配的键/找到值对。

## 代码

```js
const dig = (obj, target) =>
  target in obj
    ? obj[target]
    : Object.values(obj).reduce((acc, val) => {
        if (acc !== undefined) return acc;
        if (typeof val === 'object') return dig(val, target);
      }, undefined);
```

## 例子

```js
const data = {
  level1: {
    level2: {
      level3: 'some data'
    }
  }
};
dig(data, 'level3'); // 'some data'
dig(data, 'level4'); // undefined
```
