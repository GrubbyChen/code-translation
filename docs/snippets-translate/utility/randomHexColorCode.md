# randomHexColorCode

生成随机的十六进制颜色代码。

使用Math.random生成一个随机的24位（6x4bits）十六进制数。使用位移，然后使用`toString（16）`将其转换为十六进制字符串。

## 代码

```js
const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};
```

## 例子

```js
randomHexColorCode(); // "#e34155"
```
