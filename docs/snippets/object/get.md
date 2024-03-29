# get

从对象检索由给定选择器指示的一组属性。

- 对每个选择器使用 `Array.prototype.map()` 进行遍历
- `String.prototype.replace()` 用点代替方括号
- `String.prototype.split('.')` 用于拆分每个选择器
- `Array.prototype.filter()`移除空值
- `Array.prototype.reduce()` 获取目标值。

## 代码

```js
const get = (from, ...selectors) =>
  [...selectors].map(s =>
    s
      .replace(/\[([^\[\]]*)\]/g, '.$1.')
      .split('.')
      .filter(t => t !== '')
      .reduce((prev, cur) => prev && prev[cur], from)
  );
```

## 例子

```js
const obj = { selector: { to: { val: 'val to select' } }, target: [1, 2, { a: 'test' }] };
get(obj, 'selector.to.val', 'target[0]', 'target[2].a'); // ['val to select', 1, 'test']
```
