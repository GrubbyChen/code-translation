# offset

将指定数量的元素移动到数组的末尾。

两次使用Array.prototype.slice（）获取指定索引之后的元素和该索引之前的元素。
使用散布运算符（`...`）将两者合并为一个数组。
如果`offset`为负，则元素将从头到尾移动。

## 代码

```js
const offset = (arr, offset) => [...arr.slice(offset), ...arr.slice(0, offset)];
```

## 例子

```js
offset([1, 2, 3, 4, 5], 2); // [3, 4, 5, 1, 2]
offset([1, 2, 3, 4, 5], -2); // [4, 5, 1, 2, 3]
```
