# zip

Creates an array of elements, grouped based on the position in the original arrays.

Use `Math.max.apply()` to get the longest array in the arguments.
Creates an array with that length as return value and use `Array.from()` with a map-function to create an array of grouped elements.
If lengths of the argument-arrays vary, `undefined` is used where no value could be found.

## 翻译

创建一个元素数组，根据原始数组中的位置进行分组。

使用`Math.max.apply()`获取参数中最长的数组。
创建一个以该长度为返回值的数组，并使用带有映射功能的Array.from()创建一个分组元素数组。
如果参数数组的长度不同，则在找不到值的地方使用“ undefined”。

## 代码

```js
const zip = (...arrays) => {
  const maxLength = Math.max(...arrays.map(x => x.length));
  return Array.from({ length: maxLength }).map((_, i) => {
    return Array.from({ length: arrays.length }, (_, k) => arrays[k][i]);
  });
};
```

## 例子

```js
zip(['a', 'b'], [1, 2], [true, false]); // [['a', 1, true], ['b', 2, false]]
zip(['a'], [1, 2], [true, false]); // [['a', 1, true], [undefined, 2, false]]
```
