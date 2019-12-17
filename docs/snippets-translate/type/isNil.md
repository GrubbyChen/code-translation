# isNil

如果指定值为null或undefined，则返回true，否则返回false。

使用严格相等运算符检查value和val的值是否等于null或undefined。

## 代码

```js
const isNil = val => val === undefined || val === null;
```

## 例子

```js
isNil(null); // true
isNil(undefined); // true
```
