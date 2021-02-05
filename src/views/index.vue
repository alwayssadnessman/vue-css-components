<template>
  <div>
     {{$store.getters.username}} 
    <el-button @click="changeNum">改变全局变量</el-button>
  </div>
</template>
<script lang='ts'>
  import {Options,Vue} from "vue-class-component";
  @Options({
    name:"Index",
    type: Array,
    props: {
      msg: String
    }
  })
  export default class Index extends Vue {
    msg!:string
    name!:string
    $store:any
    data(){
      return{
        name:"刘"
      }
    }
    public test():void{
      this.name = "王"
    }
    public changeNum():void{
      this.$store.dispatch("CHANGE_USER_NAME","王男1")
    }
    mounted(){
      let goods:Array<number> = [10,20,5,30,60,9]
      let goods1:Array<number> = goods.filter((n)=>n>=10)
      let goods2 = goods1.reduce((s,n)=>s+n,0)
      console.log(goods2)
    }
  }
</script>
<style scoped>
</style>