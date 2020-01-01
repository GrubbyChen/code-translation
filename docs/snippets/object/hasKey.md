# hasKey

如果目标值存在于对象中，则返回 `true`，否则返回 `false`。

- 若 `keys` 为空则直接返回 `false`
- 使用 `Array.prototype.every()` 遍历 `keys`。
- 若 `obj` 不是对象，或者 `Object.prototype.hasOwnProperty()` 检查 `obj` 没有对应的键值，终止循环并返回 `false`
- 否则，将键对应的值分配给 `obj` 以在下一次迭循环中使用。

## 代码

```js
const hasKey = (obj, keys) => {
  return (
    keys.length > 0 &&
    keys.every(key => {
      if (typeof obj !== 'object' || !obj.hasOwnProperty(key)) return false;
      obj = obj[key];
      return true;
    })
  );
};
```

## 例子

```js
let obj = {
  a: 1,
  b: { c: 4 },
  'b.d': 5
};
hasKey(obj, ['a']); // true
hasKey(obj, ['b']); // true
hasKey(obj, ['b', 'c']); // true
hasKey(obj, ['b.d']); // true
hasKey(obj, ['d']); // false
hasKey(obj, ['c']); // false
hasKey(obj, ['b', 'f']); // false
```
