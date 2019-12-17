# pick

从对象中选择与给定键对应的键值对。

如果对象中存在键，则使用Array.prototype.reduce（）将经过过滤/挑选的键转换回具有相应键值对的对象。

## 代码

```js
const pick = (obj, arr) =>
  arr.reduce((acc, curr) => (curr in obj && (acc[curr] = obj[curr]), acc), {});
```

## 例子

```js
pick({ a: 1, b: '2', c: 3 }, ['a', 'c']); // { 'a': 1, 'c': 3 }
```
