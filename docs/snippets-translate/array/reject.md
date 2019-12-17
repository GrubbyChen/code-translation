# reject

根据谓词函数过滤数组的值，仅返回谓词函数返回true的值。

将Array.prototype.filter（）与谓词函数pred结合使用，以仅返回pred（）返回true的值。

## 代码

```js
const reject = (pred, array) => array.filter((...args) => !pred(...args));
```

## 例子

```js
reject(x => x % 2 === 0, [1, 2, 3, 4, 5]); // [1, 3, 5]
reject(word => word.length > 4, ['Apple', 'Pear', 'Kiwi', 'Banana']); // ['Pear', 'Kiwi']
```
