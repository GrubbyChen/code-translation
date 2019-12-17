# checkProp

Given a `predicate` function and a `prop` string, this curried function will then take an `object` to inspect by calling the property and passing it to the predicate.

Summon `prop` on `obj`, pass it to a provided `predicate` function and return a masked boolean.

## 翻译

给定一个“谓词”函数和一个“ prop”字符串，此咖喱函数将通过调用属性并将其传递给谓词来获取一个“对象”进行检查。

召唤obj上的prop，将其传递给提供的predicate函数并返回一个带掩码的布尔值。

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
const validUserSession = checkProps(u => u.active && !u.disabled, 'user');

validUserSession(session); // false

session.user.active = true;
validUserSession(session); // true

const noLength = checkProp(l => l === undefined, 'length');
noLength([]); // false
noLength({}); // true
noLength(new Set()); // true
```
