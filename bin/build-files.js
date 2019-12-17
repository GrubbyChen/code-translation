const fs = require('fs');
const fse = require('fs-extra');
const readline = require('readline');
const render = require('json-templater/string');
const endOfLine = require('os').EOL;
const translate = require('google-translate-api');

const MAIN_TEMPLATE = `# {{title}}
{{desc}}
## 翻译

{{translate}}

## 代码

{{code}}
## 例子

{{example}}
`

const sourcePath = 'bin/sourceFiles'
const targetPath = 'docs/snippets'
const snippets = {}

fse.remove(targetPath)

for (const name of fs.readdirSync(`${sourcePath}`)) {
  const rl = readline.createInterface({
    input: fs.createReadStream(`${sourcePath}/${name}`)
  });
  let lineNo = 0
  let lineSeat = 'tag' // 'tag'/'desc'/'code'/'example'
  let type
  let file = {}
  rl.on('line', line => {
    // 行数自增
    lineNo++ 
    // 判断当前行处于什么位置
    if (lineNo >= 5 && lineSeat === 'tag') lineSeat = 'desc'
    else if (line.includes('```js') && lineSeat === 'desc') lineSeat = 'code'
    else if (line.includes('```js') && lineSeat === 'code') lineSeat = 'example'
    // 当前代码片段的分类
    if (line.includes('tags:')) {
      type = line.slice(6).split(',')[0]
      if (!snippets[type]) snippets[type] = []
      file.name = name
    }
    // 解析代码片段内容
    if (lineSeat === 'desc') {
      if (!file.desc) file.desc = []
      file.desc.push(line)
    }
    if (lineSeat === 'code') {
      if (!file.code) file.code = []
      file.code.push(line)
    }
    if (lineSeat === 'example') {
      if (!file.example) file.example = []
      file.example.push(line)
    }
    // 到达文件末尾
    if (lineSeat === 'example' && line === '```') {
      snippets[type].push(file)
    }
  })
}

let fileNo = 0

setTimeout(() => {
  for (const type of Object.keys(snippets)) {
    for (const file of snippets[type]) {
      const desc = file.desc.join(endOfLine)
      // 翻译描述
      translate(desc, { to: 'zh-cn' }).then(res => {
        // 生成模板
        const template = render(MAIN_TEMPLATE, {
          title: file.name.slice(0, -3),
          desc,
          translate: res.text,
          code: file.code.join(endOfLine),
          example: file.example.join(endOfLine),
        });
        const url = `${targetPath}/${type}/${file.name}`
        fse.outputFile(url, template)
        console.log(`生成文件: ${++fileNo}`)
      }).catch(err => {
        console.error(err);
      });
    }
  }
}, 1000)
