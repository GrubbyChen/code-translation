# initialize2DArray

初始化给定宽度，高度和值的2D数组。

使用Array.prototype.map（）生成h行，其中每个行都是一个新的大小为w的数组，并使用值进行初始化。如果未提供该值，则默认为“ null”。

## 代码

```js
const initialize2DArray = (w, h, val = null) =>
  Array.from({ length: h }).map(() => Array.from({ length: w }).fill(val));
```

## 例子

```js
initialize2DArray(2, 2, 0); // [[0,0], [0,0]]
```
