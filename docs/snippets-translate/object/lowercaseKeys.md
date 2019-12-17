# lowercaseKeys

从指定的对象创建一个新的对象，其中所有键都小写。

使用Object.keys（）和Array.prototype.reduce（）从指定对象创建一个新对象。
使用String.toLowerCase（）将原始对象中的每个键转换为小写。

## 代码

```js
const lowercaseKeys = obj =>
  Object.keys(obj).reduce((acc, key) => {
    acc[key.toLowerCase()] = obj[key];
    return acc;
  }, {});
```

## 例子

```js
const myObj = { Name: 'Adam', sUrnAME: 'Smith' };
const myObjLower = lowercaseKeys(myObj); // {name: 'Adam', surname: 'Smith'};
```
