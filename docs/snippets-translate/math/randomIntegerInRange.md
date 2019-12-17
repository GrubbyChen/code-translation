# randomIntegerInRange

返回指定范围内的随机整数。

使用`Math.random（）`生成一个随机数并将其映射到所需范围，使用`Math.floor（）`使其为整数。

## 代码

```js
const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
```

## 例子

```js
randomIntegerInRange(0, 5); // 2
```
