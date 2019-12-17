# radsToDegrees

将角度从弧度转换为度。

使用`Math.PI`和弧度到度的公式将弧度的角度转换为度。

## 代码

```js
const radsToDegrees = rad => (rad * 180.0) / Math.PI;
```

## 例子

```js
radsToDegrees(Math.PI / 2); // 90
```
