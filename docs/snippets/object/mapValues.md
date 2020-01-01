# mapValues

创建一个对象，该对象的值根据传入的函数重新生成。

- 使用 `Object.keys(obj)` 遍历对象的键。
- 使用 `Array.prototype.reduce()` 使用 `fn` 创建具有相同键和映射值的新对象。

## 代码

```js
const mapValues = (obj, fn) =>
  Object.keys(obj).reduce((acc, k) => {
    acc[k] = fn(obj[k], k, obj);
    return acc;
  }, {});
```

## 例子

```js
const users = {
  fred: { user: 'fred', age: 40 },
  pebbles: { user: 'pebbles', age: 1 }
};
mapValues(users, u => u.age); // { fred: 40, pebbles: 1 }
```
