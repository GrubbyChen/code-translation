# initializeArrayWithValues

使用指定的值初始化并填充数组。

使用“ Array（n）”创建所需长度的数组，使用“ fill（v）”填充所需值。
您可以省略“ val”以使用默认值“ 0”。

## 代码

```js
const initializeArrayWithValues = (n, val = 0) => Array(n).fill(val);
```

## 例子

```js
initializeArrayWithValues(5, 2); // [2, 2, 2, 2, 2]
```
