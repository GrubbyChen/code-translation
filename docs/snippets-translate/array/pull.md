# pull

突变原始数组以滤除指定的值。

使用Array.prototype.filter（）和Array.prototype.includes（）提取不需要的值。
使用“ Array.prototype.length = 0”通过将其传递的长度重置为零来改变传递的数组，并使用“ Array.prototype.push（）”仅使用提取的值重新填充它。

## 代码

```js
const pull = (arr, ...args) => {
  let argState = Array.isArray(args[0]) ? args[0] : args;
  let pulled = arr.filter((v, i) => !argState.includes(v));
  arr.length = 0;
  pulled.forEach(v => arr.push(v));
};
```

## 例子

```js
let myArray = ['a', 'b', 'c', 'a', 'b', 'c'];
pull(myArray, 'a', 'c'); // myArray = [ 'b', 'b' ]
```
