# last

返回数组中的最后一个元素。

检查arr是否正确并具有length属性，使用arr.length-1计算给定数组的最后一个元素的索引并将其返回，否则返回undefined。

## 代码

```js
const last = arr => (arr && arr.length ? arr[arr.length - 1] : undefined);
```

## 例子

```js
last([1, 2, 3]); // 3
last([]); // undefined
last(null); // undefined
last(undefined); // undefined
```
