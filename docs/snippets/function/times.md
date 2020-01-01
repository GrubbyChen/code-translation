# times

遍历回调`n`次

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
