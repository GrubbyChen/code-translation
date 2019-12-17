# longestItem

接受任意数量的可迭代对象或具有length属性的对象，并返回最长的对象。
如果多个对象的长度相同，则将返回第一个。
如果未提供任何参数，则返回`undefined`。

使用“ Array.prototype.reduce（）”，比较对象的“长度”以找到最长的对象。

## 代码

```js
const longestItem = (...vals) => vals.reduce((a, x) => (x.length > a.length ? x : a));
```

## 例子

```js
longestItem('this', 'is', 'a', 'testcase'); // 'testcase'
longestItem(...['a', 'ab', 'abc']); // 'abc'
longestItem(...['a', 'ab', 'abc'], 'abcd'); // 'abcd'
longestItem([1, 2, 3], [1, 2], [1, 2, 3, 4, 5]); // [1, 2, 3, 4, 5]
longestItem([1, 2, 3], 'foobar'); // 'foobar'
```
