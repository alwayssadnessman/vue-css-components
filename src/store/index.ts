import { createStore } from 'vuex';
import user from "./user/user"
export default createStore({
  state: {
    num:1
  },
  getters:{
    num:state=>state.num
  },
  mutations: {
    changeNum(state,payload){
      state.num+=payload
    }
  },
  actions: {
    CHANGE_NUM(context,payload){
      context.commit("changeNum",payload)
    }
  },
  modules: {
    user
  }
})
