# mapValues

创建一个与提供的对象具有相同键的对象，并为每个值运行通过提供的函数生成的值。

使用Object.keys（obj）遍历对象的键。
使用Array.prototype.reduce（）使用fn创建具有相同键和映射值的新对象。

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