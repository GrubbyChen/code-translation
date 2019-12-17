# truthCheckCollection

检查谓词（第二个参数）在集合的所有元素（第一个参数）上是否为真。

使用Array.prototype.every（）检查每个传递的对象是否具有指定的属性，以及它是否返回真实值。

## 代码

```js
const truthCheckCollection = (collection, pre) => collection.every(obj => obj[pre]);
```

## 例子

```js
truthCheckCollection([{ user: 'Tinky-Winky', sex: 'male' }, { user: 'Dipsy', sex: 'male' }], 'sex'); // true
```
