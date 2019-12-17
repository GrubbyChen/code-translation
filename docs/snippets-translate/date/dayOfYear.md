# dayOfYear

从“日期”对象获取一年中的日期。

使用`new Date（）`和`Date.prototype.getFullYear（）`获取一年中的第一天作为`Date`对象，将其从提供的`date`中减去并除以每天的毫秒数即可得到结果。
使用`Math.floor（）`将产生的天数适当地四舍五入为整数。

## 代码

```js
const dayOfYear = date =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
```

## 例子

```js
dayOfYear(new Date()); // 272
```
