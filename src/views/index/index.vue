<template>
  <div>
    <el-row>
      <el-col :span="6" class='allHeight'>
        <div class="rect" @mousedown="startDrag(graph,$event,0)"></div>
        <div class="rect" @mousedown="startDrag(graph,$event,1)"></div>

        <span @dblclick="edit" style="cursor:pointer;" ref="element">双击可编辑</span>
      </el-col>
      <el-col :span="18" class="allHeight">
        <div id="container"></div>
      </el-col>
    </el-row>
  </div>
</template>
<script lang='ts'>
  import * as echarts from "echarts"
  import {
    Graph,
    Addon
  } from '@antv/x6';
  import {
    ref,
    onMounted,
    watch,
    getCurrentInstance,
    reactive
  } from 'vue'
  export default {
    name: 'app',
    setup() {
      //@ts-ignore
      const {ctx} = getCurrentInstance();
      const startDrag = (box, e, type) => {
        let node;
        if (type == 0) {
          node = box.createNode({
            shape: 'html',
            width: 500,
            height: 500,
            shapeId: "echartsBox",
            html() {
              const wrap = document.createElement('div')
              wrap.setAttribute('id', 'echartsBox')
              wrap.style.width = '100%'
              wrap.style.height = '100%'
              wrap.innerText = 'Hello'
              return wrap
            }
          })
        } else {
          node = box.createNode({
            width: 120,
            height: 45,
            selfId: "test",
            shape: 'html',
            html:'my-html1'
          })
        }
        const dnd = new Addon.Dnd({
          target: box
        })
        dnd.start(node, e)
      }
      //双击事件测试
      const edit = (element): void => {
        console.log(element);

        // 获取要编辑的文本内容
        var oldHtml = element.target.innerText;
        // 创建一个新的 input 输入框
        var newInput = document.createElement("input");
        // 为新的 input添加属性
        newInput.type = "text";
        newInput.value = oldHtml;
        // 清空当前元素的文本内容
        element.target.innerText = "";
        // 把新的 input 框 追加到当前元素节点中
        element.target.appendChild(newInput);
        // 设置选择文本的内容或设置光标位置（两个参数：start,end；start为开始位置，end为结束位置；如果开始位置和结束位置相同则就是光标位置）
        newInput.setSelectionRange(0, oldHtml.length);
        // 为新 input 框获取焦点
        newInput.focus();
        // 为新的 input 添加失去焦点事件
        newInput.onblur = function () {
          // 判断失去焦点时，input 框的值是否与原值相同，相同则表示没有修改，返回原值；不同则表示有改动，返回新值
          element.target.innerText = newInput.value == oldHtml ? oldHtml : newInput.value;
        };
      }
      onMounted(() => {
        ctx.graph = new Graph({
          container: document.getElementById('container'),
          getHTMLComponent(node) {
            const data = node.getData()
            console.log(node)
            // if (data.flag) {
            //   return document.createElement('div')
            // }
            // return document.createElement('p')
            return null
          },
          selecting: true,
          resizing: {
            enabled: true,
          },
          width: 1000,
          height: 800,
          background: {
            color: '#fff', // 设置画布背景颜色
          },
          grid: {
            size: 10, // 网格大小 10px
            visible: true, // 渲染网格背景
          },
        })
        Graph.registerHTMLComponent("my-html1", `
              <div style="width:100%;height:100%" id="test">
                <table border="1" style="width:100%;height:100%;overflow:hidden;">
                  <tbody style="height:100%;">
                     <tr style="height:50%;">
                    <td style="text-align:center;">123</td>
                    <td>123</td>
                  </tr>
                  <tr style="height:50%;">
                    <td>123</td>
                    <td>123</td>
                  </tr>
                  </tbody> 
                </table>
                </div>
                `)
        ctx.graph.on("cell:added", (cell) => {
          if (cell.cell.store.data.shapeId) {
            const targetDom = document.getElementById(cell.cell.store.data.shapeId)
            let barcharts = echarts.init(targetDom)
            const option = {
              xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
              },
              yAxis: {
                type: 'value'
              },
              series: [{
                data: [150, 230, 224, 218, 135, 147, 260],
                type: 'line'
              }]
            }
            barcharts.setOption(option)
            //添加监听尺寸变化
            const myObserver = new ResizeObserver(entries => {
              entries.forEach(entry => {
                barcharts.resize()
              })
            })
            myObserver.observe(targetDom)
          }
        });
        ctx.graph.on("cell:click", (cell) => {
          console.log(ctx.graph.toJSON())

        })
      })
      //watch('监听的对象',(newValue,oldValue)=>{})
      return {
        edit,
        startDrag
      }
    },
    // mounted() {
    //   this.graph = new Graph({
    //     container: document.getElementById('container'),
    //     selecting: true,
    //     resizing: {
    //       enabled: true,
    //     },
    //     width: 1000,
    //     height: 800,
    //     background: {
    //       color: '#fff', // 设置画布背景颜色
    //     },
    //     grid: {
    //       size: 10, // 网格大小 10px
    //       visible: true, // 渲染网格背景
    //     },
    //   });
    //   this.graph.on("cell:added", (cell) => {
    //     if (cell.cell.store.data.shapeId) {
    //       const targetDom = document.getElementById(cell.cell.store.data.shapeId)
    //       let barcharts = echarts.init(targetDom)
    //       const option = {
    //         xAxis: {
    //           type: 'category',
    //           data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    //         },
    //         yAxis: {
    //           type: 'value'
    //         },
    //         series: [{
    //           data: [150, 230, 224, 218, 135, 147, 260],
    //           type: 'line'
    //         }]
    //       }
    //       barcharts.setOption(option)
    //       //添加监听尺寸变化
    //       const myObserver = new ResizeObserver(entries => {
    //         entries.forEach(entry => {
    //           barcharts.resize()
    //         })
    //       })
    //       myObserver.observe(targetDom)
    //     }
    //   });
    // }

  }
</script>
<style scoped>
  .allHeight {
    height: 100vh;
  }

  .rect {
    width: 100px;
    height: 100px;
    border: 1px solid black;
  }
</style>