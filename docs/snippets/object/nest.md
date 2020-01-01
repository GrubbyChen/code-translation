# nest

将平级结构对象转化成树形结构对象。

- 使用递归。
- 使用 `Array.prototype.filter()` 过滤 `id` 匹配 `link` 的项目，然后使用 `Array.prototype.map()` 将每个对象映射到具有 `child` 属性的新对象。

## 代码

```js
const nest = (items, id = null, link = 'parent_id') =>
  items
    .filter(item => item[link] === id)
    .map(item => ({ ...item, children: nest(items, item.id) }));
```

## 例子

```js
// One top level comment
const comments = [
  { id: 1, parent_id: null },
  { id: 2, parent_id: 1 },
  { id: 3, parent_id: 1 },
  { id: 4, parent_id: 2 },
  { id: 5, parent_id: 4 }
];
const nestedComments = nest(comments); // [{ id: 1, parent_id: null, children: [...] }]
```
