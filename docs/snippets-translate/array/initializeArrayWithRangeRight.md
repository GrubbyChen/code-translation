# initializeArrayWithRangeRight

初始化一个数组，该数组包含指定范围内的数字（反向），其中“ start”和“ end”包含其共同点“ step”。

使用Array.from（Math.ceil（（end + 1-start）/ step））创建一个所需长度的数组（元素数量等于`（end-start）/ step`或`（ end + 1-start）/ step（包括结束符），使用Array.prototype.map（）填充范围内的所需值。
您可以省略“开始”以使用默认值“ 0”。
您可以省略`step`以使用默认值'1'。

## 代码

```js
const initializeArrayWithRangeRight = (end, start = 0, step = 1) =>
  Array.from({ length: Math.ceil((end + 1 - start) / step) }).map(
    (v, i, arr) => (arr.length - i - 1) * step + start
  );
```

## 例子

```js
initializeArrayWithRangeRight(5); // [5,4,3,2,1,0]
initializeArrayWithRangeRight(7, 3); // [7,6,5,4,3]
initializeArrayWithRangeRight(9, 0, 2); // [8,6,4,2,0]
```
