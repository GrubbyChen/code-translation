# castArray

如果提供的值不是一个，则将其强制转换为数组。

使用Array.prototype.isArray（）确定val是一个数组，然后将其原样返回或封装在数组中。

## 代码

```js
const castArray = val => (Array.isArray(val) ? val : [val]);
```

## 例子

```js
castArray('foo'); // ['foo']
castArray([1]); // [1]
```
