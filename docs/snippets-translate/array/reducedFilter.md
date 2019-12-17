# reducedFilter

根据条件过滤对象数组，同时也过滤掉未指定的键。

使用Array.prototype.filter（）基于谓词fn过滤数组，以便它返回条件返回真实值的对象。
在过滤后的数组上，使用Array.prototype.map（）返回新对象，并使用Array.prototype.reduce（）过滤掉未作为keys参数提供的键。

## 代码

```js
const reducedFilter = (data, keys, fn) =>
  data.filter(fn).map(el =>
    keys.reduce((acc, key) => {
      acc[key] = el[key];
      return acc;
    }, {})
  );
```

## 例子

```js
const data = [
  {
    id: 1,
    name: 'john',
    age: 24
  },
  {
    id: 2,
    name: 'mike',
    age: 50
  }
];

reducedFilter(data, ['id', 'name'], item => item.age > 24); // [{ id: 2, name: 'mike'}]
```
