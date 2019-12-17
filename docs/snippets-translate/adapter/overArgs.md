# overArgs

创建一个函数，该函数调用提供的函数并转换其参数。

使用Array.prototype.map（）来将`transforms`应用于`args`并与散布运算符（`...`）一起将转换后的参数传递给`fn`。

## 代码

```js
const overArgs = (fn, transforms) => (...args) => fn(...args.map((val, i) => transforms[i](val)));
```

## 例子

```js
const square = n => n * n;
const double = n => n * 2;
const fn = overArgs((x, y) => [x, y], [square, double]);
fn(9, 3); // [81, 6]
```
