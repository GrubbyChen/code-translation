# compact

从数组中删除伪造的值。

使用Array.prototype.filter（）过滤掉虚假的值（假，空，0，“”，“ undefined”和“ NaN”）。

## 代码

```js
const compact = arr => arr.filter(Boolean);
```

## 例子

```js
compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]); // [ 1, 2, 3, 'a', 's', 34 ]
```
