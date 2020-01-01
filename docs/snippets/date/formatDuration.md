# formatDuration

将时间戳转化成可读性更强的字符串。

- 将时间戳除以适当的值以获得 `天`，`小时`，`分钟`，`秒` 和 `毫秒` 的值。
- 将 `Object.entries()` 与 `Array.prototype.filter()` 结合使用，仅保留非零值。
- 使用 `Array.prototype.map()` 为每个值创建字符串。
- 使用 `String.prototype.join('，')` 将值组合成一个字符串。

## 代码

```js
const formatDuration = ms => {
  if (ms < 0) ms = -ms;
  const time = {
    day: Math.floor(ms / 86400000),
    hour: Math.floor(ms / 3600000) % 24,
    minute: Math.floor(ms / 60000) % 60,
    second: Math.floor(ms / 1000) % 60,
    millisecond: Math.floor(ms) % 1000
  };
  return Object.entries(time)
    .filter(val => val[1] !== 0)
    .map(([key, val]) => `${val} ${key}${val !== 1 ? 's' : ''}`)
    .join(', ');
};
```

## 例子

```js
formatDuration(1001); // '1 second, 1 millisecond'
formatDuration(34325055574); // '397 days, 6 hours, 44 minutes, 15 seconds, 574 milliseconds'
```
