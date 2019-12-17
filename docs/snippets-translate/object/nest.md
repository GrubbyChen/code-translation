# nest

给定一组相互链接的平面对象，它将以递归方式嵌套它们。
对于嵌套注释（例如reddit.com上的注释）很有用。

使用递归。
使用Array.prototype.filter（）过滤ID匹配link的项目，然后使用Array.prototype.map（）将每个对象映射到具有child属性的新对象。会根据哪些是当前项目的子项来递归嵌套这些项目。
省略第二个参数“ id”，默认为“ null”，这表示该对象未链接到另一个（即它是顶级对象）。
省略第三个参数“ link”，以使用“ parent_id”作为默认属性，该默认属性通过“ id”将对象链接到另一个对象。

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
