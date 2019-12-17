# coalesceFactory

返回一个自定义的合并函数，该函数返回从提供的参数验证函数返回“ true”的第一个参数。

使用Array.prototype.find（）返回第一个从提供的参数验证函数返回true的参数。

## 代码

```js
const coalesceFactory = valid => (...args) => args.find(valid);
```

## 例子

```js
const customCoalesce = coalesceFactory(_ => ![null, undefined, '', NaN].includes(_));
customCoalesce(undefined, null, NaN, '', 'Waldo'); // "Waldo"
```
