# intersectionBy

将提供的函数应用于两个数组的每个数组元素后，返回两个数组中存在的元素的列表。

通过对b中的所有元素应用fn来创建Set，然后在a上使用Array.prototype.filter（）仅保留元素，当fn产生b时包含值适用于他们。

## 代码

```js
const intersectionBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.filter(x => s.has(fn(x)));
};
```

## 例子

```js
intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [2.1]
```
