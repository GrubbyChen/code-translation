# approximatelyEqual

检查两个数字是否彼此近似相等。

使用`Math.abs（）`比较两个值的绝对差和`epsilon`。
省略第三个参数“ε”，以使用默认值“ 0.001”。

## 代码

```js
const approximatelyEqual = (v1, v2, epsilon = 0.001) => Math.abs(v1 - v2) < epsilon;
```

## 例子

```js
approximatelyEqual(Math.PI / 2.0, 1.5708); // true
```
