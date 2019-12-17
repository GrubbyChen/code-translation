# nodeListToArray

Converts a `NodeList` to an array.

Use spread operator inside new array to convert a `NodeList` to an array.

## 翻译

将NodeList转换为数组。

在新数组中使用传播运算符将NodeList转换为数组。

## 代码

```js
const nodeListToArray = nodeList => [...nodeList];
```

## 例子

```js
nodeListToArray(document.childNodes); // [ <!DOCTYPE html>, html ]
```
