# promisify

转换异步函数以返回promise。

*在Node 8+中，您可以使用[`util.promisify`]（https://nodejs.org/api/util.html#util_util_promisify_original）*

使用currying返回一个函数，该函数返回一个调用原始函数的Promise。
使用`... rest`运算符来传递所有参数。

## 代码

```js
const promisify = func => (...args) =>
  new Promise((resolve, reject) =>
    func(...args, (err, result) => (err ? reject(err) : resolve(result)))
  );
```

## 例子

```js
const delay = promisify((d, cb) => setTimeout(cb, d));
delay(2000).then(() => console.log('Hi!')); // // Promise resolves after 2s
```
