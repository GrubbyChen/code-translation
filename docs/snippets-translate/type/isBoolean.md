# isBoolean

检查给定参数是否为本地布尔元素。

使用`typeof`来检查一个值是否被归类为布尔型原语。

## 代码

```js
const isBoolean = val => typeof val === 'boolean';
```

## 例子

```js
isBoolean(null); // false
isBoolean(false); // true
```
