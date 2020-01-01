# deepClone

创建对象的深拷贝。

- 使用递归。
- 检查传递的对象是否为 null，如果是则返回 null。
- 使用 `Object.assign()` 和空对象创建原始对象的副本。
- 使用 `Object.keys()` 和 `Array.prototype.forEach()` 确定哪些键值对需要深拷贝。

## 代码

```js
const deepClone = obj => {
  if (obj === null) return null;
  let clone = Object.assign({}, obj);
  Object.keys(clone).forEach(
    key => (clone[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key])
  );
  return Array.isArray(obj) && obj.length
    ? (clone.length = obj.length) && Array.from(clone)
    : Array.isArray(obj)
    ? Array.from(obj)
    : clone;
};
```

## 例子

```js
const a = { foo: 'bar', obj: { a: 1, b: 2 } };
const b = deepClone(a); // a !== b, a.obj !== b.obj
```
