# head

Returns the head of a list.

Check if `arr` is truthy and has a `length` property, use `arr[0]` if possible to return the first element, otherwise return `undefined`.

## 翻译

返回列表的开头。

检查arr是否真实并具有length属性，如果可能，请使用arr [0]返回第一个元素，否则返回undefined。

## 代码

```js
const head = arr => (arr && arr.length ? arr[0] : undefined);
```

## 例子

```js
head([1, 2, 3]); // 1
head([]); // undefined
head(null); // undefined
head(undefined); // undefined
```
