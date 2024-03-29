# matches

比较两个对象，以确定第一个对象是否包含与第二个对象相同的属性值。

- 使用 `Object.keys(source)` 获取第二个对象的所有键，然后使用 `Array.prototype.every()`、`Object.hasOwnProperty()` 和 `===` 比较来确定所有键是否都存在于第一个对象中并具有相同的值。

## 代码

```js
const matches = (obj, source) =>
  Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
```

## 例子

```js
matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true }); // true
matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true }); // false
```
