# radsToDegrees

Converts an angle from radians to degrees.

Use `Math.PI` and the radian to degree formula to convert the angle from radians to degrees.

## 翻译

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
