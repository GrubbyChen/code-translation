# compose

执行从右到左的功能合成。

使用Array.prototype.reduce（）执行从右到左的函数合成。
最后一个（最右边）函数可以接受一个或多个参数。其余功能必须是一元的。

## 代码

```js
const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));
```

## 例子

```js
const add5 = x => x + 5;
const multiply = (x, y) => x * y;
const multiplyAndAdd5 = compose(
  add5,
  multiply
);
multiplyAndAdd5(5, 2); // 15
```
