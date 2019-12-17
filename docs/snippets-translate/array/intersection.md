# intersection

返回两个数组中都存在的元素的列表。

从b创建一个Set，然后在a上使用Array.prototype.filter（）来仅保留b中包含的值。

## 代码

```js
const intersection = (a, b) => {
  const s = new Set(b);
  return a.filter(x => s.has(x));
};
```

## 例子

```js
intersection([1, 2, 3], [4, 3, 2]); // [2, 3]
```
