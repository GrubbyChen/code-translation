# none

如果提供的谓词函数对集合中的所有元素都返回“ false”，则返回“ true”，否则返回“ false”。

使用Array.prototype.some（）来测试集合中是否有任何元素基于fn返回true。
省略第二个参数`fn`，以使用`Boolean'作为默认值。

## 代码

```js
const none = (arr, fn = Boolean) => !arr.some(fn);
```

## 例子

```js
none([0, 1, 3, 0], x => x == 2); // true
none([0, 0, 0]); // true
```
