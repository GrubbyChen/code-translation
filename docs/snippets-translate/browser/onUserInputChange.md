# onUserInputChange

每当用户输入类型更改（“ mouse”或“ touch”）时，运行回调。根据输入设备来启用/禁用代码很有用。此过程是动态的，并且适用于混合设备（例如触摸屏笔记本电脑）。

使用两个事件侦听器。首先假设“鼠标”输入，然后将“ touchstart”事件监听器绑定到文档。
在“ touchstart”上，添加一个“ mousemove”事件监听器，以使用“ performance.now（）”监听在20ms内触发的两个连续的“ mousemove”事件。
在这两种情况下，都将输入类型作为参数运行回调。

## 代码

```js
const onUserInputChange = callback => {
  let type = 'mouse',
    lastTime = 0;
  const mousemoveHandler = () => {
    const now = performance.now();
    if (now - lastTime < 20)
      (type = 'mouse'), callback(type), document.removeEventListener('mousemove', mousemoveHandler);
    lastTime = now;
  };
  document.addEventListener('touchstart', () => {
    if (type === 'touch') return;
    (type = 'touch'), callback(type), document.addEventListener('mousemove', mousemoveHandler);
  });
};
```

## 例子

```js
onUserInputChange(type => {
  console.log('The user is now using', type, 'as an input method.');
});
```
