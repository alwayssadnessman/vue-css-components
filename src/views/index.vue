<template>
  <div>
      {{abc.name}}
      {{abc.statu}}
      <el-button @click="changeName">改变名称</el-button>
  </div>
</template>
<script lang='ts'>
  import {onMounted,watch,getCurrentInstance,ref,reactive} from 'vue'
  export default{
    name:'app',
    setup(props,context){
      const internalInstance = getCurrentInstance()
      let abc:object = reactive({
          name:"王男",
          statu:"wang"
      });
      const changeName = ()=>{
         abc.name = "刘岑"
      }
      onMounted(()=>{  //挂载前执行
        console.log(123)
      })
      watch(()=> abc.name,(newValue,oldValue)=>{
          abc.statu = newValue+"sb"
      })
      return{
        abc,
        changeName
      }
    }
  }
</script>
<style scoped>
</style>