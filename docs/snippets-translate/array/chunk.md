# chunk

将数组分成指定大小的较小数组。

使用Array.from（）创建一个新数组，该数组适合将要生成的块数。
使用Array.prototype.slice（）将新数组的每个元素映射到大小为size的块上。
如果原始数组无法平均分割，则最后一块将包含其余元素。

## 代码

```js
const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );
```

## 例子

```js
chunk([1, 2, 3, 4, 5], 2); // [[1,2],[3,4],[5]]
```
