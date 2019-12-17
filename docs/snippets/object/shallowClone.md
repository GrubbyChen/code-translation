# shallowClone

Creates a shallow clone of an object.

Use `Object.assign()` and an empty object (`{}`) to create a shallow clone of the original.

## 翻译

创建对象的浅表副本。

使用Object.assign（）和空对象（{}）创建原始对象的浅表副本。

## 代码

```js
const shallowClone = obj => Object.assign({}, obj);
```

## 例子

```js
const a = { x: true, y: 1 };
const b = shallowClone(a); // a !== b
```
