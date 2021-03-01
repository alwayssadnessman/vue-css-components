<template>
  <div>
    {{name}}
    <el-button @click="change">change</el-button>
  </div>
</template>
<script lang='ts'>
  import {reactive,toRefs,computed,watch,onMounted} from "vue";
  export default{
    name:"Index",
    setup(props:any,context:any){
      let data = reactive({
        form:{
          
        },
        name:"wang"
      })
      let methods = {
        submit(){

        },
        change(){
          data.name = "li"
        }
      }
      onMounted(()=>{
        console.log(this);
      })
      return {
       ...toRefs(data),
       ...methods
      }
    }
  }
</script>
<style scoped>
</style>