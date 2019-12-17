# renameKeys

Replaces the names of multiple object keys with the values provided.

Use `Object.keys()` in combination with `Array.prototype.reduce()` and the spread operator (`...`) to get the object's keys and rename them according to `keysMap`.

## 翻译

用提供的值替换多个对象键的名称。

将Object.keys（）与Array.prototype.reduce（）和散布运算符（...）结合使用，以获取对象的键并根据keysMap对其重命名。

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
