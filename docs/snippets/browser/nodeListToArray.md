# nodeListToArray

将 `NodeList` 转换为数组。

## 代码

```js
const nodeListToArray = nodeList => [...nodeList];
```

## 例子

```js
nodeListToArray(document.childNodes); // [ <!DOCTYPE html>, html ]
```
