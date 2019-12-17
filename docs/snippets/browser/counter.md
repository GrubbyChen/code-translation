# counter

Creates a counter with the specified range, step and duration for the specified selector.

Check if `step` has the proper sign and change it accordingly.
Use `setInterval()` in combination with `Math.abs()` and `Math.floor()` to calculate the time between each new text draw.
Use `document.querySelector().innerHTML` to update the value of the selected element.
Omit the fourth parameter, `step`, to use a default step of `1`.
Omit the fifth parameter, `duration`, to use a default duration of `2000`ms.

## 翻译

为指定的选择器创建一个具有指定范围，步长和持续时间的计数器。

检查`step`是否具有正确的符号并相应地进行更改。
结合使用setInterval（）和Math.abs（）和Math.floor（）来计算每次绘制新文本之间的时间。
使用document.querySelector（）。innerHTML`更新所选元素的值。
省略第四个参数“ step”以使用默认步骤“ 1”。
省略第五个参数duration以使用默认持续时间2000 ms。

## 代码

```js
const counter = (selector, start, end, step = 1, duration = 2000) => {
  let current = start,
    _step = (end - start) * step < 0 ? -step : step,
    timer = setInterval(() => {
      current += _step;
      document.querySelector(selector).innerHTML = current;
      if (current >= end) document.querySelector(selector).innerHTML = end;
      if (current >= end) clearInterval(timer);
    }, Math.abs(Math.floor(duration / (end - start))));
  return timer;
};
```

## 例子

```js
counter('#my-id', 1, 1000, 5, 2000); // Creates a 2-second timer for the element with id="my-id"
```
