# dig

根据给定的键，返回对象中的目标值。

- 使用 `in` 操作符检查 `obj` 中是否存在目标。
- 如果找到，则返回 `obj[target]` 的值，否则使用 `Object.values(obj)` 和 `Array.prototype.reduce()` 在每个嵌套对象上递归调用 `dig` 函数，直到第一个匹配的键/找到值对。

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
