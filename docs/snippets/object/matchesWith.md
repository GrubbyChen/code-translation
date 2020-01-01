# matchesWith

根据提供的函数比较两个对象，以确定第一个对象是否包含与第二个对象相同的属性值。

- 使用 Object.keys(source) 获取第二个对象的所有键，然后使用 `Array.prototype.every()`、`Object.hasOwnProperty()` 和提供的函数 `fn` 确定所有键是否都存在于第一个对象中对象并具有相等的值。
- 如果未提供任何功能，则将使用相等运算符比较这些值。

## 代码

```js
const matchesWith = (obj, source, fn) =>
  Object.keys(source).every(key =>
    obj.hasOwnProperty(key) && fn
      ? fn(obj[key], source[key], key, obj, source)
      : obj[key] == source[key]
  );
```

## 例子

```js
const isGreeting = val => /^h(?:i|ello)$/.test(val);
matchesWith(
  { greeting: 'hello' },
  { greeting: 'hi' },
  (oV, sV) => isGreeting(oV) && isGreeting(sV)
); // true
```
