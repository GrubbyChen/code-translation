# checkProp

给定一个检查函数和一个 `prop` 参数，此函数将检查传入对象中对应的 `prop` 参数的值，是否符合函数要求。

## 代码

```js
const checkProp = (predicate, prop) => obj => !!predicate(obj[prop]);
```

## 例子

```js
const lengthIs4 = checkProp(l => l === 4, 'length');
lengthIs4([]); // false
lengthIs4([1, 2, 3, 4]); // true
lengthIs4(new Set([1, 2, 3, 4])); // false (Set uses Size, not length)

const session = { user: {} };
const validUserSession = checkProp(u => u.active && !u.disabled, 'user');

validUserSession(session); // false

session.user.active = true;
validUserSession(session); // true

const noLength = checkProp(l => l === undefined, 'length');
noLength([]); // false
noLength({}); // true
noLength(new Set()); // true
```
