### npm install安装所有需要的包

#### 在package下设置npm脚本

...
"build": " ./node_modules/.bin/webpack"
...

#### 执行下面的语句将src下的文件转成build下的文件

...
npm run build
...

#### js文件出现import导入时 需添加.babelrc的隐藏文件

...
{
  "presets": ["es2015","stage-0"],
  "plugins": []
}
...

#### 安装babel包和webpack
...
npm i -D webpack babel-core babel-loader babel-preset-es2015 babel-preset-stage-0

#### 默认导出时只能导出一个变量，引用时可以随意引用，固定导出时名字导出与导入必须完全一致，且导入时元素用{}包裹
