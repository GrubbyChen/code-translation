# defaults

为对象中所有未定义的属性分配默认值。

使用Object.assign（）创建一个新的空对象，并复制原始对象以保持键顺序，使用Array.prototype.reverse（）和散布运算符...来组合左侧的默认值在右边，最后再次使用`obj`覆盖原来具有值的属性。

## 代码

```js
const defaults = (obj, ...defs) => Object.assign({}, obj, ...defs.reverse(), obj);
```

## 例子

```js
defaults({ a: 1 }, { b: 2 }, { b: 6 }, { a: 3 }); // { a: 1, b: 2 }
```
