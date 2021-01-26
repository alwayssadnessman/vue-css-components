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
    setup(props:any,context:any){
      const internalInstance = getCurrentInstance();
      let abc:{
        [x:string]:string
      }
      abc = reactive({
          name:"阿男",
          statu:"wang"
      });
      const changeName = ()=>{
         abc.name = "刘岑"
      }
      onMounted(()=>{  //挂载前执行
          enum Gender{
            male,
            female
          }
          let i :{type:Gender}
          i = {
            type:Gender.male
          }
          console.log(i);
          
          
          
          
          
      })
      watch(()=> {return abc.name},(newValue,oldValue)=>{
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