# randomNumberInRange

返回指定范围内的随机数。

使用`Math.random（）`生成一个随机值，使用乘法将其映射到所需范围。

## 代码

```js
const randomNumberInRange = (min, max) => Math.random() * (max - min) + min;
```

## 例子

```js
randomNumberInRange(2, 10); // 6.0211363285087005
```
