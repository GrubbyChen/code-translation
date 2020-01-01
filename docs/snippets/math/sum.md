# sum

返回两个或多个数字/数组的总和。

## 代码

```js
const sum = (...arr) => [...arr].reduce((acc, val) => acc + val, 0);
```

## 例子

```js
sum(1, 2, 3, 4); // 10
sum(...[1, 2, 3, 4]); // 10
```
