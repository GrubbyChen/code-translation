# deepClone

Creates a deep clone of an object.

Use recursion.
Check if the passed object is `null` and, if so, return `null`.
Use `Object.assign()` and an empty object (`{}`) to create a shallow clone of the original.
Use `Object.keys()` and `Array.prototype.forEach()` to determine which key-value pairs need to be deep cloned.

## 翻译

创建对象的深层克隆。

使用递归。
检查传递的对象是否为null，如果是，则返回null。
使用Object.assign（）和空对象（{}）创建原始对象的浅表副本。
使用Object.keys（）和Array.prototype.forEach（）确定哪些键值对需要深度克隆。

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
