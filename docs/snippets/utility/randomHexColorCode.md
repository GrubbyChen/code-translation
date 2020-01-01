# randomHexColorCode

生成随机的十六进制颜色代码。

- 使用 `Math.random` 生成一个随机的 24 位（6x4bits）十六进制数。

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
