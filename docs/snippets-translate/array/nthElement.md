# nthElement

返回数组的第n个元素。

使用Array.prototype.slice（）获得第一个包含第n个元素的数组。
如果索引超出范围，则返回`undefined`。
省略第二个参数n，以获取数组的第一个元素。

## 代码

```js
const nthElement = (arr, n = 0) => (n === -1 ? arr.slice(n) : arr.slice(n, n + 1))[0];
```

## 例子

```js
nthElement(['a', 'b', 'c'], 1); // 'b'
nthElement(['a', 'b', 'b'], -3); // 'a'
```
