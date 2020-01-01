# detectDeviceType

检测网站是在移动设备中还是在台式机/笔记本电脑中打开。

## 代码

```js
const detectDeviceType = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ? 'Mobile'
    : 'Desktop';
```

## 例子

```js
detectDeviceType(); // "Mobile" or "Desktop"
```
