# curry

Curries a function.

Use recursion.
If the number of provided arguments (`args`) is sufficient, call the passed function `fn`.
Otherwise, return a curried function `fn` that expects the rest of the arguments.
If you want to curry a function that accepts a variable number of arguments (a variadic function, e.g. `Math.min()`), you can optionally pass the number of arguments to the second parameter `arity`.

## 翻译

咖喱函数。

使用递归。
如果提供的参数（args）足够，请调用传递的函数fn。
否则，返回一个期望剩余参数的咖喱函数“ fn”。
如果您想咖喱接受可变数量参数的函数（可变函数，例如`Math.min（）`），则可以选择将参数数量传递给第二个参数``arity''。

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
