# initialize2DArray

Initializes a 2D array of given width and height and value.

Use `Array.prototype.map()` to generate h rows where each is a new array of size w initialize with value. If the value is not provided, default to `null`.

## 翻译

初始化给定宽度，高度和值的2D数组。

使用Array.prototype.map()生成h行，其中每个行都是一个新的大小为w的数组，并使用值进行初始化。如果未提供该值，则默认为“ null”。

## 代码

```js
const initialize2DArray = (w, h, val = null) =>
  Array.from({ length: h }).map(() => Array.from({ length: w }).fill(val));
```

## 例子

```js
initialize2DArray(2, 2, 0); // [[0,0], [0,0]]
```
