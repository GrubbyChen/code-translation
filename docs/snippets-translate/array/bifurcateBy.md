# bifurcateBy

根据谓词函数将值分为两组，该函数指定输入集合中元素所属的组。如果谓词函数返回真实值，则collection元素属于第一组；否则，它属于第二组。

根据每个元素的fn返回值，使用Array.prototype.reduce（）和Array.prototype.push（）将元素添加到组中。

## 代码

```js
const bifurcateBy = (arr, fn) =>
  arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [[], []]);
```

## 例子

```js
bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b'); // [ ['beep', 'boop', 'bar'], ['foo'] ]
```
