# deepFreeze

深度冻结对象。

- 在传递的对象的所有未冻结属性（`instanceof` 对象）上递归调用 [Object.freeze(obj)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)。

## 代码

```js
const deepFreeze = obj =>
  Object.keys(obj).forEach(prop =>
    !(obj[prop] instanceof Object) || Object.isFrozen(obj[prop]) ? null : deepFreeze(obj[prop])
  ) || Object.freeze(obj);
```

## 例子

```js
'use strict';

const o = deepFreeze([1, [2, 3]]);

o[0] = 3; // not allowed
o[1][0] = 4; // not allowed as well
```
