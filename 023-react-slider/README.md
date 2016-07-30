用 react 做的图片轮播

#### 鼠标移入移出时停止开始播放

```
onMouseOver={this.pausePlay.bind(this)}
onMouseOut={this.componentDidMount.bind(this)}

```
通过定义pausePlay函数来停止计时器，通过调用componentDidMount来启动计时器

#### 通过图片两边按钮控制图片轮播显示
