# randomIntegerInRange

返回指定范围内的随机整数。

## 代码

```js
const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
```

## 例子

```js
randomIntegerInRange(0, 5); // 2
```
