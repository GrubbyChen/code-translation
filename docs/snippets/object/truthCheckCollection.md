# truthCheckCollection

检查一个对象上的指定键是否都是真实值。

## 代码

```js
const truthCheckCollection = (collection, pre) => collection.every(obj => obj[pre]);
```

## 例子

```js
truthCheckCollection([{ user: 'Tinky-Winky', sex: 'male' }, { user: 'Dipsy', sex: 'male' }], 'sex'); // true
```
