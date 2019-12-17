# hasKey

如果目标值存在于JSON对象中，则返回“ true”，否则返回“ false”。

检查keys是否为非空，并使用Array.prototype.every（）顺序检查其key以达到对象obj的内部深度。
使用Object.prototype.hasOwnProperty（）检查obj是否没有当前键或不是对象，停止传播并返回false。
否则，将键的值分配给obj以在下一次迭代中使用。
如果给定的密钥列表为空，则事先返回“ false”。

## 代码

```js
const hasKey = (obj, keys) => {
  return (
    keys.length > 0 &&
    keys.every(key => {
      if (typeof obj !== 'object' || !obj.hasOwnProperty(key)) return false;
      obj = obj[key];
      return true;
    })
  );
};
```

## 例子

```js
let obj = {
  a: 1,
  b: { c: 4 },
  'b.d': 5
};
hasKey(obj, ['a']); // true
hasKey(obj, ['b']); // true
hasKey(obj, ['b', 'c']); // true
hasKey(obj, ['b.d']); // true
hasKey(obj, ['d']); // false
hasKey(obj, ['c']); // false
hasKey(obj, ['b', 'f']); // false
```
