# shallowClone

创建对象的浅拷贝。

## 代码

```js
const shallowClone = obj => Object.assign({}, obj);
```

## 例子

```js
const a = { x: true, y: 1 };
const b = shallowClone(a); // a !== b
```
