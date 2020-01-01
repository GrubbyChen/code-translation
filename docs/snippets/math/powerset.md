# powerset

返回给定数字数组的[幂集](https://baike.baidu.com/item/%E5%B9%82%E9%9B%86/9555341?fr=aladdin)。

## 代码

```js
const powerset = arr => arr.reduce((a, v) => a.concat(a.map(r => [v].concat(r))), [[]]);
```

## 例子

```js
powerset([1, 2]); // [[], [1], [2], [2, 1]]
```
