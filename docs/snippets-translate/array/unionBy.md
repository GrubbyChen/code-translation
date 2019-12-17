# unionBy

将提供的函数应用于两个数组的每个数组元素后，一次返回两个数组中的任何一个数组中存在的每个元素。

通过将所有fn应用于a的所有值来创建Set。
从`a`和`b`中的所有元素创建一个`Set`，其值在应用`fn'之后与先前创建的set中的值不匹配。
返回转换为数组的最后一组。

## 代码

```js
const unionBy = (a, b, fn) => {
  const s = new Set(a.map(fn));
  return Array.from(new Set([...a, ...b.filter(x => !s.has(fn(x)))]));
};
```

## 例子

```js
unionBy([2.1], [1.2, 2.3], Math.floor); // [2.1, 1.2]
```
