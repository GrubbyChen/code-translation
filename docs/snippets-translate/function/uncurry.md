# uncurry

取消直到n深度的函数。

返回可变参数函数。
在提供的参数上使用Array.prototype.reduce（）来调用函数的每个后续咖喱级别。
如果提供的参数的“长度”小于“ n”，则抛出错误。
否则，使用Array.prototype.slice（0，n）用适当数量的参数调用fn。
忽略第二个参数“ n”，以取消深度直至“ 1”。

## 代码

```js
const uncurry = (fn, n = 1) => (...args) => {
  const next = acc => args => args.reduce((x, y) => x(y), acc);
  if (n > args.length) throw new RangeError('Arguments too few!');
  return next(fn)(args.slice(0, n));
};
```

## 例子

```js
const add = x => y => z => x + y + z;
const uncurriedAdd = uncurry(add, 3);
uncurriedAdd(1, 2, 3); // 6
```
