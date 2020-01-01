# coalesceFactory

返回从提供的参数验证函数第一个返回 `true` 的参数。

## 代码

```js
const coalesceFactory = valid => (...args) => args.find(valid);
```

## 例子

```js
const customCoalesce = coalesceFactory(_ => ![null, undefined, '', NaN].includes(_));
customCoalesce(undefined, null, NaN, '', 'Waldo'); // "Waldo"
```
