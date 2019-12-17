# isTravisCI

Checks if the current environment is [Travis CI](https://travis-ci.org/).

Checks if the current environment has the `TRAVIS` and `CI` environment variables ([reference](https://docs.travis-ci.com/user/environment-variables/#Default-Environment-Variables)).

## 翻译

检查当前环境是否为[Travis CI]（https://travis-ci.org/）。

检查当前环境是否具有`TRAVIS`和`CI`环境变量（[参考]（https://docs.travis-ci.com/user/environment-variables/#Default-Environment-Variables））。

## 代码

```js
const isTravisCI = () => 'TRAVIS' in process.env && 'CI' in process.env;
```

## 例子

```js
isTravisCI(); // true (if code is running on Travis CI)
```
