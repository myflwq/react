## TASK010: webpack hot reload


#### 项目运行步骤

 npm start

#### echarts 引用时，外部调用，在外部定义 option 并导出，传回调用 echarts 的位置

```
var option ={}
export default option

```

#### 内部直接调用在setOption函数中填写option内容

```
componentDidMount(){
  var myChart = echarts.init(document.getElementById('ccc'));
  myChart.setOption(option)
}

```
