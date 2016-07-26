## TASK010: webpack hot reload


#### 项目运行步骤

 npm start

#### 显示子元素个数

{React.Children.count(this.props.children)}

#### 只有一个子元素时显示，多个时会报错

{React.Children.only(this.props.children)}

#### js中导入图片用import导入，定义Img.js，用代码导入图片，导出class在index中引用
import Me from '../images/1.jpeg'

#### 导入img需在webpack中添加一下代码，并安装url-loader file-loader安装包
{
  test: /\.(png|jpe?g)$/,
  loader: 'url?limit=8192'
}

#### bootstrap在react中需安装，然后引入
