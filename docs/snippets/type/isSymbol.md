# isSymbol

检查传入的参数是否为 `symbol` 类型。

## 代码

```js
const isSymbol = val => typeof val === 'symbol';
```

## 例子

```js
isSymbol(Symbol('x')); // true
```
