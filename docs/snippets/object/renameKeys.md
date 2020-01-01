# renameKeys

用提供对象的值，替换目标对象对应键的值。

## 代码

```js
const renameKeys = (keysMap, obj) =>
  Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      ...{ [keysMap[key] || key]: obj[key] }
    }),
    {}
  );
```

## 例子

```js
const obj = { name: 'Bobo', job: 'Front-End Master', shoeSize: 100 };
renameKeys({ name: 'firstName', job: 'passion' }, obj); // { firstName: 'Bobo', passion: 'Front-End Master', shoeSize: 100 }
```
