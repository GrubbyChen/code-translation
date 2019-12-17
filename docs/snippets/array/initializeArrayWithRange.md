# initializeArrayWithRange

Initializes an array containing the numbers in the specified range where `start` and `end` are inclusive with their common difference `step`.

Use `Array.from()` to create an array of the desired length, `(end - start + 1)/step`, and a map function to fill it with the desired values in the given range.
You can omit `start` to use a default value of `0`.
You can omit `step` to use a default value of `1`.

## 翻译

初始化一个数组，该数组包含指定范围内的数字，其中“ start”和“ end”包含其共同点“ step”。

使用Array.from（）创建所需长度的数组，（结束-开始+ 1）/步长，并使用map函数在给定范围内填充所需的值。
您可以省略“开始”以使用默认值“ 0”。
您可以省略`step`以使用默认值'1'。

## 代码

```js
const initializeArrayWithRange = (end, start = 0, step = 1) =>
  Array.from({ length: Math.ceil((end - start + 1) / step) }, (v, i) => i * step + start);
```

## 例子

```js
initializeArrayWithRange(5); // [0,1,2,3,4,5]
initializeArrayWithRange(7, 3); // [3,4,5,6,7]
initializeArrayWithRange(9, 0, 2); // [0,2,4,6,8]
```
