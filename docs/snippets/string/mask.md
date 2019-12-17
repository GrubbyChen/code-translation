# mask

Replaces all but the last `num` of characters with the specified mask character.

Use `String.prototype.slice()` to grab the portion of the characters that will remain unmasked and use `String.padStart()` to fill the beginning of the string with the mask character up to the original length.
Omit the second argument, `num`, to keep a default of `4` characters unmasked. If `num` is negative, the unmasked characters will be at the start of the string.
Omit the third argument, `mask`, to use a default character of `'*'` for the mask.

## 翻译

用指定的掩码字符替换除最后一个字符以外的所有字符。

使用`String.prototype.slice（）`抓取将保持未屏蔽的字符部分，并使用`String.padStart（）`用掩码字符填充字符串的开头，直到原始长度。
省略第二个参数num以使默认的4个字符不被屏蔽。如果num为负数，则未屏蔽的字符将在字符串的开头。
省略第三个参数“ mask”，将默认字符“ *”用作掩码。

## 代码

```js
const mask = (cc, num = 4, mask = '*') => `${cc}`.slice(-num).padStart(`${cc}`.length, mask);
```

## 例子

```js
mask(1234567890); // '******7890'
mask(1234567890, 3); // '*******890'
mask(1234567890, -4, '$'); // '$$$$567890'
```
