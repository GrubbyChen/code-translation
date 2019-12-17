# deepMapKeys

深度映射对象的键。

创建一个与提供的对象具有相同值的对象，并为每个键运行通过提供的功能生成的键。
使用Object.keys（obj）遍历对象的键。
使用Array.prototype.reduce（）使用fn创建一个具有相同值和映射键的新对象。

## 代码

```js
const deepMapKeys = (obj, f) =>
  Array.isArray(obj)
    ? obj.map(val => deepMapKeys(val, f))
    : typeof obj === 'object'
    ? Object.keys(obj).reduce((acc, current) => {
        const val = obj[current];
        acc[f(current)] =
          val !== null && typeof val === 'object' ? deepMapKeys(val, f) : (acc[f(current)] = val);
        return acc;
      }, {})
    : obj;
```

## 例子

```js
const obj = {
  foo: '1',
  nested: {
    child: {
      withArray: [
        {
          grandChild: ['hello']
        }
      ]
    }
  }
};
const upperKeysObj = deepMapKeys(obj, key => key.toUpperCase());
/*
{
  "FOO":"1",
  "NESTED":{
    "CHILD":{
      "WITHARRAY":[
        {
          "GRANDCHILD":[ 'hello' ]
        }
      ]
    }
  }
}
*/
```