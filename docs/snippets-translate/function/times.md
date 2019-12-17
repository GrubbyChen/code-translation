# times

遍历回调`n`次

使用Function.call（）来调用fn次或直到返回false为止。
省略最后一个参数“ context”，以使用“ undefined”对象（或非严格模式下的全局对象）。

## 代码

```js
const times = (n, fn, context = undefined) => {
  let i = 0;
  while (fn.call(context, i) !== false && ++i < n) {}
};
```

## 例子

```js
var output = '';
times(5, i => (output += i));
console.log(output); // 01234
```
