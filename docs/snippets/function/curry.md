# curry

对一个函数进行[柯里化](https://www.jianshu.com/p/e8ab3b6d5bcf)。

- 使用递归。
- 如果提供的参数 (`args`) 足够，则调用传递的函数 `fn`。
- 否则，返回一个期望剩余参数的柯里化函数 `fn`。
- 如果需要柯里化接受可变数量参数的函数（例如 `Math.min()`），则可以选择将参数数量传递给第二个参数 `arity`。

## 代码

```js
const curry = (fn, arity = fn.length, ...args) =>
  arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
```

## 例子

```js
curry(Math.pow)(2)(10); // 1024
curry(Math.min, 3)(10)(50)(2); // 2
```
