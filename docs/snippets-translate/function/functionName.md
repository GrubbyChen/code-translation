# functionName

记录函数的名称。

使用`console.debug（）`和传递的方法的`name`属性将方法的名称记录到控制台的`debug`通道中。

## 代码

```js
const functionName = fn => (console.debug(fn.name), fn);
```

## 例子

```js
functionName(Math.max); // max (logged in debug channel of console)
```
