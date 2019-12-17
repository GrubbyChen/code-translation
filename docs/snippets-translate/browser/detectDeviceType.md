# detectDeviceType

检测网站是在移动设备中还是在台式机/笔记本电脑中打开。

使用正则表达式测试“ navigator.userAgent”属性，以确定该设备是移动设备还是台式机/笔记本电脑。

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
