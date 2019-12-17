# removeNonASCII

删除不可打印的ASCII字符。

使用正则表达式删除不可打印的ASCII字符。

## 代码

```js
const removeNonASCII = str => str.replace(/[^\x20-\x7E]/g, '');
```

## 例子

```js
removeNonASCII('äÄçÇéÉêlorem-ipsumöÖÐþúÚ'); // 'lorem-ipsum'
```
