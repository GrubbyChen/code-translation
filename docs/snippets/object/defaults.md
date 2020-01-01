# defaults

为对象中所有未定义的属性分配默认值。

- 使用 `Object.assign()` 创建一个新的空对象，并复制原始对象以保持键顺序。
- 使用 `Array.prototype.reverse()` 和扩展运算符 `...`，这样可以按照传入的对象顺序定义键的优先级。
- 最后再次使用 `obj` 覆盖原来具有值的属性。

## 代码

```js
const defaults = (obj, ...defs) => Object.assign({}, obj, ...defs.reverse(), obj);
```

## 例子

```js
defaults({ a: 1 }, { b: 2 }, { b: 6 }, { a: 3 }); // { a: 1, b: 2 }
```
